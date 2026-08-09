import { experience } from '../data/profile.js';
import './Experience.css';

export default function Experience() {
  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">03 / Experience</span>
          <h2 className="section-title">Where I've been shipping</h2>
        </div>

        <ol className="xp">
          {experience.map((job) => (
            <li key={job.company} className="xp__item reveal">
              <span className="xp__marker" aria-hidden="true" />

              <div className="xp__card">
                <header className="xp__head">
                  <div>
                    <h3 className="xp__role">
                      {job.role} <span className="xp__at">@</span>{' '}
                      <span className="xp__company">{job.company}</span>
                    </h3>
                    <p className="xp__period mono">
                      {job.period}
                      <span className="xp__sep">•</span>
                      {job.duration}
                    </p>
                  </div>
                  {job.current && <span className="xp__badge">Current</span>}
                </header>

                <ul className="xp__points">
                  {job.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
