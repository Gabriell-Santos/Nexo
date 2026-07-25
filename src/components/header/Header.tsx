import { useState } from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle, MdPerson } from "react-icons/md";

export function Header() {
  const [login, setLogin] = useState(true);

  return (
    <header className="flex items-center w-full h-16 justify-around px-8 py-3 bg-gradient-to-r from-purple-50 to-white shadow-md border-b-2 border-purple-200">
      <h2 className="text-3xl font-bold text-purple-600 hover:text-purple-700 transition-colors duration-300">
        <Link
          to={"/"}
          className="hover:scale-105 inline-block transition-transform"
        >
          Nexo
        </Link>
      </h2>

      <nav className="flex justify-between gap-10 items-center text-lg">
        <Link
          to={"/courses"}
          className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 hover:scale-105 hover:underline underline-offset-4 decoration-purple-400"
        >
          Cursos
        </Link>
        <Link
          to={"/mycourses"}
          className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 hover:scale-105 hover:underline underline-offset-4 decoration-purple-400"
        >
          Meus Cursos
        </Link>

        <div
          className="ml-4 p-1 rounded-full hover:bg-purple-100 transition-all duration-300 cursor-pointer"
          onClick={() => setLogin(!login)}
        >
          {login ? (
            <MdPerson
              className="text-purple-600 hover:text-purple-700 transition-colors"
              size={34}
            />
          ) : (
            <MdAccountCircle
              className="text-purple-400 hover:text-purple-600 transition-colors"
              size={34}
            />
          )}
        </div>
      </nav>
    </header>
  );
}
