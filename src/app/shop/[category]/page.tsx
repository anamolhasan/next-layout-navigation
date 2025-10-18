import React from 'react'

const CategoryPage = ({params}: {params:{category:string}}) => {
  const {category} = params
  return (
    <div>
       <h1>Category Page : {category}</h1>
       {/* <ul>
        <li>Phone</li>
        <li>Electronics</li>
        <li>Clothes</li>
        <li>Books</li>
        <li>Food</li>
       </ul> */}
    </div>
  )
}

export default CategoryPage