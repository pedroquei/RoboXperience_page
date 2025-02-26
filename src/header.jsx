import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "./assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Início");

  const menuItem = {
    Início: "#Início",
    Equipe: "#Equipe",
    Títulos: "#Títulos",
  };

  return (
    <header className="bg-[#0B2D4B] shadow-md rounded-2xl h-[60px] mx-[10%] my-[10px] flex items-center relative font-poppins">
      <div className="container mx-auto flex items-center h-full w-full px-4">
        {/* Logo */}
        <img src={logo} alt="logo" className="h-[30px]" />

        {/* Menu Desktop*/}
        <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          {["Início", "Equipe", "Títulos"].map((item) => (
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
          <button className="bg-[#FDCB39] px-2 py-1 rounded-md text-[#0B2D4B] font-semibold">
            Saiba Mais
          </button>

          {/* Botão do Menu Mobile*/}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav className="md:hidden mt-2 flex flex-col space-y-2 bg-[#0B2D4B] text-white p-4 rounded-2xl absolute top-[60px] left-0 right-0">
          {["Início", "Equipe", "Títulos"].map((item) => (
            <a
              key={item}
              href={menuItem[item]}
              className={`hover:text-gray-300 ${
                activeItem === item ? "text-white" : "text-white opacity-50"
              }`}
              onClick={() => setActiveItem(item) & setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
