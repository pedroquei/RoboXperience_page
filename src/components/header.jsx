import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItem = {
    Início: "/",
    Sobre: "/About",
  };

  return (
    <header className="sticky top-0 bg-[#e8f1f2]  mx-[5vw] flex items-center rounded-b-2xl shadow-lg font-poppins z-50">
      <div className="bg-[#0B2D4B] w-full h-[60px] rounded-2xl mt-[10px] relative">
        <div className="mx-auto flex items-center h-full w-full px-4">
          <img src="/assets/logo/logo.png" alt="logo" className="h-[30px]" />

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            {Object.entries(menuItem).map(([label, path]) => (
              <NavLink
                key={label}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-white"
                    : "text-white opacity-50 hover:text-gray-300"
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <button
              className="hidden md:block bg-[#FDCB39] px-2 py-1 rounded-xl text-[#0B2D4B] text-md font-regular"
              onClick={() => navigate("/login")}
            >
              Acessar plataforma
            </button>

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
          <nav className="md:hidden flex flex-col space-y-2 bg-[#0B2D4B] text-white p-4 rounded-2xl absolute top-[70px] right-1 w-[200px] shadow-lg">
            {Object.entries(menuItem).map(([label, path]) => (
              <NavLink
                key={label}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-white"
                    : "text-white opacity-50 hover:text-gray-300"
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
