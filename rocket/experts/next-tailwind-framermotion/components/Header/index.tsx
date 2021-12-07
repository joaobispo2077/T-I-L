import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <header className="flex justify-center md:justify-between py-2 md:py-4 items-center">
      <Image src="/img/logo.svg" alt="Dowhile" width={150} height={33} />

      <nav className="hidden md:block space-x-8">
        <a className="tracking-wide hover:text-gray-300">
          <Link href="/nextjs">Next.js</Link>
        </a>
        <a className="tracking-wide hover:text-gray-300">
          <Link href="/tailwind">Tailwind</Link>
        </a>
        <a className="tracking-wide hover:text-gray-300">
          <Link href="/framer-motion">Framer motion</Link>
        </a>
      </nav>
    </header>
  );
}

export default Header;
