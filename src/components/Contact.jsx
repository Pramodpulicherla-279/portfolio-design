import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { profile } from '../data/profile.js';
import './Contact.css';

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section className="section contact" id="contact">
      <div className="contact__glow" aria-hidden="true" />

      <div className="container contact__inner">
        <div className="section-head reveal">
          <span className="section-kicker">06 / Contact</span>
          <h2 className="section-title contact__title">
            Got a suite that needs building — or breaking?
          </h2>
          <p className="section-sub contact__sub">
            I'm open to QA Automation Tester and full-stack roles, and happy to talk through automation strategy for
            an existing product. The inbox is always the fastest route.
          </p>
        </div>

        <div className="contact__actions reveal">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            <FiMail /> {profile.email}
          </a>
          <a className="btn btn--ghost" href={`tel:+${profile.phoneRaw}`}>
            <FiPhone /> {profile.phone}
          </a>
        </div>

        <ul className="contact__links reveal">
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <FiGithub /> GitHub
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <FiLinkedin /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`${import.meta.env.BASE_URL}${profile.resumeFile}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMail /> Résumé
            </a>
          </li>
        </ul>
      </div>

      <footer className="container contact__footer">
        <p className="mono">
          Built by {profile.name} — React + Vite
          <span className="contact__sep">•</span>© {year}
        </p>
        <a href="#top" className="contact__top">
          Back to top <FiArrowUp />
        </a>
      </footer>
    </section>
  );
}
