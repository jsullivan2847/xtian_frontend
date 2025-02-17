"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  // const [posts, setPosts] = useState<{ id: string; title: string; slug: string }[]>([]);

  // useEffect(() => {
  //   async function fetchPosts() {
  //     const res = await fetch('https://xtian-backend.onrender.com/api/posts', {
  //       "headers": {
  //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`
  //     }});
  //     const data = await res.json();

  //     if (!res.ok) {
  //       console.error('Failed to fetch posts:', data);
  //       return;
  //     }

  //     setPosts(data.data);
  //   }

  //   fetchPosts();
  // }, []);

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-4">Xtian World</h1>
      <ul className="list-disc">
        {/* {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <Link legacyBehavior href={`/post/${post.slug}`}>
              <a className="text-blue-500 hover:underline">{post.title}</a>
            </Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
}