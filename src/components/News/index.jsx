import styles from "./styles.module.css";
import newsImage from "../../assets/images/banner.png";

function News() {
  return (
    <section className={styles.news}>
      <img src={newsImage} alt="news" />
    </section>
  );
}

export default News;
