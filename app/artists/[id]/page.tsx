import { notFound } from 'next/navigation';
import { getArtistById } from '@/app/lib/contentful';

export default async function ArtistPage({ params }: { params: { id: string } }) {
  // If `params` is a Promise, resolve it using `await`
  const { id } = await params; // Resolve the `params` Promise

  // Fetch the artist data by id
  const artist = await getArtistById(id);

  if (!artist) {
    notFound(); // Trigger 404 if artist is not found
  }

  return (
    <div>
      <h1>{artist.fields.name as string}</h1>
      {(Array.isArray(artist.fields.content) ? artist.fields.content : [])?.map((x: any, index) => (
        <p key={index}>{typeof x === 'object' && x.children ? x.children[0].text : String(x)}</p> // Display content
      ))}
    </div>
  );
}