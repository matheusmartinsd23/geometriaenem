/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-12 px-4 border-b border-slate-200">
      <div className="max-w-3xl mx-auto text-center">
        {/* Hero Mockup */}
        <div className="mb-4 sm:mb-5 flex justify-center">
          <img
            src="https://i.imgur.com/ry4kCFD.png"
            alt="Mockup do MatEnem GeoVisual™"
            referrerPolicy="no-referrer"
            className="w-full max-w-[251px] sm:max-w-[301px] md:max-w-[326px] h-auto object-contain drop-shadow-md"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="326"
            height="326"
          />
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-[42px] font-black text-slate-900 tracking-tight leading-tight mb-3 sm:mb-4">
          +80 Mapas Visuais de Geometria Espacial Mais Cobrados no ENEM
        </h1>

        {/* Hero Paragraph */}
        <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed max-w-xl mx-auto mb-5 sm:mb-6">
          Compreenda prismas, pirâmides, cones, cilindros, esferas e poliedros através de mapas visuais que transformam conceitos abstratos em representações fáceis de entender — sem depender da imaginação ou decorar dezenas de fórmulas.
        </p>

        {/* Pricing Box */}
        <div className="bg-slate-50 border-2 border-black p-4 sm:p-5 max-w-sm mx-auto mb-6 text-center">
          <p className="text-slate-400 text-xs sm:text-sm font-semibold">
            <span className="line-through text-red-600 decoration-red-600 decoration-2 font-bold">De R$ 33</span>
          </p>
          <p className="text-slate-900 text-[11px] font-bold uppercase tracking-widest mt-0.5">
            por apenas
          </p>
          <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight my-1 sm:my-1.5">
            R$ 10
          </div>

          <button
            onClick={onCtaClick}
            id="hero-cta-btn"
            className="w-full mt-3 bg-yellow-400 border-2 border-black py-3 sm:py-3.5 font-black uppercase text-sm sm:text-base hover:bg-yellow-300 transition-colors text-slate-900 cursor-pointer"
          >
            QUERO ACESSAR AGORA
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 text-xs font-bold uppercase tracking-wider text-slate-600">
          <div className="flex items-center gap-1.5">
            <span className="text-yellow-600 font-black">✓</span>
            <span>Acesso imediato</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-yellow-600 font-black">✓</span>
            <span>Garantia incondicional de 7 dias</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-yellow-600 font-black">✓</span>
            <span>Pagamento 100% seguro</span>
          </div>
        </div>
      </div>
    </section>
  );
}

