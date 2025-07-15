import { useState } from "react";
import Category, { categories } from "../Header/Category";
import styles from "./Form.module.css";

// Função para extrair o ID do vídeo do YouTube
function valideUrl(url, setErrors) {
  const regex =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  const match = url.match(regex);

  if (!match || !match[1]) {
    setErrors("Erro: URL inválida!");
    return false;
  }

  return match[1]; // Retorna apenas o ID do vídeo
}

function Form() {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [videos, setVideos] = useState([]);
  const [errors, setErrors] = useState("");

  function onSave(e) {
    e.preventDefault();
    setErrors(""); // limpa erros anteriores

    if (!category || category === "-") {
      setErrors("Erro: Escolha uma categoria");
      return;
    }

    const videoId = valideUrl(url, setErrors);

    if (videoId) {
      const newVideo = { id: videoId, category };
      const updatedVideos = [...videos, newVideo];

      setVideos(updatedVideos);
      localStorage.setItem("videos", JSON.stringify(updatedVideos));

      // limpar campos
      setUrl("");
      setCategory("");
    }
  }

  return (
    <section className={styles.container}>
      <h2>Cadastro de vídeo</h2>
      <form onSubmit={onSave}>
        <div>
          <label>URL do vídeo</label>
          <input
            type="text"
            placeholder="Cole a URL do YouTube"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <div>
          <label>Categoria</label>
          <select
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="-">Selecione uma categoria</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button type="submit">Cadastrar</button>
        </div>

        {errors && <div className={styles.error}>{errors}</div>}
      </form>
    </section>
  );
}

export default Form;
