import React from "react";

const ProductCard = ({ prodData, setSelectedProduct, addToCart }) => {
  return (
    <div
      className="container py-5"
      style={{
        background: "linear-gradient(135deg, #000 20%, #111 100%)",
        minHeight: "100vh",
        borderRadius: "20px",
      }}
    >
      {/* Responsive Grid */}
      <div className="row g-4">
        {prodData.map((curProd) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={curProd.id}>
            <div
              className="card h-100 border-0 rounded-4 shadow-sm hover-scale"
              style={{
                transition: "all 0.3s ease",
                backgroundColor: "#1a1a1a",
                color: "#fff",
              }}
            >
              {/* Product Image */}
              <img
                src={curProd.image}
                className="card-img-top"
                alt={curProd.name}
                style={{
                  height: "230px",
                  objectFit: "cover",
                  borderBottom: "2px solid #333",
                }}
              />

              {/* Product Details */}
              <div className="card-body text-center px-3">
                <h5 className="card-title fw-bold mb-2 text-light">
                  {curProd.name}
                </h5>
                <p className="text-secondary mb-1">
                  <small>Category:</small> {curProd.category}
                </p>
                <p className="fw-bold text-warning fs-5 mb-3">
                  ₹{curProd.price}
                </p>

                {/* Buttons */}
                <div className="d-flex justify-content-center gap-2">
                  <button
                    className="btn btn-outline-light btn-sm px-3 fw-semibold rounded-pill"
                    onClick={() => setSelectedProduct(curProd)}
                  >
                    <i className="fas fa-eye me-1"></i> View
                  </button>
                  <button
                    className="btn btn-warning btn-sm px-3 text-dark fw-semibold rounded-pill"
                    onClick={() => addToCart(curProd)}
                  >
                    <i className="fas fa-cart-plus me-1"></i> Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* No Products */}
        {prodData.length === 0 && (
          <div className="text-center text-light py-5">
            <i className="fas fa-box-open fa-2x mb-3"></i>
            <h5>No Products Found</h5>
          </div>
        )}
      </div>

      {/* Animations + Hover */}
      <style>{`
        .hover-scale {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-scale:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(255, 255, 255, 0.05);
        }

        .btn-outline-light {
          border: 1px solid #f1f1f1 !important;
        }

        .btn-outline-light:hover {
          background-color: #fff !important;
          color: #000 !important;
        }

        .btn-warning {
          background-color: #f9c74f !important;
          border: none !important;
        }

        .btn-warning:hover {
          background-color: #000 !important;
          color: #fff !important;
        }

        .card-title {
          letter-spacing: 0.5px;
        }

        @media (max-width: 576px) {
          .card-body h5 {
            font-size: 1rem;
          }
          .btn {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
