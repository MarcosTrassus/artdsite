
import React from "react";
import { Check, X } from "lucide-react";

// Planos e cores
const plans = [
  { name: "Básico", color: "text-blue-700" },
  { name: "Avançado", color: "text-blue-700" },
  { name: "Premium", color: "text-blue-700" },
];

// Preços destacados
const prices = [
  { label: "Básico", value: "R$ 190,00" },
  { label: "Avançado", value: "R$ 290,00" },
  { label: "Premium", value: "R$ 490,00" },
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
    return <X className="mx-auto text-red-600" size={20} />;
  return <div className="text-center">{value}</div>;
};

const ScreenshotsSection = () => (
  <section className="w-full bg-gradient-to-r from-purple-50 via-white to-blue-50 py-14">
    <h2 className="text-2xl md:text-3xl font-bold text-blue-700 text-center mb-10 font-montserrat">
      Planos e Preços
    </h2>
    {/* Card de preços destacados */}
    <div className="max-w-4xl mx-auto mb-10 px-2">
      <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in">
        {prices.map((plan, idx) => (
          <div
            key={plan.label}
            className={`flex-1 rounded-2xl shadow-lg bg-gradient-to-br from-yellow-100 via-white to-purple-50 border border-yellow-300 px-6 py-6 flex flex-col items-center justify-center ${
              idx === 0
                ? "md:mr-1"
                : idx === prices.length - 1
                ? "md:ml-1"
                : ""
            }`}
          >
            <span className="uppercase tracking-wide font-semibold text-blue-700 text-base mb-2">{plan.label}</span>
            <span className="font-bold text-2xl md:text-3xl text-blue-900 bg-yellow-200 rounded px-4 py-2 shadow-md">{plan.value}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="max-w-5xl mx-auto px-2">
      <div className="overflow-x-auto">
        <table className="min-w-[780px] w-full border rounded-lg shadow bg-white">
          <thead>
            <tr>
              <th className="py-4 px-4 text-left font-bold text-base border-b bg-blue-100 text-gray-800">
                Funcionalidade
              </th>
              {plans.map((plan) => (
                <th
                  key={plan.name}
                  className={`py-4 px-4 text-center font-bold text-base border-b bg-blue-100 ${plan.color}`}
                >
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {functionalities.map((f, idx) => (
              <React.Fragment key={f.label || idx}>
                <tr className={f.highlight ? "bg-yellow-50" : (idx % 2 === 0 ? "bg-white" : "bg-gray-50")}>
                  <td className={`px-4 py-3 ${f.highlight ? "font-bold text-blue-900 text-base" : "text-gray-800"}`}>{f.label}</td>
                  <td className="py-3 px-2">{getCellValue(f.basic)}</td>
                  <td className="py-3 px-2">{getCellValue(f.advanced)}</td>
                  <td className="py-3 px-2">{getCellValue(f.premium)}</td>
                </tr>
                {/* Preço foi movido para o card/banner acima */}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center text-gray-600 text-sm mt-8 mx-auto max-w-xl">
        Todos os planos incluem suporte via chat e abertura de chamados. Consulte as opções de créditos de desenvolvimento e condições especiais para sua empresa.
      </p>
    </div>
  </section>
);

export default ScreenshotsSection;

