/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface PricingSectionProps {
  onSelectOption: (optionName: string, price: string) => void;
}

export function PricingSection({ onSelectOption }: PricingSectionProps) {
  return (
    <section id="ofertas" className="bg-slate-50 py-14 md:py-20 px-4 border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[10px] sm:text-xs font-bold text-yellow-600 uppercase tracking-widest mb-1">
            GARANTA SEU ACESSO HOJE
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
            ESCOLHA SUA OFERTA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* OPÇÃO 1 */}
          <div className="bg-white border-2 border-black p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                OPÇÃO 1
              </p>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                MatEnem GeoVisual™
              </h3>

              <div className="border-t border-slate-200 pt-4 mb-6">
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-3">
                  O que está incluso
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span>MatEnem GeoVisual™</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-slate-50 border border-slate-200 p-4 text-center mb-4">
                <p className="text-slate-400 text-xs font-semibold">
                  <span className="line-through text-red-600 decoration-red-600 decoration-2 font-bold">De R$ 33</span>
                </p>
                <p className="text-slate-900 text-[10px] font-black uppercase tracking-widest mt-0.5">
                  por apenas
                </p>
                <div className="text-3xl font-black text-slate-900 my-1">
                  R$ 10
                </div>
              </div>

              <button
                onClick={() => onSelectOption('Opção 1 - MatEnem GeoVisual™', 'R$ 10')}
                id="opcao-1-btn"
                className="w-full bg-white border-2 border-black py-4 font-black uppercase text-xs sm:text-sm hover:bg-slate-50 transition-colors text-slate-900 cursor-pointer"
              >
                QUERO APRENDER GEOMETRIA ESPACIAL
              </button>

              <div className="flex justify-center mt-2.5">
                <img
                  src="https://i.imgur.com/0cB59O7.png"
                  alt="Selo de Autenticidade"
                  referrerPolicy="no-referrer"
                  className="h-4 sm:h-5 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* OPÇÃO 2 — MAIS VENDIDA */}
          <div className="bg-blue-950 text-white border-2 border-slate-900 p-6 sm:p-8 flex flex-col justify-between relative pt-10 shadow-xl">
            {/* Top Ribbon */}
            <div className="absolute -top-3 left-6 bg-yellow-400 text-slate-950 text-[10px] font-black uppercase tracking-wider px-3 py-1 border-2 border-slate-950">
              OPÇÃO 2 — MAIS VENDIDA
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-yellow-400 mb-1">
                PACOTE RECOMENDADO
              </p>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-4">
                Kit Completo MatEnem GeoVisual™
              </h3>

              <div className="border-t border-blue-800/60 pt-4 mb-4">
                <p className="text-[10px] font-black uppercase tracking-wider text-blue-200/80 mb-3">
                  O QUE ESTÁ INCLUSO
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-blue-100">
                  {[
                    'MatEnem GeoVisual™',
                    'Bônus #1: MatEnem GeoQuestionBank™ (200 Questões de Geometria Espacial)',
                    'Bônus #2: MatEnem TrigoLab™ (Trigonometria Essencial para o ENEM)',
                    'Bônus #3: MatEnem GraphLab™ (Interpretação de Gráficos e Funções)',
                    'Bônus #4: MatEnem FinanceLab™ (Porcentagem, Juros e Matemática Financeira)',
                    'Bônus #5: MatEnem ProbabilityLab™ (Probabilidade na Prática)',
                    'Bônus #6: MatEnem GeoPlaneLab™ (Geometria Plana no ENEM)',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-yellow-400 font-bold shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-blue-800/60 pt-3 mb-6">
                <p className="text-[10px] font-black uppercase tracking-wider text-yellow-400 mb-2">
                  Benefícios Exclusivos
                </p>
                <ul className="space-y-1.5 text-xs text-blue-100">
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-400 font-bold">✓</span>
                    <span>Todas as futuras atualizações do MatEnem GeoVisual™ sem custo adicional.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-400 font-bold">✓</span>
                    <span>Acesso vitalício.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="py-3 text-center mb-4 border-t border-blue-800/60">
                <p className="text-blue-200/80 text-xs font-semibold">
                  <span className="line-through text-red-400 decoration-red-400 decoration-2 font-bold">De R$ 139</span>
                </p>
                <p className="text-yellow-400 text-[10px] font-black uppercase tracking-widest mt-0.5">
                  por apenas
                </p>
                <div className="text-3xl font-black text-white my-1">
                  R$ 27
                </div>
              </div>

              <a
                href="https://ggcheckout.app/checkout/v2/StonLx6AfGjbqYTdeQHP"
                id="opcao-2-btn"
                className="w-full bg-yellow-400 border-2 border-yellow-400 py-4 font-black uppercase text-xs sm:text-sm hover:bg-yellow-300 transition-colors text-slate-950 cursor-pointer block text-center"
              >
                QUERO APRENDER GEOMETRIA ESPACIAL
              </a>

              <div className="flex justify-center mt-2.5">
                <img
                  src="https://i.imgur.com/3dRpZ2Q.png"
                  alt="Selo de Autenticidade"
                  referrerPolicy="no-referrer"
                  className="h-4 sm:h-5 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

