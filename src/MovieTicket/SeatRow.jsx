import React from "react";
import { useSelector, useDispatch } from "react-redux";

import SeatItem from "./SeatItem";

export default function SeatRow({ dataRow }) {
  const { seats, row } = dataRow;
  // Danh sách ghế đang được chọn
  const selectedSeats = useSelector((state) => {
    return state.movieTicket.selectedSeats; // reducer movieTicket
  });
  return (
    <div className="rowName">
      <span
        className="text-warning fw-bold fs-4 text-center"
        style={{
          display: "inline-block",
          width: "40px",
          height: "40px",
        }}
      >
        {row}
      </span>

      {seats.map((seat) => {
        const found = selectedSeats.find((item) => item.name === seat.name);
        return <SeatItem seat={seat} isSelected={!!found} />;
      })}
    </div>
  );
}
