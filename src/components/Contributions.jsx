import { useEffect, useMemo, useState } from 'react';
import { FiGithub, FiAlertCircle } from 'react-icons/fi';
import { profile } from '../data/profile.js';
import './Contributions.css';

const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** 'YYYY-MM-DD' -> local Date (plain new Date() would parse it as UTC). */
function toLocalDate(iso) {
  return new Date(`${iso}T00:00:00`);
}

function formatDay(iso) {
  const d = toLocalDate(iso);
  return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

/** Split the flat day list into calendar weeks, padding the first one. */
function toWeeks(days) {
  if (!days.length) return [];
  const weeks = [];
  let week = new Array(toLocalDate(days[0].date).getDay()).fill(null);

  for (const day of days) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }
  return weeks;
}

/** Label a column when its first real day starts a new month. */
function monthLabels(weeks) {
  const labels = [];
  let previous = -1;

  weeks.forEach((week, index) => {
    const first = week.find(Boolean);
    if (!first) return;
    const month = toLocalDate(first.date).getMonth();
    if (month !== previous) {
      // Skip a label that would collide with the one before it.
      if (!labels.length || index - labels[labels.length - 1].index >= 3) {
        labels.push({ index, label: MONTHS[month] });
      }
      previous = month;
    }
  });
  return labels;
}

export default function Contributions() {
  const [status, setStatus] = useState('loading');
  const [days, setDays] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const res = await fetch(
          `${profile.contributionsApi}/${profile.githubUser}?y=last`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const json = await res.json();
        const list = Array.isArray(json.contributions) ? json.contributions : [];
        if (!list.length) throw new Error('empty payload');

        setDays(list);
        setStatus('ready');
      } catch (err) {
        if (err.name !== 'AbortError') setStatus('error');
      }
    })();

    return () => controller.abort();
  }, []);

  const weeks = useMemo(() => toWeeks(days), [days]);
  const labels = useMemo(() => monthLabels(weeks), [weeks]);
  // Counted from the days actually drawn, so the number always matches the grid.
  const total = useMemo(() => days.reduce((sum, d) => sum + d.count, 0), [days]);
  const range =
    days.length > 0 ? `${formatDay(days[0].date)} — ${formatDay(days[days.length - 1].date)}` : '';

  return (
    <div className="contrib">
      <header className="contrib__head">
        <div>
          <h3 className="contrib__title">
            <FiGithub /> Contribution activity
          </h3>
          <p className="contrib__sub mono">
            {status === 'ready'
              ? `${total.toLocaleString()} contributions · ${range}`
              : 'Pulled live from GitHub on page load'}
          </p>
        </div>

        <a
          className="contrib__link"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          @{profile.githubUser}
        </a>
      </header>

      {status === 'error' && (
        <p className="contrib__error">
          <FiAlertCircle />
          Couldn&apos;t reach the contributions API right now.{' '}
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            View the graph on GitHub
          </a>
          .
        </p>
      )}

      {status !== 'error' && (
        <div className="contrib__scroll">
          <div className="contrib__inner">
            <div className="contrib__months mono" aria-hidden="true">
              {labels.map((m) => (
                <span key={`${m.label}-${m.index}`} style={{ gridColumn: m.index + 1 }}>
                  {m.label}
                </span>
              ))}
            </div>

            <div className="contrib__body">
              <div className="contrib__days mono" aria-hidden="true">
                {DAY_LABELS.map((label, i) => (
                  <span key={i}>{label}</span>
                ))}
              </div>

              <div
                className={`contrib__grid ${status === 'loading' ? 'is-loading' : ''}`}
                role="img"
                aria-label={
                  status === 'ready'
                    ? `${total} GitHub contributions between ${range}`
                    : 'Loading GitHub contributions'
                }
              >
                {(status === 'loading' ? Array.from({ length: 53 }) : weeks).map((week, wi) => (
                  <div className="contrib__week" key={wi}>
                    {(week || Array.from({ length: 7 })).map((day, di) =>
                      day ? (
                        <span
                          key={day.date}
                          className="contrib__day"
                          data-level={day.level}
                          title={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${formatDay(day.date)}`}
                        />
                      ) : (
                        <span key={di} className="contrib__day contrib__day--empty" />
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>

            <footer className="contrib__legend mono">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <span key={level} className="contrib__day" data-level={level} />
              ))}
              <span>More</span>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
