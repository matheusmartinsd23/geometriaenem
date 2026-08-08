/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface CurriculumSectionProps {
  onCtaClick: () => void;
}

export function CurriculumSection({ onCtaClick }: CurriculumSectionProps) {
  const topics = [
    'Fundamentos da Geometria Espacial',
    'Prismas, Pirâmides e Poliedros',
    'Cilindros, Cones e Esferas',
    'Troncos e Composição de Sólidos',
    'Áreas, Volumes e Relações Métricas',
    'Planificações, Cortes e Comparações Visuais',
    'Relação de Euler e Propriedades dos Sólidos',
    'Tabelas Visuais de Áreas e Volumes',
    'Fórmulas de Geometria Espacial organizadas para consulta',
  ];

  return (
    <section className="bg-slate-50 pt-10 md:pt-14 pb-2 md:pb-4 border-b border-slate-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-[10px] sm:text-xs font-bold text-yellow-600 uppercase tracking-widest mb-1">
            CURRÍCULO VISUAL
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
            O QUE VOCÊ VAI RECEBER
          </h2>
        </div>

        <div className="flex justify-center mb-8 px-4">
          <img 
            src="https://i.imgur.com/5YwghhN.png" 
            alt="Mockup MatEnem GeoVisual" 
            className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain drop-shadow-2xl"
          />
        </div>

        <div className="bg-white border border-slate-200 p-6 sm:p-8 mb-4">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
            MatEnem GeoVisual™
          </h3>
          <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
            Todo o essencial de Geometria Espacial em{' '}
            <strong className="font-bold text-slate-900">+80 mapas visuais</strong> para facilitar a compreensão e resolução das principais questões do ENEM.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 text-slate-800 font-medium text-xs sm:text-sm"
              >
                <span className="text-yellow-600 font-black">✓</span>
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

