import React from "react";
import styles from "./EmptyNotification.module.css";

const EmptyNotification = ({ text }) => {
  return (
    <div className={styles.notification}>
      <h1 className={styles.text}>{text}</h1>
    </div>
  );
};

export default EmptyNotification;
