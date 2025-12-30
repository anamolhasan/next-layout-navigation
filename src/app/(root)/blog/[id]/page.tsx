import { Metadata } from "next";
import React from "react";

// start metadata **udemy al-mamun nextjs class=69
type Props = {
  params: Promise<{ id: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  return {
    title: `Blog Post | ${id}`,
    description: `This is the blog post with id ${id}`,
  };
}

const SingleBlog = async ({ params }: Props) => {
  const { id } = await params;
  return (
    <div>
      <p>Single Blog Id = {id}</p>
    </div>
  );
};

export default SingleBlog;
