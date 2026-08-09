import { FiAward } from 'react-icons/fi';
import { education } from '../data/profile.js';
import './Education.css';

export default function Education() {
  return (
    <section className="section section--alt" id="education">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">05 / Education</span>
          <h2 className="section-title">Background</h2>
        </div>

        <div className="edu">
          {education.map((entry, i) => (
            <article
              key={entry.degree}
              className="edu__card reveal"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="edu__icon">
                <FiAward />
              </span>
              <div>
                <h3>{entry.degree}</h3>
                <p className="edu__school">{entry.school}</p>
                <p className="edu__meta mono">
                  {entry.place}
                  <span className="edu__sep">•</span>
                  {entry.period}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
