export default function Loading() {
  return (
    <main className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <section className="text-center">
        <div className="loading-globe"></div>

        <p className="uppercase tracking-[0.25em] text-sm sm:text-base md:text-lg text-[var(--primary)] font-bold mt-8 sm:mt-10">
          World Explorer
        </p>

        <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-black mt-3 mb-8 sm:mb-10">
          Loading...
        </h1>

        <p className="mt-5 sm:mt-7 opacity-75 max-w-md mx-auto text-sm sm:text-base leading-7">
          Please wait while we explore the world and prepare everything for you.
        </p>
      </section>
    </main>
  );
}
