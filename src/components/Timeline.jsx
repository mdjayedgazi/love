import Reveal from './Reveal';
import SmartImage from './SmartImage';

/*
 * Timeline
 * --------
 * An alternating vertical timeline. Pass in a list of events:
 *   { id, date (or year), title, description, image?, tag? }
 * On small screens it becomes a single left-aligned column.
 */
export default function Timeline({ items }) {
  return (
    <div className="timeline">
      <div className="timeline__line" aria-hidden="true" />

      {items.map((item, index) => {
        const side = index % 2 === 0 ? 'left' : 'right';

        return (
          <Reveal
            key={item.id}
            className={`timeline__item timeline__item--${side}`}
          >
            <span className="timeline__dot" aria-hidden="true" />

            <article className="timeline__card">
              {item.tag && <span className="timeline__tag">{item.tag}</span>}
              {(item.date || item.year) && (
                <p className="timeline__date">{item.date || item.year}</p>
              )}
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              {item.image && (
                <div className="timeline__image">
                  <SmartImage src={item.image} alt={item.title} />
                </div>
              )}
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
