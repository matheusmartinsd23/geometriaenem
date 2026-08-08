/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, type FormEvent } from 'react';
import { X, CheckCircle, ShieldCheck, Lock, CreditCard, QrCode } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: { name: string; price: string } | null;
}

export function CheckoutModal({ isOpen, onClose, selectedPlan }: CheckoutModalProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !selectedPlan) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setEmail('');
    setName('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border-2 border-amber-300 relative">
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 p-1.5 rounded-full hover:bg-zinc-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Lock className="w-3.5 h-3.5" />
              <span>Ambiente Seguro</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-zinc-950 mb-1">
              Finalizar Pedido
            </h3>
            <p className="text-sm text-zinc-600 mb-5">
              {selectedPlan.name}
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-5 flex items-center justify-between">
              <div>
                <span className="text-xs text-zinc-600 block">Total a pagar:</span>
                <span className="text-2xl font-black text-zinc-950">{selectedPlan.price}</span>
              </div>
              <div className="text-right">
                <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">
                  Acesso Imediato
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Maria Silva"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                  Seu Melhor E-mail (Para receber o acesso)
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ex: seuemail@exemplo.com"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                  Forma de Pagamento
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-sm font-bold cursor-pointer transition-all ${
                      paymentMethod === 'pix'
                        ? 'border-amber-500 bg-amber-100/80 text-zinc-950 shadow-xs'
                        : 'border-zinc-200 text-zinc-600 hover:bg-zinc-50'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-emerald-600" />
                    <span>PIX (Instantâneo)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-sm font-bold cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'border-amber-500 bg-amber-100/80 text-zinc-950 shadow-xs'
                        : 'border-zinc-200 text-zinc-600 hover:bg-zinc-50'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-amber-700" />
                    <span>Cartão de Crédito</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-amber-400 hover:bg-amber-500 text-zinc-950 font-black text-base py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer uppercase tracking-wider border border-amber-500"
              >
                PAGAR {selectedPlan.price} AGORA
              </button>
            </form>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Garantia incondicional de 7 dias ou seu dinheiro de volta</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 stroke-[2.5]" />
            </div>

            <h3 className="text-2xl font-black text-zinc-950 mb-2">
              Pedido Confirmado!
            </h3>
            <p className="text-sm text-zinc-700 mb-6 leading-relaxed">
              Enviamos os dados de acesso para o e-mail:
              <br />
              <strong className="text-zinc-950 font-bold">{email}</strong>
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6 text-left text-xs sm:text-sm space-y-2 text-zinc-800">
              <p className="font-bold text-amber-950">📦 Resumo da Compra:</p>
              <p>• {selectedPlan.name}</p>
              <p>• Valor: {selectedPlan.price}</p>
              <p>• Garantia de 7 dias ativa</p>
            </div>

            <button
              onClick={handleReset}
              className="w-full bg-amber-400 hover:bg-amber-500 text-zinc-950 font-bold py-3.5 px-6 rounded-xl transition-all uppercase text-sm tracking-wide"
            >
              Concluir e Voltar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
