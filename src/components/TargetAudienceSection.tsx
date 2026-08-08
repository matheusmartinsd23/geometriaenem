/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function TargetAudienceSection() {
  const criteria = [
    'Tem dificuldade para visualizar figuras e sólidos espaciais.',
    'Sempre esquece qual fórmula utilizar em cada situação.',
    'Se perde ao interpretar desenhos das questões.',
    'Está estudando para o ENEM e quer ganhar velocidade na resolução das questões.',
  ];

  return (
    <section className="bg-white py-14 md:py-20 px-4 border-b border-slate-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-[10px] sm:text-xs font-bold text-yellow-600 uppercase tracking-widest mb-1">
            PARA QUEM É
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
            ESTE MATERIAL É PARA VOCÊ SE
          </h2>
        </div>

        <div className="space-y-3">
          {criteria.map((item, idx) => (
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

