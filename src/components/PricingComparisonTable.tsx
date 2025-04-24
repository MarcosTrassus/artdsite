import React from "react";
import { Check, X } from "lucide-react";

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
        10 créditos R$ 900,00<br />
        20 créditos R$ 1.500,00<br />
        30 créditos R$ 1.950,00
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

const modulesFunctionalities = [
  {
    label: "Módulo / Funcionalidade",
    basic: "Básico",
    advanced: "Avançado",
    premium: "Premium",
    isHeader: true
  },
  {
    label: "Cadastro",
    isSection: true
  },
  {
    label: "Clientes",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Empresa",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Prospect",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Acervo",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Tipo Acervo",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Atendentes",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Fornecedores",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Listagem de Festas",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Configurações",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Senhas",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Operacional",
    isSection: true
  },
  {
    label: "Aluguel",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Envio automático do Contrato via WhatsApp",
    basic: false,
    advanced: true,
    premium: true
  },
  {
    label: "Lembrete de Prova via WhatsApp",
    basic: false,
    advanced: true,
    premium: true
  },
  {
    label: "Lembrete de Retirada via WhatsApp",
    basic: false,
    advanced: true,
    premium: true
  },
  {
    label: "Lembrete de Devolução via WhatsApp",
    basic: false,
    advanced: true,
    premium: true
  },
  {
    label: "Mensagens WhatsApp",
    basic: false,
    advanced: true,
    premium: true
  },
  {
    label: "Tipo de Eventos",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Setores",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Venda",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Backup",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Agenda",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Financeiro",
    isSection: true
  },
  {
    label: "Contas Correntes",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Movimentações",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Projeção de Receita",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Despesas",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Plano de Contas",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Compras",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Pesquisa",
    isSection: true
  },
  {
    label: "Pesquisa de Clientes",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Pesquisa de Contratos",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Pesquisa de Atendentes",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Pesquisa de Acervo",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Pesquisa de Itens Alugados",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Pesquisa de Provas",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Pesquisa de Devoluções",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Convidados",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Retiradas",
    basic: true,
    advanced: true,
    premium: true
  },
  {
    label: "Fechamento Diário",
    basic: true,
    advanced: true,
    premium: true
  }
];

const getCellValue = (value: React.ReactNode | boolean | string | undefined) => {
  if (value === true)
    return <Check className="mx-auto text-green-600" size={20} />;
  if (value === false)
    return <X className="mx-auto text-red-500" size={20} />;
  return <div className="text-center">{value}</div>;
};

const PricingComparisonTable: React.FC<{ showModules?: boolean }> = ({ showModules = false }) => {
  const items = showModules ? modulesFunctionalities : functionalities;

  return (
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
          {items.map((f, idx) => (
            <tr
              key={f.label || idx}
              className={`
                ${f.isSection ? "bg-gray-100" : (idx % 2 === 0 ? "bg-white" : "bg-soft-gray/60")}
                border-y border-purple-100 hover:bg-soft-purple/30 transition-colors group
              `}
            >
              <td className={`px-4 py-4 ${f.isSection ? "font-bold text-purple-900" : "text-gray-800"} ${idx === 0 ? "rounded-l-xl" : ""}`}>
                {f.label}
              </td>
              <td className="py-4 px-2">{!f.isSection && !f.isHeader && getCellValue(f.basic)}</td>
              <td className="py-4 px-2">{!f.isSection && !f.isHeader && getCellValue(f.advanced)}</td>
              <td className="py-4 px-2">{!f.isSection && !f.isHeader && getCellValue(f.premium)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingComparisonTable;
