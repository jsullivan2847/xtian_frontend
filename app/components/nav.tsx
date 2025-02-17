"use client";

import Link from 'next/link';

export default function Nav() {

  return (
    <nav className="sticky top-0 z-10 w-full">
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