"use client";

import Link from 'next/link';

export default function Nav() {

  return (
    <nav className='size-full bg-gray-800 text-white p-4'>
        <ul className='flex justify-center space-x-4'>
            <Link legacyBehavior href={`/artists`}>
            Artists
            </Link>
            <Link legacyBehavior href={`/`}>
            Xtian World
            </Link>
        </ul>
    </nav>
  );
}