import React from "react";

export default function Modal({ product, isOpen, onClose }) {
  // const { name, image, price, description } = product;
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="modal d-block" tabIndex={-1}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Detail product</h4>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              />
            </div>
            <div className="modal-body">
              <img
                className="m-auto d-block"
                src={product.image}
                alt=""
                style={{ width: "300px", height: "300px" }}
              />
              <table>
                <tbody>
                  <tr>
                    <td className="fw-bolder">Name</td>
                    <td className="ps-5 p-2">{product.name}</td>
                  </tr>
                  <tr>
                    <td className="fw-bolder">Price</td>
                    <td className="ps-5 p-2">${product.price}</td>
                  </tr>
                  <tr>
                    <td className="fw-bolder">Description</td>
                    <td className="ps-5 p-2">{product.description}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
}
