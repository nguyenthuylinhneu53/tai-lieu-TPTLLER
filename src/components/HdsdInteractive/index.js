import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const STORAGE_KEY = 'hdsd-tptlr-progress';
const TABS = [
  { key: 'steps', label: 'Thao tác' },
  { key: 'rules', label: 'Quy tắc hệ thống' },
  { key: 'errors', label: 'Lỗi thường gặp' },
  { key: 'docs', label: 'Tài liệu' },
  { key: 'video', label: 'Video' },
];

export default function HdsdInteractive({ sections, appName, appSubName }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const [visited, setVisited] = useState({});
  const [tooltip, setTooltip] = useState(null);
  const [activeTab, setActiveTab] = useState('steps');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setVisited(JSON.parse(saved));
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (!activeId) return;
    setActiveTab('steps');
    setVisited((prev) => {
      if (prev[activeId]) return prev;
      const next = { ...prev, [activeId]: true };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (e) {}
      return next;
    });
  }, [activeId]);

  function resetProgress() {
    setVisited({});
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];
  const activeIndex = sections.findIndex((s) => s.id === activeId);
  const percent = Math.round((Object.keys(visited).length / sections.length) * 100);

  function handleHotspotEnter(e, tip) {
    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = e.currentTarget.closest(`.${styles.mockup}`).getBoundingClientRect();
    setTooltip({
      text: tip,
      top: rect.top - parentRect.top,
      left: rect.right - parentRect.left + 12,
    });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.topbar}>
        <div className={styles.brandBlock}>
          <div className={styles.brandSub}>{appSubName || 'Core Banking'}</div>
          <div className={styles.brand}>{appName || 'HDSD TPTLR'}</div>
        </div>
        <div className={styles.progressWrap}>
          <div className={styles.progressTrack}>
            <div className={styles.progressFill} style={{ width: `${percent}%` }} />
          </div>
          <span className={styles.progressLabel}>{percent}%</span>
        </div>
      </div>

      <div className={styles.body}>
        <nav className={styles.sidebar}>
          <div className={styles.sidebarLabel}>Nghiệp vụ chi tiết</div>
          <div className={styles.sidebarList}>
            {sections.map((s, idx) => (
              <div
                key={s.id}
                className={`${styles.navItem} ${s.id === activeId ? styles.navItemActive : ''}`}
                onClick={() => setActiveId(s.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveId(s.id)}
              >
                <span className={`${styles.navBadge} ${visited[s.id] ? styles.navBadgeDone : ''}`}>
                  {visited[s.id] ? '✓' : idx + 1}
                </span>
                <div className={styles.navText}>
                  <div className={styles.navTitle}>
                    {s.icon && <span className={styles.navIcon}>{s.icon}</span>}
                    {s.title}
                  </div>
                  {s.category && <div className={styles.navCategory}>{s.category}</div>}
                </div>
              </div>
            ))}
          </div>
          <button className={styles.resetBtn} onClick={resetProgress} type="button">
            Làm lại từ đầu
          </button>
        </nav>

        <main className={styles.content}>
          <div className={styles.contentHeadRow}>
            <div className={styles.eyebrow}>
              CHỨC NĂNG {activeIndex + 1} / {sections.length}
            </div>
            {activeSection.category && <span className={styles.categoryBadge}>{activeSection.category}</span>}
          </div>
          <h3 className={styles.heading}>{activeSection.title}</h3>
          {activeSection.description && <p className={styles.description}>{activeSection.description}</p>}

          {activeSection.breadcrumb && (
            <div className={styles.breadcrumb}>
              <span className={styles.breadcrumbIcon}>🛠</span>
              Đường dẫn: {activeSection.breadcrumb}
            </div>
          )}

          {activeSection.note && (
            <div className={styles.noteBanner}>
              <span className={styles.noteIcon}>💡</span>
              <span>{activeSection.note}</span>
            </div>
          )}

          {activeSection.mockup && (
            <div className={styles.mockup}>
              {activeSection.mockup.meta && (
                <div className={styles.mockupMeta}>
                  {activeSection.mockup.meta.map((m, i) => (
                    <span key={i}>{m}</span>
                  ))}
                </div>
              )}
              <div className={styles.mockupInner}>
                <div className={styles.mockupLabel}>
                  Màn hình minh họa — di chuột vào từng trường để xem chi tiết
                </div>
                <div className={styles.mockupFields}>
                  {activeSection.mockup.fields.map((field, i) => (
                    <div
                      key={i}
                      className={styles.hotspot}
                      onMouseEnter={(e) => handleHotspotEnter(e, field.tip)}
                      onMouseLeave={() => setTooltip(null)}
                    >
                      <div className={styles.fieldLabel}>
                        {field.icon && <span className={styles.fieldIcon}>{field.icon}</span>}
                        {field.label}
                      </div>
                      <div className={styles.fieldBox} />
                    </div>
                  ))}
                </div>
                {tooltip && (
                  <div className={styles.tooltip} style={{ top: tooltip.top, left: tooltip.left }}>
                    {tooltip.text}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className={styles.tabBar}>
            {TABS.map((t) => (
              <div
                key={t.key}
                className={`${styles.tabItem} ${activeTab === t.key ? styles.tabItemActive : ''}`}
                onClick={() => setActiveTab(t.key)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveTab(t.key)}
              >
                {t.label}
              </div>
            ))}
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'steps' &&
              (activeSection.steps ? (
                <div className={styles.stepsList}>
                  {activeSection.steps.map((step, i) => {
                    const isObj = typeof step === 'object' && step !== null;
                    const icon = isObj && step.icon ? step.icon : null;
                    const text = isObj ? step.text : step;
                    return (
                      <div className={styles.stepItem} key={i}>
                        <span className={styles.stepIcon}>{icon || i + 1}</span>
                        <span className={styles.stepText}>{text}</span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <EmptyTab />
              ))}
            {activeTab === 'rules' &&
              (activeSection.rules ? (
                <ul className={styles.plainList}>
                  {activeSection.rules.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              ) : (
                <EmptyTab />
              ))}
            {activeTab === 'errors' &&
              (activeSection.commonErrors ? (
                <ul className={styles.plainList}>
                  {activeSection.commonErrors.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              ) : (
                <EmptyTab />
              ))}
            {activeTab === 'docs' && <EmptyTab />}
            {activeTab === 'video' && <EmptyTab />}
          </div>
        </main>
      </div>
    </div>
  );
}

function EmptyTab() {
  return <div className="hdsdEmptyTab">Nội dung đang được cập nhật.</div>;
}
