import React from 'react'
import './DiscriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='discriptionbox'>

      {/* Description and Reviews Navigation */}
      <div className="descriptionbox-navigator">

        {/* Description Tab */}
        <div className="descriptionbox-nav-box">
          Description
        </div>

        {/* Reviews Tab */}
        <div className='descriptionbox-nav-box fade'>
          Reviews (122)
        </div>

      </div>

      {/* Product Description */}
      <div className="descriptionbox-description">

        <p>
          An e-commerce website is an online platform that allows users to browse,
          explore, and purchase products over the internet. It provides a convenient
          shopping experience where customers can view products, check prices, select
          sizes, and add their favorite items to the cart without visiting a physical
          store.
        </p>

        <p>
          Our SHOPPER website provides a simple and user-friendly shopping experience
          with different categories such as Men, Women, and Kids. Each product includes
          images, prices, sizes, ratings, and detailed information. Users can explore
          new collections, popular products, and offers, making online shopping easy,
          fast, and convenient.
        </p>

      </div>

    </div>
  )
}

export default DescriptionBox