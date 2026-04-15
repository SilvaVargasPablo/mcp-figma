import { motion } from 'framer-motion';
import { imgEllipse6 } from '../assets.js';

/**
 * PilotCard — Componente de Card homogéneo y responsivo para pilotos.
 */
export default function PilotCard({
  name,
  lastName,
  description,
  photo,
  signatureImg,
  signatureColor,
  brandImg,
  align = 'left',
}) {
  const isLeft = align === 'left';

  return (
    <motion.div
      initial="initial"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className={`relative w-full flex flex-col items-center gap-6 md:gap-12 mb-16 
                 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      {/* ── Tarjeta de Foto (Media Part) ── */}
      <div className="relative w-full max-w-full sm:max-w-[425px] md:max-w-[425px] aspect-[425/580] sm:aspect-[425/580] shrink-0 overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-bg-surface)] shadow-2xl group cursor-pointer">
        
        {/* Glow de fondo (Se expande sutilmente) */}
        <motion.img  
          src={imgEllipse6}
          alt=""
          variants={{
            initial: { scale: 0.8, opacity: 0.9 },
            visible: { scale: 0.8, opacity: 0.9 },
            hover: { scale: 1.0, opacity: 0.9 }
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute top-[20%] left-0 w-full h-full object-cover pointer-events-none"
        />



        {/* Texto "PILOTO" (Alta posición en hover) */}
        <div className="absolute inset-x-0 top-0 flex justify-center pt-10 z-0 pointer-events-none select-none">
          <motion.span 
            variants={{
              initial: { y: 120, opacity: 0, scale: 0.9 },
              visible: { y: 120, opacity: 0, scale: 0.9 },
              hover: { y: 0, opacity: 1, scale: 1.05 }
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="font-['M_PLUS_1'] text-white text-[clamp(2.5rem,10vw,4.5rem)] uppercase leading-none drop-shadow-2xl"
          >
            Piloto
          </motion.span>
        </div>

        {/* Foto Principal (ZOOM OUT de 1.2 a 1.0 para abrir espacio arriba) */}
        {photo && (
          <motion.div
            variants={{
              initial: { scale: 1.25, y: 10 },
              visible: { scale: 1.25, y: 10 },
              hover: { scale: 1.0, y: 0 }
            }}
            transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
            className="absolute inset-0 z-20"
          >
            <img
              src={photo}
              alt={`${name} ${lastName}`}
              className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        )}

        {/* Cita / Descripción (Emergiendo desde abajo) */}
        <motion.div 
          variants={{
            initial: { y: 120, opacity: 0 },
            visible: { y: 120, opacity: 0 },
            hover: { y: 0, opacity: 1 }
          }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="absolute inset-x-0 bottom-0 z-30 p-8 pb-12 bg-gradient-to-t from-black/95 via-black/50 to-transparent text-center"
        >
          <p           className="font-['M_PLUS_1'] text-white text-sm lg:text-base italic leading-relaxed">
            &ldquo;{description}&rdquo;
          </p>
        </motion.div>
      </div>

      {/* ── Información Lateral (Nombre y Firma) ── */}
      <div className={`flex flex-col flex-1 w-full max-w-[500px] md:max-w-[480px] 
              ${isLeft ? 'items-start text-left' : 'items-center lg:items-end text-center lg:text-right'}`}>
        
        {/* Firma Principal */}
        {signatureImg && (
          <div 
            className="-mb-6 w-[123px] h-[90px] z-10 relative"
            style={{ 
              '--fill-0': signatureColor || '#00FFD1', 
              '--stroke-0': signatureColor || '#00FFD1' 
            }}
          >
            <img src={signatureImg} alt="Signature" className="h-full w-auto shrink-0 object-contain" />
          </div>
        )}

        {/* Nombre / Título Card */}
        <motion.div 
          variants={{
            initial: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <h2 className="font-['M_PLUS_1'] text-white text-[clamp(1.5rem,5vw,2.5rem)] uppercase leading-[1.1]">
            <span className="block">{name}</span>
            <span className="block text-white opacity-80">{lastName}</span>
          </h2>
        </motion.div>
      </div>
    </motion.div>
  );
}
