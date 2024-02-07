import { useForm, SubmitHandler } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import { ContactFormInputs } from "../../types/СontactForm";

import contactDataForm from "../../data/contactForm.json";

import styles from "./ContactForm.module.scss";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  useFormPersist("userContact", { watch, setValue });

  const isRequired = contactDataForm.required;
  const isErrorName = errors.name;
  const isErrorEmail = errors.email;

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    alert(`${data.name}, twoja wiadomość została wysłana!`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form_wrapper}>
      <label className={styles.form_label}>
        {contactDataForm.name.label}
        {isRequired && "*"}
      </label>
      <input
        {...register("name", {
          required: isRequired,
          pattern: {
            value: new RegExp(contactDataForm.name.pattern.value),
            message: contactDataForm.name.pattern.message,
          },
        })}
        placeholder={contactDataForm.name.placeholder}
        type="text"
        className={styles.form_input}
      />
      {isErrorName && (
        <span className={styles.form_error}>
          {contactDataForm.name.pattern.message}
        </span>
      )}
      <label className={styles.form_label}>
        {contactDataForm.email.label}
        {isRequired && "*"}
      </label>
      <input
        {...register("email", {
          required: isRequired,
          pattern: {
            value: new RegExp(contactDataForm.email.pattern.value),
            message: contactDataForm.email.pattern.message,
          },
        })}
        placeholder={contactDataForm.email.placeholder}
        type="text"
        className={styles.form_input}
      />
      {isErrorEmail && (
        <span className={styles.form_error}>
          {contactDataForm.email.pattern.message}
        </span>
      )}
      <label className={styles.form_label}>
        {contactDataForm.message.label}{" "}
      </label>
      <textarea
        {...register("message")}
        placeholder={contactDataForm.message.placeholder}
        className={styles.form_textarea}
      />
      <button type="submit" className={styles.form_btn}>
        {contactDataForm.btn.label}
      </button>
    </form>
  );
};
