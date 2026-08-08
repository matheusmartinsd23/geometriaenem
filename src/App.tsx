/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * MatEnem GeoVisual Application
 */

import { useState } from 'react';
import { TopBanner } from './components/TopBanner';
import { HeroSection } from './components/HeroSection';
import { ConceptSection } from './components/ConceptSection';
import { SystemVisualSection } from './components/SystemVisualSection';
import { CurriculumSection } from './components/CurriculumSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { TestimonialsIntroSection } from './components/TestimonialsIntroSection';
import { BonusesSection } from './components/BonusesSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { UpsellModal } from './components/UpsellModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string } | null>(null);

  const scrollToOffers = () => {
    const el = document.getElementById('ofertas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectOption = (name: string, price: string) => {
    if (price === 'R$ 10' || name.includes('Opção 1')) {
      setIsUpsellOpen(true);
    } else if (price === 'R$ 27' || name.includes('Opção 2')) {
      window.location.href = 'https://ggcheckout.app/checkout/v2/StonLx6AfGjbqYTdeQHP';
    } else if (price === 'R$ 22') {
      window.location.href = 'https://ggcheckout.app/checkout/v2/tJlIjD2SN8Yjc6MGeD6r';
    } else {
      setSelectedPlan({ name, price });
      setIsModalOpen(true);
    }
  };

  const handleAcceptKit = () => {
    setIsUpsellOpen(false);
    window.location.href = 'https://ggcheckout.app/checkout/v2/tJlIjD2SN8Yjc6MGeD6r';
  };

  const handleDeclineKit = () => {
    setIsUpsellOpen(false);
    window.location.href = 'https://ggcheckout.app/checkout/v2/XYzfNh0dxwTQmDb7pDSu';
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col selection:bg-amber-300 selection:text-zinc-950">
      {/* 1. Top Alert */}
      <TopBanner />

      <main className="grow">
        {/* 2. Hero */}
        <HeroSection onCtaClick={scrollToOffers} />

        {/* 3. Conceito e Aprendizagem */}
        <ConceptSection />

        {/* 4. Sistema Visual */}
        <SystemVisualSection />

        {/* 5. Currículo Visual (O QUE VOCÊ VAI RECEBER) */}
        <CurriculumSection onCtaClick={scrollToOffers} />

        {/* 6. Bônus Exclusivos */}
        <BonusesSection />

        {/* 7. Depoimentos (Provas Sociais) */}
        <TestimonialsIntroSection onCtaClick={scrollToOffers} />

        {/* 8. Para Quem É */}
        <TargetAudienceSection />

        {/* 10. Escolha sua Oferta */}
        <PricingSection onSelectOption={handleSelectOption} />

        {/* 11. Garantia Incondicional de 7 Dias */}
        <GuaranteeSection />

        {/* 12. Dúvidas Solucionadas / Perguntas Frequentes */}
        <FaqSection />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Interactive Upsell Modal */}
      <UpsellModal
        isOpen={isUpsellOpen}
        onClose={() => setIsUpsellOpen(false)}
        onAcceptKit={handleAcceptKit}
        onDeclineKit={handleDeclineKit}
      />

      {/* Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}
