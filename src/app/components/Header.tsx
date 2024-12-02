"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <div className="top-0 py-1 lg:py-2 w-full bg-transparent fixed z-10 dark:bg-gray-900">
      <nav className="z-10 top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
        <div className="flex items-center justify-between w-full">
          
          {/* Removed Logo */}
          <Link href="/">
            <button>
              <div className="flex items-center space-x-2">
                <h2 className="text-black dark:text-white font-bold text-2xl hover:text-blue-500">TrueDoc</h2>
              </div>
            </button>
          </Link>

          {/* Navigation links */}
          <div className="hidden lg:block">
            <ul className="flex space-x-10 text-base font-bold text-black/60 dark:text-white">
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear hover:text-blue-500">
                <Link href="#home">Home</Link>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear hover:text-blue-500">
                <Link href="#about">About</Link>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear hover:text-blue-500">
                <Link href="#Features">Features</Link>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear hover:text-blue-500">
                <Link href="#Contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Sign up and Login buttons */}
          <div className="hidden lg:flex lg:items-center gap-x-2">
            <button className="flex items-center text-black dark:text-white justify-center px-6 py-2.5 font-semibold hover:bg-blue-500 hover:text-white">
              Sign up
            </button>
            <button className="flex items-center justify-center rounded-md bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:bg-blue-600 hover:drop-shadow transition duration-200">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center justify-center lg:hidden">
            <button className="focus:outline-none text-slate-200 dark:text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="text-2xl text-slate-800 dark:text-white focus:outline-none active:scale-110 active:text-red-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
