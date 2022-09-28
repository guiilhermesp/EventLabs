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
  buttonDeleteClick,
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
        <div className={styles.multipleButton}>
          <Link to={link} state={state} className={styles.link}>
            <Button className={styles.button} onClick={handleClick}>
              {buttonText}
            </Button>
          </Link>
          {buttonDeleteText && (
            <Button onClick={buttonDeleteClick}>{buttonDeleteText}</Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Modal;
