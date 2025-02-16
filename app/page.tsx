"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [posts, setPosts] = useState<{ id: string; title: string; slug: string }[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('https://xtian-backend.onrender.com/api/posts?populate=*', {
        "headers": {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`
      }});
      const data = await res.json();

      if (!res.ok) {
        console.error('Failed to fetch posts:', data);
        return;
      }

      setPosts(data.data);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link legacyBehavior href={`/post/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}