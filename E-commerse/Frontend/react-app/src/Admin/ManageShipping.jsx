import React, { useState } from "react";
import "./ManageShipping.css";
import Toast from "../Components/Toast/Toast";

const ManageShipping = () => {
  const [shipping, setShipping] = useState(() => {
    const savedShipping = localStorage.getItem("shippingSettings");

    if (savedShipping) {
      return JSON.parse(savedShipping);
    }

    return {
      standardCharge: "",
      standardDays: "",
      expressCharge: "",
      expressDays: "",
      freeShippingAmount: "",
      status: "Active",
    };
  });

  const [toastMessage, setToastMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setShipping({
      ...shipping,
      [name]: value,
    });
  };

  const handleSaveShipping = () => {
    if (
      shipping.standardCharge === "" ||
      shipping.standardDays === "" ||
      shipping.expressCharge === "" ||
      shipping.expressDays === "" ||
      shipping.freeShippingAmount === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    if (
      Number(shipping.standardCharge) < 0 ||
      Number(shipping.expressCharge) < 0 ||
      Number(shipping.freeShippingAmount) < 0
    ) {
      alert("Shipping amount cannot be negative");
      return;
    }

    if (
      Number(shipping.standardDays) < 1 ||
      Number(shipping.expressDays) < 1
    ) {
      alert("Delivery days must be at least 1");
      return;
    }

    localStorage.setItem(
      "shippingSettings",
      JSON.stringify(shipping)
    );

    setToastMessage("Shipping settings saved successfully");
  };

  return (
    <div className="manage-shipping">

      {/* Header */}

      <div className="shipping-header">
        <h1>Manage Shipping</h1>
        <p>Manage your store shipping settings</p>
      </div>

      {/* Standard Shipping */}

      <div className="shipping-card">

        <h2>Standard Shipping</h2>

        <div className="shipping-form">

          <div className="shipping-group">
            <label>Shipping Charge</label>

            <input
              type="number"
              name="standardCharge"
              placeholder="Enter shipping charge"
              value={shipping.standardCharge}
              onChange={handleChange}
              min="0"
            />
          </div>

          <div className="shipping-group">
            <label>Delivery Days</label>

            <input
              type="number"
              name="standardDays"
              placeholder="e.g. 5"
              value={shipping.standardDays}
              onChange={handleChange}
              min="1"
            />
          </div>

        </div>
      </div>

      {/* Express Shipping */}

      <div className="shipping-card">

        <h2>Express Shipping</h2>

        <div className="shipping-form">

          <div className="shipping-group">
            <label>Shipping Charge</label>

            <input
              type="number"
              name="expressCharge"
              placeholder="Enter shipping charge"
              value={shipping.expressCharge}
              onChange={handleChange}
              min="0"
            />
          </div>

          <div className="shipping-group">
            <label>Delivery Days</label>

            <input
              type="number"
              name="expressDays"
              placeholder="e.g. 2"
              value={shipping.expressDays}
              onChange={handleChange}
              min="1"
            />
          </div>

        </div>
      </div>

      {/* Free Shipping */}

      <div className="shipping-card">

        <h2>Free Shipping</h2>

        <div className="shipping-form">

          <div className="shipping-group">
            <label>Minimum Order Amount</label>

            <input
              type="number"
              name="freeShippingAmount"
              placeholder="e.g. 1000"
              value={shipping.freeShippingAmount}
              onChange={handleChange}
              min="0"
            />
          </div>

        </div>
      </div>

      {/* Shipping Status */}

      <div className="shipping-card">

        <h2>Shipping Status</h2>

        <div className="shipping-form">

          <div className="shipping-group">
            <label>Status</label>

            <select
              name="status"
              value={shipping.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

        </div>
      </div>

      {/* Save Button */}

      <div className="shipping-actions">

        <button
          className="save-shipping-btn"
          onClick={handleSaveShipping}
        >
          Save Shipping Settings
        </button>

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

export default ManageShipping;