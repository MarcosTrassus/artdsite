
import React from "react";

const screenshots = [
  {
    src: "/lovable-uploads/5e35884e-113d-48dd-9c96-5004f214bff1.png",
    alt: "Tela de Acervo - Cadastro de Roupas",
    label: "Acervo",
  },
  {
    src: "/lovable-uploads/8c5eb524-6521-427f-9a28-401c0d7006a1.png",
    alt: "Tela de Clientes - Cadastro de Cliente",
    label: "Clientes",
  },
  {
    src: "/lovable-uploads/42bb2291-440e-4f24-b9d4-409036741eef.png",
    alt: "Tela de Fornecedor - Cadastro e Compras",
    label: "Fornecedor",
  },
  {
    src: "/lovable-uploads/dc45acd7-aea0-4335-ba29-4d9620622ca5.png",
    alt: "Tela de Lista de Eventos",
    label: "Lista de Eventos",
  },
];

const ScreenshotsSection = () => (
  <section className="w-full bg-gradient-to-r from-purple-50 via-white to-blue-50 py-14">
    <h2 className="text-2xl md:text-3xl font-bold text-blue-700 text-center mb-8 font-montserrat">
      Exemplos das Telas do Sistema
    </h2>
    <div className="max-w-6xl mx-auto px-2">
      <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-blue-200">
        {screenshots.map((shot, idx) => (
          <div
            key={idx}
            className="min-w-[320px] max-w-xs flex-shrink-0 flex flex-col items-center bg-white/80 rounded-2xl shadow-lg p-3 border border-blue-100"
          >
            <img
              src={shot.src}
              alt={shot.alt}
              className="rounded-lg shadow w-full max-h-64 object-contain cursor-pointer transition-transform hover:scale-105"
              draggable={false}
              loading="lazy"
            />
            <span className="mt-3 text-base text-blue-600 font-semibold font-montserrat">{shot.label}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-600 text-sm mt-6 mx-auto max-w-xl">
        Confira abaixo alguns exemplos das principais telas do sistema — cadastro de roupas, clientes, fornecedores e gestão de eventos.
      </p>
    </div>
  </section>
);

export default ScreenshotsSection;

