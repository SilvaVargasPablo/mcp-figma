import { useState } from 'react';
import { imgLogoCopec } from '../assets.js';

/**
 * Navbar — Replicado del componente de navegación del diseño Figma (node 1:48600)
 * Un diseño tipo "pastilla" con fondo glassmorphism y enlaces horizontales.
 */
export default function Navbar() {
  const links = [
    { name: 'Próximas fechas', href: '#fechas' },
    { name: 'Merch', href: '#merch' },
    { name: 'Posiciones', href: '#posiciones' },
    { name: 'Blog', href: '#blog' },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-[29px] left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
      <nav
        className="flex flex-row items-center justify-between w-full max-w-[1240px] h-[64px] md:h-[86px] px-4 sm:px-6 md:px-10 rounded-[47px] pointer-events-auto transition-all duration-300"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
        }}
      >
        {/* Logo — Tamaño exacto de Figma: 322x80 */}
        <div className="h-[56px] md:h-[80px] w-auto md:w-[322px] flex items-center shrink-0">
          <img
            src={imgLogoCopec}
            alt="Logo COPEC Rally Mobil"
            className="h-full w-auto object-contain object-left"
          />
        </div>

        {/* Links — Flex row forzado */}
        <ul className="hidden lg:flex flex-row items-center gap-12 m-0 p-0 list-none">
          {links.map((link) => (
            <li key={link.name} className="list-none m-0 p-0">
              <a
                href={link.href}
                className="font-monument text-white text-[16px] uppercase tracking-[0.05em] leading-none
                           hover:text-[var(--color-accent)] transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Placeholder para CTA o espacio derecho equilibrado */}
        <div className="hidden lg:block w-[40px]"></div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M12 18h9" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {open && (
        <div className="absolute left-0 right-0 top-[95px] z-40 flex justify-center lg:hidden px-4">
          <div
            className="w-full max-w-[400px] bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-white/10 rounded-2xl py-4 px-6 shadow-lg"
            role="menu"
          >
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-white text-lg uppercase font-monument tracking-wider"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
