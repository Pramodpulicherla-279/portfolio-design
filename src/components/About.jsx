import { FiCheckCircle, FiSmartphone, FiActivity, FiLayers } from 'react-icons/fi';
import { profile } from '../data/profile.js';
import './About.css';

const pillars = [
  {
    icon: <FiSmartphone />,
    title: 'Mobile automation',
    text: 'Python + Appium frameworks across four native Android apps, built on the Page Object Model so suites stay readable as they grow.',
  },
  {
    icon: <FiCheckCircle />,
    title: 'Web automation',
    text: 'Playwright suites that cover the browser workflows that actually matter, wired into CI so regressions surface before release.',
  },
  {
    icon: <FiActivity />,
    title: 'Performance & latency',
    text: 'Network-adaptive testing that simulates high latency and bandwidth drops to prove APK stability on real-world connections.',
  },
  {
    icon: <FiLayers />,
    title: 'Full-stack build',
    text: 'MERN and FastAPI services behind React and React Native front ends — I test better because I ship the same stack.',
  },
];

export default function About() {
  return (
    <section className="section section--alt" id="about">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">01 / About</span>
          <h2 className="section-title">Quality is a build problem, not an afterthought</h2>
        </div>

        <div className="about__grid">
          <div className="about__intro reveal">
            {profile.summary.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <div className="about__signature mono">
              <span className="about__sig-line" />
              {profile.location}
            </div>
          </div>

          <ul className="about__pillars">
            {pillars.map((pillar, i) => (
              <li
                key={pillar.title}
                className="about__pillar reveal"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="about__pillar-icon">{pillar.icon}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
