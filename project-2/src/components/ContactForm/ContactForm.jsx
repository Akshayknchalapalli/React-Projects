import styles from "@/components/ContactForm/Contact.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Abhi");
  const [email, setEmail] = useState("abhi@gmail.com");
  const [text, setText] = useState("Hello");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  const onViaCallSumbit = () => {
    console.log("I am from call");
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
            onClick={onViaCallSumbit}
            text="VIA CALL"
            icon={<MdCall fontSize="24px" />}
          />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdMessage fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button isOutline={false} text="Submit" />
          </div>
          <div>{name + " " + email + " " + text} </div>
        </form>
      </div>
      <div className={styles.contactImage}>
        <img src="images/contact.svg" alt="contact-image" />
      </div>
    </section>
  );
};

export default ContactForm;
