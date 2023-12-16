import React from "react";

export default function SeatItem({ seats }) {
  return (
    <>
      {seats.map((seat) => (
        <button
          className="btn btn-outline-warning text-dark m-2"
          style={{ width: "50px", height: "50px" }}
        >
          {seat.name}
        </button>
      ))}
    </>
  );
}
