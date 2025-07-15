import React from "react";
import styles from "./PageNotFound.module.css";
import erroImg from "./erro404.png";
import Header from "../../components/Header";
import Footer from "../../components/Header/Footer";

function PageNotFound() {
  return (
    <>
      <Header />
      <section className={styles.pageNotFound}>
        <h2>Ops! Conteúdo não localizado</h2>
        <p>Erro 400 NotFound</p>
        <img src={erroImg} alt="Erro 404 - Página não encontrada" />
      </section>
      <Footer />
    </>
  );
}

export default PageNotFound;
