import React from "react";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Básico",
    desc: "Essencial para começar",
    colorBg: "bg-soft-green",
    shadow: "shadow-green-200/30",
    border: "border-green-500",
    price: "R$ 190,00",
    highlight: false,
    badge: false,
    z: "z-0"
  },
  {
    name: "Avançado",
    desc: "Mais vendido",
    colorBg: "bg-soft-purple",
    shadow: "shadow-purple-300/40",
    border: "border-vivid-purple",
    price: "R$ 290,00",
    highlight: true,
    badge: true,
    z: "z-20"
  },
  {
    name: "Premium",
    desc: "Para empresas exigentes",
    colorBg: "bg-soft-blue",
    shadow: "shadow-blue-200/30",
    border: "border-blue-500",
    price: "R$ 490,00",
    highlight: false,
    badge: false,
    z: "z-10"
  },
];

const functionalities = [
  {
    label: "",
    basic: (
      <span className="text-[13px] text-blue-900">Ideal para pequenos negócios em início de estruturação</span>
    ),
    advanced: (
      <span className="text-[13px] text-blue-900">Para empresas em crescimento que precisam de agilidade</span>
    ),
    premium: (
      <span className="text-[13px] text-blue-900">Para empresas que não podem parar e precisam de performance máxima</span>
    ),
    highlight: true,
  },
  {
    label: "Suporte Via Chat",
    basic: true,
    advanced: true,
    premium: true,
  },
  {
    label: "Suporte Abertura de Chamada",
    basic: true,
    advanced: true,
    premium: true,
  },
  {
    label: "Suporte Acesso Remoto",
    basic: "Até 1h por mês",
    advanced: "Até 3h por mês",
    premium: "Até 30h por mês",
  },
  {
    label: "Atendimento via WhatsApp Comercial",
    basic: (
      <span className="text-[13px]">Horário comercial 8:30 as 18:00h - Segunda a Sexta</span>
    ),
    advanced: (
      <span className="text-[13px]">Horário comercial 8:30 as 18:00h - Segunda a Sexta</span>
    ),
    premium: (
      <span className="text-[13px]">Horário comercial 8:30 as 18:00h - Segunda a Sábado</span>
    ),
  },
  {
    label: "Atualizações Gratuitas",
    basic: false,
    advanced: true,
    premium: true,
  },
  {
    label: "E-commerce",
    basic: false,
    advanced: false,
    premium: true,
  },
  {
    label: "Manual do Sistema (HTML/PDF)",
    basic: true,
    advanced: true,
    premium: true,
  },
  {
    label: "Atualizações do Sistema",
    basic: "Semestrais",
    advanced: "Trimestrais",
    premium: "Mensais",
  },
  {
    label: "Backup Automático",
    basic: false,
    advanced: true,
    premium: true,
  },
  {
    label: "Canal de Sugestões para Melhorias",
    basic: true,
    advanced: true,
    premium: true,
  },
  {
    label: "Pacotes de Créditos de Customização",
    basic: <span className="text-red-700">Não incluso</span>,
    advanced: <span className="text-red-700">Não incluso</span>,
    premium: (
      <span className="text-green-700">
        Pacotes<br />
        15 créditos R$ 600,00<br />
        30 créditos R$ 900,00<br />
        50 créditos R$ 1.250,00
      </span>
    ),
    highlight: true,
  },
  {
    label: "Instalação Adicional",
    basic: <span className="text-gray-700">R$ 50,00/máquina</span>,
    advanced: <span className="text-gray-700">R$ 75,00/máquina</span>,
    premium: <span className="text-gray-700">R$ 125,00/máquina</span>,
  },
];

const getCellValue = (value: React.ReactNode | boolean | string | undefined) => {
  if (value === true)
    return <Check className="mx-auto text-green-600" size={20} />;
  if (value === false)
    return <X className="mx-auto text-red-500" size={20} />;
  return <div className="text-center">{value}</div>;
};

const ScreenshotsSection = () => (
  <section className="w-full bg-white py-16 md:py-24">
    <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12 font-montserrat tracking-tight drop-shadow animate-fade-in">
      Planos e Preços
    </h2>
    <div className="relative max-w-5xl mx-auto mb-14 flex flex-col md:flex-row md:justify-center gap-6 px-4">
      {plans.map((plan, idx) => (
        <div
          key={plan.name}
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

          <span className={`uppercase tracking-wider font-semibold text-[1.05rem] font-poppins text-purple-800 mt-12 animate-fade-in`}>
            {plan.name}
          </span>
          <span className="my-4 font-bold text-4xl md:text-5xl text-purple-900 bg-white rounded-2xl px-8 py-4 shadow-lg font-montserrat animate-fade-in">
            {plan.price}
          </span>
          <span className="block text-md text-purple-700 mb-2 animate-fade-in">{plan.desc}</span>
          <ul className="mt-2 mb-6 flex-1 flex flex-col gap-2 w-full text-[13px] px-5">
            {idx === 0 && (
              <li className="text-green-900">Ideal para pequenos negócios em início de estruturação</li>
            )}
            {idx === 1 && (
              <li className="text-purple-900">Para empresas em crescimento que precisam de agilidade</li>
            )}
            {idx === 2 && (
              <li className="text-blue-900">Para empresas que não podem parar e precisam de performance máxima</li>
            )}
          </ul>
        </div>
      ))}
    </div>

    <div className="max-w-5xl mx-auto px-2 md:px-3">
      <div className="overflow-x-auto rounded-2xl bg-white shadow-2xl border border-purple-100">
        <table className="min-w-[800px] w-full rounded-2xl border-separate border-spacing-y-1">
          <thead className="bg-soft-gray sticky top-0 z-10">
            <tr>
              <th className="py-4 px-4 text-left font-bold text-base rounded-tl-2xl text-purple-900 bg-transparent">
                Funcionalidade
              </th>
              <th className="py-4 px-4 text-center font-bold text-base text-green-900 bg-transparent">
                Básico
              </th>
              <th className="py-4 px-4 text-center font-bold text-base text-purple-900 bg-transparent">
                Avançado
              </th>
              <th className="py-4 px-4 text-center font-bold text-base text-blue-900 rounded-tr-2xl bg-transparent">
                Premium
              </th>
            </tr>
          </thead>
          <tbody>
            {functionalities.map((f, idx) => (
              <tr
                key={f.label || idx}
                className={`
                  ${f.highlight ? "bg-soft-yellow/80" : (idx % 2 === 0 ? "bg-white" : "bg-soft-gray/60")}
                  border-y border-purple-100 hover:bg-soft-purple/30 transition-colors group
                `}
              >
                <td className={`px-4 py-4 text-md ${f.highlight ? "font-bold text-purple-900" : "text-gray-800"} ${idx === 0 ? "rounded-l-xl" : ""}`}>
                  {f.label}
                </td>
                <td className="py-4 px-2">{getCellValue(f.basic)}</td>
                <td className="py-4 px-2">{getCellValue(f.advanced)}</td>
                <td className="py-4 px-2">{getCellValue(f.premium)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center text-gray-600 text-base mt-8 mx-auto max-w-xl">
        Todos os planos incluem suporte via chat e abertura de chamados.<br />
        Consulte as opções de créditos de desenvolvimento e condições especiais para sua empresa.
      </p>
    </div>
  </section>
);

export default ScreenshotsSection;
