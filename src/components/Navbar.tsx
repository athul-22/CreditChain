// components/Navbar.tsx
"use client"; // Ensure this is a Client Component if using Next.js 13+

import Link from "next/link";
import { FC } from "react";
// import { Web3Button } from "@web3modal/react";

const Navbar: FC = () => {
  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 max-w-xl h-12 overflow-x-auto bg-white bg-opacity-90 rounded-full shadow-lg p-2 z-50" >
      <ul className="flex space-x-4">
        <li className="px-4 py-2 hover:font-bold rounded-full">
          <Link href="/" className="text-gray-800">
            Home
          </Link>
        </li>
        <li className="px-4 py-2 hover:font-bold  rounded-full">
          <Link href="/borrow" className="text-gray-800">
            Borrow
          </Link>
        </li>
        <li className="px-4 py-2 hover:font-bold  rounded-full">
          <Link href="/lend" className="text-gray-800">
            Lend
          </Link>
        </li>
        <li>
            <w3m-button />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
