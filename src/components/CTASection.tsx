
const CTASection = () => (
  <section className="w-full py-16 mt-10 flex flex-col items-center bg-gradient-to-r from-blue-100 to-purple-100">
    <h2 className="text-2xl md:text-3xl font-bold text-blue-800 font-montserrat mb-3">
      Pronto para transformar sua loja?
    </h2>
    <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
      Fale com a gente agora mesmo via WhatsApp ou solicite uma demonstração personalizada do sistema.
    </p>
    <a
      href="https://wa.me/5511966118510"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 hover:bg-green-600 text-white px-10 py-3 rounded-full text-lg font-semibold shadow transition"
    >
      Quero conversar pelo WhatsApp
    </a>
  </section>
);

export default CTASection;
