import React, { createContext, useState } from "react";
import all_products from "../Components/Assets/all_products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let index = 0; index < all_products.length; index++) {
    cart[all_products[index].id] = 0;
  }

  return cart;
};

const getAdminProducts = () => {
  const savedProducts = localStorage.getItem("adminProducts");

  if (savedProducts) {
    return JSON.parse(savedProducts);
  }

  return [];
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const [adminProducts, setAdminProducts] = useState(getAdminProducts());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = 
        all_products.find(
          (product) => product.id === Number(item)
        ) || 
        adminProducts.find(
          (product) => product.id === Number(item)
        );

        totalAmount += Number(itemInfo.new_price || itemInfo.price) * cartItems[item];
      }
    }

    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }

    return totalItem;
  };

  const updateAdminProducts = (products) => {
    setAdminProducts(products);
    localStorage.setItem("adminProducts", JSON.stringify(products));
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_products,

    adminProducts,
    setAdminProducts: updateAdminProducts,

    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;