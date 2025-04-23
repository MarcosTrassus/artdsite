import React from "react";
import { Check, X } from "lucide-react";

// Novos gradientes e badges destacados
const plans = [
  {
    name: "Básico",
    desc: "Essencial para começar",
    colorBg: "bg-gradient-to-br from-yellow-100 via-yellow-50 to-white",
    colorBorder: "border-yellow-200",
    price: "R$ 190,00",
    highlight: false,
    badge: false,
  },
  {
    name: "Avançado",
    desc: "Mais vendido",
    colorBg: "bg-gradient-to-br from-purple-100 via-blue-100 to-white",
    colorBorder: "border-purple-400",
    price: "R$ 290,00",
    highlight: true,
    badge: true,
  },
  {
    name: "Premium",
    desc: "Para empresas exigentes",
    colorBg: "bg-gradient-to-br from-blue-100 via-white to-purple-100",
    colorBorder: "border-blue-300",
    price: "R$ 490,00",
    highlight: false,
    badge: false,
  },
];

// Funcionalidades (mantidas)
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

// Icone/valor funcionalidade
const getCellValue = (value: React.ReactNode | boolean | string | undefined) => {
  if (value === true)
    return <Check className="mx-auto text-green-600" size={20} />;
  if (value === false)
    return <X className="mx-auto text-red-600" size={20} />;
  return <div className="text-center">{value}</div>;
};

const ScreenshotsSection = () => (
  <section className="w-full bg-gradient-to-br from-indigo-50 via-yellow-50 to-blue-100 py-16 md:py-24 transition-all duration-200">
    <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12 font-montserrat tracking-tight drop-shadow animate-fade-in">
      Planos e Preços
    </h2>

    {/* Cards de preços */}
    <div className="max-w-7xl mx-auto mb-16 px-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`
              group relative rounded-3xl border-2 ${plan.colorBorder} ${plan.colorBg}
              shadow-2xl flex flex-col items-center py-12 px-8
              transition-transform duration-300 ease-in-out
              hover:scale-105 hover:z-20 hover:shadow-3xl 
              ${plan.highlight ? "md:scale-105 z-10 border-purple-600" : ""}
              animate-fade-in
            `}
            style={{
              boxShadow: plan.highlight
                ? "0 6px 40px 0 rgba(124, 58, 237, 0.18)"
                : "0 4px 24px 0 rgba(48, 67, 128, 0.06)",
            }}
          >
            {/* Badge para o plano mais vendido */}
            {plan.badge && (
              <span className="absolute top-0 right-0 mt-4 mr-6 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 text-white text-xs px-4 py-1.5 rounded-full shadow font-bold tracking-wide uppercase animate-fade-in">
                Mais vendido
              </span>
            )}

            <span className="uppercase tracking-wider font-semibold text-[1.05rem] text-blue-700 font-poppins drop-shadow animate-fade-in">
              {plan.name}
            </span>
            <span className="my-4 font-bold text-4xl md:text-5xl text-blue-900 bg-yellow-50 rounded-2xl px-8 py-5 shadow-lg font-montserrat animate-fade-in">
              {plan.price}
            </span>
            <span className="block text-md text-gray-700 mb-2 animate-fade-in">{plan.desc}</span>
            <ul className="mt-2 flex-1 flex flex-col gap-1 w-full">
              {idx === 0 && (
                <li className="text-[13px] text-left text-blue-900">Ideal para pequenos negócios em início de estruturação</li>
              )}
              {idx === 1 && (
                <li className="text-[13px] text-left text-blue-900">Para empresas em crescimento que precisam de agilidade</li>
              )}
              {idx === 2 && (
                <li className="text-[13px] text-left text-blue-900">Para empresas que não podem parar e precisam de performance máxima</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Tabela de funcionalidades */}
    <div className="max-w-5xl mx-auto px-3">
      <div className="overflow-x-auto rounded-3xl shadow-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100">
        <table className="min-w-[830px] w-full border-0 rounded-3xl">
          <thead>
            <tr>
              <th className="py-5 px-4 text-left font-bold text-base rounded-tl-2xl bg-blue-100 text-blue-800">
                Funcionalidade
              </th>
              <th className="py-5 px-4 text-center font-bold text-base bg-blue-100 text-blue-700">
                Básico
              </th>
              <th className="py-5 px-4 text-center font-bold text-base bg-blue-100 text-blue-700">
                Avançado
              </th>
              <th className="py-5 px-4 text-center font-bold text-base bg-blue-100 text-blue-700 rounded-tr-2xl">
                Premium
              </th>
            </tr>
          </thead>
          <tbody>
            {functionalities.map((f, idx) => (
              <React.Fragment key={f.label || idx}>
                <tr className={`${f.highlight ? "bg-yellow-50/70" : (idx % 2 === 0 ? "bg-white" : "bg-gray-50")}`}>
                  <td className={`px-4 py-4 text-md transition-all duration-200 ${f.highlight ? "font-bold text-blue-900" : "text-gray-800"} ${idx === 0 ? "rounded-l-xl" : ""}`}>
                    {f.label}
                  </td>
                  <td className="py-4 px-2">{getCellValue(f.basic)}</td>
                  <td className="py-4 px-2">{getCellValue(f.advanced)}</td>
                  <td className="py-4 px-2">{getCellValue(f.premium)}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center text-gray-600 text-base mt-10 mx-auto max-w-xl">
        Todos os planos incluem suporte via chat e abertura de chamados. Consulte as opções de créditos de desenvolvimento e condições especiais para sua empresa.
      </p>
    </div>
  </section>
);

export default ScreenshotsSection;
