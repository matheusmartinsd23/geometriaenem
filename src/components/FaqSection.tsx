/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FaqSection() {
  const faqs = [
    {
      question: 'O material serve para quem está começando do zero?',
      answer:
        'Sim! O material foi desenvolvido com representações visuais intuitivas que facilitam a compreensão mesmo para quem nunca estudou Geometria Espacial a fundo ou tem dificuldades com fórmulas abstratas.',
    },
    {
      question: 'O acesso é imediato após a compra?',
      answer:
        'Sim! Assim que o pagamento for confirmado, você receberá instantaneamente em seu e-mail todos os links de acesso ao material digital.',
    },
    {
      question: 'O conteúdo é focado no ENEM?',
      answer:
        'Sim! Todos os 82 mapas visuais e materiais complementares foram selecionados com base na recorrência dos assuntos de Geometria Espacial nas provas do ENEM.',
    },
    {
      question: 'Os mapas substituem livros e videoaulas?',
      answer:
        'Os mapas visuais funcionam como um acelerador de aprendizado e revisão rápida, permitindo que você entenda a lógica espacial sem precisar ler páginas extensas de demonstrações teóricas.',
    },
    {
      question: 'Posso acessar pelo celular, tablet e computador?',
      answer:
        'Sim! O material está em formato digital de alta resolução, totalmente otimizado para visualização em smartphones, tablets, notebooks e computadores de mesa.',
    },
    {
      question: 'Por quanto tempo terei acesso ao material?',
      answer:
        'Você pode baixar os arquivos para seu dispositivo e consultar sempre que quiser. Na Opção 2 (Kit Completo), você garante acesso vitalício e todas as futuras atualizações.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-14 md:py-20 px-4 border-b border-slate-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[10px] sm:text-xs font-bold text-yellow-600 uppercase tracking-widest mb-1">
            DÚVIDAS SOLUCIONADAS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
            PERGUNTAS FREQUENTES
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 bg-white"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-yellow-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-white">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

