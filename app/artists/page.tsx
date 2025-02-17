import Link from "next/link";
import Card from "@/app/components/card";
import { getAllArtists } from "@/app/lib/contentful";

export default async function AllArtistsPage() {
  const artists = await getAllArtists(); // Fetch all artists from Contentful
  console.log(artists);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Artists</h1>
      <ul className="flex flex-wrap justify-between align-center">
        {artists.map((artist) => (
          <li key={artist.sys.id} className="mb-2">
            <Card
                id={artist.sys.id}
                name={artist.fields.name as string}
                // summary={artist.fields.summary as string}
                imageUrl="https://f4.bcbits.com/img/a2272273578_16.jpg"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}