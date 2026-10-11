import React, { useContext, useState } from 'react'
import './ProductDisplay.css'

import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"

import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

  // Get product data from props
  const { product } = props

  // Get addToCart function from ShopContext
  const { addToCart } = useContext(ShopContext)

  const tax = product.new_price * 5 / 100

  const [discountCode, setDiscountCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [shippingMethod, setShippingMethod] = useState('standard')

  const shippingCost = shippingMethod === 'express' ? 10 : 0

  const [zoomStyle, setZoomStyle] = useState({})

  const handleMouseMove = (e) => {
  const { left, top, width, height } =
    e.currentTarget.getBoundingClientRect()

  const x = ((e.clientX - left) / width) * 100
  const y = ((e.clientY - top) / height) * 100

  setZoomStyle({
    transformOrigin: `${x}% ${y}%`,
    transform: 'scale(2)'
  })
}

const handleMouseLeave = () => {
  setZoomStyle({
    transformOrigin: 'center',
    transform: 'scale(1)'
  })
}

const handleDiscount = () => {
  if (discountCode === 'SHOP10') {
    const discountAmount = product.new_price * 10 / 100
    setDiscount(discountAmount)
  } else {
    setDiscount(0)
    alert('Invalid discount code')
  }
}

  return (
    <div className="productdisplay">

      {/* Left Side - Product Images */}
      <div className="productdisplay-left">

        {/* Small Product Images */}
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>

        {/* Main Product Image */}
        <div className="productdisplay-img"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          >
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt=""
            style={zoomStyle}
          />
        </div>

      </div>

      {/* Right Side - Product Details */}
      <div className="productdisplay-right">

        {/* Product Name */}
        <h1>{product.name}</h1>

        {/* Product Rating */}
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        {/* Product Prices */}
        <div className="productdisplay-right-prices">

          {/* Old Price */}
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>

          {/* New Price */}
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>

        </div>

        {/* Product Description */}
        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and
          comfortable to wear.
        </div>

        {/* Size Selection */}
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>

          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        {/* Product Category */}
        <p className="productdisplay-right-category">
          <span>Category :</span> {product.category}
        </p>

        {/* Product Tags */}
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern, Latest
        </p>

        <p className="productdisplay-right-category">
          <span>Stock Status :</span>{" "}
          {product.stock === 0 ? "Out of Stock" : "In Stock"}
        </p>


        {/* Add Product To Cart */}
        {product.stock === 0 ? (
          <button disabled>
            OUT OF STOCK
          </button>
        ) : (
          <button onClick={() => addToCart(product.id)}>
            ADD TO CART
          </button>
)}
        
        {/* Shipping Method */}
        <div className="productdisplay-right-shipping">
          <h3>Shipping Method</h3>

          <label>
            <input 
            type="radio" 
            name="shipping"
            value="standard"
            checked={shippingMethod === 'standard'}
            onChange={(e) => setShippingMethod(e.target.value)}
            />

            Standard Delivery - 5-7 Days (Free)
          </label>

          <label>
            <input 
            type="radio" 
            name="shipping"
            value="express"
            checked={shippingMethod === 'express'}
            onChange={(e) => setShippingMethod(e.target.value)}
            />
            Express Delivery - 2-3 Days ($10)
          </label>

          <p>Shipping Fee: ${shippingCost}</p>
        </div>


        {/* Discount Code */}
        <div className="productdisplay-right-discount">
          <h3>Discount Code</h3>

          <div className="discount-box">
            <input 
            type="text" 
            name="discount"
            placeholder='Enter discount code'
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            />
          
            <button onClick={handleDiscount}>Apply Button</button>
          </div>

          {discount > 0 && (
            <p>Discount: ${discount}</p>
          )}
        </div>


        {/* Tax */}
        <div className="productdisplay-right-tax">
          <h3>Tax</h3>
          <p>Tax: ${tax}</p>
        </div>

      </div>

    </div>
  )
}

export default ProductDisplay