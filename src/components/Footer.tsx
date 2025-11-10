import { Instagram, MessageCircle } from "lucide-react";
import "../style/Footer.css";
import logo from "../assets/IA sem fundo.png"; // coloque a logo nessa pasta

function Footer() {
    return (
        <footer className="bg-[#263238] text-white py-8 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm space-y-4 sm:space-y-0">
                <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-8">
                    {/* Ícones de contato */}
                    <div className="flex space-x-6 items-center">
                            {/* WhatsApp */}
                        <a
                            href="https://api.whatsapp.com/send/?phone=5531971912061&text&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp da Casa Materna"
                            className="p-2 rounded-full bg-[#25D366] hover:bg-[#20b857] transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            <MessageCircle className="h-6 w-6 text-white hover:scale-110 transition-transform duration-200" />
                        </a>

                            {/* Instagram */}
                        <a
                            href="https://www.instagram.com/casamaternabh/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram da Casa Materna"
                            className="p-2 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            <Instagram className="h-6 w-6 text-white hover:scale-110 transition-transform duration-200" />
                        </a>
                    </div>

                    {/* Direitos autorais */}
                    <p className="text-xs sm:text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Casa Materna. Todos os direitos reservados.
                    </p>
                </div>

                {/* Logotipo */}
                <div className="flex flex-col items-center sm:items-end">
                    <img
                        src={logo}
                        alt="Logo Casa Materna"
                        className="h-16 w-auto object-contain mb-1 brightness-110 contrast-125 drop-shadow-lg z-10" 
                        />
                </div>
            </div>
        </footer>
    );
}

export default Footer;