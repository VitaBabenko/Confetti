import { SwiperReviews } from "../swiperReviews";

import reviews from "../../data/reviews.json";

import styles from "./Reviews.module.scss";

export const Reviews = () => {
  return (
    <section id="reviews" className={styles.reviews_wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Recenzje</h2>
        <SwiperReviews reviews={reviews} />
      </div>
    </section>
  );
};
