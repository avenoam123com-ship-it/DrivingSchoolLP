import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import yogevImg from '../assets/yogev.jpg';

const PHONE = '0504226444';
const WA_MSG = encodeURIComponent('היי יוגב, ראיתי את האתר שלך ורוצה לשמוע פרטים על שיעורי נהיגה 🙂');
const WA_LINK = `https://wa.me/972${PHONE.slice(1)}?text=${WA_MSG}`;

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const badges = ['6 שנות ניסיון', 'אוטומט בלבד', 'גמישות בשעות', 'באר שבע והסביבה'];

const TYPED_TEXT = 'מתחיל כאן.';

function Typewriter({ startDelay = 900 }) {
  const [displayed, setDisplayed] = useState('');
  const [active, setActive] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setActive(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!active || displayed.length >= TYPED_TEXT.length) return;
    const t = setTimeout(
      () => setDisplayed(TYPED_TEXT.slice(0, displayed.length + 1)),
      75
    );
    return () => clearTimeout(t);
  }, [active, displayed]);

  const done = displayed.length >= TYPED_TEXT.length;

  return (
    <span>
      {displayed}
      <span style={{
        display: 'inline-block',
        width: 3, height: '0.85em',
        background: '#a3a3a3',
        marginRight: 4,
        verticalAlign: 'middle',
        borderRadius: 1,
        opacity: done ? 0 : 1,
        transition: done ? 'opacity 0.4s 0.3s' : 'none',
        animation: done ? 'none' : 'blink 0.7s steps(1) infinite',
      }} />
    </span>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '100px 24px 60px',
      position: 'relative',
      overflow: 'hidden',
      background: '#0a0a0a',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 65% 40%, rgba(255,255,255,0.04) 0%, transparent 60%)',
      }} />

      <div
        className="hero-grid"
        style={{
          maxWidth: 1060, width: '100%', margin: '0 auto',
          display: 'flex', flexDirection: 'row',
          alignItems: 'center', gap: 64,
          position: 'relative', zIndex: 1,
        }}
      >
        {/* Text — RIGHT in RTL */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 28 }}>

          <motion.div {...fadeUp(0.1)} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start',
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
            color: '#e2e8f0', fontSize: '0.77rem', fontWeight: 500,
            padding: '6px 14px', borderRadius: 100,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#fff', display: 'inline-block',
              animation: 'blink 2s infinite',
            }} />
            מורה נהיגה · אוטומט · באר שבע והסביבה
          </motion.div>

          <div>
            <motion.h1 {...fadeUp(0.2)} style={{
              fontSize: 'clamp(2.4rem, 6vw, 3.8rem)', fontWeight: 800,
              lineHeight: 1.1, color: '#ffffff', margin: 0,
            }}>
              הרישיון שלך
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: 'clamp(2.4rem, 6vw, 3.8rem)', fontWeight: 800,
                lineHeight: 1.1, color: '#a3a3a3', margin: 0,
                minHeight: '1.1em',
              }}
            >
              <Typewriter startDelay={900} />
            </motion.h1>
          </div>

          <motion.p {...fadeUp(0.44)} style={{
            color: '#71717a', fontSize: '1.05rem', lineHeight: 1.75,
            maxWidth: 400, margin: 0,
          }}>
            יוגב — מורה נהיגה עם 6 שנות ניסיון, סביבה נעימה, ואווירה שעוזרת גם למי שנלחץ.
          </motion.p>

          <motion.div {...fadeUp(0.56)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: '#22c55e', color: '#fff',
                fontWeight: 700, fontSize: '0.95rem',
                padding: '14px 24px', borderRadius: 12,
                textDecoration: 'none',
              }}
            >
              {WA_ICON} WhatsApp
            </a>
            <a
              href={`tel:${PHONE}`}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#e2e8f0', fontWeight: 600, fontSize: '0.95rem',
                padding: '14px 24px', borderRadius: 12,
                textDecoration: 'none', background: 'rgba(255,255,255,0.04)',
              }}
            >
              📞 {PHONE}
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.68)} style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
            {badges.map(t => (
              <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.84rem', color: '#52525b' }}>
                <span style={{ color: '#a3a3a3' }}>✦</span> {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Photo card — LEFT in RTL */}
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ flexShrink: 0, display: 'flex', justifyContent: 'center' }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'relative' }}
          >
            {/* Photo */}
            <div style={{
              width: 280,
              borderRadius: 24,
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
              background: '#141414',
            }}>
              <img
                src={yogevImg}
                alt="יוגב מורה נהיגה"
                style={{
                  width: '100%',
                  height: 340,
                  objectFit: 'cover',
                  objectPosition: 'center 8%',
                  display: 'block',
                }}
              />
              <div style={{
                padding: '16px 20px',
                borderTop: '1px solid rgba(255,255,255,0.07)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{ fontWeight: 700, color: '#f1f5f9', fontSize: '1rem' }}>יוגב</div>
                  <div style={{ color: '#52525b', fontSize: '0.78rem', marginTop: 2 }}>מורה נהיגה מוסמך</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: '#22c55e', fontWeight: 600 }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'blink 2s infinite' }} />
                  זמין
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <div style={{
              position: 'absolute', top: -14, right: -14,
              background: '#fff', color: '#0a0a0a',
              fontSize: '0.72rem', fontWeight: 800,
              padding: '8px 14px', borderRadius: 100,
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              whiteSpace: 'nowrap',
            }}>
              6 שנות ניסיון
            </div>

            {/* Pass rate badge */}
            <div style={{
              position: 'absolute', bottom: 64, left: -18,
              background: '#141414',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#f1f5f9',
              fontSize: '0.72rem', fontWeight: 700,
              padding: '8px 14px', borderRadius: 12,
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              whiteSpace: 'nowrap',
            }}>
              🏆 רוב התלמידים עוברים בפעם הראשונה
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
