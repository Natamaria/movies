import styles from "./Category.module.css";

// Apenas as categorias exportadas
export const categories = [
  "Aulas de Violão",
  "Hinos Gospel",
  "Desenhos Animados",
  "Músicas Clássicas",
  "Seriados Antigos",
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
