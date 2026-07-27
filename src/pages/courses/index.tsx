import { Input } from "../../components/ui/input/index";
import img from "../../assets/pexels-pavel-danilyuk-7942535.jpg";
import { IoSearchOutline } from "react-icons/io5";

export function Courses() {
  return (
    <div className="max-w-6xl mx-auto mt-2.5 px-4">
      {/* Campo de busca */}
      <div className="relative max-w-xl mx-auto mb-10">
        <IoSearchOutline
          size={22}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 mt-1"
        />
        <Input placeholder="Digite o curso que deseja" className="pl-12" />
      </div>

      {/* Lista de cursos */}
      <div>
        <h2 className="text-2xl font-medium text-center mb-8 text-gray-900 ">
          Segue alguns dos
          <span className="text-fuchsia-600"> nossos cursos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <section className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              src={img}
              alt="Imagem do curso de React"
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                React
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Curso de React para iniciantes
              </p>
              <div className="flex items-center justify-between">
                <button className="text-sm font-medium text-purple-600 hover:text-purple-700">
                  Saber mais
                </button>
                <button className="text-sm font-medium bg-purple-600 text-white px-4 py-1.5 rounded-lg hover:bg-purple-700">
                  Assistir
                </button>
              </div>
            </div>
          </section>
          <section className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              src={img}
              alt="Imagem do curso de React"
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                React
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Curso de React para iniciantes
              </p>
              <div className="flex items-center justify-between">
                <button className="text-sm font-medium text-purple-600 hover:text-purple-700">
                  Saber mais
                </button>
                <button className="text-sm font-medium bg-purple-600 text-white px-4 py-1.5 rounded-lg hover:bg-purple-700">
                  Assistir
                </button>
              </div>
            </div>
          </section>
          <section className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              src={img}
              alt="Imagem do curso de React"
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                React
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Curso de React para iniciantes
              </p>
              <div className="flex items-center justify-between">
                <button className="text-sm font-medium text-purple-600 hover:text-purple-700">
                  Saber mais
                </button>
                <button className="text-sm font-medium bg-purple-600 text-white px-4 py-1.5 rounded-lg hover:bg-purple-700">
                  Assistir
                </button>
              </div>
            </div>
          </section>
          <section className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              src={img}
              alt="Imagem do curso de React"
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                React
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Curso de React para iniciantes
              </p>
              <div className="flex items-center justify-between">
                <button className="text-sm font-medium text-purple-600 hover:text-purple-700">
                  Saber mais
                </button>
                <button className="text-sm font-medium bg-purple-600 text-white px-4 py-1.5 rounded-lg hover:bg-purple-700">
                  Assistir
                </button>
              </div>
            </div>
          </section>
          <section className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              src={img}
              alt="Imagem do curso de React"
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                React
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Curso de React para iniciantes
              </p>
              <div className="flex items-center justify-between">
                <button className="text-sm font-medium text-purple-600 hover:text-purple-700">
                  Saber mais
                </button>
                <button className="text-sm font-medium bg-purple-600 text-white px-4 py-1.5 rounded-lg hover:bg-purple-700">
                  Assistir
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
