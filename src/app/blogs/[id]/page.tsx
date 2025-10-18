import React from 'react'

const BlogDetails = async({params} : {params: Promise <{id: string}>}) => {
    const {id} =await params
  return (
    <div>BlogDetails = {id}</div>
  )
}

export default BlogDetails