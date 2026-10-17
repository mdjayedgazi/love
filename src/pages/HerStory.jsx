import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Flower2 } from 'lucide-react';

import { storyData } from '../data/storyData';
import { galleryData } from '../data/galleryData';
import { uiText } from '../data/uiText';

import Reveal from '../components/Reveal';
import Timeline from '../components/Timeline';
import PhotoGallery from '../components/PhotoGallery';
import Icon from '../components/Icon';

export default function HerStory() {
  return (
    <div className="page-enter">
      {/* ---------------- Header ---------------- */}
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">{storyData.intro.eyebrow}</span>
          <h1>{storyData.intro.heading}</h1>
          <p>{storyData.intro.text}</p>
          <div className="divider">
            <Flower2 size={18} aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ---------------- Life timeline ---------------- */}
      <section className="section section--tight">
        <div className="container">
          <Reveal className="section-head">
            <h2>{storyData.timelineSection.heading}</h2>
            <p>{storyData.timelineSection.intro}</p>
          </Reveal>

          <Timeline items={storyData.timeline} />
        </div>
      </section>

      {/* ---------------- Photo gallery ---------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">{uiText.eyebrows.memories}</span>
            <h2>{galleryData.heading}</h2>
            <p>{galleryData.intro}</p>
          </Reveal>

          <PhotoGallery images={galleryData.images} />
        </div>
      </section>

      {/* ---------------- Things that make you, you ---------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">{uiText.eyebrows.storyDetails}</span>
            <h2>{storyData.traits.heading}</h2>
            <p>{storyData.traits.intro}</p>
          </Reveal>

          <div className="grid grid--3">
            {storyData.traits.favorites.map((trait, index) => (
              <Reveal key={trait.id} delay={index * 70}>
                <article className="trait-card">
                  <span className="trait-card__icon">
                    <Icon name={trait.icon} />
                  </span>
                  <h3>{trait.label}</h3>
                  <p>{trait.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Navigation onward ---------------- */}
      <section className="section section--tight">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal className="closing__card" style={{ padding: '40px 30px' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3.6vw, 2.1rem)' }}>
              {storyData.next.label}
            </h2>
            <p>{storyData.next.hint}</p>
            <div className="btn-row">
              <Link className="btn btn--ghost" to="/">
                <ArrowLeft size={17} aria-hidden="true" />
                {uiText.actions.backToBirthday}
              </Link>
              <Link className="btn btn--primary" to="/our-journey">
                {storyData.next.label}
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
