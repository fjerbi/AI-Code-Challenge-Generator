import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Outlet, Link, Navigate } from "react-router-dom";

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-800 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Code Challenge Generator</h1>
          <nav className="flex items-center space-x-6">
            <SignedIn>
              <Link
                to="/"
                className="text-white hover:text-blue-200 transition-colors"
              >
                Generate Challenge
              </Link>
              <Link
                to="/history"
                className="text-white hover:text-blue-200 transition-colors"
              >
                History
              </Link>
              <UserButton />
            </SignedIn>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SignedOut>
          <Navigate to="/sign-in" replace />
        </SignedOut>
        <SignedIn>
          <Outlet />
        </SignedIn>
      </main>
    </div>
  );
}