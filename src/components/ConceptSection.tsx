/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, type TouchEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const pages = [
  {
    url: 'https://i.imgur.com/Sfkq6qI.png',
    alt: 'Mapa Visual de Geometria Espacial - Amostra 1',
  },
  {
    url: 'https://i.imgur.com/ooc0Vuh.png',
    alt: 'Mapa Visual de Geometria Espacial - Amostra 2',
  },
  {
    url: 'https://i.imgur.com/Clt0VBY.png',
    alt: 'Mapa Visual de Geometria Espacial - Amostra 3',
  },
  {
    url: 'https://i.imgur.com/Pb60p43.png',
    alt: 'Mapa Visual de Geometria Espacial - Amostra 4',
  },
];

export function ConceptSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Preload all carousel images immediately on mount
  useEffect(() => {
    pages.forEach((page) => {
      const img = new Image();
      img.src = page.url;
    });
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? pages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === pages.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStart(null);
  };

  return (
    <section className="bg-slate-50 py-12 md:py-16 px-4 border-b border-slate-200">
      <div className="max-w-3xl mx-auto">
        {/* Manual Carousel of Pages */}
        <div className="max-w-[425px] mx-auto bg-white border-2 border-slate-900 p-2 sm:p-3 shadow-sm">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 mb-2 text-xs font-bold text-slate-700">
            <span className="uppercase tracking-wider text-[10px] sm:text-[11px] font-black text-slate-900">
              Amostra das Páginas
            </span>
            <span className="bg-yellow-400 text-slate-900 px-2 py-0.5 font-black text-[10px] border border-black uppercase">
              Página {currentIndex + 1} de {pages.length}
            </span>
          </div>

          <div
            className="relative overflow-hidden bg-slate-100 border border-slate-200 rounded-sm flex items-center justify-center min-h-[150px] sm:min-h-[240px]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {pages.map((page, idx) => (
              <img
                key={idx}
                src={page.url}
                alt={page.alt}
                referrerPolicy="no-referrer"
                className={`w-full h-auto max-h-[330px] object-contain select-none ${
                  currentIndex === idx ? 'block' : 'hidden'
                }`}
                loading="eager"
                fetchPriority={idx === 0 ? 'high' : 'auto'}
                decoding="async"
              />
            ))}

            {/* Left Button */}
            <button
              onClick={prevSlide}
              aria-label="Página anterior"
              id="carousel-prev-btn"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 p-1.5 border-2 border-black shadow-sm cursor-pointer transition-transform active:scale-95 z-10"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Right Button */}
            <button
              onClick={nextSlide}
              aria-label="Próxima página"
              id="carousel-next-btn"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 p-1.5 border-2 border-black shadow-sm cursor-pointer transition-transform active:scale-95 z-10"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-1.5 mt-2 pt-1.5 border-t border-slate-200">
            {pages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para página ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'w-5 sm:w-6 bg-yellow-400 border border-black'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


