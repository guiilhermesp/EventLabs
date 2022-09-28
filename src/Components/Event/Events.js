import React, { useEffect, useState } from "react";
import Head from "../Helper/Head";
import styles from "./Events.module.css";
import { useLocation } from "react-router-dom";
import Modal from "../Modal/Modal";

const Events = () => {
  const { state } = useLocation();
  const [eventsList, setEventsList] = useState([
    {
      title: "J Drift",
      price: 512,
      address: "jdfgkgkl",
      type: "college",
    },
    {
      title: "G Drift",
      price: 125,
      address: "abcdefg",
      type: "college",
    },
    {
      title: "B 1",
      price: 32,
      address: "ATLANTA, GEORGIA, USA",
      type: "business",
    },
    {
      title: "C 1",
      price: 32,
      address: "ATLANTA, GEORGIA, USA",
      type: "business",
    },
  ]);

  function handleDelete(title) {
    var newList = eventsList.filter((ticket) => {
      if (ticket.title !== title) return ticket;
    });
    setEventsList(newList);
  }

  function handleFilter(option) {
    if (option == "price") {
      setEventsList([].concat(eventsList).sort((a, b) => b.price - a.price));
    } else {
      setEventsList(
        [].concat(eventsList).sort(function (a, b) {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        })
      );
    }
  }

  useEffect(() => {
    const parse = JSON.parse(sessionStorage.getItem("eventsList"));
    if (parse) setEventsList(parse);
    if (state) {
      setEventsList((element) => element.concat(state));
    }
    const stringified = JSON.stringify(eventsList);
    sessionStorage.setItem("eventsList", stringified);
  }, []);

  return (
    <div className={styles.cards}>
      <Head title="Available events" description="Feed of events" />
      <div className={styles.cardSelect}>
        <select
          className={styles.select}
          onChange={(option) => handleFilter(option.target.value)}
        >
          <option value="title">Title</option>
          <option value="price">Price</option>
        </select>
      </div>
      {eventsList.map(({ title, price, address }) => {
        return (
          <Modal
            key={title}
            title={title}
            price={price}
            address={address}
            link={`/event/${title}`}
            state={{ price: price, address: address }}
            buttonText="Event page"
            buttonDeleteText="Cancel event"
            buttonDeleteClick={() => handleDelete(title)}
          />
        );
      })}
    </div>
  );
};

export default Events;
