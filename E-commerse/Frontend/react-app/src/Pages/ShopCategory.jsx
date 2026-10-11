import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { useNavigate } from "react-router-dom";

import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const navigate = useNavigate();

  const { all_products, adminProducts } = useContext(ShopContext);

  // Filter admin products according to category
  const filteredAdminProducts = adminProducts.filter(
    (product) => product.category === props.category
  );
  
  return (
    <div className="shop-category">

      {/* Category Banner */}

      <img
        className="shopcategory-banner"
        src={props.banner}
        alt=""
      />

      {/* Product Count and Sort */}

      <div className="shopcategory-indexSort">

        <p>
          <span>
            Showing{" "}
            {all_products.filter(
              (item) => item.category === props.category
            ).length + filteredAdminProducts.length}
          </span>{" "}
          products
        </p>

        <div className="shopcategory-sort">
          Sort by
          <span>⌄</span>
        </div>

      </div>

      {/* Category Products */}

      <div className="shopcategory-products">

        {/* Existing Products */}

        {all_products.map((item) => {

          if (props.category === item.category) {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }

          return null;
        })}

        {/* Admin Added Products */}

        {filteredAdminProducts.map((product) => (
          <div
            className="admin-category-product"
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
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

      {/* Explore More Button */}

      <div className="shopcategory-loadmore">
        Explore More
      </div>

    </div>
  );
};

export default ShopCategory;