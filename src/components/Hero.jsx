import { useEffect, useState } from 'react';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { profile, stats } from '../data/profile.js';
import './Hero.css';

const ROLES = [
  'automation frameworks',
  'Appium + Python suites',
  'Playwright web suites',
  'MERN & FastAPI products',
];

function useTypedRole() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[index % ROLES.length];
    const done = !deleting && text === full;
    const cleared = deleting && text === '';

    const delay = done ? 1800 : cleared ? 200 : deleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (done) return setDeleting(true);
      if (cleared) {
        setDeleting(false);
        setIndex((i) => i + 1);
        return;
      }
      setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return text;
}

function Portrait() {
  const base = import.meta.env.BASE_URL;

  return (
    <figure className="portrait">
      <div className="portrait__blob">
        <picture>
          <source srcSet={`${base}${profile.photoWebp}`} type="image/webp" />
          <img
            className="portrait__img"
            src={`${base}${profile.photo}`}
            alt={`${profile.name}, ${profile.roleLong}`}
            width="900"
            height="1125"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </div>

      <figcaption className="portrait__badge mono">
        <span className="portrait__badge-dot" />
        {profile.role} · {profile.location.split(',')[0]}
      </figcaption>
    </figure>
  );
}

export default function Hero() {
  const typed = useTypedRole();

  return (
    <section className="hero" id="home">
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__available reveal">
            <span className="hero__pulse" />
            Open to SDET & full-stack roles
          </p>

          <h1 className="hero__name reveal" style={{ transitionDelay: '60ms' }}>
            {profile.name}
          </h1>

          <p className="hero__role reveal" style={{ transitionDelay: '120ms' }}>
            <span className="hero__role-tag">SDET</span>
            <span className="hero__role-sep" aria-hidden="true">/</span>
            <span className="hero__role-tag">Full-Stack Developer</span>
          </p>

          <p className="hero__typed mono reveal" style={{ transitionDelay: '180ms' }}>
            <span className="hero__typed-prefix">building</span> {typed}
            <span className="hero__cursor" />
          </p>

          <p className="hero__tagline reveal" style={{ transitionDelay: '240ms' }}>
            {profile.tagline}
          </p>

          <div className="hero__meta reveal" style={{ transitionDelay: '300ms' }}>
            <span>
              <FiMapPin /> {profile.location}
            </span>
            <a href={`mailto:${profile.email}`}>
              <FiMail /> {profile.email}
            </a>
          </div>

          <div className="hero__actions reveal" style={{ transitionDelay: '360ms' }}>
            <a className="btn btn--primary" href="#work">
              View my work <FiArrowRight />
            </a>
            <a
              className="btn btn--ghost"
              href={`${import.meta.env.BASE_URL}${profile.resumeFile}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload /> Download résumé
            </a>
          </div>

          <div className="hero__socials reveal" style={{ transitionDelay: '420ms' }}>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FiMail />
            </a>
            <span className="hero__socials-line" />
          </div>
        </div>

        <div className="hero__visual reveal" style={{ transitionDelay: '260ms' }}>
          <Portrait />
        </div>
      </div>

      <div className="container">
        <ul className="hero__stats reveal" style={{ transitionDelay: '480ms' }}>
          {stats.map((stat) => (
            <li key={stat.label}>
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
