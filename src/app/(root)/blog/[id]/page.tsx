import React from 'react'

const SingleBlog = ({params}:{params:{id:string}}) => {
    const {id} = params
  return (
    <div>
        <p>Single Blog Id = {id}</p>
    </div>
  )
}

export default SingleBlog