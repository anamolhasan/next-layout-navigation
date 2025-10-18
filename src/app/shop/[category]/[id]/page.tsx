import React from 'react'

const ProductDetails = ({params}: {params:{category: string, id: string}}) => {
  const {category, id} = params
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product Category: <span className='capitalize'>{category}</span></p>
      <p><span className='capitalize'>{id}</span></p>
    </div>
  )
}

export default ProductDetails