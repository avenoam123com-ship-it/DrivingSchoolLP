import { useRef, useState, useCallback } from 'react';

const PHONE = '0504226444';
const WA_LINK = `https://wa.me/972${PHONE.slice(1)}`;

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 17, height: 17 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function BusinessCard() {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState(
    'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
  );
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const xRot = (py - 0.5) * -24;
    const yRot = (px - 0.5) * 24;
    setTransform(
      `perspective(1200px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale3d(1.04,1.04,1.04)`
    );
    setSpotlightPos({ x: px * 100, y: py * 100 });
  }, []);

  const handlePointerEnter = useCallback(() => setIsHovered(true), []);

  const handlePointerLeave = useCallback(() => {
    setTransform('perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={cardRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        transform,
        transition: 'transform 0.22s ease-out',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #1a3a6b 0%, #1d4ed8 100%)',
        borderRadius: 24,
        padding: '40px 32px',
        width: 300,
        boxShadow: '0 24px 64px rgba(29,78,216,0.28), 0 4px 20px rgba(0,0,0,0.1)',
        color: '#fff',
        cursor: 'default',
        userSelect: 'none',
      }}
    >
      {/* Spotlight */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 10,
        overflow: 'hidden', pointerEvents: 'none',
        opacity: isHovered ? 1 : 0, transition: 'opacity 0.3s',
      }}>
        <div style={{
          position: 'absolute',
          width: '200%', height: '200%', borderRadius: '50%',
          left: `${spotlightPos.x}%`, top: `${spotlightPos.y}%`,
          transform: 'translate(-50%,-50%)',
          background: 'radial-gradient(circle, rgba(255,255,255,0.14) 0%, transparent 40%)',
        }} />
      </div>

      {/* Decorative circle */}
      <div style={{
        position: 'absolute', top: -50, left: -50,
        width: 160, height: 160, borderRadius: '50%',
        background: 'rgba(255,255,255,0.06)', pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Avatar + Name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
          <div style={{
            width: 58, height: 58, borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)',
            border: '2px solid rgba(255,255,255,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.7rem', flexShrink: 0,
          }}>
            🚗
          </div>
          <div>
            <div style={{
              fontSize: '0.62rem', letterSpacing: '0.18em',
              textTransform: 'uppercase', opacity: 0.65, marginBottom: 4,
            }}>
              מורה נהיגה מוסמך
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: 1 }}>יוגב</div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.15)', marginBottom: 24 }} />

        {/* Info rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { icon: '📍', text: 'באר שבע והסביבה' },
            { icon: '⚙️', text: 'אוטומט בלבד — פחות לחץ' },
            { icon: '📞', text: '050-422-6444', ltr: true },
          ].map(({ icon, text, ltr }) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.88rem' }}>
              <span>{icon}</span>
              <span style={{ opacity: 0.9, ...(ltr ? { direction: 'ltr', display: 'inline-block' } : {}) }}>
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* Badge */}
        <div style={{
          marginTop: 26,
          background: 'rgba(255,255,255,0.12)',
          borderRadius: 12, padding: '11px 16px',
          display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem',
        }}>
          <span>🏆</span>
          <span>6 שנות ניסיון · מאות תלמידים</span>
        </div>

        {/* WhatsApp CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            marginTop: 14, padding: '12px',
            background: '#22c55e', borderRadius: 12,
            color: '#fff', fontWeight: 700, fontSize: '0.88rem',
            textDecoration: 'none',
          }}
        >
          {WA_ICON}
          שלח הודעה
        </a>
      </div>
    </div>
  );
}
