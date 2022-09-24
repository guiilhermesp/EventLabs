import React from "react";
import styles from "./Event.module.css";
import { useParams } from "react-router-dom";
import Button from "../Forms/Button";

const Event = () => {
  const { id } = useParams();
  const { price } = useParams();

  return (
    <div className={styles.content}>
      <h1>{id}</h1>
      <p>R$: {price},00</p>
      <Button>Buy ticket</Button>
    </div>
  );
};

export default Event;
