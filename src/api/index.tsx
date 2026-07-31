import axios from "axios";

export interface VideosProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
}

export const searchVideos = async (query: string) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL_API = import.meta.env.VITE_API_URL;

  try {
    const response = await axios.get(`${URL_API}/search`, {
      params: {
        part: "snippet",
        type: "video",
        q: query,
        maxResults: 10,
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
