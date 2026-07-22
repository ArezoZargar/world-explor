"use client";

import { useState } from "react";
import CountryCard from "./CountryCard";

export default function CountrySearch({ countries }) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [sort, setSort] = useState("default");
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesRegion = region === "All" || country.region === region;

    return matchesSearch && matchesRegion;
  });
  const sortedCountries = [...filteredCountries];

  if (sort === "high") {
    sortedCountries.sort((a, b) => b.population - a.population);
  }

  if (sort === "low") {
    sortedCountries.sort((a, b) => a.population - b.population);
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
      <div className="mb-14">
        <p className="uppercase tracking-[0.25em] text-[var(--primary)] font-semibold">
          Find Your Destination
        </p>

        <h1 className="text-5xl font-black mt-3">Search Countries</h1>

        <p className="mt-5 max-w-2xl opacity-75 leading-8">
          Search by country name, filter by region, and sort by population.
        </p>
      </div>

      <div
        className="
    search-toolbar
    flex
    flex-col
    md:flex-row
    gap-4
    items-stretch
    md:items-center
  "
      >
        <input
          type="text"
          placeholder="Search country..."
          value={search}
          className="search-input w-full md:flex-1"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="search-select w-full md:w-56"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="All">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <select
          className="search-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="high">Highest Population</option>
          <option value="low">Lowest Population</option>
        </select>
      </div>
      <div
        className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
2xl:grid-cols-4
gap-8
"
      >
        {sortedCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}

        {filteredCountries.length === 0 && search.trim() !== "" && (
          <div className="no-results col-span-full flex flex-col items-center justify-center text-center py-20">
            <div className="no-results-icon">🌍</div>

            <h2>No Country Found</h2>

            <p>
              We couldn't find any country matching your search. Try another
              name or choose a different region.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
