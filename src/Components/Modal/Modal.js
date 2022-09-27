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
  handleClick,
  buttonDelete = false,
  buttonDeleteText,
}) => {
  return (
    <section
      key={title}
      className={`${styles.card} ${
        modalStyle === true ? styles.background : ""
      }`}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {price && <p>R$: {price},00</p>}
        <p className={styles.address}>{address}</p>
        <Link to={link} state={state}>
          <Button className={styles.button} onClick={handleClick}>
            {buttonText}
          </Button>
          {buttonDelete && (
            <Button onClick={buttonDelete}>{buttonDeleteText}</Button>
          )}
        </Link>
      </div>
    </section>
  );
};

export default Modal;
