/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function BonusesSection() {
  const bonuses = [
    {
      badge: '#1 - BÔNUS HOJE!',
      title: 'Matenem GeoQuestionBank™',
      subtitle: 'Banco de 200 Questões de Geometria Espacial',
      image: 'https://i.imgur.com/GrBU099.png',
      description:
        'Treine com uma seleção organizada das principais questões de Geometria Espacial cobradas no ENEM para colocar em prática tudo o que aprendeu no MatEnem GeoVisual™.',
      highlights:
        'Inclui questões organizadas por assunto, gabarito completo e diferentes níveis de dificuldade para você evoluir durante os estudos.',
      freeBadge: 'TOTALMENTE GRÁTIS',
    },
    {
      badge: '#2 - BÔNUS HOJE!',
      title: 'Matenem TrigoLab™',
      subtitle: 'Trigonometria Essencial para o ENEM',
      image: 'https://i.imgur.com/X01i5qA.png',
      description:
        'Visualize seno, cosseno e tangente e entenda qual relação usar em cada questão, sem depender de decoreba.',
      highlights:
        'Inclui triângulos interativos, ângulos notáveis, relações trigonométricas e aplicações dos principais padrões cobrados no ENEM.',
      freeBadge: 'TOTALMENTE GRÁTIS',
    },
    {
      badge: '#3 - BÔNUS HOJE!',
      title: 'Matenem GraphLab™',
      subtitle: 'Interpretação de Gráficos e Funções',
      image: 'https://i.imgur.com/ntWa8GU.png',
      description:
        'Aprenda a ler gráficos, interpretar tabelas e entender funções para não perder pontos por falta de interpretação.',
      highlights:
        'Inclui plano cartesiano, função afim, função quadrática, crescimento, decrescimento e questões no estilo ENEM.',
      freeBadge: 'TOTALMENTE GRÁTIS',
    },
    {
      badge: '#4 - BÔNUS HOJE!',
      title: 'Matenem FinanceLab™',
      subtitle: 'Porcentagem, Juros e Matemática Financeira',
      image: 'https://i.imgur.com/rqcIf5h.png',
      description:
        'Domine porcentagens, aumentos, descontos e juros através de situações práticas que aparecem constantemente na prova.',
      highlights:
        'Inclui juros simples, juros compostos, cálculos financeiros e estratégias para resolver questões com mais segurança.',
      freeBadge: 'TOTALMENTE GRÁTIS',
    },
    {
      badge: '#5 - BÔNUS HOJE!',
      title: 'Matenem ProbabilityLab™',
      subtitle: 'Probabilidade na Prática',
      image: 'https://i.imgur.com/c6onpUm.png',
      description:
        'Entenda probabilidade de forma visual e intuitiva, aprendendo a identificar rapidamente casos possíveis, casos favoráveis e eventos.',
      highlights:
        'Inclui espaço amostral, probabilidade simples, complementar, experimentos interativos e questões contextualizadas.',
      freeBadge: 'TOTALMENTE GRÁTIS',
    },
    {
      badge: '#6 - BÔNUS HOJE!',
      title: 'Matenem GeoPlaneLab™',
      subtitle: 'Áreas, Ângulos e Figuras Planas Mais Cobradas no ENEM',
      image: 'https://i.imgur.com/p2acQdC.png',
      description:
        'Aprenda a reconhecer a figura, identificar os dados importantes e escolher a estratégia certa para resolver cada questão.',
      highlights:
        'Inclui triângulos, quadriláteros, círculos, áreas, perímetros, ângulos e as principais relações de Geometria Plana cobradas no ENEM.',
      freeBadge: 'TOTALMENTE GRÁTIS',
    },
  ];

  return (
    <section className="bg-slate-50 pt-6 pb-10 md:pt-8 md:pb-14 px-4 border-b border-slate-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm sm:text-base font-black text-amber-600 uppercase tracking-widest mb-2 sm:mb-3">
            E NÃO PARA POR AÍ.... TEM MAIS!
          </p>
          <p className="text-base sm:text-lg font-bold text-slate-700 mb-10 sm:mb-14 md:mb-16">
            Você também vai receber…
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
            6 BÔNUS EXCLUSIVOS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 sm:mb-12">
          {bonuses.map((bonus, idx) => (
            <div
              key={idx}
              className="relative border border-amber-300/80 p-4 sm:p-5 bg-amber-50/70 rounded-lg flex flex-col justify-between shadow-xs"
            >
              {/* Gift Icon */}
              <img
                src="https://i.imgur.com/ncLXkjW.png"
                alt="Bônus Exclusivo"
                referrerPolicy="no-referrer"
                className="absolute top-3 right-3 w-10 h-10 sm:w-11 sm:h-11 object-contain drop-shadow-xs"
                loading="lazy"
                decoding="async"
              />

              <div>
                <span className="inline-block px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-amber-900 bg-amber-200/90 rounded-full mb-2">
                  {bonus.badge}
                </span>

                {bonus.image && (
                  <div className="my-3 flex justify-center">
                    <img
                      src={bonus.image}
                      alt={bonus.title}
                      referrerPolicy="no-referrer"
                      className="max-h-[270px] sm:max-h-[345px] w-auto object-contain drop-shadow-md rounded"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}

                <h3 className="text-base sm:text-lg font-black text-slate-900 mb-0.5">
                  {bonus.title}
                </h3>

                <p className="text-xs sm:text-sm font-bold text-amber-700 mb-2">
                  {bonus.subtitle}
                </p>

                <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                  {bonus.description}
                </p>

                <p className="text-xs text-slate-700 font-medium bg-amber-100/60 p-2.5 rounded border border-amber-200/60 leading-relaxed mb-3">
                  {bonus.highlights}
                </p>
              </div>

              <div className="pt-2 border-t border-amber-200/80 flex items-center justify-end text-xs">
                <span className="font-black text-emerald-700 uppercase tracking-wider bg-emerald-100 px-2.5 py-1 rounded">
                  {bonus.freeBadge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Email delivery note */}
        <div className="bg-white border border-slate-200 p-4 sm:p-5 text-center text-xs sm:text-sm font-medium text-slate-700 rounded-lg shadow-xs">
          📩 Receba seu acesso automaticamente por e-mail logo após a confirmação do pagamento.
        </div>
      </div>
    </section>
  );
}
