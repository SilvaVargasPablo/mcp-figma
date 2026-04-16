import { motion } from 'framer-motion';
import { imgRecurso51, imgPeugeotLogo } from '../assets.js';

/**
 * Hero Banner — Replica del nodo "Banner" (1:48383) del diseño Figma.
 */
export default function HeroBanner() {
  return (
    <section
      id="banner"
      className="relative w-full h-[520px] md:h-[763px] overflow-hidden"
      aria-label="SAG Rally Team Banner"
    >
      {/* Fondo rojo base */}
      <div className="absolute inset-0 bg-[#9f5555]" />

      {/* Imagen recurso — auto de rally con zoom suave */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-none"
      >
        <img
          src={imgRecurso51}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradiente overlay — de transparente a bg-primary */}
      <div
        className="absolute inset-x-0 bottom-0 h-[600px]"
        style={{
          background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(17,17,18,0) 60%)',
        }}
      />

      {/* Gradiente top */}
      <div
        className="absolute inset-x-0 top-0 h-[300px]"
        style={{
          background: 'linear-gradient(to bottom, var(--color-bg-primary) 0%, rgba(17,17,18,0) 100%)',
        }}
      />

      {/* Contenido del hero */}
      <div className="relative z-10 flex flex-col justify-start h-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[158px] pt-32 md:pt-[201px]">
        {/* Logo Peugeot */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center bg-white rounded-full shadow-xl mb-[33px] w-[88px] h-[88px] md:w-[154px] md:h-[154px]"
        >
          <img src={imgPeugeotLogo} alt="Peugeot" className="w-[136px] h-auto object-contain" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-monument text-white leading-none uppercase tracking-tight text-3xl md:text-[64px] max-w-[603px]"
        >
          SAG Rally Team
        </motion.h1>
      </div>
    </section>
  );
}
