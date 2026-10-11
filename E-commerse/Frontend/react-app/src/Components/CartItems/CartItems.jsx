import React, { useContext } from 'react'
import './CartItems.css'
import { useNavigate } from 'react-router-dom'

import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {

   const navigate = useNavigate()

  // Get cart data and functions from ShopContext
  const { 
    all_products,
    adminProducts, 
    cartItems, 
    removeFromCart 
  } = useContext(ShopContext)

  // Calculate Subtotal
  let subtotal = 0

const allCartProducts = [...all_products, ...adminProducts]

allCartProducts.forEach((product) => {
  const quantity = cartItems[product.id] || 0
  const price = Number(product.new_price || product.price || 0)

  subtotal += price * quantity
})

  return (
    <div className='cartitems'>

      {/* Cart Heading */}
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />

      {/* Cart Products */}
      {allCartProducts.map((e) => {

        // Display only products that are added to cart
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>

              <div className="cartitems-format cartitems-format-main">

                {/* Product Image */}
                <img
                  src={e.image}
                  alt=""
                  className='carticon-product-icon'
                />

                {/* Product Name */}
                <p>{e.name}</p>

                {/* Product Price */}
                <p>₹{e.new_price || e.price}</p>

                {/* Product Quantity */}
                <button className='cartitems-quantity'>
                  {cartItems[e.id]}
                </button>

                {/* Product Total */}
                  <p>
                    ₹{Number(e.new_price || e.price) * cartItems[e.id]}
                  </p>

                {/* Remove Product */}
                <img
                  className='cartitems-remove-icon'
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="Remove"
                />

              </div>

              <hr />

            </div>
          )
        }

        return null
      })}

      {/* Cart Bottom Section */}
      <div className="cartitems-down">

        {/* Cart Total */}
        <div className="cartitems-total">

          <h1>Cart Totals</h1>

          {/* Subtotal */}
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>

          <hr />

          {/* Shipping Fee */}
          <div className="cartitems-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>

          <hr />

          {/* Final Total */}
          <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>${subtotal}</h3>
          </div>

          {/* Checkout Button */}
          <button onClick={() => navigate('/checkout')}>
            PROCEED TO CHECKOUT
          </button>

        </div>

        {/* Promo Code */}
        <div className="cartitems-promocode">

          <p>
            If you have a promo code, Enter it here
          </p>

          <div className="cartitems-promobox">

            <input
              type="text"
              placeholder='promo code'
            />

            <button>Submit</button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default CartItems