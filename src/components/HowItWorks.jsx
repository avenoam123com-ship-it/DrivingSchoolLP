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
    <section id="how" ref={ref} style={{ padding: '100px 24px', background: '#111111', position: 'relative', overflow: 'hidden' }}>
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
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#52525b', marginBottom: 12 }}>
            תהליך פשוט
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#f1f5f9', margin: 0, lineHeight: 1.2 }}>
            מהשיחה הראשונה — עד הרישיון
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="steps-grid" style={{ display: 'flex', gap: 0, alignItems: 'stretch', position: 'relative' }}>
          {steps.map((step, i) => (
            <div key={step.num} style={{ flex: 1, display: 'flex', alignItems: 'stretch' }}>

              {/* Card */}
              <motion.div
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
                {/* Step number — large background */}
                <div style={{
                  position: 'absolute', top: 16, left: 20,
                  fontSize: '5rem', fontWeight: 900,
                  color: 'rgba(255,255,255,0.03)',
                  lineHeight: 1, userSelect: 'none',
                  fontVariantNumeric: 'tabular-nums',
                }}>
                  {step.num}
                </div>

                {/* Icon */}
                <div style={{
                  width: 52, height: 52,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem',
                  position: 'relative', zIndex: 1,
                }}>
                  {step.icon}
                </div>

                {/* Step label */}
                <div style={{
                  fontSize: '0.68rem', letterSpacing: '0.15em',
                  textTransform: 'uppercase', color: '#3f3f46',
                  position: 'relative', zIndex: 1,
                }}>
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

                {/* Bottom accent line for step 1 */}
                {i === 0 && (
                  <div style={{
                    position: 'absolute', bottom: 0, right: 0, left: 0,
                    height: 2,
                    background: 'linear-gradient(90deg, #22c55e, transparent)',
                    borderRadius: '0 0 20px 20px',
                  }} />
                )}
              </motion.div>

              {/* Arrow connector between steps */}
              {i < steps.length - 1 && (
                <motion.div
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
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 700px) {
          .steps-grid { flex-direction: column !important; }
          .step-arrow { transform: rotate(90deg); width: 100% !important; height: 32px; }
        }
      `}</style>
    </section>
  );
}
