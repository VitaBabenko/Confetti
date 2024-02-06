import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { SwiperReviewsProps } from "../../types/SwiperReviews";

import sprite from "../../assets/sprite.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./SwiperReviews.module.scss";

export const SwiperReviews = ({ reviews }: SwiperReviewsProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      pagination={{ clickable: true }}
      breakpoints={{
        360: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
      }}
    >
      {reviews &&
        reviews.map(({ id, description, icon, user }) => {
          return (
            <SwiperSlide key={id}>
              <div className={styles.slide_wrap}>
                <p className={styles.slide_desc}>{description}</p>
                <div className={styles.user_wrap}>
                  <svg aria-label="icon user" className={styles.icon_user}>
                    <use href={`${sprite}#${icon}`}></use>
                  </svg>
                  <p className={styles.user_desc}>{user}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};
