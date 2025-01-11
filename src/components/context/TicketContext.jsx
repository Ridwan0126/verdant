import { createContext, useContext, useState } from "react";
import { initialTickets } from "../data/tickets";

const TicketContext = createContext();

export function TicketProvider({ children }) {
  const [tickets, setTickets] = useState(initialTickets);

  const addTicket = (newTicket) => {
    setTickets([...tickets, { ...newTicket, id: tickets.length + 1 }]);
  };

  const editTicket = (editedTicket) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === editedTicket.id ? editedTicket : ticket
      )
    );
  };

  const deleteTicket = (id) => {
    setTickets(tickets.filter((ticket) => ticket.id !== id));
  };

  return (
    <TicketContext.Provider
      value={{ tickets, addTicket, editTicket, deleteTicket }}
    >
      {children}
    </TicketContext.Provider>
  );
}

export function useTickets() {
  return useContext(TicketContext);
}
