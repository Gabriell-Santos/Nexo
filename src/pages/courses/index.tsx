import { Input } from "../../components/ui/input/index";
import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import type { VideosProps } from "../../api/index";
import { searchVideos } from "../../api/index";
import { Link } from "react-router-dom";

// Videos que vão aparecer assim que o usuario acessar a tela
const CATEGORIES = [
  {
    key: "programacao",
    label: "Programação",
    query: "curso de programação para iniciantes",
  },
  {
    key: "idiomas",
    label: "Idiomas",
    query: "curso de inglês para iniciantes",
  },
  { key: "marketing", label: "Marketing", query: "curso de marketing digital" },
  { key: "design", label: "Design", query: "curso de design gráfico" },
];

export function Courses() {
  const [categories, setCategories] = useState<VideosProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState<VideosProps[]>([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [viewSearch, setViewSearch] = useState(false);
  // Assim que carregar a página Vai carregar os videos demo
  useEffect(() => {
    async function loadCategoryCourses() {
      setLoading(true);
      const resultsCategorie = await Promise.all(
        CATEGORIES.map((item) => searchVideos(item.query)),
      );
      const Allvideos = resultsCategorie.flat();
      setCategories(Allvideos);
      setLoading(false);
    }
    loadCategoryCourses();
  }, []);

  // Função que vai buscar o tipo de video que o usuario digitou
  async function HandleSubmit() {
    if (!searchTerm.trim() || searchTerm.length === 0) {
      alert("Por favor, digite o nome do curso que deseja");
    }
    setViewSearch(true);

    const resultsVideo = await searchVideos(searchTerm);
    setSearchResults(resultsVideo);
    setViewSearch(false);
  }

  const IsVideos = searchTerm.trim().length > 0;
  const VideosUser = IsVideos ? searchResults : categories;

  return (
    <div className="max-w-6xl mx-auto mt-2.5 px-4">
      {/* Campo de busca */}
      <div className="max-w-xl mx-auto mb-10 flex gap-2 mt-4 ">
        <div className="relative flex-1">
          <IoSearchOutline
            size={22}
            className="absolute left-3 top-1/2 mt-1 -translate-y-1/2 text-purple-400"
          />
          <Input
            placeholder="Digite o curso que deseja"
            className="pl-12"
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") HandleSubmit();
            }}
          />
        </div>

        <button
          className="bg-purple-600
         text-white 
         font-medium
          px-6 
          rounded-lg
         hover:bg-purple-700 
         transition-colors"
          onClick={HandleSubmit}
        >
          Buscar
        </button>
      </div>

      {/* Lista de cursos */}
      <div>
        {!IsVideos ? (
          <h2 className="text-2xl font-medium text-center mb-8 text-gray-900">
            Segue alguns dos
            <span className="text-fuchsia-600"> nossos cursos</span>
          </h2>
        ) : viewSearch ? (
          <p className="text-2xl font-medium text-center mb-8 text-fuchsia-600">
            Loading....
          </p>
        ) : (
          <h2 className="text-2xl font-medium text-center mb-8 text-gray-900">
            Resultados para
            <span className="text-fuchsia-600"> "{searchTerm}"</span>
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Mostrando o loading */}
          {loading && (
            <p className="text-center text-gray-500 col-span-full">
              Carregando cursos...
            </p>
          )}
          {VideosUser.map((video) => (
            <section
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              key={video.id}
            >
              <img
                src={video.thumbnail}
                alt="Imagem do curso de React"
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {video.description}
                </p>
                <div className="flex items-center justify-between">
                  <button className="text-sm font-medium text-purple-600 hover:text-purple-700">
                    <Link to={`/details/${video.id}`}> Saber Mais </Link>
                  </button>

                  <a
                    className="text-sm font-medium bg-purple-600 text-white px-4 py-1.5 rounded-lg hover:bg-purple-700"
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Assistir
                  </a>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
