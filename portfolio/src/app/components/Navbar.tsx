"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Brand / Logo */}
        <h1 className="text-xl font-bold tracking-wide">My Portfolio</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <Link href="/" className="hover:text-gray-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400 transition">
              About Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
