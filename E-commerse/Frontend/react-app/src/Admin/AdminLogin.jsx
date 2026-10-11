import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Admin.css'

const AdminLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "12345") {
      alert("Login successful")
      navigate('/admin/dashboard')
    } else {
      alert("Invalid email or password")
    }
  }
  
  return (
    <div className='admin-login'>

    <div className="admin-card">
      <h1>Admin Login</h1>

      <input type="email" placeholder='Enter email'
      onChange={(e) => setEmail(e.target.value)}
      />

      <input type="password" placeholder='Enter password'
      onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

    </div>
    </div>
  )
}

export default AdminLogin
