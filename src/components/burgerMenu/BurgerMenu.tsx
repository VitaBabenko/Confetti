import sprite from "../../assets/sprite.svg";

import styles from "./BurgerMenu.module.scss";

type BurgerMenuProps = {
  btnModalClose: () => void;
};

export const BurgerMenu = ({ btnModalClose }: BurgerMenuProps) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <button
            type="button"
            onClick={btnModalClose}
            className={styles.btn_close}
          >
            <svg aria-label="icon close" className={styles.icon_close}>
              <use href={`${sprite}#close`}></use>
            </svg>
          </button>
          <ul className={styles.list}>
            <li>główna</li>
            <li>O nas</li>
            <li>Recenzje</li>
            <li>Kontakty</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
