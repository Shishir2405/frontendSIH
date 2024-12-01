"use client";

import Link from "next/link";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="/logo.jpg"
              alt="DocuVerify Logo"
              className="h-10 w-auto"
            />
            <span className="ml-3 text-2xl font-bold text-blue-600">
              DocuVerify
            </span>
          </div>
          <div className="flex space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
