import React from 'react'

const BlogLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex justify-between items-start min-h-screen'>
        <div>{children}</div>
        <div className='w-64'>Sidebar</div>
    </div>
  )
}

export default BlogLayout