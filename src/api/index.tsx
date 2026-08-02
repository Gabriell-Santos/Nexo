import axios from "axios";

export interface VideosProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
}
// Função para buscar vídeos com base em uma consulta
export const searchVideos = async (query: string) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL_API = import.meta.env.VITE_API_URL;

  try {
    const response = await axios.get(`${URL_API}/search`, {
      params: {
        part: "snippet",
        type: "video",
        q: query,
        maxResults: 15,
        key: API_KEY,
        relevanceLanguage: "pt",
      },
    });

    const dataVideo: VideosProps[] = response.data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.medium.url,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    }));

    return dataVideo;
  } catch (error) {
    console.log("info erro " + error);
    return [];
  }
};

// Função para buscar detalhes de um vídeo com base no ID
export const getVideosId = async (id: string) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL_API = import.meta.env.VITE_API_URL;
  try {
    const response = await axios.get(`${URL_API}/videos`, {
      params: {
        part: "snippet",
        id: id,
        key: API_KEY,
      },
    });
    const item = response.data.items[0];
    if (!item) {
      return null;
    }
    return {
      id: item.id,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.medium.url,
      url: `https://www.youtube.com/watch?v=${item.id}`,
    };
  } catch (error) {
    console.log("info erro " + error);
    return null;
  }
};
