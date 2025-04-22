import React, { useState } from "react";
import {
  User,
  Users,
  FilePlus,
  FileText,
  Package,
  List,
  Briefcase,
  Book,
  Settings,
  Truck,
  Calendar,
  MapPin,
  ShoppingCart,
  DollarSign,
  Banknote,
  TrendingUp,
  ChartLine,
  ChartPie,
  Archive,
  Phone,
  Mail,
  Info,
  Search,
  Box,
  Building,
} from "lucide-react";
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
        icon: <Users className="text-blue-600 mr-2" />,
      },
      {
        title: "Empresa",
        description:
          "A tela de Empresa permite o cadastro e a gestão das informações da empresa responsável pelo sistema. Nela, são registrados dados essenciais como razão social, nome fantasia, CNPJ, inscrição estadual, endereço, telefone, e-mail, além de logotipo e configurações complementares. Essas informações são utilizadas em relatórios, contratos, comprovantes e demais interações institucionais dentro do sistema, garantindo que os documentos reflitam corretamente a identidade da empresa.",
        imageAlt: "Tela de Cadastro de Empresa",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Cadastro/empresa_dados.png",
        icon: <Briefcase className="text-fuchsia-600 mr-2" />,
      },
      {
        title: "Prospect",
        description:
          "A tela de Prospect permite registrar os dados de possíveis clientes que demonstraram interesse na loja, mas que ainda não realizaram nenhum contrato. Nela é possível cadastrar informações básicas como nome, CPF, endereço, contato, evento de interesse e observações, além de um acompanhamento detalhado por meio da aba Agenda.",
        imageAlt: "Tela de Prospect",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Cadastro/prospect_dados.png",
        icon: <Info className="text-rose-600 mr-2" />,
      },
      {
        title: "Acervo",
        description:
          "A tela de Acervo é utilizada para o cadastro e controle de itens disponíveis para aluguel. Cada registro contém informações detalhadas como setor, modelo, cor, tamanho, tecido, categoria e valor de locação. Também é possível incluir observações, custo, estoque disponível e uma imagem ilustrativa do item.",
        imageAlt: "Tela de Acervo",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Cadastro/acervo_detalhe.png",
        icon: <Package className="text-orange-600 mr-2" />,
      },
      {
        title: "Tipo de Acervo",
        description:
          "A tela Tipo de Acervo permite o cadastro das categorias utilizadas para classificar os itens disponíveis no sistema. Cada tipo possui uma sigla identificadora, descrição, setor relacionado (como feminino, masculino, noivas, etc.) e o gênero correspondente. Essas categorias ajudam a organizar o acervo, facilitando a busca e o agrupamento de itens nas demais telas do sistema.",
        imageAlt: "Tela Tipo de Acervo",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Cadastro/tipo_acervo.png",
        icon: <List className="text-yellow-500 mr-2" />,
      },
      {
        title: "Atendentes",
        description:
          "A tela de Atendentes permite o cadastro dos colaboradores responsáveis pelo atendimento na loja. Além dos dados pessoais e de contato, a tela permite acompanhar as comissões mensais geradas e os contratos realizados por cada atendente.",
        imageAlt: "Tela de Cadastro de Atendentes",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Cadastro/atendente_cadastro.png",
        icon: <User className="text-teal-600 mr-2" />,
      },
      {
        title: "Fornecedores",
        description:
          "A tela de Fornecedores permite o cadastro e a gestão dos parceiros comerciais responsáveis pelo fornecimento de produtos ou serviços. Nela são registrados dados como nome, CNPJ, IE, endereço, contatos, data de cadastro e status de atividade. Também é possível consultar o histórico de compras e visualizar os lançamentos financeiros vinculados ao fornecedor.",
        imageAlt: "Tela de Cadastro de Fornecedores",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Cadastro/fornecedor_cadastro.png",
        icon: <Phone className="text-sky-600 mr-2" />,
      },
      {
        title: "Listagem de Eventos",
        description:
          "A tela de Listagem de Eventos é utilizada para organizar os eventos sociais de clientes, como casamentos, aniversários e formaturas. Permite registrar informações detalhadas sobre os noivos, familiares, data do evento e contatos, além de controlar a lista de participantes confirmados ou convidados.",
        imageAlt: "Tela de Listagem de Eventos",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Cadastro/Lista Eventos_1.png",
        icon: <Calendar className="text-green-700 mr-2" />,
      },
      {
        title: "Senhas",
        description:
          "A tela de Senhas é utilizada para cadastrar e controlar os usuários que acessam o sistema. Nela é possível definir o nome, senha, perfil (como Gerente ou Administrador), nome de usuário e permissões específicas de ações como editar, pesquisar, excluir, imprimir e criar novos registros.",
        imageAlt: "Tela de Senhas",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Cadastro/Senha.png",
        icon: <Settings className="text-gray-700 mr-2" />,
      },
      {
        title: "Configurações",
        description:
          "A tela de Configurações permite definir os principais parâmetros do sistema, como dados da empresa, endereços, logotipos e informações fiscais. Essas configurações são utilizadas em relatórios, documentos fiscais, DANFE e contratos.",
        imageAlt: "Tela de Configurações",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Cadastro/Parametros.png",
        icon: <Settings className="text-lime-700 mr-2" />,
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
        icon: <FileText className="text-blue-700 mr-2" />,
      },
      {
        title: "Tipo de Eventos",
        description:
          "A tela Tipo de Eventos é utilizada para organizar os diferentes tipos de ocasiões vinculadas aos contratos de locação. Ela permite que o sistema identifique o motivo da locação (ex: Casamento, Formatura, Jantar) e relacione com relatórios estatísticos e operacionais, oferecendo uma visão detalhada do perfil e do comportamento dos clientes.",
        imageAlt: "Tela de Tipo de Eventos",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Operacional/TipoEventos.png",
        icon: <List className="text-orange-600 mr-2" />,
      },
      {
        title: "Setores",
        description:
          "A tela Setores é utilizada para classificar os segmentos de peças disponíveis no acervo da loja, como Feminino, Masculino, Noivas, Damas, etc. Esses setores organizam a estrutura do sistema e permitem que o controle e a pesquisa de peças sejam feitos de forma mais precisa.",
        imageAlt: "Tela de Setores",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Operacional/Setores.png",
        icon: <MapPin className="text-rose-500 mr-2" />,
      },
      {
        title: "Venda",
        description:
          "A tela Venda é utilizada para registrar a comercialização de peças do acervo. Ao contrário da locação, a venda representa a saída definitiva do item, sendo ideal para itens em desuso ou promoções.",
        imageAlt: "Tela de Venda",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Operacional/Venda.png",
        icon: <ShoppingCart className="text-green-500 mr-2" />,
      },
      {
        title: "Backup",
        description:
          "A tela Backup permite criar uma cópia de segurança do sistema, garantindo proteção contra perdas de dados. O usuário pode escolher o local onde deseja salvar o arquivo de backup e optar por compactá-lo com o WinRAR.",
        imageAlt: "Tela de Backup",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Operacional/Backup.png",
        icon: <Archive className="text-gray-700 mr-2" />,
      },
      {
        title: "Agenda",
        description:
          "A tela Agenda é utilizada para organizar os atendimentos e compromissos com clientes. Permite acompanhar, agendar e registrar o andamento de interações como contatos, retornos, confirmações e visitas.",
        imageAlt: "Tela de Agenda",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Operacional/Agenda.png",
        icon: <Calendar className="text-violet-600 mr-2" />,
      },
    ],
  },
  {
    key: "financeiro",
    label: "Financeiro",
    icon: <DollarSign className="mr-2" />,
    features: [
      {
        title: "Contas Correntes",
        description:
          "A tela Contas Correntes é usada para cadastrar e controlar as contas bancárias da empresa. Nela, é possível inserir dados essenciais como banco, agência, número da conta, endereço, contatos e definir o valor de cheque especial disponível.",
        imageAlt: "Tela de Contas Correntes",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Financeiro/ContasCorrentes.png",
        icon: <Banknote className="text-green-600 mr-2" />,
      },
      {
        title: "Movimentações",
        description:
          "A tela Movimentações permite consultar e acompanhar todas as entradas e saídas financeiras da empresa, como receitas, despesas, pagamentos e recebimentos.",
        imageAlt: "Tela de Movimentações",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Financeiro/Movimentacoes_Filtros.png",
        icon: <TrendingUp className="text-violet-600 mr-2" />,
      },
      {
        title: "Projeção de Receita",
        description:
          "A tela Projeção de Receita permite visualizar os valores previstos a serem recebidos pela empresa em determinado período. É uma ferramenta essencial para o planejamento financeiro e acompanhamento de metas.",
        imageAlt: "Tela de Projeção de Receita",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Financeiro/Projecao_Receita.png",
        icon: <ChartLine className="text-blue-600 mr-2" />,
      },
      {
        title: "Despesas",
        description:
          "A tela Despesas é utilizada para registrar todos os gastos da empresa, como pagamentos a fornecedores, contas a pagar, compras de materiais, entre outros.",
        imageAlt: "Tela de Despesas",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Financeiro/Despesas.png",
        icon: <DollarSign className="text-red-600 mr-2" />,
      },
      {
        title: "Plano de Contas",
        description:
          "A tela Plano de Contas permite organizar os centros de custo e categorias financeiras da empresa, separando despesas e receitas por tipo e natureza. É essencial para o controle contábil e financeiro.",
        imageAlt: "Tela de Plano de Contas",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Financeiro/Plano_Contas.png",
        icon: <ChartPie className="text-amber-600 mr-2" />,
      },
      {
        title: "Compras",
        description:
          "A tela Compras é usada para registrar aquisições de produtos e materiais junto aos fornecedores, permitindo o controle de custo e lançamento de contas a pagar.",
        imageAlt: "Tela de Compras",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Financeiro/Compras.png",
        icon: <ShoppingCart className="text-lime-600 mr-2" />,
      },
    ],
  },
  {
    key: "pesquisa",
    label: "Pesquisa",
    icon: <Search className="mr-2" />,
    features: [
      {
        title: "Pesquisa de Clientes",
        description:
          "A tela Pesquisa de Clientes permite localizar rapidamente registros de clientes cadastrados no sistema. Com filtros como nome, CPF, cidade e estado, facilita o acesso a informações essenciais para atendimento, gestão de relacionamento e controle comercial.",
        imageAlt: "Tela de Pesquisa de Clientes",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Pesquisa/Pesquisa_Clientes.png",
        icon: <Users className="text-blue-600 mr-2" />,
      },
      {
        title: "Pesquisa de Atendentes",
        description:
          "A tela Pesquisa de Atendentes permite visualizar, localizar e selecionar os atendentes cadastrados no sistema. É especialmente útil em processos de acesso a contratos fechados, comissões recebidas e demais dados da tela do Atendente.",
        imageAlt: "Tela de Pesquisa de Atendentes",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Pesquisa/Pesquisa_Atendentes.png",
        icon: <User className="text-teal-600 mr-2" />,
      },
      {
        title: "Pesquisa de Contratos",
        description:
          "A tela Pesquisa de Contratos permite consultar de forma detalhada todos os contratos cadastrados no sistema. Através de filtros como nome do cliente, CPF, atendente, tipo de evento, situação, período e datas específicas, o usuário pode localizar com precisão os registros desejados. É uma ferramenta fundamental para o controle operacional, acompanhamento de atendimentos e análise gerencial do fluxo de eventos.",
        imageAlt: "Tela de Pesquisa de Contratos",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Pesquisa/Compras.png",
        icon: <FileText className="text-orange-600 mr-2" />,
      },
      {
        title: "Pesquisa de Acervo",
        description:
          "A tela Pesquisa de Acervo é usada para registrar aquisições de produtos e materiais junto aos fornecedores, permitindo o controle de custo e lançamento de contas a pagar.",
        imageAlt: "Tela de Pesquisa de Acervo",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Pesquisa/Pesquisa_Acervo.png",
        icon: <Archive className="text-gray-700 mr-2" />,
      },
      {
        title: "Pesquisa de Fornecedores",
        description:
          "A tela Pesquisa de Fornecedores permite consultar e visualizar rapidamente todos os fornecedores cadastrados no sistema. A ferramenta é essencial para o gerenciamento de compras, contratos e controle de relacionamento com os parceiros comerciais.",
        imageAlt: "Tela de Pesquisa de Fornecedores",
        imageSrc:
          "https://monitor.aluguelderoupas.trassusdigital.com.br/Manual/Imagens/Pesquisa/Pesquisa_Fornecedor.png",
        icon: <Briefcase className="text-fuchsia-600 mr-2" />,
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
              {mod.features.length === 0 ? (
                <div className="text-gray-500 text-center py-20 text-lg">
                  Módulo em construção. Em breve você terá mais informações por aqui!
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {mod.features.map((feature) => (
                    <div
                      key={feature.title}
                      className="bg-white rounded-xl p-6 flex flex-col shadow-md border border-blue-100"
                    >
                      <h3 className="font-semibold text-lg text-blue-700 mb-2 flex items-center">
                        {feature.icon && feature.icon}
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
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SystemModulesSection;
