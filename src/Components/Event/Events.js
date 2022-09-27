import React, { useEffect, useState } from "react";
import Head from "../Helper/Head";
import styles from "./Events.module.css";
import { useLocation } from "react-router-dom";
import Modal from "../Modal/Modal";

const Events = () => {
  const { state } = useLocation();
  const [property, setProperty] = useState("title");
  const sortTypes = {
    title: "title",
    price: "price",
  };
  const sortProperty = sortTypes[property];
  var eventsList = [
    {
      title: "Formula Drift",
      price: 512,
      address: "LONG BEACH, CALIFORNIA, USA",
      type: "college",
    },
    {
      title: "Formula 1",
      price: 32,
      address: "ATLANTA, GEORGIA, USA",
      type: "business",
    },
    {
      title: "Formula Indy",
      price: 123,
      address: "ORLANDO, FLORIDA, USA",
      type: "college",
    },
    {
      title: "Formula 2",
      price: 752,
      address: "ENGLISHTOWN, NEW JERSEY, USA",
      type: "business",
    },
    {
      title: "Formula 3",
      price: 45,
      address: "ST. LOUIS, MISSOURI, USA",
      type: "college",
    },
    {
      title: "Formula 4",
      price: 49,
      address: "MONROE, WASHINGTON, USA",
      type: "business",
    },
    {
      title: "Formula 3000",
      price: 12,
      address: "GRANTSVILLE, UTAH, USA",
      type: "business",
    },
    {
      title: "Other formula",
      price: 54,
      address: "IRWINDALE, CALIFORNIA",
      type: "college",
    },
  ];

  useEffect(() => {
    const parse = JSON.parse(sessionStorage.getItem("eventsList"));
    if (parse) eventsList = parse;
    if (state) eventsList.push(state);
    const stringified = JSON.stringify(eventsList);
    sessionStorage.setItem("eventsList", stringified);
  }, [eventsList]);

  return (
    <div className={styles.cards}>
      <Head title="Available events" description="Feed of events" />
      <div className={styles.cardSelect}>
        <select
          className={styles.select}
          onChange={(option) => setProperty(option.target.value)}
        >
          <option value="title">Title</option>
          <option value="price">Price</option>
        </select>
      </div>
      {eventsList
        .sort((a, b) => b[sortProperty] - a[sortProperty])
        .map(({ title, price, address }) => {
          return (
            <Modal
              title={title}
              price={price}
              address={address}
              link={`/event/${title}`}
              state={{ price: price, address: address }}
              buttonText="Event page"
            />
          );
        })}
    </div>
  );
};

export default Events;
