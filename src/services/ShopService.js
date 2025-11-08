const API_BASE_URL = "http://localhost:5000/api";

export const ShopService = {
  // Get all products
  getProducts: async () => {
    const response = await fetch(`${API_BASE_URL}/products`);
    return response.json();
  },

  // Add new product
  addProduct: async (productData) => {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to add product");
    }
    return response.json();
  },

  // Add item to cart
  addToCart: async (productId, qty) => {
    const response = await fetch(`${API_BASE_URL}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId, qty }),
    });
    return response.json();
  },

  // Remove item from cart
  removeFromCart: async (productId) => {
    const response = await fetch(`${API_BASE_URL}/cart/${productId}`, {
      method: "DELETE",
    });
    return response.json();
  },

  // Get cart and total
  getCart: async () => {
    const response = await fetch(`${API_BASE_URL}/cart`);
    return response.json();
  },

  // Process checkout
  checkout: async (cartItems) => {
    const response = await fetch(`${API_BASE_URL}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems }),
    });
    return response.json();
  },
};
