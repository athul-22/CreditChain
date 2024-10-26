// components/Navbar.tsx
"use client"; // Ensure this is a Client Component if using Next.js 13+

import Link from "next/link";
import { FC, useState } from "react";
import { connect, disconnect } from 'starknetkit';

const Navbar: FC = () => {

  const [connection, setConnection] = useState(undefined);
  const [provider, setProvider] = useState(undefined);
  const [address, setAddress] = useState('');

  const connectWallet = async () => {
    try {
      const connection = await connect();
      console.log(connection.wallet?.account.address);
      if (connection && connection.wallet?.isConnected) {
        setProvider(connection.wallet.account);
        setAddress(connection.wallet?.account.address);
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const disconnectWallet = async () => {
    try {
      await disconnect();

      setConnection(undefined);
      setProvider(undefined);
      setAddress('');
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

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
          <button onClick={connectWallet} className="p-2 bg-white text-black">Connect</button>
          {address && <p className='text-black text-2xl'>Connected address: {address}</p>}
          <button onClick={disconnectWallet} className="p-2 bg-white text-black">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
