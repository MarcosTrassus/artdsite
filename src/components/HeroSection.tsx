
import React, { useState } from "react";

const HeroSection = () => {
  const [imageError, setImageError] = useState(false);
  const heroImageUrl = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&h=800&q=80";
  const fallbackImageUrl = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80";

  const handleImageError = () => {
    console.log("Hero image failed to load, using fallback");
    setImageError(true);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <img 
        src={imageError ? fallbackImageUrl : heroImageUrl}
        alt="Dashboard Header" 
        className="w-full h-full object-cover object-center"
        onError={handleImageError}
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
            Monitor Aluguel de Roupas
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
