import React, { useContext, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'

import AddProduct from './AddProduct'
import ProductList from './ProductList'
import ManageOrders from './ManageOrders'
import './Admin.css'
import ManageDiscount from './ManageDiscount'
import ManageShipping from './ManageShipping'
import ManageTax from './ManageTax'

const AdminDashboard = () => {

    const { adminProducts } = useContext(ShopContext)

  const [activeSection, setActiveSection] = useState('add')
  
  return (
    <div className="admin-dashboard">

      {/* Sidebar */}
      <div className="admin-sidebar">

        <div className="admin-logo">
          <h2>SHOPPER</h2>
          <p>Admin Panel</p>
        </div>

        <div className="admin-menu">

          <button
            className={activeSection === 'add' ? 'active' : ''}
            onClick={() => setActiveSection('add')}
          >
            <span>＋</span>
            Add Product
          </button>

          <button
            className={activeSection === 'list' ? 'active' : ''}
            onClick={() => setActiveSection('list')}
          >
            <span>▣</span>
            Product List
          </button>

          <button
            className={activeSection === 'orders' ? 'active' : ''}
            onClick={() => setActiveSection('orders')}
          >
            <span>☰</span>
            Manage Orders
          </button>

          <button
            className={activeSection === 'discount' ? 'active' : ''}
             onClick={() => setActiveSection('discount')}
          >
              <span>🏷</span>
              Manage Discount
          </button>

          <button
            className={activeSection === 'shipping' ? 'active' : ''}
            onClick={() => setActiveSection('shipping')}
          >
            <span>🚚</span>
             Manage Shipping
            </button>

          <button
          className={activeSection === 'tax' ? 'active' : ''}
          onClick={() => setActiveSection('tax')}
          >
            Manage Tax
          </button>

        </div>

      </div>

      {/* Main Content */}
      <div className="admin-main">

        <div className="admin-header">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage your SHOPPER store</p>
          </div>
        </div>

        {/* Stats */}
        <div className="admin-stats">

          <div className="stat-card">
            <div className="stat-icon">📦</div>
            <div>
              <h3>Total Products</h3>
              <p>{adminProducts.length}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✓</div>
            <div>
              <h3>In Stock</h3>
              <p>
                {adminProducts.filter((product) => product.stock > 0).length}
              </p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">!</div>
            <div>
              <h3>Out of Stock</h3>
              <p>
                {adminProducts.filter((product) => product.stock === 0).length}
              </p>
            </div>
          </div>

        </div>

        {/* Content */}
        <div className="admin-content">

          {activeSection === 'add' && <AddProduct />}

          {activeSection === 'list' && <ProductList />}

          {activeSection === 'orders' && (
            <ManageOrders />
          )}

          {activeSection === 'discount' && (
            <ManageDiscount />
          )}
          
          {activeSection === 'shipping' && (
            <ManageShipping />
          )}
          
          {activeSection === 'tax' && (
            <ManageTax />
          )}
          
        </div>

      </div>

    </div>
  )
}

export default AdminDashboard