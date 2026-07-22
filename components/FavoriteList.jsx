"use client";

import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Link from "next/link";
export default function FavoriteList() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(saved);
  }, []);

  if (favorites.length === 0) {
    return (
      <div className="empty-favorites">
        <div className="empty-heart">🤍</div>

        <h2>No Favorite Countries</h2>

        <p>
          You haven't added any countries to your favorites yet. Start exploring
          and build your personal collection.
        </p>

        <Link
          href="/countries"
          className="px-8 py-4
              rounded-2xl
              bg-[var(--primary)]
              text-white
              font-semibold
              hover:scale-105
              transition"
        >
          Explore Countries
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-8 py-12">
      <div className="mb-14">
        <p className="uppercase tracking-[0.25em] text-[var(--primary)] font-semibold">
          Your Collection
        </p>

        <h1 className="text-5xl font-black mt-3">Favorite Countries</h1>

        <p className="mt-5 max-w-2xl opacity-75 leading-8">
          Save the countries you love and access them anytime.
        </p>
      </div>
      <div
        className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-4
gap-8
"
      >
        {favorites.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </main>
  );
}
