import styles from "./Banner.module.css";

function Banner({ image }) {
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner-favoritos.png)`,
      }}
    ></div>
  );
}

export default Banner;
