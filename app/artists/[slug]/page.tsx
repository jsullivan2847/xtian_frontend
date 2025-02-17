"use client";

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { use } from 'react';

interface artistContent {
  type: string;
  children: { text: string }[];
}

interface artist {
  id: string;
  name: string;
  content: artistContent[];
}

async function getArtist(slug: string): Promise<artist | null> {
  const res = await fetch(`https://xtian-backend.onrender.com/api/artists?filters[slug][$eq]=${slug}&populate=*`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`,
    },
  });
  const data = await res.json();

  if (!res.ok || !data.data.length) {
    return null;
  }
  return data.data[0];
}

export default function artist({ params }: { params: Promise<{ slug: string }> }) {
  const [artist, setartist] = useState<artist | null>(null);
  const unwrappedParams = use(params);

  useEffect(() => {
    async function fetchArtist() {
      const artist = await getArtist(unwrappedParams.slug);
      if (!artist) {
        notFound();
      } else {
        setartist(artist);
      }
    }

    fetchArtist();
  }, [unwrappedParams.slug]);

  if (!artist) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{artist.name}</h1>
      {artist.content.map((x, index) => (
        <p key={index}>{x.children[0].text}</p>
      ))}
    </div>
  );
}