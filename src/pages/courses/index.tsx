import { searchVideos } from "../../api/index";
import { useEffect } from "react";
export function Courses() {
  useEffect(() => {
    searchVideos();
  }, []);

  return <h1>Teste YouTube API</h1>;
}
