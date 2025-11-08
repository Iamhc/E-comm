import React, { useState } from "react";

const ProductNav = ({ filterItem, menuList }) => {
  const [active, setActive] = useState("All");

  const handleClick = (category) => {
    setActive(category);
    filterItem(category);
  };

  return (
    <div className="container my-5 text-center">
      <div
        className="d-flex flex-wrap justify-content-center gap-3 p-4 rounded-4 shadow-sm"
        style={{
          background: "linear-gradient(135deg, #111 40%, #222 100%)",
          color: "#fff",
        }}
      >
        {menuList.map((curCateg) => (
          <button
            key={curCateg}
            type="button"
            className={`btn fw-semibold px-4 py-2 ${
              active === curCateg
                ? "btn-light text-dark"
                : "btn-outline-light text-white"
            }`}
            onClick={() => handleClick(curCateg)}
            style={{
              borderRadius: "30px",
              minWidth: "110px",
              letterSpacing: "0.5px",
              transition: "all 0.3s ease",
              border: "1px solid rgba(255,255,255,0.5)",
              backgroundColor: active === curCateg ? "#fff" : "transparent",
            }}
          >
            {curCateg}
          </button>
        ))}
      </div>

      {/* Hover + Active Animations */}
      <style>{`
        button.btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
          background-color: #fff !important;
          color: #000 !important;
          border-color: #fff !important;
        }

        button.btn-light:hover {
          background-color: #fff !important;
          color: #000 !important;
        }
      `}</style>
    </div>
  );
};

export default ProductNav;
