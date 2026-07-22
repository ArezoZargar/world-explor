"use client";

import { useState } from "react";

import Link from "next/link";
import { Globe, Heart, Menu, X } from "lucide-react";
import Theme from "./Theme";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="relative sticky top-0 z-50 flex items-center justify-between gap-3 max-w-7xl w-[calc(100%-2rem)] lg:w-[calc(100%-3rem)] xl:w-full mx-auto mt-4 md:mt-6 px-4 sm:px-6 lg:px-8 py-4 rounded-2xl border border-[var(--border)] backdrop-blur-xl">
        {" "}
        <Link
          href="/"
          className="flex items-center gap-2 md:gap-3 max-w-[220px]"
        >
          <Globe size={26} className="text-[var(--primary)]" />

          <div>
            <h1 className="text-xl font-bold">World Explorer</h1>

            <p className="text-xs opacity-70">Explore Every Country</p>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="nav-link">
            Home
          </Link>

          <Link href="/countries" className="nav-link">
            Countries
          </Link>

          <Link href="/search" className="nav-link">
            Search
          </Link>

          <Link href="/about" className="nav-link">
            About
          </Link>
        </div>
        <button
          type="button"
          onClick={() => {
            setOpen(!open);
          }}
          className="md:hidden relative z-[9999] flex items-center justify-center p-2 rounded-lg"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/favorites" className="icon-btn">
            <Heart size={20} />
          </Link>

          <Theme />
        </div>
      </nav>

      {open && (
        <div className="md:hidden relative z-50 mt-4 mx-4 rounded-2xl border border-[var(--border)] backdrop-blur-xl p-5 space-y-5">
          <Link
            href="/"
            className="block nav-link"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/countries"
            className="block nav-link"
            onClick={() => setOpen(false)}
          >
            Countries
          </Link>

          <Link
            href="/search"
            className="block nav-link"
            onClick={() => setOpen(false)}
          >
            Search
          </Link>

          <Link
            href="/about"
            className="block nav-link"
            onClick={() => setOpen(false)}
          >
            About
          </Link>

          <Link
            href="/favorites"
            className="flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <Heart size={18} />
            Favorites
          </Link>

          <Theme showLabel />
        </div>
      )}
    </>
  );
}
