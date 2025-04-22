
import { MessageCircle, FileText } from "lucide-react";

const HeroSection = () => (
  <section className="w-full flex flex-col items-center justify-center py-16 px-4 text-center bg-white/70 backdrop-blur rounded-b-3xl shadow-md">
    <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-blue-700 mb-4">
      Sistema de Gestão<br />para Lojas de Aluguel de Roupas
    </h1>
    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-8">
      Otimize seu negócio e simplifique o controle da sua loja de aluguel de roupas com emissões de contratos, gestão de clientes, estoque, caixa e muito mais!
    </p>
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <a
        href="https://wa.me/5511966118510"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition"
      >
        <MessageCircle className="w-5 h-5" />
        Falar no WhatsApp
      </a>
      <a
        href="#contato"
        className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-lg bg-purple-500 hover:bg-purple-600 text-white shadow-lg transition"
      >
        <FileText className="w-5 h-5" />
        Solicitar Demonstração
      </a>
    </div>
  </section>
);

export default HeroSection;
