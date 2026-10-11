import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";

import Toast from "../Components/Toast/Toast";
import "./AddProduct.css";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [productImages, setProductImages] = useState([]);

  const { adminProducts, setAdminProducts } = useContext(ShopContext);

  const handleAddProduct = () => {
    if (
      productName === "" ||
      productPrice === "" ||
      category === "" ||
      stock === "" ||
      productImages.length === 0
    ) {
      alert("Please fill all fields and select product images");
      return;
    }

    const imageReaders = productImages.map((image) => {
      return new Promise((resolve) => {
        const reader = new FileReader();

        reader.onloadend = () => {
          resolve(reader.result);
        };

        reader.readAsDataURL(image);
      });
    });

    Promise.all(imageReaders).then((images) => {
      const product = {
        id: Date.now(),
        name: productName,
        price: productPrice,
        category: category,
        stock: Number(stock),

        // All product images
        images: images,

        // First image for existing product cards
        image: images[0],
      };

      setAdminProducts([...adminProducts, product]);

      setToastMessage("Product added successfully");

      // Reset form
      setProductName("");
      setProductPrice("");
      setCategory("");
      setStock("");
      setProductImages([]);
    });
  };

  return (
    <div className="add-product">

      {/* Header */}
      <div className="add-product-header">
        <div>
          <h1>Add Product</h1>
          <p>Add a new product to your store</p>
        </div>
      </div>

      {/* Product Form Card */}
      <div className="add-product-card">

        <div className="form-title">
          <h2>Product Information</h2>
          <p>Enter the details of your new product</p>
        </div>

        <div className="add-product-form">

          {/* Product Name */}
          <div className="form-group">
            <label>Product Name</label>

            <input
              type="text"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          {/* Product Price */}
          <div className="form-group">
            <label>Product Price</label>

            <input
              type="number"
              placeholder="Enter price"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>

          {/* Category */}
          <div className="form-group">
            <label>Category</label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
            </select>
          </div>

          {/* Stock */}
          <div className="form-group">
            <label>Stock Quantity</label>

            <input
              type="number"
              placeholder="Enter stock quantity"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          {/* Product Images */}
          <div className="form-group">
            <label>Product Images</label>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => {
                const files = Array.from(e.target.files);

                if (files.length > 5) {
                  alert("You can select maximum 5 images");
                  return;
                }

                setProductImages(files);
              }}
            />

            <p>
              Select up to 5 images: Front, Back, Left, Right and Detail View
            </p>
          </div>

        </div>

        {/* Add Product Button */}
        <div className="add-product-actions">
          <button
            className="add-product-btn"
            onClick={handleAddProduct}
          >
            + Add Product
          </button>
        </div>

      </div>

      {/* Toast */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage("")}
        />
      )}

    </div>
  );
};

export default AddProduct;