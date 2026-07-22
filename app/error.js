"use client";

import Link from "next/link";
import { TriangleAlert, RotateCcw, House } from "lucide-react";

export default function Error({ error, reset }) {
  return (
    <main className="min-h-[85vh] flex items-center justify-center px-8 mt-5">
      <section className="max-w-3xl w-full text-center">
        <div className="mx-auto w-24 h-24 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shadow-lg">
          <TriangleAlert size={46} className="text-[var(--primary)]" />
        </div>

        <p className="uppercase tracking-[0.25em] text-[var(--primary)] font-bold mt-8">
          Unexpected Error
        </p>

        <h1 className="hero-title mt-0 text-6xl font-black">Oops!</h1>

        <h2 className="text-3xl font-bold mt-5">Something went wrong</h2>

        <p className="mt-6 opacity-75 max-w-xl mx-auto leading-8">
          An unexpected error occurred while loading this page. You can try
          again or return to the homepage.
        </p>

        <div className="mt-4 text-sm opacity-60 break-all">
          {error?.message}
        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-10 my-6">
          <button
            onClick={reset}
            className="
            flex items-center gap-2
            px-8 py-4
            rounded-2xl
            bg-[var(--primary)]
            text-white
            font-semibold
            hover:scale-105
            transition
            "
          >
            <RotateCcw size={18} />
            Try Again
          </button>

          <Link
            href="/"
            className="
            flex items-center gap-2
            px-8 py-4
            rounded-2xl
            border
            border-[var(--border)]
            hover:bg-[var(--surface)]
            transition
            "
          >
            <House size={18} />
            Go Home
          </Link>
        </div>
      </section>
    </main>
  );
}
