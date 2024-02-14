import { createPortal } from "react-dom";
import { useEffect } from "react";
import { Link } from "react-scroll";

import { BurgerMenuProps } from "../../types/BurgerMenu";

import navBar from "../../data/navBar.json";

import sprite from "../../assets/sprite.svg";

import styles from "./BurgerMenu.module.scss";

export const BurgerMenu = ({ isOpenModal, btnModalClose }: BurgerMenuProps) => {
  const burgerRoot: HTMLElement | null = document.querySelector("#burger-root");

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpenModal]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        btnModalClose();
      }
    };

    if (isOpenModal) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpenModal, btnModalClose]);

  return (
    <>
      {burgerRoot !== null &&
        createPortal(
          <div className={styles.backdrop}>
            <div className={styles.modal}>
              <div className={styles.content}>
                <Link
                  to="hero"
                  smooth={true}
                  duration={600}
                  onClick={btnModalClose}
                >
                  <svg aria-label="icon logo" className={styles.icon_logo}>
                    <use href={`${sprite}#logo`}></use>
                  </svg>
                </Link>
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
                    <li key={id} className={styles.list_item}>
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
          </div>,
          burgerRoot
        )}
    </>
  );
};
