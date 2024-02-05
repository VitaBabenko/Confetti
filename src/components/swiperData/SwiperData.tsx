import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./SwiperData.module.scss";

type SwiperDataProps = {
  dataSlides: {
    id: number;
    title: string;
    description: string;
    backgroundColor: string;
  }[];
};

export const SwiperData = ({ dataSlides }: SwiperDataProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {dataSlides &&
        dataSlides.map(({ id, title, description, backgroundColor }) => {
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
