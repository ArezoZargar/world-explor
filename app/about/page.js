import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-8 py-12">
      <div className="mb-14">
        <p className="uppercase tracking-[0.25em] text-[var(--primary)] font-semibold">
          ABOUT PROJECT
        </p>

        <h1 className="text-5xl font-black mt-3">About World Explorer</h1>

        <p className="mt-5 max-w-2xl opacity-75 leading-8">
          This project uses REST Countries API to display real country
          information including flags, capitals, populations, regions and more.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6">What / Why World Explorer?</h2>

      <p className="opacity-75 leading-8">
        World Explorer is a modern Next.js application that allows users to
        discover and explore countries around the world using real API data.
        Users can browse countries, search by name, filter by region, and view
        detailed information about each country through dynamic pages.
      </p>

      <p className="mt-5 opacity-75 leading-8">
        Each country detail page provides important information including the
        flag, official name, capital, region, subregion, population, languages,
        currencies, time zones, and a direct Google Maps location link.
      </p>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">API Used</h2>

        <Link
          href="https://restcountries.com/"
          target="_blank"
          className="block"
        >
          <div className="p-8 rounded-3xl border bg-white/5 backdrop-blur transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_15px_30px_rgba(65,139,126,.3)] cursor-pointer">
            <h3 className="text-2xl font-bold mb-3 text-[var(--primary)] flex items-center gap-2 underline underline-offset-8 decoration-[var(--primary)]">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] shadow-[0_0_10px_var(--primary)]"></span>
              REST Countries API ↗
            </h3>

            <p className="opacity-75 leading-8">
              World Explorer uses REST Countries API to retrieve real
              information about countries. The API provides data such as country
              names, flags, capitals, populations, regions, languages,
              currencies and maps.
            </p>
          </div>
        </Link>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Technologies Practiced</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(65,139,126,.3)]">
            <h3 className="font-bold text-xl mb-2">Next.js App Router</h3>
            <p className="opacity-75">
              Built the project using Next.js App Router and modern routing
              structure.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(65,139,126,.3)]">
            <h3 className="font-bold text-xl mb-2">File-based Routing</h3>
            <p className="opacity-75">
              Created pages using the Next.js folder based routing system.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(65,139,126,.3)]">
            <h3 className="font-bold text-xl mb-2">Server Components</h3>
            <p className="opacity-75">
              Used server components for fetching and displaying country data.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(65,139,126,.3)]">
            <h3 className="font-bold text-xl mb-2">Client Components</h3>
            <p className="opacity-75">
              Created interactive components using useState and client-side
              features.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(65,139,126,.3)]">
            <h3 className="font-bold text-xl mb-2">Dynamic Routes</h3>
            <p className="opacity-75">
              Created dynamic country detail pages using route parameters.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(65,139,126,.3)]">
            <h3 className="font-bold text-xl mb-2">Data Fetching & Caching</h3>
            <p className="opacity-75">
              Practiced async data fetching, static rendering and dynamic
              rendering.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(65,139,126,.3)]">
            <h3 className="font-bold text-xl mb-2">Shared Layout</h3>
            <p className="opacity-75">
              Created a shared layout using Next.js Layout system to provide
              common UI elements such as Navbar and Footer across all pages.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(65,139,126,.3)]">
            <h3 className="font-bold text-xl mb-2">
              Static Rendering & Caching
            </h3>
            <p className="opacity-75">
              Used Next.js caching features and static rendering to improve
              performance and reduce unnecessary API requests.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(65,139,126,.3)]">
            <h3 className="font-bold text-xl mb-2">Dynamic Rendering</h3>
            <p className="opacity-75">
              Implemented dynamic data fetching for country details pages to
              display fresh information whenever users visit a country.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(65,139,126,.3)]">
            <h3 className="font-bold text-xl mb-2">Search Functionality</h3>
            <p className="opacity-75">
              Added a search feature that allows users to quickly find countries
              by their names.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(65,139,126,.3)]">
            <h3 className="font-bold text-xl mb-2">Region Filter</h3>
            <p className="opacity-75">
              Added filtering options to explore countries by different regions
              including Asia, Europe, Africa, Americas and Oceania.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(65,139,126,.3)]">
            <h3 className="font-bold text-xl mb-2">Loading & Error Handling</h3>
            <p className="opacity-75">
              Created custom loading states using loading.js and a custom 404
              page using not-found.js for better user experience.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(65,139,126,.3)]">
            <h3 className="font-bold text-xl mb-2">Search Functionality</h3>
            <p className="opacity-75">
              Added a search feature that allows users to quickly find countries
              by their names.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(65,139,126,.3)]">
            <h3 className="font-bold text-xl mb-2">Dark Mode</h3>
            <p className="opacity-75">
              Implemented dark mode support to provide users with a comfortable
              viewing experience.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(65,139,126,.3)]">
            <h3 className="font-bold text-xl mb-2">Responsive Design</h3>
            <p className="opacity-75">
              Built a responsive interface that works smoothly on desktop,
              tablet and mobile devices.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(65,139,126,.3)]">
            <h3 className="font-bold text-xl mb-2">Favorite Countries</h3>
            <p className="opacity-75">
              Added a client component that allows users to save and manage
              their favorite countries.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
