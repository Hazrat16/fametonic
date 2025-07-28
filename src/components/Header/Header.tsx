"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="px-[20px] md:px-[60px] lg:px-[211px]">
      <nav className="shadow-md py-4 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          <Image src="/images/logo.png" alt="Logo" width={173.12} height={74} />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-700 font-medium">
          <li>
            <Link
              href="/about"
              className="text-lg font-semibold text-[#A9A9A9]"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-lg font-semibold text-[#A9A9A9]"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full right-0 bg-white w-full mt-2 py-4 px-6 shadow-lg md:hidden z-50">
            <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
              <li>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-[#A9A9A9]"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-[#A9A9A9]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
