
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <img 
        src="https://monitor.aluguelderoupas.trassusdigital.com.br/Imagem/header_dashboard_site.png" 
        alt="Dashboard Header" 
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
            Sistema de Gestão Empresarial
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Solução completa para otimizar seus processos e impulsionar seus resultados
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
