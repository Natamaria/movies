import Header from "../../components/Header";
import Footer from "../../components/Header/Footer";
import Banner from "../../components/Header/Banner";
import Container from "../../components/Header/Container";
import Card from "../../components/Header/Card";
import videos from "../../json/videos.json";
import Category, { categories } from "../../components/Header/Category";
import Carousel from "../../components/Header/Carousel";

function Home() {
  return (
    <>
      <Header />
      <Banner image="favoritos" />

      <Container>
        <Carousel>
          {categories.map((category) => {
            const filteredVideos = videos.filter(
              (video) => video.category === category
            );

            return (
              filteredVideos.length > 0 && (
                <Category category={category} key={category}>
                  {filteredVideos.map((video) => (
                    <Card id={video.id} key={video.id} />
                  ))}
                </Category>
              )
            );
          })}
        </Carousel>
      </Container>

      <Footer />
    </>
  );
}

export default Home;
