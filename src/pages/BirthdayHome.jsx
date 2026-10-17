import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarHeart, Flower2, Gift, Quote, Send, Sparkles } from 'lucide-react';

import { siteConfig } from '../data/siteConfig';
import { birthdayData } from '../data/birthdayData';
import { galleryData, homePreviewIds } from '../data/galleryData';
import { uiText } from '../data/uiText';
import { formatLongDate, formatShortDate } from '../utils/date';

import Reveal from '../components/Reveal';
import SmartImage from '../components/SmartImage';
import Icon from '../components/Icon';
import BirthdayCake from '../components/BirthdayCake';

export default function BirthdayHome() {
  const [revealed, setRevealed] = useState(false);
  const experienceRef = useRef(null);

  // Friendly, readable versions of the birthday from siteConfig.
  const longDate = useMemo(() => formatLongDate(siteConfig.birthday), []);
  const shortDate = useMemo(() => formatShortDate(siteConfig.birthday), []);

  const previewImages = useMemo(
    () =>
      homePreviewIds
        .map((id) => galleryData.images.find((image) => image.id === id))
        .filter(Boolean),
    [],
  );

  const openSurprise = () => {
    setRevealed(true);
    // Let the reveal animation begin, then bring the cake into view.
    window.setTimeout(() => {
      experienceRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  };

  return (
    <div className="page-enter">
      {/* ---------------- Opening hero ---------------- */}
      <section className="hero">
        <div className="container">
          <p className="hero__eyebrow">{birthdayData.hero.eyebrow}</p>
          <h1 className="hero__name">{siteConfig.girlName}</h1>
          <h2 className="hero__title">{birthdayData.hero.title}</h2>
          <p className="hero__message">{birthdayData.hero.message}</p>

          {longDate && (
            <p className="hero__meta">
              <CalendarHeart size={15} aria-hidden="true" />
              {longDate}
              {shortDate && <span className="hero__meta-sep">·</span>}
              {shortDate}
            </p>
          )}

          <div className="btn-row">
            <button type="button" className="btn btn--primary" onClick={openSurprise}>
              <Gift size={18} aria-hidden="true" />
              {birthdayData.hero.ctaPrimary}
            </button>
            <Link className="btn btn--ghost" to="/our-journey">
              <Send size={17} aria-hidden="true" />
              {birthdayData.hero.ctaSecondary}
            </Link>
          </div>

          <div className="divider">
            <Flower2 size={18} aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ---------------- Everything revealed by the button ---------------- */}
      <div
        className={`surprise-reveal ${revealed ? 'is-open' : ''}`}
        ref={experienceRef}
        aria-hidden={!revealed}
      >
        <div className="surprise-reveal__inner">
          {/* Cake */}
          <section className="section">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">{uiText.eyebrows.homeCake}</span>
              <h2>{birthdayData.cake.heading}</h2>
              <p>{uiText.cake.instructions}</p>
            </Reveal>

            <Reveal>
              <BirthdayCake data={birthdayData.cake} labels={uiText.cake} />
            </Reveal>
          </div>
        </section>

        {/* Birthday wishes */}
        <section className="section">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">{uiText.eyebrows.homeWishes}</span>
              <h2>{birthdayData.wishes.heading}</h2>
              <p>{birthdayData.wishes.intro}</p>
            </Reveal>

            <div className="grid grid--3">
              {birthdayData.wishes.items.map((wish, index) => (
                <Reveal key={wish.id} delay={index * 90}>
                  <article className="wish-card">
                    <Quote size={22} color="var(--rose)" aria-hidden="true" />
                    <span className="wish-card__index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3>{wish.title}</h3>
                    <p>{wish.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* What makes her special + compliments */}
        <section className="section">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">{uiText.eyebrows.homeQualities}</span>
              <h2>{birthdayData.qualities.heading}</h2>
              <p>{birthdayData.qualities.intro}</p>
            </Reveal>

            <div className="grid grid--4">
              {birthdayData.qualities.items.map((quality, index) => (
                <Reveal key={quality.id} delay={index * 80}>
                  <article className="quality-card">
                    <span className="quality-card__icon">
                      <Icon name={quality.icon} />
                    </span>
                    <h3>{quality.label}</h3>
                    <p>{quality.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="divider">
                <Sparkles size={18} aria-hidden="true" />
              </div>
              <div className="compliments">
                {birthdayData.compliments.items.map((line) => (
                  <p className="compliment" key={line}>
                    <Sparkles size={16} aria-hidden="true" />
                    <span>{line}</span>
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Memories preview */}
        <section className="section">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">{uiText.eyebrows.memories}</span>
              <h2>{birthdayData.memoriesPreview.heading}</h2>
              <p>{birthdayData.memoriesPreview.intro}</p>
            </Reveal>

            <div className="preview-grid">
              {previewImages.map((image, index) => (
                <Reveal key={image.id} delay={index * 80}>
                  <Link className="preview-card" to="/her-story">
                    <SmartImage
                      src={image.src}
                      alt={image.alt}
                      className="preview-card__img"
                    />
                    <span className="preview-card__caption">{image.caption}</span>
                  </Link>
                </Reveal>
              ))}
            </div>

            <div className="btn-row" style={{ marginTop: 34 }}>
              <Link className="btn btn--ghost" to="/her-story">
                {birthdayData.memoriesPreview.linkLabel}
              </Link>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="closing">
          <div className="container">
            <Reveal className="closing__card">
              <h2>{birthdayData.closing.heading}</h2>
              <p>{birthdayData.closing.text}</p>
              <Link className="btn btn--primary" to="/our-journey">
                {birthdayData.closing.ctaLabel}
              </Link>
            </Reveal>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
}
