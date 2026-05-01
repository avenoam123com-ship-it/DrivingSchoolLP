import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const PHONE = '0504226444';
const WA_MSG = encodeURIComponent('היי יוגב, ראיתי את האתר שלך ורוצה לשמוע פרטים על שיעורי נהיגה 🙂');
const WA_LINK = `https://wa.me/972${PHONE.slice(1)}?text=${WA_MSG}`;

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" style={{ padding: '100px 24px', background: '#111111', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 500, height: 300,
        background: 'radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}
      >
        <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#52525b', marginBottom: 12 }}>
          בואו נתחיל
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#f1f5f9', lineHeight: 1.2, marginBottom: 16 }}>
          שיחה אחת —<br />
          <span style={{ color: '#a3a3a3' }}>וקובעים שיעור.</span>
        </h2>
        <p style={{ color: '#52525b', fontSize: '0.97rem', lineHeight: 1.75, marginBottom: 40 }}>
          כל שאלה, כל פרט — שולחים הודעה או מתקשרים ישירות.<br />
          יוגב עונה אישית, תוך שעות.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 360, margin: '0 auto' }}>
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              background: '#22c55e', color: '#fff',
              fontWeight: 700, fontSize: '1rem',
              padding: '16px 24px', borderRadius: 14,
              textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(34,197,94,0.2)',
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 22, height: 22 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            שלח הודעה ב-WhatsApp
          </motion.a>

          <motion.a
            href={`tel:${PHONE}`}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#a3a3a3', fontWeight: 600, fontSize: '1rem',
              padding: '16px 24px', borderRadius: 14,
              textDecoration: 'none', background: 'rgba(255,255,255,0.03)',
            }}
          >
            📞 {PHONE}
          </motion.a>
        </div>

        <p style={{ marginTop: 24, fontSize: '0.8rem', color: '#3f3f46' }}>
          ⏱ מענה תוך שעות · ☑ ללא התחייבות
        </p>
      </motion.div>
    </section>
  );
}
