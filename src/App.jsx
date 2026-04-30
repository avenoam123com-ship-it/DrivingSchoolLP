import './index.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import WhyMe from './components/WhyMe';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <Nav />
      <main>
        <Hero />
        <WhyMe />
        <Testimonials />
        <Contact />
      </main>
      <footer style={{
        textAlign: 'center', padding: '32px 24px',
        background: '#1a3a6b', color: 'rgba(255,255,255,0.5)',
        fontSize: '0.8rem',
      }}>
        🚗 יוגב — מורה נהיגה · באר שבע והסביבה · © 2026
      </footer>
    </>
  );
}
