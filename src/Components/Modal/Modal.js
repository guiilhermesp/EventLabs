import React from "react";
import { Link } from "react-router-dom";
import styles from "./Modal.module.css";
import Button from "../Forms/Button";

const Modal = ({
  title,
  price,
  address,
  link,
  state,
  buttonText,
  modalStyle = true,
}) => {
  return (
    <section
      key={title}
      className={`${styles.card} ${
        modalStyle === true ? styles.background : ""
      }`}
    >
      <div className={styles.content}>
        <h1>{title}</h1>
        {price && <p>R$: {price},00</p>}
        <p>{address}</p>
        <Link to={link} state={state}>
          <Button>{buttonText}</Button>
        </Link>
      </div>
    </section>
  );
};

export default Modal;
