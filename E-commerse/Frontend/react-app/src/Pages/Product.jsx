import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'

import Breadcrum from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {

  // Get all products from ShopContext
  const { all_products, adminProducts } = useContext(ShopContext)

  // Get product ID from URL
  const { productId } = useParams()

  // Find the product using the product ID
  const product =
  adminProducts.find((e) => e.id === Number(productId)) ||
  all_products.find((e) => e.id === Number(productId)
  )

  // If product is not found
  if (!product) {
    return <h2>Product not found</h2>
  }

  return (
    <div>

      {/* Breadcrumb */}
      <Breadcrum product={product} />

      {/* Product Details */}
      <ProductDisplay product={product} />

      {/* Product Description */}
      <DescriptionBox />

      {/* Related Products */}
      <RelatedProducts category={product.category} />

    </div>
  )
}

export default Product