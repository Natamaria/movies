import Header from "../../components/Header";
import Container from "../../components/Header/Container";
import Footer from "../../components/Header/Footer";
import styles from "./Favorites.module.css";
import VideoList from "../../components/Header/VideoList";
import { useFavoriteContext } from "../../contexts/Favorites";

function Favorites() {
  const { favorites } = useFavoriteContext();
  return (
    <>
      <Header />
      <Container>
        <section className={styles.Favorites}>
          <h2>Meus Favoritos</h2>
          {<VideoList videos={favorites} emptyHeading="Sem favoritos" />}
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Favorites;
