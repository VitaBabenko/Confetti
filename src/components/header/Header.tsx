import sprite from "../../assets/sprite.svg";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header_container}>
      <svg aria-label="icon logo" className={styles.icon_logo}>
        <use href={`${sprite}#logo`}></use>
      </svg>
      <button type="button" className={styles.btn_menu}>
        menu
        <svg aria-label="icon menu" className={styles.icon_menu}>
          <use href={`${sprite}#menu`}></use>
        </svg>
      </button>
    </header>
  );
};
