import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const STORAGE_KEY = 'hdsd-tptlr-progress';

export default function HdsdInteractive({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const [visited, setVisited] = useState({});
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setVisited(JSON.parse(saved));
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (!activeId) return;
    setVisited((prev) => {
      if (prev[activeId]) return prev;
      const next = { ...prev, [activeId]: true };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (e) {}
      return next;
    });
  }, [activeId]);

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];
  const percent = Math.round(
    (Object.keys(visited).length / sections.length) * 100
  );

  function handleHotspotEnter(e, tip) {
    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = e.currentTarget
      .closest(`.${styles.mockup}`)
      .getBoundingClientRect();
    setTooltip({
      text: tip,
      top: rect.top - parentRect.top,
      left: rect.right - parentRect.left + 12,
    });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.topbar}>
        <div className={styles.brand}>HDSD TPTLR</div>
        <div className={styles.progressWrap}>
          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className={styles.progressLabel}>{percent}%</span>
        </div>
      </div>

      <div className={styles.body}>
        <nav className={styles.sidebar}>
          {sections.map((s, idx) => (
            <div
              key={s.id}
              className={`${styles.navItem} ${
                s.id === activeId ? styles.navItemActive : ''
              }`}
              onClick={() => setActiveId(s.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveId(s.id)}
            >
              <span
                className={`${styles.navBadge} ${
                  visited[s.id] ? styles.navBadgeDone : ''
                }`}
              >
                {visited[s.id] ? '✓' : idx + 1}
              </span>
              {s.title}
            </div>
          ))}
        </nav>

        <main className={styles.content}>
          <div className={styles.eyebrow}>
            CHỨC NĂNG {sections.findIndex((s) => s.id === activeId) + 1} /{' '}
            {sections.length}
          </div>
          <h3 className={styles.heading}>{activeSection.title}</h3>

          {activeSection.breadcrumb && (
            <div className={styles.breadcrumb}>{activeSection.breadcrumb}</div>
          )}

          {activeSection.steps && (
            <ol className={styles.stepsList}>
              {activeSection.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          )}

          {activeSection.mockup && (
            <div className={styles.mockup}>
              <div className={styles.mockupLabel}>
                Màn hình minh họa (di chuột vào từng trường để xem chi tiết)
              </div>
              <div className={styles.mockupFields}>
                {activeSection.mockup.map((field, i) => (
                  <div
                    key={i}
                    className={styles.hotspot}
                    onMouseEnter={(e) => handleHotspotEnter(e, field.tip)}
                    onMouseLeave={() => setTooltip(null)}
                  >
                    <div className={styles.fieldLabel}>{field.label}</div>
                    <div className={styles.fieldBox} />
                  </div>
                ))}
              </div>
              {tooltip && (
                <div
                  className={styles.tooltip}
                  style={{ top: tooltip.top, left: tooltip.left }}
                >
                  {tooltip.text}
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
