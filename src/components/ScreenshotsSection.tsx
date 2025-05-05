
import React from "react";
import PricingCard from "./PricingCard";
import PricingComparisonTable from "./PricingComparisonTable";

const plans = [
  {
    name: "Básico",
    desc: "Essencial para começar",
    colorBg: "bg-[#F2FCE2]", // Soft Green pastel color
    shadow: "shadow-green-200/30",
    border: "border-green-500",
    price: "R$240,00",
    highlight: false,
    badge: false,
    z: "z-0"
  },
  {
    name: "Avançado",
    desc: "Mais vendido",
    colorBg: "bg-[#E5DEFF]", // Soft Purple pastel color
    shadow: "shadow-purple-300/40",
    border: "border-vivid-purple",
    price: "R$350,00",
    highlight: true,
    badge: true,
    z: "z-20"
  },
  {
    name: "Premium",
    desc: "Para empresas exigentes",
    colorBg: "bg-[#D3E4FD]", // Soft Blue pastel color
    shadow: "shadow-blue-200/30",
    border: "border-blue-500",
    price: "R$570,00",
    highlight: false,
    badge: false,
    z: "z-10"
  },
];

const ScreenshotsSection = () => (
  <section className="w-full bg-white py-16 md:py-24">
    <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12 font-montserrat tracking-tight drop-shadow animate-fade-in">
      Planos e Preços
    </h2>
    <div className="relative max-w-5xl mx-auto mb-14 flex flex-col md:flex-row md:justify-center gap-6 px-4">
      {plans.map((plan, idx) => (
        <PricingCard key={plan.name} plan={plan} idx={idx} />
      ))}
    </div>
    <div className="max-w-5xl mx-auto px-2 md:px-3">
      <PricingComparisonTable />
      <p className="text-center text-gray-600 text-base mt-8 mx-auto max-w-xl">
        Todos os planos incluem suporte via chat e abertura de chamados.<br />
        Consulte as opções de créditos de desenvolvimento e condições especiais para sua empresa.
      </p>
    </div>
  </section>
);

export default ScreenshotsSection;
