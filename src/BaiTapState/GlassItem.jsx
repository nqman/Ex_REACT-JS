import React from "react";

export default function GlassItem({ index, onClick }) {
  return (
    <button
      onClick={() => {
        onClick(index);
      }}
    >
      <img src={`./img/v${index}.png`} alt={index} />
    </button>
  );
}
// onClick={() => onClick(index)
