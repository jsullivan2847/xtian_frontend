import { createClient, Entry } from "contentful";

// Create a Contentful client instance
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Helper function to fetch all artists
export async function getAllArtists() {
  const res = await client.getEntries({
    content_type: "artist",
  });

  return res.items;
}

// Helper function to fetch a single artist by entry_id (sys.id)
export async function getArtistById(entry_id: string): Promise<Entry<any> | null> {
  const res = await client.getEntry(entry_id);

  if (!res) {
    return null;
  }

  return res;
}
