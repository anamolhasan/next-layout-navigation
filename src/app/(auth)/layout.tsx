import React from 'react'

const AuthLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <html lang="en">
      <body
        className={` `}
      >
        
        <main>{children}</main>
    
      </body>
    </html>
  )
}

export default AuthLayout