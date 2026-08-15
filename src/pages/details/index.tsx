import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { VideosProps } from "../../api";
import { getVideosId } from "../../api";
import { Link } from "react-router-dom";
export function Details() {
  const { id } = useParams();
  const [detailsVideo, setDetailsVideo] = useState<VideosProps | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Função para buscar os detalhes do vídeo com base no ID
    getVideosId(id as string)
      .then((video) => {
        if (video) {
          setDetailsVideo(video);
        }
      })
      .catch((error) => {
        console.log("Erro ao buscar detalhes do vídeo:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Detalhe sobre o Vídeo
      </h1>
      {loading && (
        <div className="mt-6">
          <p className="text-fuchsia-600-600 text-center">
            Carregando detalhes
          </p>
        </div>
      )}

      {detailsVideo && (
        <main className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <img
            src={detailsVideo.thumbnail}
            alt={detailsVideo.title}
            className="w-full h-72 object-cover"
          />

          <div className="p-8 text-center mt-2 mb-2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-9">
              {detailsVideo.title}
            </h2>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full">
              <a
                href={detailsVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-purple-600 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Assistir no YouTube
              </a>
              <Link
                to="/courses"
                className="w-full sm:w-auto text-center bg-purple-600 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Voltar
              </Link>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
