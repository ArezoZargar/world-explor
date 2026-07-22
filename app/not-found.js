import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-[85vh] flex items-center justify-center px-8">
      <section className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* Left */}
        <div className="flex-1">
          <span className="uppercase tracking-[0.25em] text-lg font-bold text-[var(--primary)]">
            Error
          </span>

          <h1 className="text-7xl lg:text-9xl font-black hero-title mt-3">
            404
          </h1>

          <h2 className="text-3xl font-bold mt-6">Page Not Found</h2>

          <p className="mt-6 max-w-lg opacity-75 leading-8">
            Oops! The page you're looking for doesn't exist or may have been
            moved. Let's get you back to exploring the world.
          </p>

          <div className="flex gap-5 mt-10">
            <Link
              href="/"
              className="
              px-8 py-4
              rounded-2xl
              bg-[var(--primary)]
              text-white
              font-semibold
              hover:scale-105
              transition
              mb-5"
            >
              Go Home
            </Link>

            <Link
              href="/countries"
              className="
              px-8 py-4
              rounded-2xl
              border
              border-[var(--border)]
              hover:bg-[var(--surface)]
              transition
              mb-5"
            >
              Explore Countries
            </Link>
          </div>
        </div>

        <div className="earth-wrapper">
          <div className="text-[220px]">🌍</div>
        </div>
      </section>
    </main>
  );
}
