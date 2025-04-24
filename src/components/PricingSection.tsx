
import React from "react";
import PricingComparisonTable from "./PricingComparisonTable";

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: "BÁSICO",
      price: "R$190,00",
      desc: "Essencial para começar",
      longDesc: "Ideal para pequenos negócios em início de estruturação",
      colorBg: "bg-green-50",
      shadow: "shadow-green-100",
      border: "border-green-200",
      highlight: false,
      badge: false,
      z: "z-10"
    },
    {
      name: "AVANÇADO",
      price: "R$290,00",
      desc: "Mais vendido",
      longDesc: "Para empresas em crescimento que precisam de agilidade",
      colorBg: "bg-purple-50",
      shadow: "shadow-purple-200",
      border: "border-purple-300",
      highlight: true,
      badge: true,
      z: "z-20"
    },
    {
      name: "PREMIUM",
      price: "R$490,00",
      desc: "Para empresas exigentes",
      longDesc: "Para empresas que não podem parar e precisam de performance máxima",
      colorBg: "bg-blue-50",
      shadow: "shadow-blue-100",
      border: "border-blue-200",
      highlight: false,
      badge: false,
      z: "z-10"
    }
  ];
  
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-montserrat tracking-tight drop-shadow animate-fade-in">
          Planos e Preços
        </h2>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16 px-4">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`
                relative flex-1 flex flex-col items-center border-2 ${plan.border}
                rounded-3xl shadow-xl ${plan.shadow} ${plan.colorBg}
                backdrop-blur-lg transition-all duration-300 ${plan.z}
                ${plan.highlight ? "scale-105 shadow-3xl border-4" : ""}
                ${plan.highlight ? "md:-translate-y-5" : ""}
                md:hover:scale-110 md:hover:z-30 mb-8 md:mb-0
              `}
              style={{
                minWidth: 260,
                maxWidth: 335,
              }}
            >
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs px-4 py-1.5 rounded-full shadow font-bold tracking-wide uppercase">
                  Mais vendido
                </span>
              )}

              <span className="uppercase tracking-wider font-semibold text-[1.05rem] font-poppins text-purple-800 mt-12">
                {plan.name}
              </span>
              <div className="my-4 font-bold text-4xl md:text-5xl text-purple-900 bg-white rounded-2xl px-8 py-4 shadow-lg font-montserrat">
                {plan.price}
              </div>
              <span className="text-md text-purple-700 mb-2">{plan.desc}</span>
              <p className="text-sm px-4 text-center mb-8 text-gray-600">{plan.longDesc}</p>
            </div>
          ))}
        </div>
        
        <PricingComparisonTable />

        <div className="max-w-5xl mx-auto mt-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 font-montserrat tracking-tight">
            Módulos Inclusos
          </h3>
          <PricingComparisonTable showModules={true} />
          <p className="text-center text-gray-600 text-base mt-8 mx-auto max-w-xl">
            Todos os planos incluem suporte via chat e abertura de chamados.<br />
            Consulte as opções de créditos de desenvolvimento e condições especiais para sua empresa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
