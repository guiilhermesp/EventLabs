import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Tickets.module.css";
import Head from "../Helper/Head";
import Modal from "../Modal/Modal";
import { textNotification } from "../EmptyNotification/TextNotification";
import EmptyNotification from "../EmptyNotification/EmptyNotification";

const Tickets = () => {
  const { state } = useLocation();
  const { EMPTY_TICKET } = textNotification;
  const [ticketsList, setTicketsList] = useState([
    {
      title: "UFSC event mock",
      address: "CCE - Campus da UFSC",
    },
    {
      title: "UDESC event mock",
      address: "Campus central da UDESC",
    },
    {
      title: "unisul event mock",
      address: "Centro de florianopolis",
    },
  ]);

  useEffect(() => {
    const parse = JSON.parse(sessionStorage.getItem("myTickeys"));
    if (parse) setTicketsList(parse);
    if (state) setTicketsList((element) => [...element, state]);
    const stringified = JSON.stringify(ticketsList);
    sessionStorage.setItem("myTickets", stringified);
  }, []);

  function handleClick(title) {
    var newList = ticketsList.filter((ticket) => {
      if (ticket.title !== title) return ticket;
    });
    setTicketsList(newList);
  }
  if (ticketsList == undefined)
    return <EmptyNotification text={EMPTY_TICKET} />;
  return (
    <div className={styles.cards}>
      {ticketsList.map(({ title, address }) => {
        return (
          <div key={title}>
            <Head title="My tickets" description="Your tickets purchased" />
            <Modal
              title={title}
              address={address}
              link="/tickets"
              buttonText="Cancel ticket"
              handleClick={() => handleClick(title)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Tickets;
