
import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Mensal",
    price: "R$ 189,00",
    period: "por mês",
    features: {
      suporte: true,
      atualizacao: true,
      boleto: true,
      desconto: false,
    },
  },
  {
    name: "Trimestral",
    price: "R$ 511,00",
    period: "a cada 3 meses",
    features: {
      suporte: true,
      atualizacao: true,
      boleto: true,
      desconto: true,
    },
    obs: "Economize R$56",
  },
  {
    name: "Semestral",
    price: "R$ 964,00",
    period: "a cada 6 meses",
    features: {
      suporte: true,
      atualizacao: true,
      boleto: true,
      desconto: true,
    },
    obs: "Economize R$170",
  },
  {
    name: "Anual",
    price: "R$ 1.749,00",
    period: "por ano",
    features: {
      suporte: true,
      atualizacao: true,
      boleto: true,
      desconto: true,
    },
    obs: "Economize R$519",
  },
];

const featuresList = [
  { key: "suporte", label: "Suporte Ilimitado" },
  { key: "atualizacao", label: "Atualizações Gratuitas" },
  { key: "boleto", label: "Pagamento via Boleto" },
  { key: "desconto", label: "Desconto Progressivo" },
];

const ScreenshotsSection = () => (
  <section className="w-full bg-gradient-to-r from-purple-50 via-white to-blue-50 py-14">
    <h2 className="text-2xl md:text-3xl font-bold text-blue-700 text-center mb-10 font-montserrat">
      Planos e Preços
    </h2>
    <div className="max-w-5xl mx-auto px-2">
      <div className="overflow-x-auto">
        <table className="min-w-[700px] w-full border rounded-lg shadow bg-white">
          <thead>
            <tr>
              <th className="py-4 px-6 text-left text-gray-700 font-bold text-base border-b">
                Funcionalidade
              </th>
              {plans.map((plan) => (
                <th
                  key={plan.name}
                  className="py-4 px-6 text-center text-blue-800 font-bold text-base border-b"
                >
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-50">
              <td className="px-6 py-3 font-semibold text-blue-900">Preço</td>
              {plans.map((plan) => (
                <td
                  key={plan.name + '-preco'}
                  className="px-6 py-3 text-center border-t font-semibold text-[1.1rem]"
                >
                  <span className="block text-2xl font-bold text-blue-700">{plan.price}</span>
                  <span className="block text-xs text-gray-500">{plan.period}</span>
                  {plan.obs && (
                    <span className="block text-[11px] text-green-700 font-medium mt-1">{plan.obs}</span>
                  )}
                </td>
              ))}
            </tr>
            {featuresList.map((feature, idx) => (
              <tr key={feature.key} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-6 py-3 text-gray-700">{feature.label}</td>
                {plans.map((plan) => (
                  <td key={feature.key + plan.name} className="py-3 text-center">
                    {plan.features[feature.key] ? (
                      <Check className="mx-auto text-green-600" size={24} />
                    ) : (
                      <span className="text-xs text-gray-400">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center text-gray-600 text-sm mt-8 mx-auto max-w-xl">
        Todos os planos incluem suporte, atualizações gratuitas e acesso completo às funcionalidades do sistema. Os descontos progressivos já estão aplicados nos planos acima.
      </p>
    </div>
  </section>
);

export default ScreenshotsSection;
