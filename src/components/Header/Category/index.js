import styles from "./Category.module.css";

// Apenas as categorias exportadas
export const categories = [
  "Geografia",
  "Como fazer e usar",
  "Astronomia e Geografia",
  "Climatologia, Meteorologia, Vegetação",
  "Geologia e Hidrografia",
  "Desenho animado",
];

// Componente
function Category({ category, children }) {
  return (
    <section className={styles.category}>
      <h2>{category}</h2>
      <div>{children}</div>
    </section>
  );
}

export default Category;
