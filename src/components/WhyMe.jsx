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
      whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.15)' }}
      style={{
        background: '#141414',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 20,
        padding: '32px 24px',
        transition: 'border-color 0.3s',
      }}
    >
      <div style={{ fontSize: '2rem', marginBottom: 14 }}>{card.icon}</div>
      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 10 }}>
        {card.title}
      </h3>
      <p style={{ fontSize: '0.9rem', color: '#52525b', lineHeight: 1.75 }}>{card.desc}</p>
    </motion.div>
  );
}

export default function WhyMe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="why" style={{ padding: '100px 24px', background: '#111111' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#52525b', marginBottom: 12 }}>
            למה יוגב
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#f1f5f9', lineHeight: 1.2 }}>
            לא רק מורה נהיגה —<br />
            <span style={{ color: '#a3a3a3' }}>מישהו שרואה אותך.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 20 }}>
          {cards.map((card, i) => <Card key={i} card={card} index={i} />)}
        </div>
      </div>
    </section>
  );
}
