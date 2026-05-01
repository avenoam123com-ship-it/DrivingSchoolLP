export default function RoadDivider() {
  return (
    <div style={{
      width: '100%',
      height: 52,
      background: '#161616',
      position: 'relative',
      overflow: 'hidden',
      flexShrink: 0,
    }}>
      {/* Top white edge line */}
      <div style={{
        position: 'absolute', top: 9, left: 0, right: 0,
        height: 2, background: 'rgba(255,255,255,0.18)',
      }} />
      {/* Bottom white edge line */}
      <div style={{
        position: 'absolute', bottom: 9, left: 0, right: 0,
        height: 2, background: 'rgba(255,255,255,0.18)',
      }} />
      {/* Yellow dashed center line */}
      <div style={{
        position: 'absolute', top: '50%', left: 0, right: 0,
        height: 3,
        transform: 'translateY(-50%)',
        background: 'repeating-linear-gradient(90deg, rgba(255,215,0,0.55) 0px, rgba(255,215,0,0.55) 36px, transparent 36px, transparent 62px)',
      }} />
    </div>
  );
}
