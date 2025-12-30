import { Metadata } from "next";
import React from "react";

// start metadata **udemy al-mamun nextjs class=69
type Props = {
  params: Promise<{ id: string } >,
  searchParams:{[key:string] : string | string[] | undefined}
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  return {
    title: `Blog Post | ${id}`,
    description: `This is the blog post with id ${id}`,
  };
}

const SingleBlog = async ({ params , searchParams}: Props) => {
  const { id } = await params;
  const resolvedSearchParams = await searchParams
  return (
    <div>
      <p>Single Blog Id = {id}</p>
       <ul>
        {
          Object.entries(resolvedSearchParams).map(([key,value]) => (
            <li key={key}>
              {key} : {Array.isArray(value) ? value.join(', ') : value}
            </li>
          ))
        }
       </ul>
    </div>
  );
};

export default SingleBlog;
