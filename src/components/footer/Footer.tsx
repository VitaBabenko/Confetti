import sprite from "../../assets/sprite.svg";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer_wrapper}>
      <div className={styles.container}>
        <svg aria-label="icon logo" className={styles.icon_logo}>
          <use href={`${sprite}#logo`}></use>
        </svg>
        <p className={styles.title}>confetti &copy; 2023</p>
      </div>
    </footer>
  );
};
