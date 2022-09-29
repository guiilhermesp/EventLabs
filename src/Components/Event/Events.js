import React, { useEffect, useId, useState } from "react";
import Head from "../Helper/Head";
import styles from "./Events.module.css";
import { useLocation } from "react-router-dom";
import Modal from "../Modal/Modal";
import EmptyNotification from "../EmptyNotification/EmptyNotification";
import { textNotification } from "../EmptyNotification/TextNotification";
import Input from "../Forms/Input";

const Events = () => {
  let backupList;
  let newList;
  const { state } = useLocation();
  const { EMPTY_EVENT } = textNotification;
  const [eventsList, setEventsList] = useState([
    {
      title: "UFSC event",
      price: 52,
      address: "CCE - Campus da UFSC",
      type: "college",
      id: ":r8:",
    },
    {
      title: "UDESC event",
      price: 125,
      address: "Campus central da UDESC",
      type: "college",
      id: ":r2:",
    },
    {
      title: "EventLabs Happy Hour",
      price: 32,
      address: "Centro de Florianópolis",
      type: "business",
      id: ":r4:",
    },
  ]);
  const [eventListFilter, setEventListFilter] = useState(eventsList);

  function handleDelete(title) {
    newList = eventsList.filter((ticket) => {
      if (ticket.title !== title) return ticket;
    });
    setEventsList(newList);
  }

  function handleSort(option) {
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

  function handleFilter(filterText) {
    backupList = eventsList;
    console.log("if");
    setEventsList(
      [].concat(eventListFilter).filter((item) => {
        return item.title.toLowerCase().search(filterText) != -1;
      })
    );
  }

  useEffect(() => {
    const parse = JSON.parse(sessionStorage.getItem("eventsList"));
    if (parse) setEventsList(parse);
    if (state) {
      setEventsList((element) => element.concat(state));
    }
    if (eventsList !== undefined) {
      const stringified = JSON.stringify(eventsList);
      sessionStorage.setItem("eventsList", stringified);
    }
  }, [newList]);

  if (eventsList == undefined) return <EmptyNotification text={EMPTY_EVENT} />;

  return (
    <div className={styles.cards}>
      <Head title="Available events" description="Feed of events" />
      <div className={styles.navigation}>
        <div className={styles.cardSelect}>
          <select
            className={styles.select}
            onChange={(option) => handleSort(option.target.value)}
          >
            <option value="title">Title</option>
            <option value="price">Price</option>
          </select>
        </div>
        <div className={styles.filter}>
          <Input
            placeholder="Filter of events"
            onChange={(value) => handleFilter(value.target.value)}
          />
        </div>
      </div>
      {eventsList.map(({ title, price, address, id }) => {
        return (
          <Modal
            key={id}
            title={title}
            price={price}
            address={address}
            link={`/event/${title}`}
            state={{ title: title, address: address }}
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
