"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [artists, setArtists] = useState<{ id: string; name: string; slug: string }[]>([]);

  useEffect(() => {
    async function fetchArtists() {
      const res = await fetch('https://xtian-backend.onrender.com/api/artists', {
        "headers": {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`
      }});
      const data = await res.json();

      if (!res.ok) {
        console.error('Failed to fetch artists:', data);
        return;
      }

      setArtists(data.data);
    }

    fetchArtists();
  }, []);

  return (
    <div className="">
      <ul className="list-disc">
        {artists.map((artist) => (
          <li key={artist.id} className="mb-2">
            <Link legacyBehavior href={`/artist/${artist.slug}`}>
              <a className="text-blue-500 hover:underline">{artist.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}