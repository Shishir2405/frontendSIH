"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  // Simulated authentication status

  return (
    <header className="flex items-center justify-between max-w-full md:max-w-6xl px-2 md:px-6 mx-auto md:flex-row fixed top-0 right-0 ">
      <a href="/" className="text-indigo-900 z-10 active">
        <Image
          src="https://www.svgrepo.com/show/489282/brand.svg"
          className="w-24 py-8 md:py-0 g-image"
          height={150}
          width={150}
          alt="Logo"
        />
      </a>
      <nav className="z-10">
        <ul className="flex flex-row items-center px-6 py-4 text-indigo-100 bg-gray-900 rounded-lg">
          <>
            <li className="pr-8">
              <Image
                src="/path-to-user-avatar.jpg"
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </li>
            <li className="text-red-200">
              <Link href="/logout" className="ml-2">
                Logout
              </Link>
            </li>
          </>
          {/* conditinally render login sign up */}
          <div className="flex bg-slate-500 ml-6 ">
            <li className="pr-8">
              <Link href="/signup">Signup</Link>
            </li>
            <li>
              <Link href="/login">Login </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
