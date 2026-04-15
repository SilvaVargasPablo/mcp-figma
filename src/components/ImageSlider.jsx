import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { imgSlider } from '../assets.js';

/**
 * ImageSlider — Replica el componente "Slider-1" (node 1:48431) del diseño Figma.
 * 
 * Muestra imágenes de la colección con navegación prev/next.
 * La imagen central es grande y elevada, las laterales están desplazadas.
 */
export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = imgSlider.length;

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % total);
  }, [total]);

  // Auto-play cada 5 segundos
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // Índices de las imágenes visibles
  const prevIdx  = (currentIndex - 1 + total) % total;
  const nextIdx  = (currentIndex + 1) % total;

  return (
    <section
      className="relative w-full overflow-hidden py-20 md:py-24 lg:py-28 min-h-[480px] md:min-h-[764px]"
      aria-label="Galería de imágenes"
    >
      <div className="relative flex items-start justify-center w-full h-full">
        
        {/* Imagen anterior */}
        <motion.div
          key={`prev-${prevIdx}`}
          initial={{ opacity: 0.5, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 0.92, x: '-100%', left: 'calc(50% - 226px - 30px)' }}
          className="absolute overflow-hidden"
          style={{
            width: 'min(80vw, 452px)',
            height: 'min(65vh, 565px)',
            borderRadius: 'var(--radius-image)',
            top: '10px',
            zIndex: 5,
          }}
        >
          <img src={imgSlider[prevIdx]} alt="" className="w-full h-full object-cover" />
        </motion.div>

        {/* Imagen central */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`curr-${currentIndex}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, x: 0, left: 'calc(50% - 226px)' }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="absolute overflow-hidden shadow-2xl z-10"
            style={{
              width: 'min(80vw, 452px)',
              height: 'min(65vh, 565px)',
              borderRadius: 'var(--radius-image)',
              top: '0px',
            }}
          >
            <img src={imgSlider[currentIndex]} alt="" className="w-full h-full object-cover" />
          </motion.div>
        </AnimatePresence>

        {/* Imagen siguiente */}
        <motion.div
          key={`next-${nextIdx}`}
          initial={{ opacity: 0.5, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 0.92, x: '100%', left: 'calc(50% + 30px)' }}
          className="absolute overflow-hidden"
          style={{
            width: 'min(80vw, 452px)',
            height: 'min(65vh, 565px)',
            borderRadius: 'var(--radius-image)',
            top: '10px',
            zIndex: 5,
          }}
        >
          <img src={imgSlider[nextIdx]} alt="" className="w-full h-full object-cover" />
        </motion.div>

        {/* Controles */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-4 md:left-8 top-1/2 md:top-[282px] -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-4 md:right-8 top-1/2 md:top-[282px] -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-3 z-20 bottom-8 md:top-[600px]">
          {imgSlider.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex ? 'w-8 h-2.5 bg-[var(--color-accent)] shadow-[0_0_10px_rgba(37,243,212,0.5)]' : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
