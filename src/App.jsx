import Navbar        from './components/Navbar.jsx';
import HeroBanner    from './components/HeroBanner.jsx';
import PilotCard     from './components/PilotCard.jsx';
import ImageSlider   from './components/ImageSlider.jsx';
import TiltCard      from './components/TiltCard.jsx';
import Footer        from './components/Footer.jsx';


import { pilotes } from './data/team.js';
import { imgNav1, imgNav2, imgNav3, imgRecurso6, imgRecurso7, imgRecurso5, imgNaveBg, imgNave01, imgNave02, imgNave03 } from './assets.js';

// ─── App principal ────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div
      id="app"
      style={{ backgroundColor: 'var(--color-bg-primary)', minHeight: '100vh', width: '100%' }}
    >
      {/* ── Navegación fija ── */}
      <Navbar />

      <main>
        {/* ── Hero Banner ── */}
        <HeroBanner />


        {/* ── Sección Pilotos ── */}
        <section
          id="pilotos"
          className="w-full"
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '0 20px',
          }}
          aria-label="Pilotos SAG Rally Team"
        >
          <div className="flex flex-col">
            {pilotes.map((piloto) => (
              <PilotCard 
                key={piloto.id} 
                {...piloto} 
              />
            ))}
          </div>
        </section>

        {/* ── Separador ── */}
        <div style={{ height: '120px' }} />

         {/* ── Sección Interactive Cards Navegantes ── */}
        <section
          id="tilt-cards"
          className="w-full"
          style={{
            maxWidth: '1240px',
            margin: '120px auto',
            padding: '0 20px',
          }}
          aria-label="Interactive Tilt Cards"
        >
          <h2
            className="font-['M_PLUS_1'] text-white mb-20 px-4"
            style={{ fontSize: '64px', lineHeight: '1', textTransform: 'none' }}
          >
            Navegantes
          </h2>

          {/* Grid 3 columnas centradas */}
          <div className="flex flex-wrap gap-10 justify-center">
            <TiltCard
              imgNaveBg={imgNaveBg}
              imgNave01={imgNave01}
              signatureImg={imgRecurso6}
              title="Interactive City Card"
              description="Move your cursor over this card to experience a smooth 3D tilt animation, bringing depth and interactivity to your UI."
            />
            <TiltCard
              imgNaveBg={imgNaveBg}
              imgNave01={imgNave02}
              signatureImg={imgRecurso7}
              title="Modern Design Card"
              description="Explore contemporary design patterns with interactive elements that respond to your mouse movements in real-time."
            />
            <TiltCard
              imgNaveBg={imgNaveBg}
              imgNave01={imgNave03}
              signatureImg={imgRecurso5}
              imageObjectPosition="center 60%"
              title="Creative Showcase Card"
              description="Discover innovative ways to present your content with engaging animations and smooth transitions that captivate users."
            />
          </div>
        </section>

        {/* ── Separador ── */}
        <div style={{ height: '80px' }} />

        {/* ── Slider de imágenes ── */}
        <section
          id="galeria"
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 159px',
          }}
          aria-label="Galería de fotografías del equipo"
        >
          <ImageSlider />
        </section>

        {/* ── Separador ── */}
        <div style={{ height: '80px' }} />

       
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
