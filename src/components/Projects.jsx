import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { projects } from '../data/profile.js';
import Contributions from './Contributions.jsx';
import './Projects.css';

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">04 / Work</span>
          <h2 className="section-title">Things I've built end to end</h2>
          <p className="section-sub">
            Architecture, implementation and the test suites that keep them stable — all three are
            mine on each of these.
          </p>
        </div>

        <div className="work">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className="work__card reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="work__index mono">{String(i + 1).padStart(2, '0')}</span>

              <div className="work__body">
                <h3 className="work__name">{project.name}</h3>
                <p className="work__subtitle mono">
                  {project.live && <span className="work__live-dot" />}
                  {project.subtitle}
                </p>

                <p className="work__blurb">{project.blurb}</p>

                <ul className="work__points">
                  {project.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                <ul className="work__tech">
                  {project.tech.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>

                <footer className="work__links">
                  {project.url && (
                    <a
                      className="work__link work__link--live"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit site <FiArrowUpRight />
                    </a>
                  )}

                  {project.repos?.map((repo) => (
                    <a
                      key={repo.url}
                      className="work__link"
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub />
                      {repo.label}
                    </a>
                  ))}
                </footer>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal">
          <Contributions />
        </div>
      </div>
    </section>
  );
}
