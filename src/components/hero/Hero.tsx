import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section id="hero" className={styles.hero_wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Tworzymy unikalne i niepowtarzalne
          <span className={styles.title_span}>dekoracje balonowe</span> na
          imprezy
        </h1>
      </div>
    </section>
  );
};
