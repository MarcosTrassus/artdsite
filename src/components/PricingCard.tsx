
import React from "react";

type Plan = {
  name: string;
  desc: string;
  colorBg: string;
  shadow: string;
  border: string;
  price: string;
  highlight: boolean;
  badge: boolean;
  z: string;
};

interface PricingCardProps {
  plan: Plan;
  idx: number;
}

const planDescriptions = [
  "Ideal para pequenos negócios em início de estruturação",
  "Para empresas em crescimento que precisam de agilidade",
  "Para empresas que não podem parar e precisam de performance máxima"
];

const cardDescColors = [
  "text-green-900",
  "text-purple-900",
  "text-blue-900"
];

const PricingCard: React.FC<PricingCardProps> = ({ plan, idx }) => {
  return (
    <div
      className={`group relative flex-1 flex flex-col items-center border-2 ${plan.border}
        rounded-3xl shadow-xl ${plan.shadow} ${plan.colorBg}
        backdrop-blur-lg transition-all duration-300 ${plan.z}
        ${plan.highlight ? "scale-110 shadow-3xl border-4" : "md:scale-100"}
        ${plan.highlight ? "md:-translate-y-5" : "md:translate-y-5"}
        md:hover:scale-110 md:hover:z-30 animate-fade-in`}
      style={{
        minWidth: 260,
        maxWidth: 335,
      }}
    >
      {plan.badge && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs px-4 py-1.5 rounded-full shadow font-bold tracking-wide uppercase animate-fade-in">
          Mais vendido
        </span>
      )}

      <span className="uppercase tracking-wider font-semibold text-[1.05rem] font-poppins text-purple-800 mt-12 animate-fade-in">
        {plan.name}
      </span>
      <div className="my-4 font-bold text-4xl md:text-5xl text-purple-900 bg-white rounded-2xl px-8 py-4 shadow-lg font-montserrat animate-fade-in">
        {plan.price}
      </div>
      <span className="block text-md text-purple-700 mb-2 animate-fade-in">{plan.desc}</span>
      <ul className="mt-2 mb-6 flex-1 flex flex-col gap-2 w-full text-[13px] px-5">
        <li className={cardDescColors[idx]}>{planDescriptions[idx]}</li>
      </ul>
    </div>
  );
};

export default PricingCard;
