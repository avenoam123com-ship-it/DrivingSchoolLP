import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const cards = [
  { icon: '🏆', title: '6 שנות ניסיון', desc: 'מאות תלמידים הצליחו לעבור את המבחן. ניסיון שמתורגם לשיטה שעובדת.' },
  { icon: '🚗', title: 'אוטומט — פחות לחץ', desc: 'ללא הילוכים, ללא מצמד. מתמקדים בדרך ולא במכניקה. מושלם למי שנרוו.' },
  { icon: '🕐', title: 'גמישות מלאה', desc: 'שעות שמתאימות לך — בוקר, צהריים או ערב. מתאמים יחד מה שנוח.' },
  { icon: '😊', title: 'אווירה נעימה', desc: 'אין צעקות, אין לחץ. הרבה סבלנות ותמיכה — כי כך לומדים הכי טוב.' },
];

function Card({ card, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(29,78,216,0.12)' }}
      style={{
        background: '#fff',
        border: '1px solid rgba(26,58,107,0.08)',
        borderRadius: 20,
        padding: '32px 24px',
        boxShadow: '0 4px 16px rgba(26,58,107,0.06)',
        transition: 'box-shadow 0.3s',
      }}
    >
      <div style={{ fontSize: '2rem', marginBottom: 14 }}>{card.icon}</div>
      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>
        {card.title}
      </h3>
      <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.75 }}>{card.desc}</p>
    </motion.div>
  );
}

export default function WhyMe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="why" style={{ padding: '100px 24px', background: '#eef3fb' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1d4ed8', marginBottom: 12 }}>
            למה יוגב
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#0f172a', lineHeight: 1.2 }}>
            לא רק מורה נהיגה —<br />
            <span style={{ color: '#1d4ed8' }}>מישהו שרואה אותך.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 20 }}>
          {cards.map((card, i) => <Card key={i} card={card} index={i} />)}
        </div>
      </div>
    </section>
  );
}
