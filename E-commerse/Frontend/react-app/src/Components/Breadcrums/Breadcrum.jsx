import React from 'react'
import './Breadcrum.css'

import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {

  // Get product data from props
  const { product } = props

  // If product is not available, show nothing
  if (!product) {
    return null
  }

  return (
    <div className="breadcrum">

      {/* Home */}
      HOME

      {/* Arrow */}
      <img src={arrow_icon} alt="" />

      {/* Shop */}
      SHOP

      {/* Arrow */}
      <img src={arrow_icon} alt="" />

      {/* Product Category */}
      {product.category}

      {/* Arrow */}
      <img src={arrow_icon} alt="" />

      {/* Product Name */}
      {product.name}

    </div>
  )
}

export default Breadcrum