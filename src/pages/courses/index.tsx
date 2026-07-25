// App.tsx
import { useEffect } from "react";
import { buscarVideos } from "../../api/index";

export function Courses() {
  useEffect(() => {
    console.log("✅ App montado");

    // 🔥 CHAMA A FUNÇÃO AQUI
    buscarVideos();
  }, []);

  return <h1>Teste YouTube API</h1>;
}
