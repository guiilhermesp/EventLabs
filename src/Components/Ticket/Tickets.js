import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Tickets.module.css";
import Head from "../Helper/Head";
import Modal from "../Modal/Modal";

const Tickets = () => {
  const { state } = useLocation();
  const [ticketsList, setTicketsList] = useState([
    {
      title: "mock 1",
      address: "address 1",
    },
    {
      title: "mock 2",
      address: "address 2",
    },
    {
      title: "mock 3",
      address: "address 3",
    },
  ]);
  useEffect(() => {
    const parse = JSON.parse(sessionStorage.getItem("myTickeys"));
    if (parse) setTicketsList(parse);
    if (state) setTicketsList((element) => [...element, state]);
    const stringified = JSON.stringify(ticketsList);
    sessionStorage.setItem("myTickets", stringified);
  }, [ticketsList]);

  function handleClick(title) {
    var newList = ticketsList.filter((ticket) => {
      if (ticket.title !== title) return ticket;
    });
    setTicketsList(newList);
    console.log("ticketsList: ", ticketsList);
  }

  return (
    <div className={styles.cards}>
      {ticketsList.map(({ title, address }) => {
        return (
          <>
            <Head title="My tickets" description="Your tickets purchased" />
            <Modal
              title={title}
              address={address}
              link="/tickets"
              buttonText="Cancel ticket"
              handleClick={() => handleClick(title)}
            />
          </>
        );
      })}
    </div>
  );
};

export default Tickets;
