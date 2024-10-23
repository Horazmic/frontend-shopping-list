'use client';
import localFont from "next/font/local";
import Image from "next/image";
import "./globals.css";
import Link from 'next/link';
import { UserProvider, useUser } from './context/UserContext';
import { useState } from 'react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Shopping List App",
//   description: "Manage your shopping lists with ease",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <UserProvider>
          <Header />
          <main className="p-4">
            {children}
          </main>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}

function Header() {
  const { user, setUser } = useUser();
  const [selectedUser, setSelectedUser] = useState('');

  const handleUserChange = (e) => {
    const userID = e.target.value;
    setSelectedUser(userID);
    setUser(userID);
  }

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Shopping Cart Logo"
              width={40}
              height={40}
              className="mr-2 hover:opacity-80"
            />
          </Link>
          <Link href="/" className="hover:text-gray-300 font-bold">
            <h1 className="text-2xl font-bold">Shopping List App</h1>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4 justify-center font-bold text-2xl">
            <li><Link href="/list-list" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
          </ul>
        </nav>
        <select 
          className="bg-white text-black px-2 py-2 rounded bg-gray-100"
          value={selectedUser}
          onChange={handleUserChange}
        >
          <option value="">Select User</option>
          <option value="1">Jana Nováková</option>
          <option value="2">Petr Svoboda</option>
        </select>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-4 text-center font-bold">
      © {new Date().getFullYear()} Shopping List App
    </footer>
  );
}
