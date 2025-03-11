import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Início");

  const menuItem = {
    Início: "#Início",
    Equipe: "#Equipe",
    Títulos: "#Títulos",
  };

  return (
    <header className="fixed top-0 bg-[#e8f1f2] w-[90%] mx-[5%] flex items-center rounded-b-2xl shadow-lg font-poppins z-50">
      <div className="bg-[#0B2D4B] w-full h-[60px] rounded-2xl mt-[10px] relative">
        <div className="mx-auto flex items-center h-full w-full px-4">
          {/* Logo */}
          <img src="/assets/logo/logo.png" alt="logo" className="h-[30px]" />

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            {Object.keys(menuItem).map((item) => (
              <a
                key={item}
                href={menuItem[item]}
                className={`hover:text-gray-300 ${
                  activeItem === item ? "text-white" : "text-white opacity-50"
                }`}
                onClick={() => setActiveItem(item)}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Botão "Saiba Mais" + Ícone do Menu Mobile */}
          <div className="ml-auto flex items-center gap-4">
            <button className="bg-[#FDCB39] px-2 py-1 rounded-xl text-[#0B2D4B] text-[15px]">
              Saiba Mais
            </button>

            {/* Botão do Menu Mobile */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col space-y-2 bg-[#0B2D4B] text-white p-4 rounded-2xl absolute top-[70px] right-5 w-[200px] shadow-lg">
            {Object.keys(menuItem).map((item) => (
              <a
                key={item}
                href={menuItem[item]}
                className={`hover:text-gray-300 ${
                  activeItem === item ? "text-white" : "text-white opacity-50"
                }`}
                onClick={() => {
                  setActiveItem(item);
                  setMenuOpen(false);
                }}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
