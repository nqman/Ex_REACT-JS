import React from "react";
import data from "./data.json";
import SeatList from "./SeatList";
import Tickets from "./Tickets";

export default function MovieTicket() {
  return (
    <div className="container">
      <h1 className="text-center">Movie Ticket</h1>
      <div className="row">
        <div className="col-9">
          <SeatList dataRows={data} />
        </div>
        <div className="col-3">
          <Tickets />
        </div>
      </div>
    </div>
  );
}
