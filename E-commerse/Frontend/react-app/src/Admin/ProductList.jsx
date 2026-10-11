import React, { useContext, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'

import Toast from '../Components/Toast/Toast'
import './ProductList.css'

const ProductList = ({ products, setProducts }) => {

  const { adminProducts, setAdminProducts } = useContext(ShopContext)

  const [editProduct, setEditProduct] = useState(null)
  const [viewProduct, setViewProduct] = useState(null)
  const [toastMessage, setToastMessage] = useState('')

  const handleRemove = (id) => {
    const updateProducts = adminProducts.filter(
      (product) => product.id !== id
    )

    setAdminProducts(updateProducts)
    setToastMessage('Product removed successfully')
  }

  const handleEdit = (product) => {
    setEditProduct({ ...product })
  }

  const handleUpdate = () => {

    const updatedProducts = adminProducts.map((product) => {

      if (product.id === editProduct.id) {
        return editProduct
      }

      return product
    })

    setAdminProducts(updatedProducts)
    setEditProduct(null)
    setToastMessage('Product updated successfully')
  }

  return (
    <div className="product-list">

      {/* Header */}

      <div className="product-list-header">
        <div>
          <h1>Product List</h1>
          <p>Manage all your store products</p>
        </div>

        <div className="product-count">
          {adminProducts.length} Products
        </div>
      </div>


      {/* Empty State */}

      {adminProducts.length === 0 ? (

        <div className="empty-products">

          <div className="empty-icon">📦</div>

          <h2>No Products Added</h2>

          <p>
            Add your first product from the Add Product section.
          </p>

        </div>

      ) : (

        <div className="products-table">

          {/* Table Header */}

          <div className="products-table-header">

            <span>Product</span>
            <span>Category</span>
            <span>Price</span>
            <span>Stock</span>
            <span>Status</span>
            <span>Actions</span>

          </div>


          {/* Products */}

          {adminProducts.map((product) => (

            <div
              className="product-row"
              key={product.id}
            >

              {/* Product */}

              <div className="product-info">

                <div className="product-icon">
                  <img 
                  src={product.image}
                  alt={product.name}
                  />
                </div>

                <div>
                  <h3>{product.name}</h3>
                  <p>ID: {product.id}</p>
                </div>

              </div>


              {/* Category */}

              <div className="product-category">
                {product.category}
              </div>


              {/* Price */}

              <div className="product-price">
                ₹{product.price}
              </div>


              {/* Stock */}

              <div className="product-stock">
                {product.stock}
              </div>


              {/* Status */}

              <div>

                {product.stock > 0 ? (

                  <span className="stock-status in-stock">
                    ● In Stock
                  </span>

                ) : (

                  <span className="stock-status out-stock">
                    ● Out of Stock
                  </span>

                )}

              </div>


              {/* Actions */}

              <div className="product-actions">

                <button 
                className='view-btn'
                onClick={() => setViewProduct(product)}
                >
                  View Details
                </button>

                <button
                  className="edit-btn"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>

                <button
                  className="remove-btn"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

      )}


      {/* Edit Product */}

      {editProduct && (

        <div className="edit-overlay">

          <div className="edit-product-box">

            <div className="edit-header">

              <div>
                <h2>Edit Product</h2>
                <p>Update product information</p>
              </div>

              <button
                className="close-edit"
                onClick={() => setEditProduct(null)}
              >
                ×
              </button>

            </div>


            <div className="edit-fields">

              <div className="edit-field">

                <label>Product Name</label>

                <input
                  type="text"
                  value={editProduct.name}
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
                      name: e.target.value
                    })
                  }
                />

              </div>


              <div className="edit-field">

                <label>Price</label>

                <input
                  type="number"
                  value={editProduct.price}
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
                      price: e.target.value
                    })
                  }
                />

              </div>


              <div className="edit-field">

                <label>Category</label>

                <input
                  type="text"
                  value={editProduct.category}
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
                      category: e.target.value
                    })
                  }
                />

              </div>


              <div className="edit-field">

                <label>Stock Quantity</label>

                <input
                  type="number"
                  value={editProduct.stock}
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
                      stock: Number(e.target.value)
                    })
                  }
                />

              </div>

            </div>


            <div className="edit-actions">

              <button
                className="cancel-edit"
                onClick={() => setEditProduct(null)}
              >
                Cancel
              </button>

              <button
                className="update-product"
                onClick={handleUpdate}
              >
                Update Product
              </button>

            </div>

          </div>

        </div>

      )}

      {viewProduct && (
        <div className="view-overlay">
          <div className="view-product-box">
            <div className="view-header">
              <div>
                <h2>Product Details</h2>
                <p>Complete product information</p>
              </div>

              <button 
              className='close-view'
              onClick={() => setViewProduct(null)}
              >
                *
              </button>
            </div>

            <div className="view-product-content">

              <div className="view-product-images">

                {viewProduct.images &&
                  viewProduct.images.map((image, index) => (
                <div   className="view-image-item"    key={index}>
                  <img
                   src={image}
                   alt={`${viewProduct.name} ${index + 1}`}
                  />

                  <p>
                    {index === 0
                      ? "Front View"
                      : index === 1
                      ? "Back View"
                      : index === 2
                      ? "Left View"
                      : index === 3
                      ? "Right View"
                      : "Detail View"}
                  </p>
                </div>
                ))}

              </div>

              <div className="view-product-details">
                <div className="details-item">
                  <span>Product Name</span>
                  <strong>{viewProduct.name}</strong>
                </div>

                <div className="detail-item">
                  <span>Product ID</span>
                  <strong>{viewProduct.id}</strong>
                </div>

                <div className="detail-item">
                  <span>Price</span>
                  <strong>₹{viewProduct.price}</strong>
                </div>

                <div className="detail-item">
                  <span>Category</span>
                  <strong>{viewProduct.category}</strong>
                </div>

                <div className="detail-item">
                  <span>Stock</span>
                  <strong>{viewProduct.stock}</strong>
                </div>

                <div className="detail-item">
                  <span>Status</span>
                  <strong>{viewProduct.stock > 0 ? "In Stock" : "Out of Stock"}</strong>
                </div>

              </div>

            </div>

          </div>

        </div>
      )}

      {/* Toast */}

      {toastMessage && (

        <Toast
          message={toastMessage}
          onClose={() => setToastMessage('')}
        />

      )}

    </div>
  )
}

export default ProductList