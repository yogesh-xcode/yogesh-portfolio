"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <Image width={60} height={60} alt="logo" src="/logo.png" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#about"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
