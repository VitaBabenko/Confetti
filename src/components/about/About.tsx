import { SwiperAbout } from "../swiperAbout";
import { GridCards } from "../gridCards";

import { AboutProps } from "../../types/About";

import about from "../../data/about.json";
import aboutCard from "../../data/aboutCard.json";

import styles from "./About.module.scss";

export const About = ({ mobile }: AboutProps) => {
  return (
    <section id="about" className={styles.about_wrapper}>
      <div className={styles.container}>
        <div className={styles.title_wrap}>
          <h2 className={styles.title}>{about.title}</h2>
          <p className={styles.description}>{about.description}</p>
        </div>
        {mobile ? (
          <SwiperAbout aboutCard={aboutCard} />
        ) : (
          <GridCards aboutCard={aboutCard} />
        )}
      </div>
    </section>
  );
};
