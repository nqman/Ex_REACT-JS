import React from "react";

export default function Modal({ product, isOpen, onClose }) {
  // const { name, image, price, description } = product;
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="modal d-block" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Detail product</h5>
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
                style={{ width: "200px", height: "200px" }}
              />
              <table>
                <tbody>
                  <tr>
                    <td className="fw-bolder">Name</td>
                    <td>{product.name}</td>
                  </tr>
                  <tr>
                    <td className="fw-bolder">Price</td>
                    <td>${product.price}</td>
                  </tr>
                  <tr>
                    <td className="fw-bolder">Description</td>
                    <td>{product.description}</td>
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
