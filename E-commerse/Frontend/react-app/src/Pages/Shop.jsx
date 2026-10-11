import React, { useContext } from "react";
import "/src/Pages/Shop.css";

import { ShopContext } from "../Context/ShopContext";

import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = () => {
  const { adminProducts } = useContext(ShopContext);

  return (
    <div>

      <Hero />

      {/* Admin Added Products */}
      {adminProducts.length > 0 && (
        <div className="admin-products">
          <h2>New Products</h2>

          <div className="admin-products-grid">
            {adminProducts.map((product) => (
              <div
                className="admin-product-card"
                key={product.id}
              >
                <img
                  src={product.image}
                  alt={product.name}
                />

                <h3>{product.name}</h3>

                <p>₹{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <Popular />

      <Offers />

      <NewCollections />

      <NewsLetter />

    </div>
  );
};

export default Shop;