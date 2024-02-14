import { useForm, SubmitHandler } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import toast, { Toaster } from "react-hot-toast";

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
    toast.success(`${data.name}, twoja wiadomość została wysłana!`, {
      duration: 5000,
      position: "top-center",
      style: {
        minWidth: "50%",
        fontSize: "18px",
      },
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form_wrapper}>
      <label htmlFor="name" className={styles.form_label}>
        {contactDataForm.name.label}
        {isRequired && "*"}
      </label>
      <input
        id="name"
        {...register("name", {
          required: isRequired,
          pattern: {
            value: new RegExp(contactDataForm.name.pattern.value),
            message: contactDataForm.name.pattern.message,
          },
        })}
        placeholder={contactDataForm.name.placeholder}
        type="text"
        className={isErrorName ? styles.form_input_error : styles.form_input}
      />
      {isErrorName && (
        <span className={styles.form_error}>
          {contactDataForm.name.pattern.message}
        </span>
      )}
      <label htmlFor="email" className={styles.form_label}>
        {contactDataForm.email.label}
        {isRequired && "*"}
      </label>
      <input
        id="email"
        {...register("email", {
          required: isRequired,
          pattern: {
            value: new RegExp(contactDataForm.email.pattern.value),
            message: contactDataForm.email.pattern.message,
          },
        })}
        placeholder={contactDataForm.email.placeholder}
        type="text"
        className={isErrorEmail ? styles.form_input_error : styles.form_input}
      />
      {isErrorEmail && (
        <span className={styles.form_error}>
          {contactDataForm.email.pattern.message}
        </span>
      )}
      <label htmlFor="message" className={styles.form_label}>
        {contactDataForm.message.label}
      </label>
      <textarea
        id="message"
        {...register("message")}
        placeholder={contactDataForm.message.placeholder}
        className={styles.form_textarea}
      />
      <button type="submit" className={styles.form_btn}>
        {contactDataForm.btn.label}
      </button>
      <Toaster />
    </form>
  );
};
