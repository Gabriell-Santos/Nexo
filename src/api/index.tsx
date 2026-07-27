import axios from "axios";

export const searchVideos = async () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL_API = import.meta.env.VITE_API_URL;

  try {
    const response = await axios.get(`${URL_API}/search`, {
      params: {
        part: "snippet",
        type: "video",
        q: "tecnologia",
        maxResults: 10,
        key: API_KEY,
      },
    });
    console.log(response);
  } catch (error) {
    console.log("info erro " + error);
  }
};
