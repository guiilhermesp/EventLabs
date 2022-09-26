import React from "react";
import { useLocation } from "react-router-dom";
import Head from "../Helper/Head";
import Modal from "../Modal/Modal";

const Tickets = () => {
  const { state } = useLocation();
  var ticketsList = [{}];
  const parse = JSON.parse(sessionStorage.getItem("myTickeys"));
  if (parse) ticketsList = parse;
  if (state) ticketsList.push(parse);
  const stringified = JSON.stringify(ticketsList);
  sessionStorage.setItem("myTickets", stringified);

  return (
    <div>
      {ticketsList.map(({ title, address }) => {
        return (
          <>
            <Head title="My tickets" description="Your tickets purchased" />
            <Modal
              title={title}
              address={address}
              link="/tickets"
              buttonText="Cancel ticket"
            />
          </>
        );
      })}
    </div>
  );
};

export default Tickets;
