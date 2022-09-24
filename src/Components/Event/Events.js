import React from "react";
import Head from "../Helper/Head";
import styles from "./Events.module.css";
import { Link } from "react-router-dom";
import Button from "../Forms/Button";

const Events = () => {
  const eventsMock = [
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

  return (
    <div className={styles.cards}>
      <Head title="Home" description="Feed of events" />
      {eventsMock.map(({ title, price, address }) => {
        return (
          <section key={title} className={styles.card}>
            <div className={styles.content}>
              <h1>{title}</h1>
              <p>R$: {price},00</p>
              <p>{address}</p>
              <Button>
                <Link to={`/event/${title}`} params={{ price }}>
                  Buy ticket
                </Link>
              </Button>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Events;
