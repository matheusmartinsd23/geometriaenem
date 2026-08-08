/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface TestimonialsIntroSectionProps {
  onCtaClick: () => void;
}

export function TestimonialsIntroSection({ onCtaClick }: TestimonialsIntroSectionProps) {
  const testimonials = [
    'https://i.imgur.com/yCRIOyp.png',
    'https://i.imgur.com/DUYCEka.png',
    'https://i.imgur.com/sNGKW2P.jpeg',
    'https://i.imgur.com/VThC15S.jpeg',
    'https://i.imgur.com/5dJ8xxc.png',
  ];

  return (
    <section className="bg-slate-50 py-10 md:py-16 px-4 border-b border-slate-200">
      <div className="max-w-5xl mx-auto text-center">
        {/* Depoimentos Imagens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {testimonials.map((imgUrl, index) => (
            <div
              key={index}
              className="bg-white p-2 sm:p-2.5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-center justify-center overflow-hidden"
            >
              <img
                src={imgUrl}
                alt={`Depoimento de estudante ${index + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm font-semibold text-slate-700 max-w-xl mx-auto leading-relaxed mb-8">
          Não deixe para depois e acabe ficando atrás de quem já começou a se preparar.
        </p>

        <div>
          <button
            onClick={onCtaClick}
            id="testimonials-cta-btn"
            className="w-full sm:w-auto min-w-[280px] bg-yellow-400 border-2 border-black py-4 px-8 font-black uppercase text-sm sm:text-base hover:bg-yellow-300 transition-colors text-slate-900 cursor-pointer shadow-xs"
          >
            QUERO DOMINAR GEOMETRIA ESPACIAL
          </button>
        </div>
      </div>
    </section>
  );
}

