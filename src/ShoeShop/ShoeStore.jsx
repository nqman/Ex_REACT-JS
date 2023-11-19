import { useState } from "react";
import ProductList from "./ProductList";
import Modal from "./Modal";

export default function ShoeStore() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleSelectDetail = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };
  return (
    <div>
      <h1 className="text-center">Shoe Store</h1>
      <ProductList onSelect={handleSelectDetail} />
      <Modal
        product={selectedProduct}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
