import {
  collection,
  query,
  orderBy,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import type { VideosProps } from "../../api";
import { useEffect, useState } from "react";
import { AuthContext } from "../../contexts/index";
import { useContext } from "react";
import { db } from "../../services/firebaseConnection";
import { toast } from "react-toastify";

export function Mycourses() {
  const { userAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [listVideos, setListVideos] = useState<VideosProps[]>([]);
  // Verifica se tem usuario
  useEffect(() => {
    if (!userAuth) {
      setLoading(false);
      return;
    }

    // referencia da coleção
    const videosRef = collection(db, "users", userAuth.id, "videos assistidos");
    // ordenar os dados
    const q = query(videosRef, orderBy("assistidoEm", "desc"));

    // Procesa os dados
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const listCourses: VideosProps[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        listCourses.push({
          id: doc.id,
          url: data.url,
          title: data.titulo,
          description: data.descricao,
          thumbnail: data.thumbnail,
        });
      });
      setListVideos(listCourses);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [userAuth]);

  // Função de deletar video do firebase
  async function DeleteVideo(idVideo: string) {
    if (!userAuth) {
      return;
    }
    const videoRef = doc(
      db,
      "users",
      userAuth.id,
      "videos assistidos",
      idVideo,
    );
    await deleteDoc(videoRef);
    toast.success("Deletado com Sucesso");
  }
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* TÍTULO */}
      {listVideos.length === 0 ? (
        <h2 className="text-sm sm:text-2xl justify-center font-bold text-gray-800 mb-9 flex items-center gap-2">
          <svg
            className="w-6 h-6 text-purple-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" />
          </svg>
          Ops Não tem nenhum curso salvo
        </h2>
      ) : (
        <h2 className="text-2xl justify-center  font-bold text-gray-800 mb-9 flex items-center gap-2">
          <svg
            className="w-6 h-6 text-purple-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" />
          </svg>
          Cursos Salvos
        </h2>
      )}

      {/* GRID DE CARDS */}
      {loading ? (
        <div className=" text-xl flex items-center justify-center mt-4 ">
          <h2>
            Carregando <span className="text-fuchsia-600">Informações</span>
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {listVideos.map((videoData) => (
            <div
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              key={videoData.id}
            >
              {/* IMAGEM */}
              <div
                className="relative group"
                onClick={() => window.open(videoData.url, "_blank")}
              >
                <img
                  src={videoData.thumbnail}
                  alt={videoData.title}
                  className="w-full h-44 object-cover"
                />
                {/* OVERLAY PLAY */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                  <span className="bg-white text-purple-600 p-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* CONTEÚDO */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 mb-1">
                  {videoData.title}
                </h3>

                <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                  {videoData.description}
                </p>

                {/* AÇÕES */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <a
                    href={videoData.url}
                    target="_blank"
                    className="text-xs font-medium text-purple-600 hover:text-purple-700 flex items-center gap-1 transition-colors"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Assistir
                  </a>

                  <button
                    onClick={() => DeleteVideo(videoData.id)}
                    className="text-red-400 hover:text-red-600 transition-colors p-1 rounded hover:bg-red-50"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
