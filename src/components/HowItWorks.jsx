import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    num: '01',
    icon: '💬',
    title: 'שיחה קצרה',
    desc: 'שולחים הודעה ומספרים קצת על הרקע שלכם. קובעים שיעור ראשון — ללא התחייבות.',
  },
  {
    num: '02',
    icon: '🚗',
    title: 'שיעורים בקצב שלך',
    desc: 'לומדים באוטומט, בשעות שנוחות לך, בדרכים שאתה מכיר. בלי צעקות, בלי לחץ.',
  },
  {
    num: '03',
    icon: '🏆',
    title: 'רישיון ביד',
    desc: 'יוגב מלווה אותך עד המבחן ומכין אותך לכל תרחיש. רוב התלמידים עוברים בפעם הראשונה.',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="how" ref={ref} style={{ padding: '100px 24px', background: '#111111', position: 'relative' }}>
      {/* subtle bg glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 600, height: 300,
        background: 'radial-gradient(ellipse, rgba(255,255,255,0.025) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1060, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div style={{
            display: 'inline-block',
            background: '#1a5c2a',
            border: '3px solid rgba(255,255,255,0.82)',
            borderRadius: 8,
            padding: '14px 32px 16px',
            boxShadow: '0 6px 28px rgba(0,0,0,0.45)',
          }}>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 6 }}>
              תהליך פשוט
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, margin: 0 }}>
              מהשיחה הראשונה — עד הרישיון
            </h2>
          </div>
        </motion.div>

        {/* Steps — flat structure so arrows don't steal width from cards */}
        <div className="steps-grid" style={{ display: 'flex', alignItems: 'stretch' }}>
          {steps.map((step, i) => (
            <>
              {/* Card */}
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  flex: 1,
                  background: '#161616',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 20,
                  padding: '36px 28px',
                  display: 'flex', flexDirection: 'column', gap: 16,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute', top: 16, left: 20,
                  fontSize: '5rem', fontWeight: 900,
                  color: 'rgba(255,255,255,0.03)',
                  lineHeight: 1, userSelect: 'none',
                }}>
                  {step.num}
                </div>

                <div style={{
                  width: 52, height: 52,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', position: 'relative', zIndex: 1,
                }}>
                  {step.icon}
                </div>

                <div style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#3f3f46', position: 'relative', zIndex: 1 }}>
                  שלב {step.num}
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 10 }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#71717a', lineHeight: 1.7 }}>
                    {step.desc}
                  </div>
                </div>

                {i === 0 && (
                  <div style={{
                    position: 'absolute', bottom: 0, right: 0, left: 0, height: 2,
                    background: 'linear-gradient(90deg, #22c55e, transparent)',
                    borderRadius: '0 0 20px 20px',
                  }} />
                )}
              </motion.div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <motion.div
                  key={`arrow-${i}`}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="step-arrow"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 40, flexShrink: 0,
                    color: '#3f3f46', fontSize: '1.1rem',
                  }}
                >
                  ←
                </motion.div>
              )}
            </>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 700px) {
          .steps-grid { flex-direction: column !important; }
          .step-arrow { transform: rotate(90deg); width: 100% !important; height: 36px; flex-shrink: 0 !important; }
          #how { padding: 64px 16px !important; }
        }
      `}</style>
    </section>
  );
}
