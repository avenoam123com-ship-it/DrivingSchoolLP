import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const StopSign = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <polygon points="29,2 71,2 98,29 98,71 71,98 29,98 2,71 2,29" fill="#cc1100" stroke="white" strokeWidth="4" />
    <text x="50" y="62" textAnchor="middle" fill="white" fontSize="20" fontWeight="800" fontFamily="Heebo,Arial,sans-serif">עצור</text>
  </svg>
);

const SpeedSign = ({ size, speed }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="46" fill="white" stroke="#cc1100" strokeWidth="8" />
    <text x="50" y="65" textAnchor="middle" fill="#111" fontSize="40" fontWeight="900" fontFamily="Arial,sans-serif">{speed}</text>
  </svg>
);

const WarningSign = ({ size }) => (
  <svg width={size} height={size * 0.87} viewBox="0 0 100 87">
    <polygon points="50,5 96,82 4,82" fill="#f5c400" stroke="#111" strokeWidth="5" />
    <text x="50" y="74" textAnchor="middle" fill="#111" fontSize="44" fontWeight="900" fontFamily="Arial">!</text>
  </svg>
);

const NoEntry = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="46" fill="#cc1100" stroke="white" strokeWidth="4" />
    <rect x="16" y="41" width="68" height="18" rx="3" fill="white" />
  </svg>
);

const ParkingSign = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <rect x="3" y="3" width="94" height="94" rx="14" fill="#1a56db" stroke="white" strokeWidth="3" />
    <text x="50" y="72" textAnchor="middle" fill="white" fontSize="64" fontWeight="900" fontFamily="Arial">P</text>
  </svg>
);

const YieldSign = ({ size }) => (
  <svg width={size} height={size * 0.87} viewBox="0 0 100 87">
    <polygon points="50,82 97,5 3,5" fill="white" stroke="#cc1100" strokeWidth="8" />
    <polygon points="50,72 85,16 15,16" fill="white" stroke="#cc1100" strokeWidth="1" />
  </svg>
);

const PrioritySign = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <rect x="50" y="6" width="62" height="62" rx="4" transform="rotate(45 50 50)" fill="#f5c400" stroke="white" strokeWidth="3" />
    <rect x="50" y="14" width="48" height="48" rx="2" transform="rotate(45 50 50)" fill="white" />
  </svg>
);

const SIGNS = [
  { C: StopSign,     extra: {},             left: '1%',  delay: 0.15, rot: -8,  bot: 22, size: 58, floatDur: 3.2, floatAmp: 14 },
  { C: WarningSign,  extra: {},             left: '10%', delay: 0.55, rot: 6,   bot: 16, size: 56, floatDur: 2.8, floatAmp: 10 },
  { C: SpeedSign,    extra: { speed: 50 },  left: '4%',  delay: 0.95, rot: -3,  bot: 26, size: 54, floatDur: 3.6, floatAmp: 12 },
  { C: YieldSign,    extra: {},             left: '14%', delay: 1.35, rot: 9,   bot: 14, size: 56, floatDur: 2.5, floatAmp: 16 },
  { C: NoEntry,      extra: {},             left: '87%', delay: 0.30, rot: 7,   bot: 18, size: 52, floatDur: 3.0, floatAmp: 11 },
  { C: ParkingSign,  extra: {},             left: '93%', delay: 0.70, rot: -5,  bot: 24, size: 54, floatDur: 3.8, floatAmp: 13 },
  { C: PrioritySign, extra: {},             left: '82%', delay: 1.10, rot: -10, bot: 18, size: 52, floatDur: 2.7, floatAmp: 15 },
  { C: SpeedSign,    extra: { speed: 90 },  left: '96%', delay: 1.50, rot: 5,   bot: 20, size: 50, floatDur: 3.4, floatAmp: 10 },
];

function FloatingSign({ C, extra, left, delay, rot, bot, size, floatDur, floatAmp }) {
  const controls = useAnimation();

  useEffect(() => {
    async function run() {
      // fall & land
      await controls.start({
        y: 0,
        rotate: rot,
        opacity: 0.82,
        transition: {
          y:       { type: 'spring', stiffness: 130, damping: 11, delay },
          rotate:  { type: 'spring', stiffness: 100, damping: 10, delay },
          opacity: { duration: 0.01, delay },
        },
      });
      // float loop
      controls.start({
        y: [0, -floatAmp, 0],
        rotate: [rot, rot * 0.75, rot],
        transition: {
          duration: floatDur,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      });
    }
    run();
  }, []);

  return (
    <motion.div
      animate={controls}
      initial={{ y: '-115vh', rotate: rot * 2.5, opacity: 0 }}
      style={{
        position: 'absolute',
        left,
        bottom: bot,
        filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.5))',
      }}
    >
      <C size={size} {...extra} />
    </motion.div>
  );
}

export default function FallingSigns() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden',
    }}>
      {SIGNS.map((sign, i) => (
        <FloatingSign key={i} {...sign} />
      ))}
    </div>
  );
}
