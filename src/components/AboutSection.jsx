import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import lamedSign from '../assets/lamed-sign.jpg';

const AMBER = '#F59E0B';

/* ── Icons WhyMe ── */
const IconTrophy = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={AMBER} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);
const IconCar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={AMBER} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M5 17H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1l3-5h8l3 5h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2" />
    <circle cx="7.5" cy="17" r="2" /><circle cx="16.5" cy="17" r="2" /><path d="M5 11h14" />
  </svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={AMBER} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconHeart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={AMBER} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
  </svg>
);

/* ── Icons HowItWorks ── */
const GREEN = '#22c55e';

const IconChat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const IconCarDrive = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M5 17H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1l3-5h8l3 5h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2" />
    <circle cx="7.5" cy="17" r="2" /><circle cx="16.5" cy="17" r="2" /><path d="M5 11h14" />
  </svg>
);
const IconMedal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <circle cx="12" cy="14" r="6" /><path d="M12 8V2" /><path d="m9 5 3 3 3-3" />
    <path d="M9.5 14.4 12 17l2.5-2.6" /><path d="M12 11v3" />
  </svg>
);

const whyCards = [
  { Icon: IconTrophy, title: '6 שנות ניסיון', desc: 'מאות תלמידים הצליחו לעבור את המבחן. ניסיון שמתורגם לשיטה שעובדת.' },
  { Icon: IconCar,    title: 'אוטומט — פחות לחץ', desc: 'ללא הילוכים, ללא מצמד. מתמקדים בדרך ולא במכניקה. מושלם למי שנלחץ.' },
  { Icon: IconClock,  title: 'גמישות מלאה', desc: 'צעיר שמתחיל או מבוגר עם לוח זמנים עמוס — מוצאים שעה שמתאימה לך.' },
  { Icon: IconHeart,  title: 'אווירה נעימה', desc: 'אין צעקות, אין לחץ. הרבה סבלנות ותמיכה — כי כך לומדים הכי טוב.' },
];

const steps = [
  { num: '01', Icon: IconChat,    title: 'שיחה קצרה',       desc: 'שולחים הודעה ומספרים קצת על הרקע שלכם. קובעים שיעור ראשון — ללא התחייבות.' },
  { num: '02', Icon: IconCarDrive,title: 'שיעורים בקצב שלך', desc: 'לומדים באוטומט, בשעות שנוחות לך, בדרכים שאתה מכיר. בלי צעקות, בלי לחץ.', tag: '19 שעות בחבילה' },
  { num: '03', Icon: IconMedal,   title: 'רישיון ביד',       desc: 'יוגב מלווה אותך עד המבחן ומכין אותך לכל תרחיש. רוב התלמידים עוברים בפעם הראשונה.', green: true },
];

function FlowArrow({ toGreen }) {
  return (
    <div className="step-arrow" style={{
      width: 36, flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        width: '100%', height: 1,
        background: toGreen
          ? 'linear-gradient(to left, rgba(34,197,94,0.3), rgba(245,158,11,0.2))'
          : 'rgba(0,0,0,0.12)',
      }} />
      <div style={{
        position: 'absolute', left: 2,
        color: toGreen ? '#22c55e' : '#94a3b8',
        fontSize: '0.65rem', opacity: 0.6, lineHeight: 1,
      }}>‹</div>
      <motion.div
        animate={{ x: [16, -16] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'linear', repeatDelay: 0.6 }}
        style={{
          position: 'absolute',
          width: 5, height: 5, borderRadius: '50%',
          background: toGreen ? '#22c55e' : AMBER,
          boxShadow: `0 0 7px ${toGreen ? '#22c55e' : AMBER}`,
        }}
      />
    </div>
  );
}

export default function AboutSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });
  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: '-80px' });

  return (
    <section id="why" style={{ padding: '90px 24px', background: '#111111' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <img src={lamedSign} alt="" style={{ width: 22, height: 22, borderRadius: 3, opacity: 0.8 }} />
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: AMBER, fontWeight: 600 }}>
              למה יוגב
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#f1f5f9', lineHeight: 1.2, margin: 0 }}>
            לא רק מורה נהיגה —<br />
            <span style={{ color: '#a3a3a3' }}>מישהו שרואה אותך.</span>
          </h2>
        </motion.div>

        {/* WhyMe cards — snap scroll on mobile, grid on desktop */}
        <div className="why-snap-wrapper" style={{ marginBottom: 56 }}>
          {whyCards.map((card, i) => (
            <motion.div
              key={i}
              className="why-snap-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, borderColor: 'rgba(245,158,11,0.2)' }}
              style={{
                background: '#161616', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 18, padding: '24px 20px', transition: 'border-color 0.3s',
              }}
            >
              <div style={{
                width: 46, height: 46, borderRadius: 12, marginBottom: 16,
                background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <card.Icon />
              </div>
              <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>{card.title}</h3>
              <p style={{ fontSize: '0.85rem', color: '#52525b', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ── Steps — same dark background, green accents ── */}
      <div style={{ maxWidth: 1000, margin: '0 auto', paddingBottom: 90 }}>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48 }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#3f3f46', fontWeight: 600, whiteSpace: 'nowrap' }}>
            איך זה עובד
          </div>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
        </div>

        {/* Steps */}
        <div id="how" ref={stepsRef} className="steps-grid" style={{ display: 'flex', alignItems: 'stretch' }}>
          {steps.map((step, i) => (<>
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              animate={stepsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, borderColor: 'rgba(34,197,94,0.25)' }}
              style={{
                flex: 1,
                background: '#161616',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 18, padding: '28px 22px',
                display: 'flex', flexDirection: 'column', gap: 12,
                position: 'relative', overflow: 'hidden',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
            >
              {/* Ghost number */}
              <div style={{
                position: 'absolute', top: 14, left: 16,
                fontSize: '4rem', fontWeight: 900, lineHeight: 1,
                color: i === 2 ? 'rgba(34,197,94,0.08)' : 'rgba(34,197,94,0.05)',
                userSelect: 'none',
              }}>
                {step.num}
              </div>

              <div style={{
                width: 46, height: 46, borderRadius: 12,
                background: 'rgba(34,197,94,0.08)',
                border: '1px solid rgba(34,197,94,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1,
              }}>
                <step.Icon />
              </div>

              <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(34,197,94,0.5)', fontWeight: 600, zIndex: 1 }}>
                שלב {step.num}
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>{step.title}</div>
                <div style={{ fontSize: '0.85rem', color: '#71717a', lineHeight: 1.7 }}>{step.desc}</div>
                {step.tag && (
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', marginTop: 10,
                    padding: '3px 10px', borderRadius: 100,
                    background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
                    fontSize: '0.7rem', fontWeight: 600, color: '#22c55e',
                  }}>
                    {step.tag}
                  </div>
                )}
              </div>

              <div style={{
                position: 'absolute', bottom: 0, right: 0, left: 0, height: 2, borderRadius: '0 0 18px 18px',
                background: 'linear-gradient(90deg, #22c55e, transparent)',
                opacity: i === 2 ? 1 : 0.35,
              }} />
            </motion.div>
            {i < steps.length - 1 && <FlowArrow key={`arrow-${i}`} toGreen />}
          </>))}
        </div>

      </div>

      <style>{`
        @media (max-width: 700px) {
          .steps-grid { flex-direction: column !important; }
          .step-arrow { display: none !important; }
        }
      `}</style>
    </section>
  );
}
