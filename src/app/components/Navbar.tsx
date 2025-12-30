'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide hover:text-green-200 transition"
        >
          Bike Sharing
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-8">
          <ul className="flex gap-8 text-lg">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full ${isActive?'font-bold text-teal-200':''}`}
                >
                  {item.name}
                </Link>
              </li>
              )
            })}
          </ul>

          {/* Sign Up Button - Always Visible */}
          <Link
            href="/register"
            className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-100 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
