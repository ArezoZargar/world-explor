import CountryCard from "@/components/CountryCard";
import { getCountries } from "@/lib/countries";

export default async function CountriesPage() {
  // This page can be statically rendered and cached.
  const countries = await getCountries();

  return (
    <main className="max-w-7xl mx-auto px-8 py-12">
      <div className="mb-14">
        <p className="uppercase tracking-[0.25em] text-[var(--primary)] font-semibold">
          Explore
        </p>

        <h1 className="text-5xl font-black mt-3">Countries</h1>

        <p className="mt-5 max-w-2xl opacity-75 leading-8">
          Browse every country around the world, discover capitals, populations,
          flags, languages and much more.
        </p>
      </div>
      <div
        className="
    grid
    grid-cols-1
    sm:grid-cols-2
    xl:grid-cols-4
    lg:grid-cols-3
    gap-8
  "
      >
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </main>
  );
}
