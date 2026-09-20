import Link from "next/link";
import React from "react";
import { MdErrorOutline } from "react-icons/md";
import { HiArrowLeft } from "react-icons/hi";

const GlobalError = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-amber-50 px-4">
      <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
          <MdErrorOutline className="text-5xl text-blue-500" />
        </div>

        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
          Error 404
        </p>

        <h1 className="text-3xl font-bold text-slate-900">
          Page not found
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          The page you are looking for does not exist or the route may be
          incorrect.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
        >
          <HiArrowLeft />
          Back to Home
        </Link>

        <p className="mt-6 text-xs text-slate-400">
          StudyHub
        </p>
      </section>
    </main>
  );
};

export default GlobalError;