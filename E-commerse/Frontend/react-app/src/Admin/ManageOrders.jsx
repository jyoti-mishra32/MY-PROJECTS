import React, { useState } from 'react'
import './ManageOrders.css'
import Toast from '../Components/Toast/Toast'

const ManageOrders = () => {

  const [orders, setOrders] = useState([
    {
      id: 1001,
      customer: 'Jyoti',
      amount: 250,
      date: '01 Oct 2026',
      status: 'Pending'
    },
    {
      id: 1002,
      customer: 'Rahul',
      amount: 480,
      date: '30 Sep 2026',
      status: 'Shipped'
    },
    {
      id: 1003,
      customer: 'Anjali',
      amount: 320,
      date: '29 Sep 2026',
      status: 'Delivered'
    }
  ])

  const [toastMessage, setToastMessage] = useState('')

  const handleStatusChange = (id, newStatus) => {

    const updatedOrders = orders.map((order) => {

      if (order.id === id) {
        return {
          ...order,
          status: newStatus
        }
      }

      return order
    })

    setOrders(updatedOrders)
    setToastMessage('Order status updated successfully')
  }

  const pendingOrders = orders.filter(
    (order) => order.status === 'Pending'
  ).length

  const shippedOrders = orders.filter(
    (order) => order.status === 'Shipped'
  ).length

  const deliveredOrders = orders.filter(
    (order) => order.status === 'Delivered'
  ).length

  return (
    <div className="manage-orders">

      {/* Header */}

      <div className="orders-page-header">

        <div>
          <h2>Manage Orders</h2>
          <p>Track and manage customer orders</p>
        </div>

        <div className="orders-count">
          {orders.length} Orders
        </div>

      </div>


      {/* Summary Cards */}

      <div className="orders-stats">

        <div className="order-stat-card">

          <div className="order-stat-icon total">
            📦
          </div>

          <div>
            <h3>Total Orders</h3>
            <p>{orders.length}</p>
          </div>

        </div>


        <div className="order-stat-card">

          <div className="order-stat-icon pending">
            ⏳
          </div>

          <div>
            <h3>Pending</h3>
            <p>{pendingOrders}</p>
          </div>

        </div>


        <div className="order-stat-card">

          <div className="order-stat-icon shipped">
            🚚
          </div>

          <div>
            <h3>Shipped</h3>
            <p>{shippedOrders}</p>
          </div>

        </div>


        <div className="order-stat-card">

          <div className="order-stat-icon delivered">
            ✓
          </div>

          <div>
            <h3>Delivered</h3>
            <p>{deliveredOrders}</p>
          </div>

        </div>

      </div>


      {/* Orders Table */}

      <div className="orders-table">

        {/* Header */}

        <div className="orders-header">

          <p>Order ID</p>
          <p>Customer</p>
          <p>Amount</p>
          <p>Date</p>
          <p>Status</p>

        </div>


        {/* Orders */}

        {orders.map((order) => (

          <div
            className="order-row"
            key={order.id}
          >

            {/* Order ID */}

            <div className="order-id">
              <span>#</span>
              {order.id}
            </div>


            {/* Customer */}

            <div className="customer-info">

              <div className="customer-avatar">
                {order.customer.charAt(0)}
              </div>

              <div>
                <h4>{order.customer}</h4>
                <p>Customer</p>
              </div>

            </div>


            {/* Amount */}

            <div className="order-amount">
              ₹{order.amount}
            </div>


            {/* Date */}

            <div className="order-date">
              {order.date}
            </div>


            {/* Status */}

            <div className="order-status">

              <select
                value={order.status}
                onChange={(e) =>
                  handleStatusChange(
                    order.id,
                    e.target.value
                  )
                }
              >

                <option value="Pending">
                  Pending
                </option>

                <option value="Processing">
                  Processing
                </option>

                <option value="Shipped">
                  Shipped
                </option>

                <option value="Delivered">
                  Delivered
                </option>

                <option value="Cancelled">
                  Cancelled
                </option>

              </select>

            </div>

          </div>

        ))}

      </div>


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

export default ManageOrders