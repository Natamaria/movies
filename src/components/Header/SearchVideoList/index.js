import { useEffect, useState } from "react";
import VideoList from "../VideoList";
import styles from "./SearchVideoList.module.css"; // ✅ CSS correto
import Loader from "../../Loader"; // ✅ Loader correto

function filterVideos(videos, searchText) {
  const lower = searchText.toLowerCase();
  return videos.filter(
    (video) =>
      video.category.toLowerCase().includes(lower) ||
      video.title.toLowerCase().includes(lower)
  );
}

function SearchVideoList({ videos }) {
  const [searchText, setSearchText] = useState("");
  const foundVideos = filterVideos(videos, searchText);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const hasText = searchText.trim() !== "";

  return (
    <section className={styles.container}>
      <input
        type="search"
        placeholder="Pesquisar..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        className={styles.input}
      />

      {/* Só mostra a lista se houver texto na busca */}
      {hasText &&
        (loading ? (
          <Loader />
        ) : (
          <VideoList
            videos={foundVideos}
            emptyHeading={`Sem vídeos sobre "${searchText}"`}
          />
        ))}
    </section>
  );
}

export default SearchVideoList;
