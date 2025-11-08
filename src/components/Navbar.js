import React from "react";

const Navbar = ({ userData, logout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
      <div className="container">
        {/* Brand */}
        <button
          className="navbar-brand fw-bold fs-4 d-flex align-items-center btn btn-link border-0 text-white p-0"
          onClick={() => {
            /* TODO: Add home/reset handler */
          }}
        >
          🛍️ <span className="ms-2">ShopHub</span>
        </button>

        {/* Toggler */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center gap-lg-3">
            {/* Greeting */}
            <li className="nav-item">
              <span className="nav-link text-light fw-semibold">
                👋 Hello, {userData?.userName || "Guest"}
              </span>
            </li>

            {/* Cart Icon */}
            <li className="nav-item">
              <a
                className="nav-link position-relative"
                href="#cart"
                title="View Cart"
              >
                <i className="fas fa-shopping-cart fa-lg"></i>
                {/* Optional badge for items */}
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.65rem" }}
                >
                  3
                </span>
              </a>
            </li>

            {/* Logout Button */}
            <li className="nav-item">
              <button
                className="btn btn-sm btn-outline-danger fw-semibold ms-lg-2"
                onClick={logout}
                title="Logout"
              >
                <i className="fas fa-power-off me-1"></i> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
