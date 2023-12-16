import React from "react";
import SeatItem from "./SeatItem";
const colNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function SeatList({ dataRows }) {
  return (
    <>
      <div className="ps-5">
        {colNumbers.map((number) => (
          <span
            className="text-warning fw-bold fs-3 text-center m-2"
            style={{
              display: "inline-block",
              width: "50px",
              height: "50px",
              lineHeight: "50px",
            }}
          >
            {number}
          </span>
        ))}
      </div>
      <div className="">
        {dataRows.map((dataRow) => (
          <div className="rowName">
            <span
              className="text-warning fw-bold fs-3 text-center"
              style={{
                display: "inline-block",
                width: "50px",
                height: "50px",
                lineHeight: "50px",
              }}
            >
              {dataRow.row}
            </span>
            <SeatItem seats={dataRow.seats} />
          </div>
        ))}
      </div>
    </>
  );
}
