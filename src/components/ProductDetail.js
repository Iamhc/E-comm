import React from "react";

const ProductDetail = ({ selectedProduct, setSelectedProduct, addToCart }) => {
  if (!selectedProduct) return null;

  const { name, category, image, description, price } = selectedProduct;

  const handleGoBack = () => {
    setSelectedProduct(null);
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg, #000 20%, #111 100%)",
        padding: "40px 20px",
      }}
    >
      <div className="col-12 col-md-8 col-lg-5">
        <div
          className="card border-0 rounded-4 shadow-lg overflow-hidden hover-scale"
          style={{
            background: "#1a1a1a",
            color: "#fff",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          {/* Image Section */}
          <img
            src={image}
            className="card-img-top"
            alt={name}
            style={{
              height: "320px",
              objectFit: "cover",
              borderBottom: "2px solid #333",
            }}
          />

          {/* Card Body */}
          <div className="card-body p-4 text-center">
            <h3 className="card-title fw-bold mb-2 text-light">{name}</h3>
            <p className="text-secondary mb-1">
              <strong>Category:</strong> {category}
            </p>
            <p className="text-light-50 small mb-3">{description}</p>

            <h4 className="fw-bold text-warning mb-4">₹{price}</h4>

            {/* Buttons */}
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <button
                className="btn px-4 fw-semibold text-dark rounded-pill"
                style={{
                  background: "linear-gradient(90deg, #f9c74f, #f8d45a)",
                  border: "none",
                }}
                onClick={() => addToCart(selectedProduct)}
              >
                <i className="fas fa-cart-plus me-2"></i> Add to Cart
              </button>
              <button
                className="btn px-4 fw-semibold text-white border-0 rounded-pill"
                style={{
                  background: "linear-gradient(90deg, #333, #111)",
                }}
                onClick={handleGoBack}
              >
                <i className="fas fa-arrow-left me-2"></i> Go Back
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        .hover-scale:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 25px rgba(255, 255, 255, 0.08);
        }

        .btn:hover {
          filter: brightness(1.1);
          transform: translateY(-2px);
          transition: all 0.2s ease-in-out;
        }

        .text-light-50 {
          color: rgba(255,255,255,0.7);
        }

        @media (max-width: 576px) {
          .card-body h3 {
            font-size: 1.25rem;
          }
          .btn {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductDetail;
