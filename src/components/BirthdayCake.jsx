import { useCallback, useEffect, useRef, useState } from 'react';
import { Flame, Minus, Plus, Wind } from 'lucide-react';
import Candle from './Candle';
import Confetti from './Confetti';
import { interpolate } from '../utils/text';
import {
  addCandle as addCandleToList,
  createCandle,
  removeCandleById,
  removeLastCandle,
  setAllLit,
  toggleCandleById,
} from '../utils/candles';

// How long a blown-out candle's flame takes to fade before the candle is
// removed. Keep this in sync with the ".candle.is-out" animation in
// components.css.
const FLAME_OUT_MS = 450;

/*
 * BirthdayCake
 * ------------
 * A pseudo-3D CSS cake with interactive candles.
 *  - Click the cake or "Add a Candle" to add candles (max from the data file).
 *  - Click an individual candle to light / blow it out. A blown-out candle
 *    fades and then removes itself automatically.
 *  - "Remove One Candle" removes the most recently added candle.
 *  - "Light All Candles" and "Blow Out Candles" act on every candle.
 *
 * Candle positions are handled with a single responsive flex layout in
 * components.css, so they re-space themselves whenever the count changes.
 *
 * All labels come from uiText.js and the content from birthdayData.js.
 */
export default function BirthdayCake({ data, labels }) {
  const { maxCandles, blowMessage, lightMessage } = data;

  // Start with two candles already on the cake.
  const [candles, setCandles] = useState(() => [createCandle(0), createCandle(1)]);
  const [status, setStatus] = useState('');
  const [celebrating, setCelebrating] = useState(false);
  const [confettiKey, setConfettiKey] = useState(0);
  const [origin, setOrigin] = useState({ x: 50, y: 45 });

  const cakeRef = useRef(null);
  const statusTimer = useRef(null);
  const confettiTimer = useRef(null);
  // One pending removal timeout per candle id, so we never double-schedule.
  const removeTimers = useRef(new Map());
  const nextId = useRef(2);

  const flashStatus = useCallback((message) => {
    setStatus(message);
    if (statusTimer.current) clearTimeout(statusTimer.current);
    statusTimer.current = setTimeout(() => setStatus(''), 3200);
  }, []);

  // ---- Automatic removal of blown-out candles ----------------------------
  const scheduleRemoval = useCallback((id) => {
    if (removeTimers.current.has(id)) return;
    const timer = setTimeout(() => {
      removeTimers.current.delete(id);
      setCandles((current) => removeCandleById(current, id));
    }, FLAME_OUT_MS);
    removeTimers.current.set(id, timer);
  }, []);

  const cancelRemoval = useCallback((id) => {
    const timer = removeTimers.current.get(id);
    if (timer) {
      clearTimeout(timer);
      removeTimers.current.delete(id);
    }
  }, []);

  /*
   * React to the candle list: any unlit candle is removed once its flame has
   * faded, and lighting a candle again cancels its pending removal. Driving
   * this from state (instead of inside each click handler) avoids stale state
   * and duplicate timeouts when buttons are clicked quickly.
   */
  useEffect(() => {
    candles.forEach((candle) => {
      if (candle.lit) cancelRemoval(candle.id);
      else scheduleRemoval(candle.id);
    });
  }, [candles, scheduleRemoval, cancelRemoval]);

  // Clear every timer when the visitor leaves the page.
  useEffect(() => {
    const timers = removeTimers.current;
    return () => {
      if (statusTimer.current) clearTimeout(statusTimer.current);
      if (confettiTimer.current) clearTimeout(confettiTimer.current);
      timers.forEach((timer) => clearTimeout(timer));
      timers.clear();
    };
  }, []);

  // ---- Controls ----------------------------------------------------------
  const addCandle = useCallback(() => {
    if (candles.length >= maxCandles) {
      flashStatus(interpolate(labels.maxReached, { max: maxCandles }));
      return;
    }
    const id = nextId.current;
    nextId.current += 1;
    setCandles((current) => addCandleToList(current, id, maxCandles));
  }, [candles.length, maxCandles, flashStatus, labels.maxReached]);

  const removeOne = useCallback(() => {
    if (candles.length === 0) {
      flashStatus(labels.noCandles);
      return;
    }
    // Remove the most recently added candle (always the last one).
    setCandles((current) => removeLastCandle(current));
  }, [candles.length, flashStatus, labels.noCandles]);

  const toggleCandle = useCallback((id) => {
    setCandles((current) => toggleCandleById(current, id));
  }, []);

  const lightAll = useCallback(() => {
    if (candles.length === 0) {
      flashStatus(labels.noCandles);
      return;
    }
    setCandles((current) => setAllLit(current, true));
    flashStatus(lightMessage);
  }, [candles.length, flashStatus, lightMessage, labels.noCandles]);

  const blowOutAll = useCallback(() => {
    if (candles.length === 0) {
      flashStatus(labels.noCandles);
      return;
    }
    setCandles((current) => setAllLit(current, false));

    // Find where the cake is on screen so the sparkles burst in the right place.
    if (cakeRef.current) {
      const rect = cakeRef.current.getBoundingClientRect();
      setOrigin({
        x: ((rect.left + rect.width / 2) / window.innerWidth) * 100,
        y: ((rect.top + rect.height * 0.35) / window.innerHeight) * 100,
      });
    }
    setConfettiKey((key) => key + 1);
    setCelebrating(true);
    if (confettiTimer.current) clearTimeout(confettiTimer.current);
    confettiTimer.current = setTimeout(() => setCelebrating(false), 4200);
    flashStatus(blowMessage);
  }, [candles.length, flashStatus, blowMessage, labels.noCandles]);

  const atMax = candles.length >= maxCandles;
  const isEmpty = candles.length === 0;

  return (
    <div className="cake-section">
      <div className="cake-stage">
        <div className="cake-wrap" ref={cakeRef}>
          <div className="cake-wrap__float">
            {/* The cake itself — click/tap anywhere on it to add a candle. */}
            <div
              className="cake"
              onClick={addCandle}
              role="presentation"
              title={labels.tapToAddTitle}
            >
              <div className="cake__plate" aria-hidden="true" />

              <div className="cake__candles">
                {candles.map((candle, index) => (
                  <span className="cake__candle-slot" key={candle.id}>
                    <Candle
                      color={candle.color}
                      lit={candle.lit}
                      onToggle={() => toggleCandle(candle.id)}
                      position={interpolate(labels.candlePosition, {
                        index: index + 1,
                        total: candles.length,
                      })}
                    />
                  </span>
                ))}
              </div>

              <div className="cake__tiers" aria-hidden="true">
                {/* Top tier */}
                <div className="cake__tier cake__tier--3">
                  <div className="cake__frost" />
                  <span className="cake__drip" style={{ left: '26%', height: 18 }} />
                  <span className="cake__drip" style={{ left: '52%', height: 24 }} />
                  <span className="cake__drip" style={{ left: '78%', height: 16 }} />
                  <span className="cake__sprinkle cake__sprinkle--1" style={{ left: '18%', top: '50%', '--rot': '24deg' }} />
                  <span className="cake__sprinkle cake__sprinkle--2" style={{ left: '64%', top: '62%', '--rot': '-40deg' }} />
                </div>

                {/* Middle tier */}
                <div className="cake__tier cake__tier--2">
                  <div className="cake__frost" />
                  <span className="cake__drip" style={{ left: '16%', height: 22 }} />
                  <span className="cake__drip" style={{ left: '38%', height: 15 }} />
                  <span className="cake__drip" style={{ left: '62%', height: 24 }} />
                  <span className="cake__drip" style={{ left: '86%', height: 17 }} />
                  <span className="cake__sprinkle cake__sprinkle--3" style={{ left: '24%', top: '60%', '--rot': '10deg' }} />
                  <span className="cake__sprinkle cake__sprinkle--4" style={{ left: '48%', top: '72%', '--rot': '60deg' }} />
                  <span className="cake__sprinkle cake__sprinkle--5" style={{ left: '74%', top: '58%', '--rot': '-25deg' }} />
                </div>

                {/* Bottom tier */}
                <div className="cake__tier cake__tier--1">
                  <div className="cake__frost" />
                  <span className="cake__drip" style={{ left: '12%', height: 20 }} />
                  <span className="cake__drip" style={{ left: '30%', height: 26 }} />
                  <span className="cake__drip" style={{ left: '50%', height: 16 }} />
                  <span className="cake__drip" style={{ left: '70%', height: 24 }} />
                  <span className="cake__drip" style={{ left: '88%', height: 18 }} />
                  <span className="cake__sprinkle cake__sprinkle--2" style={{ left: '20%', top: '64%', '--rot': '35deg' }} />
                  <span className="cake__sprinkle cake__sprinkle--3" style={{ left: '42%', top: '78%', '--rot': '-15deg' }} />
                  <span className="cake__sprinkle cake__sprinkle--1" style={{ left: '66%', top: '66%', '--rot': '70deg' }} />
                  <span className="cake__sprinkle cake__sprinkle--4" style={{ left: '84%', top: '80%', '--rot': '-30deg' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cake-controls">
        <p className="cake-controls__status" role="status" aria-live="polite">
          {status}
        </p>

        <div className="cake-controls__buttons">
          <button
            type="button"
            className="btn btn--primary"
            onClick={addCandle}
            disabled={atMax}
          >
            <Plus size={17} aria-hidden="true" />
            {labels.addLabel}
          </button>

          <button
            type="button"
            className="btn btn--ghost"
            onClick={removeOne}
            disabled={isEmpty}
          >
            <Minus size={17} aria-hidden="true" />
            {labels.removeLabel}
          </button>

          <button
            type="button"
            className="btn btn--gold"
            onClick={lightAll}
            disabled={isEmpty}
          >
            <Flame size={17} aria-hidden="true" />
            {labels.lightAllLabel}
          </button>

          <button
            type="button"
            className="btn btn--ghost"
            onClick={blowOutAll}
            disabled={isEmpty}
          >
            <Wind size={17} aria-hidden="true" />
            {labels.blowLabel}
          </button>
        </div>

        <p className="cake-counter">
          {interpolate(labels.counter, {
            count: candles.length,
            max: maxCandles,
          })}
        </p>
      </div>

      <Confetti active={celebrating} fireKey={confettiKey} origin={origin} />
    </div>
  );
}
