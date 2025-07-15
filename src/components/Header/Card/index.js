import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import favorite from "./favorite.png";
import unfavorite from "./unfavorite.png"; // ❤️ vermelho
import { useFavoriteContext } from "../../../contexts/Favorites";

function Card({ id }) {
  const { favorites, addFavorite } = useFavoriteContext();
  const isFavorited = favorites.some((fav) => fav.id === id);
  const icone = !isFavorited ? favorite : unfavorite;

  return (
    <section className={styles.card}>
      <Link to={`/Watch/${id}`} className={styles.cardLink}>
        <img
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt="Capa"
          className={styles.capa}
        />
      </Link>

      <img
        src={isFavorited ? unfavorite : favorite} // 🔄 invertido aqui!
        alt={isFavorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        onClick={() => addFavorite({ id })}
        className={styles.icon}
        style={{ cursor: "pointer" }}
      />
    </section>
  );
}

export default Card;
