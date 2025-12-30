
import { Metadata } from "next";
import React from "react";

export const metadata:Metadata = {
  title:'Blog',
  description:'This is my blog app'
}

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-12 gap-8 min-h-screen">
        
      {/* Sidebar */}
      <aside className="col-span-12 lg:col-span-3 rounded-xl shadow-sm p-6 sticky top-6 h-fit ">
        <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
        <ul className="space-y-3">
          <li className="hover:text-green-700 cursor-pointer">Latest Posts</li>
          <li className="hover:text-green-700 cursor-pointer">Categories</li>
          <li className="hover:text-green-700 cursor-pointer">Popular Blogs</li>
          <li className="hover:text-green-700 cursor-pointer">Archives</li>
        </ul>
      </aside>
      {/* Main Content */}
      <main className="col-span-12 lg:col-span-9 rounded-xl shadow-sm p-6 ">
        {children}
      </main>


    </div>
  );
};

export default BlogLayout;
