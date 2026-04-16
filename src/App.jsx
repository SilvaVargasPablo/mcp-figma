import Navbar        from './components/Navbar.jsx';
import HeroBanner    from './components/HeroBanner.jsx';
import PilotCard     from './components/PilotCard.jsx';
import NavigatorCard from './components/NavigatorCard.jsx';
import RallycoreCarousel from './components/RallycoreCarousel.jsx';
import Footer        from './components/Footer.jsx';


import { pilotes } from './data/team.js';
import { imgNav1, imgNav2, imgNav3, imgRecurso7, imgRecurso5, imgNaveBg, imgNave01, imgNave02, imgNave03, signJuanPabloFigueroa, signAlfonsoBalidush, signAmandaEcheverria } from './assets.js';

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
            {pilotes.map((piloto, index) => (
              <PilotCard 
                key={piloto.id} 
                {...piloto}
                contentAlign={index === 1 ? 'right' : 'left'}
              />
            ))}
          </div>
        </section>

        {/* ── Separador ── */}
        <div style={{ height: '80px' }} />

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
            <NavigatorCard
              imgNaveBg={imgNaveBg}
              imgNave01={imgNave01}
              signatureImg={signJuanPabloFigueroa}
              title="Juan Pablo Figueroa"
              description="Una descripción del piloto que nos diga algo que sea relevante y que nos haga mas cercano al corredor."
            />
            <NavigatorCard
              imgNaveBg={imgNaveBg}
              imgNave01={imgNave02}
              signatureImg={signAlfonsoBalidush}
              title="Alfonso Balidush"
              description="Una descripción del piloto que nos diga algo que sea relevante y que nos haga mas cercano al corredor."
            />
            <NavigatorCard
              imgNaveBg={imgNaveBg}
              imgNave01={imgNave03}
              signatureImg={signAmandaEcheverria}
              imageObjectPosition="center 60%"
              title="Amanda Echeverria"
              description="Una descripción del piloto que nos diga algo que sea relevante y que nos haga mas cercano al corredor."
            />
          </div>
        </section>

        {/* ── Separador ── */}
        <div style={{ height: '80px' }} />

        {/* ── Rallycore Carousel ── */}
        <RallycoreCarousel />

        {/* ── Separador ── */}
        <div style={{ height: '80px' }} />

       
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
