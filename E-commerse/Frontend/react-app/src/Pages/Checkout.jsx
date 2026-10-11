import React, { useState, useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/Checkout.css";

const Checkout = () => {
  const { all_products, adminProducts, cartItems } =
    useContext(ShopContext);

  const allCartProducts = [...all_products, ...adminProducts];

  let subtotal = 0;

  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      const product = allCartProducts.find(
        (p) => p.id === Number(item)
      );

      const price = Number(
        product.new_price || product.price || 0
      );

      subtotal += price * cartItems[item];
    }
  }

  // Tax Settings
  const savedTax = localStorage.getItem("taxSettings");

  const taxSettings = savedTax
    ? JSON.parse(savedTax)
    : {
        percentage: 5,
        status: "Active",
      };

  const tax =
    taxSettings.status === "Active"
      ? (subtotal * Number(taxSettings.percentage)) / 100
      : 0;

  const shippingCost = 0;

  // Coupon States
  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");

  const [orderPlaced, setOrderPlaced] = useState(false);

  // Apply Coupon
  const handleApplyCoupon = () => {
    if (couponCode.trim() === "") {
      setCouponMessage("Please enter coupon code");
      setCouponDiscount(0);
      return;
    }

    const savedDiscounts = localStorage.getItem("discounts");

    if (!savedDiscounts) {
      setCouponMessage("Invalid coupon code");
      setCouponDiscount(0);
      return;
    }

    const discounts = JSON.parse(savedDiscounts);

    const coupon = discounts.find(
      (item) =>
        item.code.toUpperCase() ===
          couponCode.trim().toUpperCase() &&
        item.status === "Active"
    );

    if (!coupon) {
      setCouponMessage("Invalid coupon code");
      setCouponDiscount(0);
      return;
    }

    // Minimum Order Check
    if (
      coupon.minimumOrder &&
      subtotal < Number(coupon.minimumOrder)
    ) {
      setCouponMessage(
        `Minimum order amount is ₹${coupon.minimumOrder}`
      );
      setCouponDiscount(0);
      return;
    }

    // Calculate Discount
    const discountAmount =
      (subtotal * Number(coupon.percentage)) / 100;

    setCouponDiscount(discountAmount);

    setCouponMessage(
      `${coupon.percentage}% discount applied successfully`
    );
  };

  const total =
    subtotal +
    tax +
    shippingCost -
    couponDiscount;

  // Place Order
  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  // Invoice
  const generateInvoice = () => {
    let productDetails = "";

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const product = allCartProducts.find(
          (p) => p.id === Number(item)
        );

        const price = Number(
          product.new_price || product.price || 0
        );

        productDetails += `
${product.name} × ${cartItems[item]} = ₹${
          price * cartItems[item]
        }
`;
      }
    }

    const invoice = `
SHOPPER INVOICE

Order Status: Order Placed

Products:
${productDetails}

Subtotal: ₹${subtotal.toFixed(2)}
Tax: ₹${tax.toFixed(2)}
Shipping: ₹${shippingCost.toFixed(2)}
Coupon: ${couponCode || "None"}
Discount: ₹${couponDiscount.toFixed(2)}

Total: ₹${total.toFixed(2)}

Thank you for shopping with SHOPPER!
`;

    const link = document.createElement("a");

    link.href =
      "data:text/plain;charset=utf-8," +
      encodeURIComponent(invoice);

    link.download = "SHOPPER-Invoice.txt";

    link.click();
  };

  return (
    <div className="checkout">

      <h1>Checkout</h1>

      <div className="checkout-container">

        {/* Left Side */}

        <div className="checkout-left">

          <h2>Billing Details</h2>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Phone Number"
          />

          <input
            type="text"
            placeholder="Address"
          />

          <div className="checkout-row">

            <input
              type="text"
              placeholder="City"
            />

            <input
              type="text"
              placeholder="Pincode"
            />

          </div>

          <h2>Payment Method</h2>

          <label>
            <input
              type="radio"
              name="payment"
              defaultChecked
            />
            Cash on Delivery
          </label>

          <label>
            <input
              type="radio"
              name="payment"
            />
            Online Payment
          </label>

        </div>


        {/* Right Side */}

        <div className="checkout-right">

          <h2>Order Summary</h2>

          <div className="checkout-item">
            <p>Subtotal</p>
            <p>₹{subtotal.toFixed(2)}</p>
          </div>

          <hr />

          <div className="checkout-item">
            <p>Tax</p>
            <p>₹{tax.toFixed(2)}</p>
          </div>

          <hr />

          <div className="checkout-item">
            <p>Shipping</p>
            <p>₹{shippingCost.toFixed(2)}</p>
          </div>

          <hr />


          {/* Coupon Section */}

          <div className="coupon-section">

            <h3>Have a Coupon?</h3>

            <div className="coupon-input">

              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => {
                  setCouponCode(e.target.value);
                  setCouponMessage("");
                  setCouponDiscount(0);
                }}
              />

              <button
                type="button"
                onClick={handleApplyCoupon}
              >
                APPLY
              </button>

            </div>

            {couponMessage && (
              <p className="coupon-message">
                {couponMessage}
              </p>
            )}

          </div>


          <hr />


          <div className="checkout-item">
            <p>Discount</p>
            <p>
              -₹{couponDiscount.toFixed(2)}
            </p>
          </div>

          <hr />

          <div className="checkout-total">
            <h3>Total</h3>
            <h3>₹{total.toFixed(2)}</h3>
          </div>


          {!orderPlaced && (
            <button
              className="place-order-btn"
              onClick={handlePlaceOrder}
            >
              PLACE ORDER
            </button>
          )}


          {orderPlaced && (
            <div className="order-success">

              <h3>
                Order placed successfully!
              </h3>

              <p>
                Thank you for shopping with SHOPPER.
              </p>

              <button
                className="invoice-btn"
                onClick={generateInvoice}
              >
                DOWNLOAD INVOICE
              </button>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default Checkout;