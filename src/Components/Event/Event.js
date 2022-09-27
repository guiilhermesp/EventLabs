import React from "react";
import styles from "./Event.module.css";
import { useLocation, useParams } from "react-router-dom";
import Modal from "../Modal/Modal";
import Head from "../Helper/Head";

const Event = () => {
  const { id, price } = useParams();
  const { state } = useLocation();

  return (
    <div className={styles.content}>
      <Head title="Event" description="Data of an event" />
      <Modal
        modalStyle={false}
        title={id}
        address={state.address}
        price={state.price}
        link="/tickets"
        state={{ title: state.title, address: state.address }}
        buttonText="Buy ticket"
      />
    </div>
  );
};

export default Event;
