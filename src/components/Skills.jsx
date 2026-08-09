import { skillGroups } from '../data/profile.js';
import './Skills.css';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">02 / Skills</span>
          <h2 className="section-title">The toolkit</h2>
          <p className="section-sub">
            Automation first, but the full path from a React screen to a FastAPI endpoint to the
            pipeline that ships it.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <article
              key={group.id}
              className={`skills__card reveal ${group.featured ? 'skills__card--featured' : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <header className="skills__card-head">
                <div>
                  <h3>{group.title}</h3>
                  <p className="skills__caption mono">{group.caption}</p>
                </div>
                <span className="skills__count mono">{String(group.items.length).padStart(2, '0')}</span>
              </header>

              <ul className="skills__tags">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
