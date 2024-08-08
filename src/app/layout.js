import Head from 'next/head';
import Link from 'next/link';
import './globals.css';

export default function Layout({children}) {
  return (
    <html lang="en">
    <Head>
      <title>Interim Government Cabinet</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    </Head>
    <body>
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
              Interim Government Cabinet
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <a href="https://github.com/nadimtuhin/bangladesh-interim-govt" className="flex items-center space-x-2">
                <i className="fab fa-github"></i>
                <span>Fork on GitHub</span>
              </a>
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
