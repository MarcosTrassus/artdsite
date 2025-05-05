
const FooterSection = () => (
  <footer className="w-full bg-white/60 py-6 flex flex-col items-center font-poppins mt-10 border-t">
    <div className="mb-2 text-blue-800 font-bold font-montserrat">
      Sistema de Gestão para Lojas de Aluguel de Roupas - Trassus Digital
    </div>
    <div className="text-gray-500 text-sm mb-2 flex flex-row gap-4">
      <a href="mailto:contato@trassusdigital.com.br" className="hover:text-blue-600 transition">contato@trassusdigital.com.br</a>
      <span>|</span>
      <a href="https://wa.me/5521985694910" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition">
        WhatsApp 21 98569-4910
      </a>
    </div>
    <div className="text-gray-400 text-xs">&copy; {new Date().getFullYear()} Trassus Digital. Todos os direitos reservados.</div>
  </footer>
);

export default FooterSection;
