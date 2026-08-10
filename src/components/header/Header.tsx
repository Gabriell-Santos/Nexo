import { useState } from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle, MdPerson } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../contexts";

export function Header() {
  const [hamburgermenu, setHamburgermenu] = useState(false);
  const { userAuth } = useContext(AuthContext);

  const closeMenu = () => setHamburgermenu(false);

  return (
    <header className="flex items-center w-full h-16 justify-around px-8 py-3 from-purple-50 to-white shadow-md border-b-2 border-purple-200 relative">
      <h2 className="text-3xl font-bold text-purple-600 hover:text-purple-700 transition-colors duration-300">
        <Link
          to={"/"}
          className="hover:scale-105 inline-block transition-transform"
        >
          Nexo
        </Link>
      </h2>

      <button
        className="block md:hidden text-purple-600 text-3xl hover:text-purple-700 transition-colors"
        onClick={() => setHamburgermenu(!hamburgermenu)}
        aria-label="Menu"
      >
        {hamburgermenu ? "✕" : "☰"}
      </button>

      {/* MENU DE NAVEGAÇÃO */}
      <nav
        className={`
          ${hamburgermenu ? "flex" : "hidden"}
          md:flex 
          flex-col md:flex-row 
          absolute md:relative 
          top-16 md:top-auto 
          left-0 md:left-auto 
          w-full md:w-auto 
          bg-white md:bg-transparent 
          shadow-lg md:shadow-none 
          p-6 md:p-0 
          gap-6 md:gap-10 
          items-center 
          text-lg
          border-t-2 md:border-t-0 
          border-purple-200
          z-50
        `}
      >
        <Link
          to={"/courses"}
          className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 hover:scale-105 hover:underline underline-offset-4 decoration-purple-400"
          onClick={closeMenu}
        >
          Cursos
        </Link>

        <Link
          to={"/mycourses"}
          className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 hover:scale-105 hover:underline underline-offset-4 decoration-purple-400"
          onClick={closeMenu}
        >
          Meus Cursos
        </Link>

        <div className="flex items-center gap-2">
          {/* Ícone */}
          <div
            className="p-1 rounded-full hover:bg-purple-100 transition-all duration-300 cursor-pointer"
            onClick={closeMenu}
          >
            {userAuth ? (
              <Link to={"/account"}>
                <MdPerson
                  className="text-purple-600 hover:text-purple-700 transition-colors"
                  size={34}
                />
              </Link>
            ) : (
              <Link to={"/signup"}>
                <MdAccountCircle
                  className="text-purple-400 hover:text-purple-600 transition-colors"
                  size={34}
                />
              </Link>
            )}
          </div>

          {userAuth ? (
            <span className="text-sm text-gray-700 whitespace-nowrap ">
              👋 Olá
              <span className="text-purple-600 font-medium pl-1 ">
                {userAuth.name || "Usuário"}
              </span>
            </span>
          ) : (
            <span className="text-sm text-gray-500 whitespace-nowrap">
              Olá Visitante
            </span>
          )}
        </div>
      </nav>
    </header>
  );
}
