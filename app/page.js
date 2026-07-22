import Link from "next/link";

import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-8">
      <section
        className="
min-h-[85vh]
flex
flex-col-reverse
lg:flex-row
items-center
justify-between
gap-8
lg:gap-16
"
      >
        <div className="flex-1 text-center lg:text-left">
          <span className="uppercase tracking-[0.25em] text-lg md:text-xl font-bold text-[var(--primary)]">
            Explore the
          </span>

          <h1 className="text-6xl lg:text-8xl font-black leading-none mt-2 hero-title">
            WORLD
          </h1>

          <p className="mt-8 max-w-xl text-lg opacity-80 leading-8">
            Discover countries, cultures, capitals, languages and fascinating
            places from every corner of the world. Everything you need is just
            one click away.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 mt-10">
            <Link
              href="/countries"
              className="
px-6 sm:px-8 py-4
rounded-2xl
border
border-[var(--border)]
backdrop-blur-xl
hover:border-[var(--primary)]
hover:bg-[var(--surface)]
transition-all
duration-300
text-center
mb-4
"
            >
              Explore Countries
            </Link>

            <Link
              href="/search"
              className="
px-6 sm:px-8 py-4
rounded-2xl
border
border-[var(--border)]
backdrop-blur-xl
hover:border-[var(--primary)]
hover:bg-[var(--surface)]
transition-all
duration-300
text-center
mb-4
"
            >
              Search Countries
            </Link>
          </div>
        </div>

        <div className="flight-path hidden lg:block">
          <div className="plane">✈</div>

          <svg className="path-svg" viewBox="0 0 420 220">
            <path
              d="M15 15
      C100 40,
      170 120,
      260 140
      S360 170,
      410 200"
            />
          </svg>
        </div>

        <div className="earth-wrapper flex justify-center w-full lg:w-auto mt-10 lg:mt-0">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>

          <Image
            src="/images/earth.png"
            alt="Earth"
            width={450}
            height={450}
            className="earth"
          />
        </div>
      </section>
      <div className="flex flex-wrap justify-center gap-5 discover-section">
        <div className="stat-card p-4 sm:p-6">
          <h3 className="text-3xl sm:text-4xl">195+</h3>
          <p className="text-sm sm:text-base">Countries</p>
        </div>

        <div className="stat-card p-4 sm:p-6">
          <h3 className="text-3xl sm:text-4xl">7</h3>
          <p className="text-sm sm:text-base">Continents</p>
        </div>

        <div className="stat-card p-4 sm:p-6">
          <h3 className="text-3xl sm:text-4xl">8000+</h3>
          <p className="text-sm sm:text-base">Languages</p>
        </div>
      </div>
      <Link
        href="/countries"
        className="discover-btn discover-section mx-auto flex w-fit mt-10"
      >
        Start Exploring →
      </Link>
      <div className="discover-right discover-section flex justify-center mt-12">
        <Image
          src="/images/WorldMap.png"
          alt="World Map"
          width={150}
          height={250}
        />
      </div>
    </main>
  );
}
