import React from "react";

const ShoppingCartCard = ({
  cartItems,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  checkout,
}) => {
  const total = cartItems.reduce(
    (acc, cur) => acc + parseFloat(cur.price.replace("Rs.", "")) * cur.quantity,
    0
  );

  return (
    <div
      className="card border-0 shadow-lg rounded-4 bg-light"
      style={{
        maxHeight: "80vh",
        overflowY: "auto",
        transition: "all 0.3s ease",
      }}
    >
      {/* Header */}
      <div className="card-header bg-dark text-white fw-semibold fs-5 text-center">
        🛒 Shopping Cart
      </div>

      {/* Cart Items */}
      <ul className="list-group list-group-flush">
        {cartItems.length === 0 ? (
          <li className="list-group-item text-center text-muted py-4">
            Your cart is empty
          </li>
        ) : (
          cartItems.map((item) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={item.id}
              style={{ fontSize: "0.95rem" }}
            >
              <div className="me-3 flex-grow-1">
                <div className="fw-semibold text-dark">{item.name}</div>
                <small className="text-muted">
                  Price: {item.price} | Qty: {item.quantity}
                </small>
              </div>

              {/* Controls */}
              <div className="d-flex align-items-center gap-1">
                <button
                  className="btn btn-sm btn-outline-danger rounded-circle"
                  onClick={() => decreaseQuantity(item)}
                >
                  −
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  className="btn btn-sm btn-outline-success rounded-circle"
                  onClick={() => increaseQuantity(item)}
                >
                  +
                </button>
                <button
                  className="btn btn-sm btn-outline-secondary ms-2"
                  onClick={() => removeFromCart(item)}
                  title="Remove item"
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </li>
          ))
        )}
      </ul>

      {/* Footer */}
      {cartItems.length > 0 && (
        <div className="card-footer bg-white text-center">
          <h6 className="fw-bold mb-3">Total: ₹{total.toFixed(2)}</h6>
          <button
            className="btn btn-success px-4 fw-semibold shadow-sm"
            onClick={checkout}
          >
            Checkout
          </button>
        </div>
      )}

      {/* Scrollbar styling */}
      <style>{`
        .card::-webkit-scrollbar {
          width: 6px;
        }
        .card::-webkit-scrollbar-thumb {
          background-color: #bbb;
          border-radius: 10px;
        }
        .card::-webkit-scrollbar-thumb:hover {
          background-color: #888;
        }
      `}</style>
    </div>
  );
};

export default ShoppingCartCard;
