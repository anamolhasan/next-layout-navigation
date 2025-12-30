import Link from 'next/link'
import React from 'react'


const navItems = [
  {name:'Home', href:'/'},
  {name:'About', href:'/about'},
  {name:'Contact', href:'/contact'},
  {name:'Blog', href:'/blog'},
]

const Navbar = () => {
  return (
    <div className=" font-bold text-center py-4 bg-green-800">
      <div >
         <Link href='/'>Bike Sharing</Link>
      </div>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}> 
             <Link href={item.href}>{item.name}</Link>
           </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar