import { ContactsList } from "../contactsList";
import { ContactForm } from "../contactForm";

import contacts from "../../data/contacts.json";
import contactsList from "../../data/contactsList.json";

import styles from "./Contacts.module.scss";

export const Contacts = () => {
  return (
    <section id="contacts" className={styles.contacts_wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>{contacts.title}</h2>
        <h3 className={styles.subtitle}>{contacts.secondTitle}</h3>
        <ContactsList list={contactsList} />
        <ContactForm />
      </div>
    </section>
  );
};
