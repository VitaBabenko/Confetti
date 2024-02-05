import { GridCardsProps } from "../../types/AboutCard";

import styles from "./GridCards.module.scss";

export const GridCards = ({ aboutCard }: GridCardsProps) => {
  return (
    <ul className={styles.list}>
      {aboutCard &&
        aboutCard.map(({ id, title, description, backgroundColor }) => {
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
