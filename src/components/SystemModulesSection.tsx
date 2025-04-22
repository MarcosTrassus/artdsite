import React, { useState } from "react";
import { User, Truck, Lock, Settings, FileKey, List, Users, Package, Calendar } from "lucide-react";
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
      {
        title: "Prospect",
        description:
          "A tela de Prospect permite registrar os dados de possíveis clientes que demonstraram interesse na loja, mas que ainda não realizaram nenhum contrato. Nela é possível cadastrar informações básicas como nome, CPF, endereço, contato, evento de interesse e observações, além de um acompanhamento detalhado por meio da aba Agenda.",
        imageAlt: "Tela de Prospect",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Cadastro/prospect_dados.png",
      },
      {
        title: "Acervo",
        description:
          "A tela de Acervo é utilizada para o cadastro e controle de itens disponíveis para aluguel. Cada registro contém informações detalhadas como setor, modelo, cor, tamanho, tecido, categoria e valor de locação. Também é possível incluir observações, custo, estoque disponível e uma imagem ilustrativa do item.",
        imageAlt: "Tela de Acervo",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Cadastro/acervo_detalhe.png",
      },
      {
        title: "Tipo de Acervo",
        description:
          "A tela Tipo de Acervo permite o cadastro das categorias utilizadas para classificar os itens disponíveis no sistema. Cada tipo possui uma sigla identificadora, descrição, setor relacionado (como feminino, masculino, noivas, etc.) e o gênero correspondente. Essas categorias ajudam a organizar o acervo, facilitando a busca e o agrupamento de itens nas demais telas do sistema.",
        imageAlt: "Tela Tipo de Acervo",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Cadastro/tipo_acervo.png",
      },
      {
        title: "Atendentes",
        description:
          "A tela de Atendentes permite o cadastro dos colaboradores responsáveis pelo atendimento na loja. Além dos dados pessoais e de contato, a tela permite acompanhar as comissões mensais geradas e os contratos realizados por cada atendente.",
        imageAlt: "Tela de Cadastro de Atendentes",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Cadastro/atendente_cadastro.png",
      },
      {
        title: "Fornecedores",
        description:
          "A tela de Fornecedores permite o cadastro e a gestão dos parceiros comerciais responsáveis pelo fornecimento de produtos ou serviços. Nela são registrados dados como nome, CNPJ, IE, endereço, contatos, data de cadastro e status de atividade. Também é possível consultar o histórico de compras e visualizar os lançamentos financeiros vinculados ao fornecedor.",
        imageAlt: "Tela de Cadastro de Fornecedores",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Cadastro/fornecedor_cadastro.png",
      },
      {
        title: "Listagem de Eventos",
        description:
          "A tela de Listagem de Eventos é utilizada para organizar os eventos sociais de clientes, como casamentos, aniversários e formaturas. Permite registrar informações detalhadas sobre os noivos, familiares, data do evento e contatos, além de controlar a lista de participantes confirmados ou convidados.",
        imageAlt: "Tela de Listagem de Eventos",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Cadastro/Lista Eventos_1.png",
      },
      {
        title: "Senhas",
        description:
          "A tela de Senhas é utilizada para cadastrar e controlar os usuários que acessam o sistema. Nela é possível definir o nome, senha, perfil (como Gerente ou Administrador), nome de usuário e permissões específicas de ações como editar, pesquisar, excluir, imprimir e criar novos registros.",
        imageAlt: "Tela de Senhas",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Cadastro/Senha.png",
      },
      {
        title: "Configurações",
        description:
          "A tela de Configurações permite definir os principais parâmetros do sistema, como dados da empresa, endereços, logotipos e informações fiscais. Essas configurações são utilizadas em relatórios, documentos fiscais, DANFE e contratos.",
        imageAlt: "Tela de Configurações",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Cadastro/Parametros.png",
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
      {
        title: "Venda",
        description:
          "A tela Venda é utilizada para registrar a comercialização de peças do acervo. Ao contrário da locação, a venda representa a saída definitiva do item, sendo ideal para itens em desuso ou promoções.",
        imageAlt: "Tela de Venda",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Operacional/Venda.png",
      },
      {
        title: "Backup",
        description:
          "A tela Backup permite criar uma cópia de segurança do sistema, garantindo proteção contra perdas de dados. O usuário pode escolher o local onde deseja salvar o arquivo de backup e optar por compactá-lo com o WinRAR.",
        imageAlt: "Tela de Backup",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Operacional/Backup.png",
      },
      {
        title: "Agenda",
        description:
          "A tela Agenda é utilizada para organizar os atendimentos e compromissos com clientes. Permite acompanhar, agendar e registrar o andamento de interações como contatos, retornos, confirmações e visitas.",
        imageAlt: "Tela de Agenda",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Operacional/Agenda.png",
      },
    ],
  },
  {
    key: "configuracoes",
    label: "Configurações",
    icon: <Settings className="mr-2" />,
    features: [
      {
        title: "Senhas",
        description:
          "A tela de Senhas é utilizada para cadastrar e controlar os usuários que acessam o sistema. Nela é possível definir o nome, senha, perfil (como Gerente ou Administrador), nome de usuário e permissões específicas de ações como editar, pesquisar, excluir, imprimir e criar novos registros.",
        imageAlt: "Tela de Senhas",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Cadastro/Senha.png",
      },
      {
        title: "Configurações",
        description:
          "A tela de Configurações permite definir os principais parâmetros do sistema, como dados da empresa, endereços, logotipos e informações fiscais. Essas configurações são utilizadas em relatórios, documentos fiscais, DANFE e contratos.",
        imageAlt: "Tela de Configurações",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Cadastro/Parametros.png",
      },
    ],
  },
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
