import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import './globals.css';

export default function Layout({children}) {
  return (
    <html>
    <Head>
      <title>Interim Government Cabinet</title>
    </Head>
    <body>
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            <span>Interim Government Cabinet</span>
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <span>Home</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-1 py-12">{children}</main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Bangladesh Interim Government Cabinet</p>
      </footer>
    </div>
    </body>
    </html>
  );
}
