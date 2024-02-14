import { ContactForm } from "../../components/contactForm";

import contacts from "../../data/contacts.json";

import sprite from "../../assets/sprite.svg";

import styles from "./Contacts.module.scss";

export const Contacts = () => {
  return (
    <section id="contacts" className={styles.contacts_wrapper}>
      <div className={styles.container}>
        <div className={styles.container_contacts}>
          <h2 className={styles.title}>{contacts.title}</h2>
          <h3 className={styles.subtitle}>{contacts.secondTitle}</h3>
          <ul className={styles.list}>
            <li>
              <a href={`tel:${contacts.phone}`} className={styles.link}>
                <svg aria-label="icon phone" className={styles.list_icon}>
                  <use href={`${sprite}#${contacts.iconPhone}`}></use>
                </svg>
                {contacts.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contacts.email}`} className={styles.link}>
                <svg aria-label="icon email" className={styles.list_icon}>
                  <use href={`${sprite}#${contacts.iconEmail}`}></use>
                </svg>
                {contacts.email}
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.form_wrapper}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
