import React from "react";
import Head from "../Helper/Head";
import styles from "./Events.module.css";
import { useLocation } from "react-router-dom";
import Modal from "../Modal/Modal";

const Events = () => {
  const { state } = useLocation();
  var eventsList = [
    {
      title: "Formula Drift",
      price: 512,
      address: "LONG BEACH, CALIFORNIA, USA",
    },
    { title: "Formula 1", price: 1008, address: "ATLANTA, GEORGIA, USA" },
    { title: "Formula Indy", price: 1009, address: "ORLANDO, FLORIDA, USA" },
    {
      title: "Formula 2",
      price: 1010,
      address: "ENGLISHTOWN, NEW JERSEY, USA",
    },
    { title: "Formula 3", price: 1011, address: "ST. LOUIS, MISSOURI, USA" },
    { title: "Formula 4", price: 1012, address: "MONROE, WASHINGTON, USA" },
    { title: "Formula 3000", price: 1012, address: "GRANTSVILLE, UTAH, USA" },
    { title: "Other formula", price: 1012, address: "IRWINDALE, CALIFORNIA" },
  ];
  const parse = JSON.parse(sessionStorage.getItem("eventsList"));
  if (parse) eventsList = parse;
  if (state) eventsList.push(state);
  const stringified = JSON.stringify(eventsList);
  sessionStorage.setItem("eventsList", stringified);

  return (
    <div className={styles.cards}>
      <Head title="Available events" description="Feed of events" />
      {eventsList.map(({ title, price, address }) => {
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
