import { notFound } from 'next/navigation'
import React from 'react'

const NewsDetails = async({params} : {params: Promise<{slug:string[]}>}) => {
  const {slug} = await params
  // console.log(slug)

  if(slug.length > 3){
    notFound()
  }

  if(slug?.length === 2) {
    return <p>Viewing product for category: {slug[0]} and product: {slug[1]}</p>
  }else if (slug?.length === 1){
    return <p>Viewing product for category: {slug[0]}</p>
  }
  
  return (
    <div>NewsDetails</div>
  )
}

export default NewsDetails