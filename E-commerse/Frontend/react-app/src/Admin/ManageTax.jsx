import React, { useState } from "react";
import "./ManageTax.css";
import Toast from "../Components/Toast/Toast";

const ManageTax = () => {
  const [tax, setTax] = useState(() => {
    const savedTax = localStorage.getItem("taxSettings");

    if (savedTax) {
      return JSON.parse(savedTax);
    }

    return {
      percentage: "",
      status: "Active",
    };
  });

  const [toastMessage, setToastMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTax({
      ...tax,
      [name]: value,
    });
  };

  const handleSaveTax = () => {
    if (tax.percentage === "") {
      alert("Please enter tax percentage");
      return;
    }

    if (
      Number(tax.percentage) < 0 ||
      Number(tax.percentage) > 100
    ) {
      alert("Tax percentage must be between 0 and 100");
      return;
    }

    localStorage.setItem("taxSettings",JSON.stringify(tax));

    setToastMessage("Tax settings saved successfully");
  };

  return (
    <div className="manage-tax">

      <div className="manage-tax-header">

        <div>
          <h1>Manage Tax</h1>
          <p>Manage tax settings for your store</p>
        </div>
      </div>

      <div className="tax-card">

        <div className="tax-card-title">
          <h2>Tax Settings</h2>
          <p>Set the tax percentage applied to orders</p>
        </div>

        <div className="tax-form">

          <div className="tax-field">
            <label>Tax Percentage</label>

            <input 
            type="number" 
            name="percentage"
            placeholder="Enter tax percentage"
            value={tax.percentage}
            onChange={handleChange}
            />

            <span>%</span>
          </div>

          <div className="tax-field">
            <label>Status</label>

            <select 
            name="status" 
            value={tax.status}
            onChange={handleChange}
            >
             <option value="Active">Active</option>
             <option value="Inactive">Inactive</option>
            </select>
          </div>

        </div>

        <div className="tax-actions">
          <button
          className="save-tax-btn"
          onClick={handleSaveTax}
          >
            Save Tax Settings
          </button>
        </div>

      </div>

      {toastMessage && (
        <Toast
           message={toastMessage}
           onClose={() => setToastMessage("")}
        />
      )}

    </div>
  );
};

export default ManageTax;