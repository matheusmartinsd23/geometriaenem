/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, Check } from 'lucide-react';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptKit: () => void;
  onDeclineKit: () => void;
}

export function UpsellModal({ isOpen, onClose, onAcceptKit, onDeclineKit }: UpsellModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white border-2 border-slate-900 text-slate-900 rounded-xl max-w-sm sm:max-w-md w-full p-3.5 sm:p-4.5 shadow-2xl relative flex flex-col justify-between my-auto max-h-[95vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-slate-800 p-1 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* 1. Tag & Title */}
        <div className="text-center pr-6 pl-2 mb-2">
          <span className="inline-block bg-amber-100 text-amber-900 font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1 border border-amber-200">
            ⏳ ÚLTIMA OPORTUNIDADE
          </span>
          <h3 className="text-sm sm:text-base font-black text-slate-950 leading-tight">
            Desbloqueie o Kit Completo MatEnem GeoVisual™
          </h3>
        </div>

        {/* 2. Compact Price Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 text-center mb-2 flex items-center justify-center gap-2">
          <span className="text-xs text-red-600 line-through decoration-red-600 decoration-2 font-bold">De R$ 27,00</span>
          <span className="text-xs text-slate-400 font-bold">•</span>
          <span className="text-xs text-slate-700 font-bold">por apenas</span>
          <span className="text-xl font-black text-slate-950 leading-none">R$ 22,00</span>
        </div>

        {/* Subtitle */}
        <p className="text-[11px] text-slate-600 font-medium text-center leading-tight mb-2">
          Receba todos os materiais complementares do <strong className="text-slate-900 font-bold">MatEnem GeoVisual™</strong>:
        </p>

        {/* 3. Ultra-Compact List */}
        <div className="space-y-1.5 mb-2.5 px-0.5">
          {[
            'Bônus #1: MatEnem GeoQuestionBank™ (200 Questões)',
            'Bônus #2: MatEnem TrigoLab™ (Trigonometria)',
            'Bônus #3: MatEnem GraphLab™ (Gráficos e Funções)',
            'Bônus #4: MatEnem FinanceLab™ (Matemática Financeira)',
            'Bônus #5: MatEnem ProbabilityLab™ (Probabilidade)',
            'Bônus #6: MatEnem GeoPlaneLab™ (Geometria Plana)',
            'Atualizações futuras incluídas',
            'Acesso vitalício ao Kit Completo',
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700 font-medium leading-tight">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5] mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* 4. Warning Note */}
        <div className="bg-amber-50 border border-amber-200/90 rounded-md py-1 px-2 mb-2.5 text-center">
          <p className="text-[10px] font-bold text-amber-900 leading-tight">
            ⚠️ Esta condição especial será encerrada ao sair desta página.
          </p>
        </div>

        {/* 5. CTAs */}
        <div className="space-y-1 text-center">
          <a
            href="https://ggcheckout.app/checkout/v2/tJlIjD2SN8Yjc6MGeD6r"
            onClick={onAcceptKit}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-xs py-2.5 rounded-lg uppercase tracking-wider shadow-sm transition-all cursor-pointer border-2 border-slate-950 active:scale-[0.99] block text-center"
          >
            SIM, QUERO O KIT COMPLETO
          </a>

          <a
            href="https://ggcheckout.app/checkout/v2/XYzfNh0dxwTQmDb7pDSu"
            onClick={onDeclineKit}
            className="text-[11px] font-medium text-slate-500 hover:text-slate-900 transition-colors py-0.5 cursor-pointer underline underline-offset-1 block w-full text-center"
          >
            Continuar apenas com o MatEnem GeoVisual™
          </a>
        </div>
      </div>
    </div>
  );
}


