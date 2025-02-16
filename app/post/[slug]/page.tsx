"use client";

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { use } from 'react';

async function getPost(slug: string) {
  const res = await fetch(`https://xtian-backend.onrender.com/api/posts?filters[slug][$eq]=${slug}&populate=*`,
    {
        "headers": {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`
        }
    }
  );
  const data = await res.json();
  
  if (!res.ok || !data.data.length) {
    return null;
  }
  return data.data[0];
}

export default function Post({ params }: { params: Promise<{ slug: string }> }) {
  const [post, setPost] = useState<any>(null);
  const unwrappedParams = use(params);

  useEffect(() => {
    async function fetchPost() {
      const post = await getPost(unwrappedParams.slug);
      if (!post) {
        notFound();
      } else {
        setPost(post);
      }
    }

    fetchPost();
  }, [unwrappedParams.slug]);

  console.log(post)

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.name}</h1>
      {post.content.map((x: any, index: number) => (
        <p key={index}>{x.children[0].text}</p>
      ))}
    </div>
  );
}