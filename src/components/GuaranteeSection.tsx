/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function GuaranteeSection() {
  return (
    <section className="bg-white py-14 md:py-20 px-4 border-b border-slate-200">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <img
            src="https://i.imgur.com/BoT1U7M.png"
            alt="Selo de Garantia de 7 Dias"
            referrerPolicy="no-referrer"
            className="h-auto max-h-28 sm:max-h-36 w-auto object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>

        <p className="text-[10px] sm:text-xs font-bold text-yellow-600 uppercase tracking-widest mb-1">
          GARANTIA TOTAL
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase mb-6">
          GARANTIA INCONDICIONAL DE 7 DIAS
        </h2>

        <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 max-w-2xl mx-auto text-left">
          <p>
            Você tem <strong className="font-bold text-slate-900">7 dias completos</strong> para acessar todo o material e verificar se ele realmente facilita a compreensão da Geometria Espacial.
          </p>

          <p>
            Se por qualquer motivo decidir que o conteúdo não atende às suas expectativas, basta solicitar o reembolso dentro do prazo e você receberá <strong className="font-bold text-slate-900">100% do valor investido</strong>.
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-2 text-xs font-black uppercase text-slate-900">
            <span className="border border-slate-200 bg-white px-3 py-1">Sem burocracia.</span>
            <span className="border border-slate-200 bg-white px-3 py-1">Sem perguntas.</span>
            <span className="border border-slate-200 bg-white px-3 py-1">Sem riscos.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

