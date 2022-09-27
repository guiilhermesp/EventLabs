import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateEvent.module.css";
import Button from "../Forms/Button";
import Input from "../Forms/Input";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const eventBody = {
      title: title.target.value,
      price: price.target.value,
      address: address.target.value,
      type: type.target.value,
    };
    navigate("/", { state: eventBody });
  }

  return (
    <div className={styles.area}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          label="Title of the event"
          type="text"
          name="title"
          onChange={setTitle}
        />
        <Input
          label="Price of the ticket"
          type="text"
          name="price"
          onChange={setPrice}
        />
        <Input
          label="Event location"
          type="text"
          name="address"
          onChange={setAddress}
        />
        <Input
          label="Type of event"
          type="text"
          name="type"
          onChange={setType}
        />
        <Button>Create event</Button>
      </form>
    </div>
  );
};

export default CreateEvent;
