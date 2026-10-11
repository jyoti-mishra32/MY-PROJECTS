import React, { useContext } from 'react'
import './RelatedProducts.css'

import { ShopContext } from '../../Context/ShopContext'
import Item from '../Item/Item'

const RelatedProducts = (props) => {

  // Get all products from ShopContext
  const { all_products } = useContext(ShopContext)

  return (
    <div className='relatedproducts'>

      {/* Heading */}
      <h1>Related Products</h1>

      {/* Horizontal Line */}
      <hr />

      {/* Related Products List */}
      <div className='relatedproducts-item'>

        {all_products.map((item, i) => {

          // Show products from the same category
          if (item.category === props.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            )
          }

          // Don't show products from other categories
          return null
        })}

      </div>
    </div>
  )
}

export default RelatedProducts