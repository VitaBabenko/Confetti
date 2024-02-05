import styles from "./GridCards.module.scss";

type GridCardsProps = {
  dataSlides: {
    id: number;
    title: string;
    description: string;
    backgroundColor: string;
  }[];
};

export const GridCards = ({ dataSlides }: GridCardsProps) => {
  return (
    <ul className={styles.list}>
      {dataSlides &&
        dataSlides.map(({ id, title, description, backgroundColor }) => {
          return (
            <li
              key={id}
              style={{ backgroundColor }}
              className={styles.list_item}
            >
              <h3 className={styles.list_title}>{title}</h3>
              <p className={styles.list_desc}>{description}</p>
            </li>
          );
        })}
    </ul>
  );
};
