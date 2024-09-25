import styles from "./styles.module.css";
import facebookLogo from "../../assets/icons/facebook_outlined.svg";
import twitterLogo from "../../assets/icons/twitter_outlined.svg";
import instagramLogo from "../../assets/icons/instagram_outlined.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h4>Контакты</h4>
          <p>8 800 000 00 00</p>
          <p>emailexample@email.com</p>
          <p>2024 Сникер-магазин. Все права защищены</p>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.icons}>
            <a href="!#">
              <img src={facebookLogo} alt="facebook" />
            </a>
            <a href="!#">
              <img src={twitterLogo} alt="twitter" />
            </a>
            <a href="!#">
              <img src={instagramLogo} alt="instagram" />
            </a>
          </div>
          <input
            className={styles.inputEmail}
            placeholder="Введите свой email:"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
