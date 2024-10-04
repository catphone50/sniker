import { useState } from "react";
import styles from "./styles.module.css";
import snapchat from "../../assets/icons/snapchat.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/twitter.svg";

function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Имя:", name);
    console.log("Email:", email);
    console.log("Сообщение:", message);
  };
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactForm}>
        <section className={styles.title}>
          <h2>Контакты</h2>
        </section>

        <section className={styles.infos}>
          <ul>
            <li>• 8 800 000 00 00</li>
            <li>• emailexample@example.com</li>
          </ul>
        </section>

        <section className={styles.mainSection}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                className={styles.formControl}
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className={styles.formControl}
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <textarea
              className={styles.formControl}
              placeholder="Ваше сообщение"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
            />

            <button type="submit" className={styles.btnSubmit}>
              Отправить
            </button>
          </form>
          <section className={styles.socialIconsContainer}>
            <h3>Найдите нас:</h3>
            <div className={styles.socialIcons}>
              <a href="!#" className={styles.socialIcons}>
                <img src={snapchat} alt="snapchat" />
              </a>
              <a href="!#" className={styles.socialIcons}>
                <img src={facebook} alt="facebook" />
              </a>
              <a href="!#" className={styles.socialIcons}>
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Contacts;
