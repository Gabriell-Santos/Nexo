import axios from "axios";

export const buscarVideos = async () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;

  console.log("🔑 Chave da API (API_KEY):", API_KEY);
  console.log("🌐 URL da API (API_URL):", API_URL);

  try {
    const response = await axios.get(`${API_URL}/search`, {
      params: {
        part: "snippet",
        q: "react",
        maxResults: 6,
        key: API_KEY,
        type: "video",
      },
    });

    console.log("✅ Sucesso!", response);
  } catch (err: any) {
    console.error("❌ Erro:", err);
    console.error("📌 Detalhes:", err.response?.data);
  }
};
