import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { SwiperDataProps } from "../../types/SwiperData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./SwiperData.module.scss";

export const SwiperData = ({ aboutCard }: SwiperDataProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {aboutCard &&
        aboutCard.map(({ id, title, description, backgroundColor }) => {
          return (
            <SwiperSlide key={id}>
              <div style={{ backgroundColor }} className={styles.slide_wrap}>
                <h3 className={styles.slide_title}>{title}</h3>
                <p className={styles.slide_desc}>{description}</p>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};
