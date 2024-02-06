import { ContactsListProps } from "../../types/ContactsList";

import sprite from "../../assets/sprite.svg";

import styles from "./ContactsList.module.scss";

export const ContactsList = ({ list }: ContactsListProps) => {
  return (
    <ul className={styles.list}>
      {list.map(({ id, icon, label }) => (
        <li key={id} className={styles.list_item}>
          <a href="#" className={styles.link}>
            <svg aria-label="icon contact" className={styles.list_icon}>
              <use href={`${sprite}#${icon}`}></use>
            </svg>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};
