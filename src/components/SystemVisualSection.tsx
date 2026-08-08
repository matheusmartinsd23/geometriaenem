/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function SystemVisualSection() {
  const benefits = [
    'Entenda visualmente conceitos que parecem impossíveis de imaginar',
    'Aprenda em minutos o que normalmente leva horas para compreender',
    'Ganhe mais confiança para resolver questões de prismas, cones, cilindros e pirâmides',
    'Estude apenas os tópicos de Geometria Espacial mais cobrados no ENEM',
  ];

  return (
    <section className="bg-white py-14 md:py-20 px-4 border-b border-slate-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-[10px] sm:text-xs font-bold text-yellow-600 uppercase tracking-widest mb-1">
            SISTEMA VISUAL
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
            O QUE VOCÊ GANHA COM ISSO
          </h2>
        </div>

        <div className="space-y-3">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-4 sm:p-5 bg-slate-50 border border-slate-200"
            >
              <div className="mt-0.5 text-yellow-500 font-black text-lg leading-none shrink-0">
                ✓
              </div>
              <p className="text-slate-800 text-sm sm:text-base font-medium leading-normal">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

