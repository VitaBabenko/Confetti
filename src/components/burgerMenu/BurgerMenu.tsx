import { Link } from "react-scroll";

import { BurgerMenuProps } from "../../types/BurgerMenu";

import navBar from "../../data/navBar.json";

import sprite from "../../assets/sprite.svg";

import styles from "./BurgerMenu.module.scss";

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
            {navBar.map(({ id, path, label }) => (
              <li key={id}>
                <Link
                  to={path}
                  smooth={true}
                  duration={600}
                  onClick={btnModalClose}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
