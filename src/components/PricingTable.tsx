import React from "react";
import { Check, X } from "lucide-react";

const planNames = ["Básico", "Avançado", "Premium"];

const tableData = [
  {
    section: "Cadastro",
    color: "bg-green-50",
    items: [
      { name: "Clientes", plans: [true, true, true] },
      { name: "Empresa", plans: [true, true, true] },
      { name: "Prospect", plans: [true, true, true] },
      { name: "Acervo", plans: [true, true, true] },
      { name: "Tipo Acervo", plans: [true, true, true] },
      { name: "Atendentes", plans: [true, true, true] },
      { name: "Fornecedores", plans: [true, true, true] },
      { name: "Listagem de Festas", plans: [true, true, true] },
      { name: "Configurações", plans: [true, true, true] },
      { name: "Senhas", plans: [true, true, true] },
    ]
  },
  {
    section: "Operacional",
    color: "bg-green-100",
    items: [
      { name: "Aluguel", plans: [true, true, true] },
      { name: "Envio automático do Contrato via WhatsApp", plans: [false, true, true] },
      { name: "Lembrete de Prova via WhatsApp", plans: [true, true, true] },
      { name: "Lembrete de Retirada via WhatsApp", plans: [false, true, true] },
      { name: "Lembrete de Devolução via WhatsApp", plans: [false, true, true] },
      { name: "Mensageria WhatsApp", plans: [false, false, true] },
      { name: "Tipo de Eventos", plans: [true, true, true] },
      { name: "Setores", plans: [true, true, true] },
      { name: "Venda", plans: [true, true, true] },
      { name: "Backup", plans: [true, true, true] },
      { name: "Agenda", plans: [true, true, true] },
    ]
  },
  {
    section: "Financeiro",
    color: "bg-red-50",
    items: [
      { name: "Contas Correntes", plans: [true, true, true] },
      { name: "Movimentações", plans: [true, true, true] },
      { name: "Projeção de Receita", plans: [true, true, true] },
      { name: "Despesas", plans: [true, true, true] },
      { name: "Plano de Contas", plans: [true, true, true] },
      { name: "Compras", plans: [true, true, true] },
    ]
  },
  {
    section: "Pesquisa",
    color: "bg-yellow-50",
    items: [
      { name: "Pesquisa de Clientes", plans: [true, true, true] },
      { name: "Pesquisa de Contratos", plans: [true, true, true] },
      { name: "Pesquisa de Atendentes", plans: [true, true, true] },
      { name: "Pesquisa de Acervo", plans: [true, true, true] },
      { name: "Pesquisa de Itens Alugados", plans: [true, true, true] },
      { name: "Pesquisa de Provas", plans: [true, true, true] },
      { name: "Pesquisa de Devoluções", plans: [true, true, true] },
      { name: "Comissões", plans: [true, true, true] },
      { name: "Retiradas", plans: [true, true, true] },
      { name: "Fechamento Diário", plans: [true, true, true] },
    ]
  }
];

const PricingTable: React.FC = () => {
  return (
    <section className="w-full my-8 px-2 overflow-x-auto">
      <div className="max-w-4xl mx-auto border rounded-lg shadow bg-white">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="py-4 px-4 text-left text-gray-700 font-bold text-base border-b">
                Módulo / Funcionalidade
              </th>
              {planNames.map((plan) => (
                <th
                  key={plan}
                  className="py-4 px-4 text-center text-gray-700 font-bold text-base border-b"
                >
                  {plan}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((section, idx) => (
              <React.Fragment key={section.section}>
                <tr>
                  <td
                    colSpan={4}
                    className={`font-bold text-sm px-4 py-2 ${section.color} text-gray-800`}
                  >
                    {section.section}
                  </td>
                </tr>
                {section.items.map((item, i) => (
                  <tr
                    key={item.name}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-blue-50"
                    } transition`}
                  >
                    <td className="px-4 py-2 text-gray-600 border-t text-sm">
                      {item.name}
                    </td>
                    {item.plans.map((active, idx2) => (
                      <td key={idx2} className="py-2 text-center border-t">
                        {active ? (
                          <Check className="text-green-600 mx-auto" size={20} aria-label="Disponível" />
                        ) : (
                          <X className="text-red-500 mx-auto" size={20} aria-label="Indisponível" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PricingTable;
