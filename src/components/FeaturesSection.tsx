
import { Check, FileText, User, List, Calendar, Settings } from "lucide-react";

const features = [
  {
    icon: List,
    title: "Controle de Aluguéis de Roupas",  // Updated text here
    description: "Gerencie todos os contratos e ordens de aluguel em tempo real."
  },
  {
    icon: User,
    title: "Gestão de Clientes",
    description: "Cadastre e mantenha históricos completos dos seus clientes."
  },
  {
    icon: Calendar,
    title: "Agenda de Retiradas e Devoluções",
    description: "Visualize facilmente as datas de retirada e devolução das peças."
  },
  {
    icon: FileText,
    title: "Emissão de Contratos",
    description: "Gere contratos personalizados e automatizados para locações."
  },
  {
    icon: Check,
    title: "Estoque Controlado",
    description: "Controle o estoque de peças disponíveis para locação."
  },
  {
    icon: Settings,
    title: "Relatórios & Financeiro",
    description: "Acompanhe receitas, despesas e gere relatórios detalhados."
  },
];

const FeaturesSection = () => (
  <section className="section-padding bg-gradient-to-r from-blue-50 via-white to-purple-50 w-full">
    <h2 className="text-2xl md:text-3xl font-bold text-purple-700 text-center mb-10 font-montserrat">
      Funcionalidades Principais
    </h2>
    <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-4 grid-cols-1">
      {/* Coluna de imagem lateral apenas para telas médias/grandes */}
      <div className="hidden md:flex col-span-1 items-start justify-center">
        <img
          src="/lovable-uploads/ee3fbf54-d133-4624-a7d9-fb0a3c7ae617.png" 
          alt="Sistema de Aluguel de Roupas"
          className="rounded-xl shadow-lg max-w-[90%] mt-4"
          draggable={false}
        />
      </div>
      {/* Cards de funcionalidades */}
      <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white/70 glass-morphism rounded-xl p-6 flex flex-col items-center shadow hover:scale-105 transition-transform"
          >
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full mb-3">
              <feature.icon size={28} />
            </div>
            <h3 className="font-semibold text-lg mb-1 font-montserrat">{feature.title}</h3>
            <p className="text-gray-600 text-center text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;

