
import React, { useState } from "react";
import { User, Truck } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const modules = [
  {
    key: "cadastro",
    label: "Cadastro",
    icon: <User className="mr-2" />,
    features: [
      {
        title: "Cliente",
        description:
          "Essa aba reúne os dados cadastrais do cliente como nome, CPF, endereço, contato, além de detalhes como avaliação de crédito, observações, participação em programa de fidelidade, créditos disponíveis e anexos.",
        imageAlt: "Tela de Cadastro de Cliente",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Cadastro/cliente_dados.png",
      },
      {
        title: "Empresa",
        description:
          "A tela de Empresa permite o cadastro e a gestão das informações da empresa responsável pelo sistema. Nela, são registrados dados essenciais como razão social, nome fantasia, CNPJ, inscrição estadual, endereço, telefone, e-mail, além de logotipo e configurações complementares. Essas informações são utilizadas em relatórios, contratos, comprovantes e demais interações institucionais dentro do sistema, garantindo que os documentos reflitam corretamente a identidade da empresa.",
        imageAlt: "Tela de Cadastro de Empresa",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Cadastro/empresa_dados.png",
      },
    ],
  },
  {
    key: "operacional",
    label: "Operacional",
    icon: <Truck className="mr-2" />,
    features: [
      {
        title: "Aluguel",
        description:
          "A tela Locação de Vestuário centraliza o controle dos contratos de aluguel de roupas. Nela, são cadastradas as informações do cliente, evento, atendente, período de uso e itens locados. Também permite registrar observações, medidas, pagamentos e imprimir recibos ou contratos.",
        imageAlt: "Tela de Locação de Vestuário",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Operacional/Contrato.png",
      },
      {
        title: "Tipo de Eventos",
        description:
          "A tela Tipo de Eventos é utilizada para organizar os diferentes tipos de ocasiões vinculadas aos contratos de locação. Ela permite que o sistema identifique o motivo da locação (ex: Casamento, Formatura, Jantar) e relacione com relatórios estatísticos e operacionais, oferecendo uma visão detalhada do perfil e do comportamento dos clientes.",
        imageAlt: "Tela de Tipo de Eventos",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Operacional/TipoEventos.png",
      },
      {
        title: "Setores",
        description:
          "A tela Setores é utilizada para classificar os segmentos de peças disponíveis no acervo da loja, como Feminino, Masculino, Noivas, Damas, etc. Esses setores organizam a estrutura do sistema e permitem que o controle e a pesquisa de peças sejam feitos de forma mais precisa.",
        imageAlt: "Tela de Setores",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Operacional/Setores.png",
      },
    ],
  },
  // Os próximos módulos (Financeiro, Pesquisa) podem ser adicionados depois aqui.
];

const SystemModulesSection = () => {
  const [selectedModuleKey, setSelectedModuleKey] = useState(modules[0].key);

  const handleImageClick = (imageSrc: string) => {
    window.open(imageSrc, '_blank');
  };

  return (
    <section className="w-full py-14 bg-white/80">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-center mb-8 font-montserrat">
          Módulos do Sistema
        </h2>
        <Tabs value={selectedModuleKey} onValueChange={setSelectedModuleKey}>
          <TabsList className="mx-auto flex gap-4 justify-center mb-8 bg-white">
            {modules.map((mod) => (
              <TabsTrigger
                key={mod.key}
                value={mod.key}
                className="flex items-center gap-2 px-5 py-2 text-blue-900 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800 rounded-lg shadow-sm"
              >
                {mod.icon}
                <span className="font-medium">{mod.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {modules.map((mod) => (
            <TabsContent key={mod.key} value={mod.key}>
              <div className="grid md:grid-cols-2 gap-8">
                {mod.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-white rounded-xl p-6 flex flex-col shadow-md border border-blue-100"
                  >
                    <h3 className="font-semibold text-lg text-blue-700 mb-2">
                      {feature.title}
                    </h3>
                    <img
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      className="rounded-lg shadow mb-4 object-contain h-52 w-full bg-gray-50 border cursor-pointer"
                      loading="lazy"
                      draggable={false}
                      onClick={() => handleImageClick(feature.imageSrc)}
                    />
                    <p className="text-gray-700 text-[15px]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SystemModulesSection;

