import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductNav from "./ProductNav";
import Products from "./ProductAPI";
import ProductDetail from "./ProductDetail";
import Navbar from "./Navbar";
import ShoppingCartCard from "./ShoppingCartCard";

const navlist = [
  ...new Set(Products.map((curCateg) => curCateg.category)),
  "All",
];

const ProductDisplay = ({ userData, logout }) => {
  const [prodData, setProdData] = useState(Products);
  const [menuList] = useState(navlist);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // Category filter
  const filterItem = (category) => {
    if (category === "All") {
      setProdData(Products);
      return;
    }
    const updatedList = Products.filter((curElem) => curElem.category === category);
    setProdData(updatedList);
  };

  // Add to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Update quantities
  const increaseQuantity = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter((item) => item.id !== itemToRemove.id));
  };

  const checkout = () => {
    setCartItems([]);
    alert("Thank you for shopping with us! 🎉");
  };

  return (
    <>
      {/* Navbar */}
      <Navbar userData={userData} logout={logout} />

      {/* Page Background */}
      <div
        className="container-fluid"
        style={{
          paddingTop: "90px",
          background: "linear-gradient(135deg, #111 40%, #222 100%)",
          minHeight: "100vh",
          color: "#fff",
        }}
      >
        <div className="row g-4 px-3 pb-5">
          {/* Left Section */}
          <div className="col-12 col-lg-9">
            {!selectedProduct && (
              <div className="mb-3">
                <ProductNav filterItem={filterItem} menuList={menuList} />
              </div>
            )}

            <div
              className={`transition-container ${
                selectedProduct ? "fade-in" : "fade-in"
              }`}
            >
              {selectedProduct ? (
                <ProductDetail
                  selectedProduct={selectedProduct}
                  setSelectedProduct={setSelectedProduct}
                  addToCart={addToCart}
                />
              ) : (
                <ProductCard
                  prodData={prodData}
                  setSelectedProduct={setSelectedProduct}
                  addToCart={addToCart}
                />
              )}
            </div>
          </div>

          {/* Right Section: Cart */}
          <div className="col-12 col-lg-3">
            <div
              className="sticky-top shadow-lg rounded-4"
              style={{
                top: "100px",
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "16px",
              }}
            >
              <ShoppingCartCard
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                checkout={checkout}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fade animation */}
      <style>{`
        .fade-in {
          animation: fadeIn 0.4s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .sticky-top {
          transition: transform 0.3s ease;
        }

        .sticky-top:hover {
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .sticky-top {
            position: relative !important;
            top: 0 !important;
            margin-top: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default ProductDisplay;
