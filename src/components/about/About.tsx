import { SwiperData } from "../swiperData";
import { GridCards } from "../gridCards";

import styles from "./About.module.scss";

type AboutProps = {
  mobile: boolean;
};

export const About = ({ mobile }: AboutProps) => {
  const data = [
    {
      id: 1,
      title: "Kreatywne podejście i dbałość o szczegóły",
      description:
        "Specjaliści zapewniają doradztwo i kreatywność przy wyborze dekoracji balonowych, z dbałością o szczegóły.",
      backgroundColor: "#ED4B5E",
    },
    {
      id: 2,
      title: "Materiały przyjazne dla środowiska",
      description:
        "Wykorzystywane są materiały najwyższej jakości, w tym biodegradowalne materiały balonowe, aby pozostawić jak najmniejszy ślad na środowisku.",
      backgroundColor: "#222",
    },
    {
      id: 3,
      title: "Szeroka gama kolorów do personalizacji",
      description:
        "Balony i dekoracje są wybierane z szerokiej gamy kolorów, co pozwala spersonalizować wystrój na każdą okazję.",
      backgroundColor: "#444",
    },
    {
      id: 4,
      title: "Gwarancja dostawy i montażu",
      description:
        "Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień, ale także ich montaż, zapewniając klientom kompleksową obsługę.",
      backgroundColor: "#808080",
    },
  ];

  return (
    <section id="about" className={styles.about_wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Kreatywny zespół dekoratorów</h2>
        <p className={styles.description}>
          Młodzi i energiczni, rozwijający działalność w zakresie tworzenia
          dekoracji na imprezy i wydarzenia
        </p>
        {mobile ? (
          <SwiperData dataSlides={data} />
        ) : (
          <GridCards dataSlides={data} />
        )}
      </div>
    </section>
  );
};
