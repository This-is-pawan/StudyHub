import React from "react";
import Image from "next/image";
import Link from "next/link";
import image from "../../public/homepage.svg";

import { FaBookOpen, FaNotesMedical } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";

const HomeLayout = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-slate-900">
      
      {/* Hero Section */}
      <section className="mx-auto flex min-h-[90vh] w-full max-w-7xl flex-col items-center justify-between gap-12 px-5 pt-28 pb-16 lg:flex-row lg:px-10">
        
        {/* Left Content */}
        <article className="w-full max-w-2xl text-center lg:text-left">
          
          {/* Small Badge */}
          <p className="mb-5 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Your Personal Study Workspace
          </p>

          {/* Big Heading */}
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            A Smarter Way
            <br />
            To{" "}
            <span className="text-blue-600">
              Study
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl lg:mx-0">
            Organise your study material, manage daily tasks, save notes,
            useful links and resources, and keep your entire preparation in
            one place.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            
            <Link
              href="/sign-up"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700 sm:w-auto"
            >
              Get Started
              <IoMdArrowForward className="text-xl" />
            </Link>

            <Link
              href="/features"
              className="w-full rounded-xl border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600 sm:w-auto"
            >
              Explore Features
            </Link>
          </div>

          {/* Small Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-8 lg:justify-start">
            <div>
              <p className="text-2xl font-bold text-blue-600">
                Notes
              </p>
              <p className="text-sm text-slate-500">
                Keep everything organised
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-blue-600">
                Tasks
              </p>
              <p className="text-sm text-slate-500">
                Track daily preparation
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-blue-600">
                Resources
              </p>
              <p className="text-sm text-slate-500">
                Save useful material
              </p>
            </div>
          </div>
        </article>

        {/* Right Image */}
        <article className="flex w-full max-w-xl items-center justify-center">
          <div className="relative w-full rounded-3xl bg-white p-6 shadow-2xl">
            
            <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-blue-200 blur-2xl" />
            <div className="absolute -bottom-5 -right-5 h-32 w-32 rounded-full bg-blue-300 blur-3xl" />

            <Image
              src={image}
              alt="StudyHub homepage illustration"
              className="relative h-auto w-full"
              priority
            />
          </div>
        </article>
      </section>

      {/* Feature Section */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-20 lg:px-10">
        
        <div className="mb-10 text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            StudyHub
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Everything You Need To Study Better
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            Stop switching between different apps. Keep your preparation
            organised inside one simple workspace.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          
          {/* Card 1 */}
          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
              <FaBookOpen className="text-2xl text-blue-600" />
            </div>

            <h3 className="text-xl font-bold">
              Organise Your Study
            </h3>

            <p className="mt-3 leading-7 text-slate-500">
              Keep subjects, topics, study resources and preparation material
              organised in one place.
            </p>
          </article>

          {/* Card 2 */}
          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
              <MdOutlineTaskAlt className="text-3xl text-blue-600" />
            </div>

            <h3 className="text-xl font-bold">
              Manage Daily Tasks
            </h3>

            <p className="mt-3 leading-7 text-slate-500">
              Create daily goals, track completed work and know exactly what
              you should study next.
            </p>
          </article>

          {/* Card 3 */}
          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
              <FaNotesMedical className="text-2xl text-blue-600" />
            </div>

            <h3 className="text-xl font-bold">
              Save Notes & Resources
            </h3>

            <p className="mt-3 leading-7 text-slate-500">
              Store notes, documents, useful links and important resources so
              they are always easy to find.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default HomeLayout;