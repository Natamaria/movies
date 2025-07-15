import React from "react";
import { Link } from "react-router-dom";
import SearchVideoList from "../../components/Header/SearchVideoList";
import videos from "../../json/videos.json";
import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerArea}>
        <h2 className={styles.title}>🔎 Pesquisar Vídeos</h2>
      </div>

      <div className={styles.contentArea}>
        <SearchVideoList videos={videos} />
      </div>

      <div className={styles.footerArea}>
        <Link to="/" className={styles.linkVoltar}>
          ⬅️ Voltar ao Menu
        </Link>
      </div>
    </div>
  );
}

export default Search;
