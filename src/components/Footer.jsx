import {
  imgLogoCopec,
  imgFbIcon, imgIgIcon, imgTwVector, imgYtVector,
  imgAppleStoreLogo,
  imgGooglePlayLogo,
} from '../assets.js';

/**
 * Footer — Replica del diseño premium simplificado del Figma.
 */
export default function Footer() {
  return (
    <footer
      className="w-full flex flex-col items-center border-t border-white/5 bg-[var(--color-bg-footer)] py-12 md:py-20 px-4 md:px-8"
    >
      {/* ── Grid Principal ── */}
      <div className="flex flex-wrap justify-between gap-x-8 gap-y-12 w-full max-w-[1240px] mb-12 text-left">
        
        {/* Col 1: Branding y Redes */}
        <div className="flex flex-col gap-6 w-full sm:w-auto min-w-0">
          <div className="h-6 w-auto">
            <img src={imgLogoCopec} alt="Logo Copec" className="h-full object-contain object-left" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-slate-400 font-['M_PLUS_1']">Llámanos</p>
            <p className="text-[16px] text-white font-bold font-['M_PLUS_1']">800 200 354</p>
          </div>
          <div className="flex gap-6 items-center">
            {[
              { src: imgFbIcon, alt: 'FB' },
              { src: imgIgIcon, alt: 'IG' },
              { src: imgTwVector, alt: 'TW' },
              { src: imgYtVector, alt: 'YT' }
            ].map(social => (
              <a key={social.alt} href="#" className="w-5 h-5 flex items-center justify-center grayscale invert opacity-60 hover:opacity-100 transition-all">
                <img src={social.src} alt={social.alt} className="max-w-[16px] max-h-[16px] object-contain" />
              </a>
            ))}
          </div>
        </div>

        {/* Columnas de Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-8 w-full sm:w-auto">
          <FooterColumn title="Próximas fechas" links={['Curicó', 'Los Andes', 'Copiapó', 'Pichilemu']} />
          <FooterColumn title="Merch" links={['Poleras', 'Gorros', 'Chaquetas', 'Accesorios']} />
          <FooterColumn title="Ayuda" links={['Preguntas frecuentes', 'Términos', 'Privacidad']} />
        </div>
        
        {/* Col 5: Descarga & Newsletter */}
        <div className="flex flex-col gap-6 w-full sm:w-[320px]">
          <div className="flex flex-col gap-4">
            <p className="text-[14px] text-white font-['M_PLUS_1']">Descarga la app</p>
            <div className="flex sm:flex-row flex-col gap-4">
              <AppStoreButton logo={imgAppleStoreLogo} text="App Store" />
              <AppStoreButton logo={imgGooglePlayLogo} text="Google Play" />
            </div>
          </div>

          <div className="flex flex-col gap-4 max-w-[340px] w-full">
            <p className="text-[14px] text-white font-medium">Suscríbete a nuestro newsletter</p>
            <div className="flex items-center h-[48px] bg-white/5 border border-white/10 rounded-sm overflow-hidden">
              <input 
                type="email" 
                aria-label="Correo electrónico"
                placeholder="Ingresa tu correo" 
                className="flex-1 min-w-0 bg-transparent px-4 text-[13px] text-white outline-none placeholder:text-grey-300"
              />
              <button className="h-full px-6 bg-[var(--color-accent)] text-black font-['M_PLUS_1'] text-[10px] uppercase tracking-wider hover:brightness-110 shrink-0">
                Suscribirme
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="w-full max-w-[1240px] flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
        <p className="text-[12px] text-slate-500 font-['M_PLUS_1'] opacity-80">
          ©Copyright 2024 Copec S.A. Todos los derechos reservados
        </p>
        <div className="h-6 opacity-20 grayscale invert">
          <img src={imgLogoCopec} alt="Copec Small" className="h-full object-contain" />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-[14px] text-white font-bold font-['M_PLUS_1'] uppercase tracking-wider">{title}</h4>
      <ul className="flex flex-col gap-2 p-0 m-0 list-none">
        {links.map(link => (
          <li key={link}>
            <a href="#" className="text-[14px] text-slate-400 hover:text-white transition-colors font-['M_PLUS_1']">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AppStoreButton({ logo, text }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-black/20 border border-white/10 rounded-lg cursor-pointer hover:bg-black/40 transition-all">
      <img src={logo} alt={text} className="w-4 h-4 object-contain" />
      <div className="flex flex-col leading-tight">
        <span className="text-[6px] text-white/50 uppercase">Order now on</span>
        <span className="text-[10px] text-white font-bold whitespace-nowrap">{text}</span>
      </div>
    </div>
  );
}
