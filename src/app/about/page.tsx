import Link from "next/link";
import {
  FaBookOpen,
  FaCloud,
  FaFolderOpen,
  FaShareAlt,
  FaYoutube,
} from "react-icons/fa";
import {
  MdOutlineTaskAlt,
  MdSearch,
  MdCalendarMonth,
} from "react-icons/md";
import { GiProgression } from "react-icons/gi";

const features = [
  {
    id: 1,
    title: "Timetable",
    description:
      "Create a simple study timetable and keep your daily preparation organised.",
    icon: <MdCalendarMonth />,
  },
  {
    id: 2,
    title: "Tasks",
    description:
      "Create daily tasks, complete them and keep track of what is still pending.",
    icon: <MdOutlineTaskAlt />,
  },
  {
    id: 3,
    title: "Notes",
    description:
      "Save important study notes and keep everything available in one place.",
    icon: <FaBookOpen />,
  },
  {
    id: 4,
    title: "YouTube Videos",
    description:
      "Save useful YouTube videos so you don't have to search for them again.",
    icon: <FaYoutube />,
  },
  {
    id: 5,
    title: "Folders",
    description:
      "Organise notes, documents, videos and other resources subject-wise.",
    icon: <FaFolderOpen />,
  },
  {
    id: 6,
    title: "Cloud Storage",
    description:
      "Upload and store useful documents, images and study resources securely.",
    icon: <FaCloud />,
  },
  {
    id: 7,
    title: "Search",
    description:
      "Quickly find your saved notes, files, folders and study resources.",
    icon: <MdSearch />,
  },
  {
    id: 8,
    title: "Sharing",
    description:
      "Share useful notes, files and resources with friends or other students.",
    icon: <FaShareAlt />,
  },
  {
    id: 9,
    title: "Progress",
    description:
      "Track your preparation and understand how much work you have completed.",
    icon: <GiProgression />,
  },
];

const steps = [
  {
    number: "01",
    title: "Create your account",
    description:
      "Create your StudyHub account and start building your personal study space.",
  },
  {
    number: "02",
    title: "Organise your preparation",
    description:
      "Create folders, subjects, tasks and a timetable according to your goals.",
  },
  {
    number: "03",
    title: "Save your resources",
    description:
      "Keep notes, videos, documents, images and other useful resources together.",
  },
  {
    number: "04",
    title: "Study and track progress",
    description:
      "Complete your daily work and keep checking how your preparation is moving.",
  },
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="border-b border-blue-100 bg-white">
        <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="mb-5 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-500">
            About StudyHub
          </span>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Your complete study workspace in{" "}
            <span className="text-blue-500">one place.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            StudyHub helps students organise their preparation, save study
            resources, manage tasks, create timetables and track progress
            without jumping between many different apps.
          </p>

          <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/sign-up"
              className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600"
            >
              Get Started
            </Link>

            <Link
              href="/"
              className="rounded-lg border border-blue-200 bg-white px-6 py-3 font-medium text-blue-500 transition hover:bg-blue-50"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* What is StudyHub */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-500">
              What is StudyHub?
            </p>

            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Built to make student preparation simpler.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-gray-600">
            <p>
              Students normally use many different apps while preparing for
              exams. One app for notes, another for tasks, another for files,
              another for videos and another for planning.
            </p>

            <p>
              StudyHub brings these important tools into one simple workspace
              where students can manage their preparation without losing track
              of their resources.
            </p>

            <p>
              Whether you are preparing for a competitive exam, college exam,
              school exam or learning a new skill, StudyHub is designed to help
              you stay organised.
            </p>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="border-y border-blue-100 bg-blue-50/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-red-500">
              The Problem
            </span>

            <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
              Study resources become scattered everywhere.
            </h2>

            <div className="mt-6 space-y-4 text-gray-600">
              <p>Notes are saved in different applications.</p>
              <p>YouTube videos get lost inside bookmarks.</p>
              <p>Documents stay inside random folders.</p>
              <p>Daily tasks are forgotten.</p>
              <p>Students don't know how much preparation is complete.</p>
            </div>
          </article>

          <article className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm sm:p-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-500">
              The Solution
            </span>

            <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
              One workspace for your complete preparation.
            </h2>

            <div className="mt-6 space-y-4 text-gray-600">
              <p>Create your timetable and daily study plan.</p>
              <p>Store notes, documents and useful links.</p>
              <p>Save YouTube videos for later revision.</p>
              <p>Organise everything using folders.</p>
              <p>Track your tasks and study progress.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
              Features
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything you need for your preparation
            </h2>

            <p className="mt-4 text-gray-600">
              StudyHub combines the tools students commonly need during their
              preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.id}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-500 transition group-hover:bg-blue-500 group-hover:text-white">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-blue-100 bg-blue-50/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
              How it works
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Start organising your preparation in four steps.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <span className="text-4xl font-bold text-blue-500">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Built for students */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
              Built for students
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Less time managing apps.
              <br />
              More time studying.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-600">
              StudyHub is designed around a simple idea: your preparation
              should be easy to organise. You should know what to study, where
              your resources are and what you have already completed.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-bold text-blue-500">1</p>
              <p className="mt-2 text-sm text-gray-600">
                Workspace for everything
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-bold text-blue-500">9+</p>
              <p className="mt-2 text-sm text-gray-600">
                Study tools together
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-bold text-blue-500">24/7</p>
              <p className="mt-2 text-sm text-gray-600">
                Access your resources
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-bold text-blue-500">100%</p>
              <p className="mt-2 text-sm text-gray-600">
                Focused on preparation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="border-y border-blue-100 bg-blue-50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
            Our Vision
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Make studying organised, simple and easier to manage.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            StudyHub aims to become a personal digital workspace where students
            can plan, learn, save resources, revise and understand their
            progress without needing multiple disconnected tools.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-3xl bg-blue-500 px-6 py-12 text-center shadow-lg sm:px-10 sm:py-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Build your study space today.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-blue-50">
              Keep your timetable, notes, tasks, videos, documents and study
              resources organised in one place.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/sign-up"
                className="rounded-lg bg-white px-7 py-3 font-medium text-blue-500 transition hover:bg-blue-50"
              >
                Create Account
              </Link>

              <Link
                href="/sign-in"
                className="rounded-lg border border-white px-7 py-3 font-medium text-white transition hover:bg-white hover:text-blue-500"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;