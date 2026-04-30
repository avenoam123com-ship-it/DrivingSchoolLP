import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const reviews = [
  { name: 'שירה כהן',    age: '18', text: 'עברתי את הטסט בניסיון ראשון! יוגב היה סבלני מאוד, תמיד הרגשתי בנוח לשאול שאלות. ממליצה בחום 🙌', stars: 5 },
  { name: 'אורי לוי',    age: '19', text: 'הייתי מאוד עצבני לפני כל שיעור, אבל יוגב ידע בדיוק איך להרגיע אותי. השיטה שלו ברורה ומסודרת.', stars: 5 },
  { name: 'נועה מזרחי',  age: '17', text: 'ניסיתי קודם מורה אחר ולא הסתדרתי. עם יוגב הכל השתנה — יותר ביטחון, פחות פחד. עברתי ב-3 שבועות!', stars: 5 },
  { name: 'תום אברהם',   age: '21', text: 'גמישות בשעות זה מה שהכריע עבורי. יוגב תמיד מצא זמן שמתאים ללוח הזמנים שלי. שירות מצוין.', stars: 5 },
  { name: 'מיה פרץ',     age: '18', text: 'כיף לבוא לשיעורים! יוגב מסביר כל דבר בסבלנות, לא מרגישים לחץ. עברתי את הטסט ממש בשלווה.', stars: 5 },
  { name: 'יוסף בן דוד', age: '20', text: 'חיפשתי מורה עם ניסיון באוטומט באזור באר שבע — יוגב בדיוק מה שצריך. מקצועי ואמין.', stars: 5 },
];

function Stars({ n }) {
  return (
    <div style={{ display: 'flex', gap: 2, color: '#f59e0b' }}>
      {Array.from({ length: n }).map((_, i) => <span key={i}>★</span>)}
    </div>
  );
}

function ReviewCard({ review, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: '#141414',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 18,
        padding: '28px 24px',
        display: 'flex', flexDirection: 'column', gap: 14,
      }}
    >
      <Stars n={review.stars} />
      <p style={{ fontSize: '0.92rem', color: '#71717a', lineHeight: 1.75, flex: 1 }}>
        "{review.text}"
      </p>
      <div>
        <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#e2e8f0' }}>{review.name}</div>
        <div style={{ fontSize: '0.75rem', color: '#3f3f46', marginTop: 2 }}>גיל {review.age} · תלמיד/ה</div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="reviews" style={{ padding: '100px 24px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#52525b', marginBottom: 12 }}>
            המלצות
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#f1f5f9', lineHeight: 1.2 }}>
            מה אומרים<br />
            <span style={{ color: '#a3a3a3' }}>התלמידים.</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 16 }}>
            <div style={{ color: '#f59e0b', fontSize: '1.1rem' }}>★★★★★</div>
            <span style={{ color: '#3f3f46', fontSize: '0.88rem' }}>5.0 מתוך 5 · מאות ביקורות</span>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {reviews.map((r, i) => <ReviewCard key={i} review={r} index={i} />)}
        </div>
      </div>
    </section>
  );
}
