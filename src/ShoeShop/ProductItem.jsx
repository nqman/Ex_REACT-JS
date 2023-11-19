import React from "react";

export default function ProductItem({ product, onSelect }) {
  const { name, image, price } = product;

  return (
    <div className="card mt-4">
      <img className="card-img-top" src={image} alt="" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">$ {price}</p>
        <button className="btn btn-primary me-2">Add to cart</button>
        <button className="btn btn-dark" onClick={() => onSelect(product)}>
          Detail
        </button>
      </div>
    </div>
  );
}
