import React, { useState } from "react";
import './ManageDiscount.css';
import Toast from '../Components/Toast/Toast';

const ManageDiscount = () => {

  const [discount, setDiscount] = useState(() => {
    const savedDiscounts = localStorage.getItem("discounts");

    return savedDiscounts ? JSON.parse(savedDiscounts) : [];
  });

  const [code, setCode] = useState('');
  const [percentage, setPercentage] = useState('');
  const [minimumOrder, setMinimumOrder] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [toastMessage, setToastMessage] = useState('');

  const handleAddDiscount = () => {

    if (
      code === '' ||
      percentage === '' ||
      minimumOrder === '' ||
      startDate === '' ||
      endDate === ''
    ) {
      alert('Please fill all fields');
      return;
    }

    const existingDiscount = discount.find(
      (item) => item.code === code.toUpperCase()
    );

    if (existingDiscount) {
      alert('Discount code already exists');
      return;
    }

    if (Number(percentage) < 1 || Number(percentage) > 100) {
      alert('Discount percentage must be between 1 and 100');
      return;
    }

    if (endDate < startDate) {
      alert('End date cannot be before start date');
      return;
    }

    const newDiscount = {
      id: Date.now(),
      code: code.toUpperCase(),
      percentage: Number(percentage),
      minimumOrder: Number(minimumOrder),
      startDate: startDate,
      endDate: endDate,
      status: 'Active'
    };

    const updatedDiscounts = [...discount, newDiscount];

    setDiscount(updatedDiscounts);

    localStorage.setItem(
      "discounts",
      JSON.stringify(updatedDiscounts)
    );

    setToastMessage('Discount added successfully');

    setCode('');
    setPercentage('');
    setMinimumOrder('');
    setStartDate('');
    setEndDate('');
  };

  const handleDeleteDiscount = (id) => {

    const updatedDiscounts = discount.filter(
      (item) => item.id !== id
    );

    setDiscount(updatedDiscounts);

    localStorage.setItem(
      "discounts",
      JSON.stringify(updatedDiscounts)
    );

    setToastMessage('Discount deleted successfully');
  };

  const handleStatusChange = (id, newStatus) => {

    const updatedDiscounts = discount.map((item) => {

      if (item.id === id) {
        return {
          ...item,
          status: newStatus
        };
      }

      return item;
    });

    setDiscount(updatedDiscounts);

    localStorage.setItem(
      "discounts",
      JSON.stringify(updatedDiscounts)
    );

    setToastMessage('Discount status updated successfully');
  };

  return (
    <div className="manage-discount">

      <h1 className="discount-title">
        Manage Discount
      </h1>

      <div className="discount-form">

        <input
          type="text"
          placeholder="Enter Discount code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <input
          type="number"
          placeholder="Discount percentage"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
        />

        <input
          type="number"
          placeholder="Minimum Order Amount"
          value={minimumOrder}
          onChange={(e) => setMinimumOrder(e.target.value)}
        />

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <button onClick={handleAddDiscount}>
          Add Discount
        </button>

      </div>

      <h2 className="discount-list-title">
        Discount List
      </h2>

      {discount.map((discount) => (

        <div className="discount-card" key={discount.id}>

          <div className="discount-info">

            <p>Code: {discount.code}</p>

            <p>
              Discount: {discount.percentage}%
            </p>

            <p>
              Minimum Order: ₹{discount.minimumOrder}
            </p>

            <p>
              Start Date: {discount.startDate}
            </p>

            <p>
              End Date: {discount.endDate}
            </p>

          </div>

          <div className="discount-actions">

            <select
              value={discount.status}
              onChange={(e) =>
                handleStatusChange(
                  discount.id,
                  e.target.value
                )
              }
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            <button
              onClick={() =>
                handleDeleteDiscount(discount.id)
              }
            >
              Delete
            </button>

          </div>

        </div>

      ))}

      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage('')}
        />
      )}

    </div>
  );
};

export default ManageDiscount;