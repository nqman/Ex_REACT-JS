import React from "react";
import data from "./data.json";
import ProductItem from "./ProductItem";

export default function ProductList({ onSelect }) {
  return (
    <div className="container">
      <div className="row">
        {data.map((product) => (
          <div className="col-4">
            <ProductItem
              product={product}
              // name={product.name}
              // price={product.price}
              // image={product.image}
              onSelect={onSelect}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
