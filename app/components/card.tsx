import Link from 'next/link';

interface Card {
  id: string;
  name: string;
  imageUrl: string;
}

const Card = ({ id, name, imageUrl }: Card) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <Link href={`/artists/${id}`}>
        <img className="w-full h-56 object-cover" src={imageUrl} alt={name} />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          {/* <p className="text-gray-600 mt-2">{summary}</p> */}
        </div>
      </Link>
    </div>
  );
};

export default Card;
