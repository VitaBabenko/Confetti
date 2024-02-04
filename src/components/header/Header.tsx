import { useState, useEffect } from "react";

import sprite from "../../assets/sprite.svg";

import styles from "./Header.module.scss";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.header_wrapper}>
      <div className={styles.container}>
        {scrolled ? (
          <div className={styles.container_scrolled}>
            <button type="button" className={styles.btn_menu}>
              <svg aria-label="icon menu" className={styles.icon_menu}>
                <use href={`${sprite}#menu`}></use>
              </svg>
            </button>
          </div>
        ) : (
          <div className={styles.container_noscrolled}>
            <svg aria-label="icon logo" className={styles.icon_logo}>
              <use href={`${sprite}#logo`}></use>
            </svg>
            <button type="button" className={styles.btn_menu}>
              menu
              <svg aria-label="icon menu" className={styles.icon_menu}>
                <use href={`${sprite}#menu`}></use>
              </svg>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
