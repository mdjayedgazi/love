import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Sparkles } from 'lucide-react';

import { siteConfig } from '../data/siteConfig';
import { relationshipData } from '../data/relationshipData';
import { galleryData } from '../data/galleryData';
import { uiText } from '../data/uiText';

import HeartHero from '../components/HeartHero';
import Reveal from '../components/Reveal';
import Timeline from '../components/Timeline';
import Icon from '../components/Icon';
import BirthdayLetter from '../components/BirthdayLetter';
import ScrapbookGallery from '../components/ScrapbookGallery';

export default function OurJourney() {
  return (
    <div className="page-enter">
      {/* ---------------- Hero with the large animated heart ---------------- */}
      <HeartHero />

      {/* ---------------- Relationship timeline ---------------- */}
      <section className="section section--tight">
        <div className="container">
          <Reveal className="section-head">
            <h2>{relationshipData.timelineSection.heading}</h2>
            <p>{relationshipData.timelineSection.intro}</p>
          </Reveal>

          <Timeline items={relationshipData.timeline} />
        </div>
      </section>

      {/* ---------------- Shared memories (the nine real photographs) ---------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">{uiText.eyebrows.journeyScrapbook}</span>
            <h2>{relationshipData.memories.heading}</h2>
            <p>{relationshipData.memories.intro}</p>
          </Reveal>

          <ScrapbookGallery images={galleryData.images} />
        </div>
      </section>

      {/* ---------------- Future dreams ---------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">{uiText.eyebrows.journeyDreams}</span>
            <h2>{relationshipData.dreams.heading}</h2>
            <p>{relationshipData.dreams.intro}</p>
          </Reveal>

          <div className="grid grid--3">
            {relationshipData.dreams.items.map((dream, index) => (
              <Reveal key={dream.id} delay={index * 70}>
                <article className="dream-card">
                  <span className="dream-card__icon">
                    <Icon name={dream.icon} />
                  </span>
                  <h3>{dream.title}</h3>
                  <p>{dream.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Birthday letter ---------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">{uiText.eyebrows.journeyLetter}</span>
            <h2>{relationshipData.letter.heading}</h2>
          </Reveal>

          <BirthdayLetter data={relationshipData.letter} />
        </div>
      </section>

      {/* ---------------- Finale ---------------- */}
      <section className="closing">
        <div className="container">
          <Reveal className="finale__card">
            <span
              className="closing__card-icon"
              style={{ display: 'inline-flex', color: 'var(--gold)', marginBottom: 14 }}
            >
              <Sparkles size={26} aria-hidden="true" />
            </span>
            <p className="finale__name">{siteConfig.girlName}</p>
            <h2>{relationshipData.finale.heading}</h2>
            <p>{relationshipData.finale.text}</p>
            <div className="btn-row">
              <Link className="btn btn--ghost" to="/her-story">
                <ArrowLeft size={17} aria-hidden="true" />
                {uiText.actions.herStory}
              </Link>
              <Link className="btn btn--primary" to="/">
                <Heart size={16} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                {relationshipData.finale.ctaLabel}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
