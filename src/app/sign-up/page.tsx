"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Logo from "../components/logo/page";
import { VscLoading } from "react-icons/vsc";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
   const signUpHandle=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setLoading(true)
   }

  return (
    <main className="min-h-screen bg-amber-50 flex items-center justify-center px-4 py-10 text-black">
      <section className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 sm:p-8">
        <div className="text-center flex flex-col items-center mb-6">
          <Logo />

          <h1 className="text-2xl sm:text-3xl font-bold mt-3">
            Create Account
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            Sign up to start using StudyHub
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={signUpHandle}>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 pr-11 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
              >
                {showPassword ? (
                  <IoEye size={22} />
                ) : (
                  <IoEyeOff size={22} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2.5 rounded-lg font-medium mt-2 cursor-pointer flex justify-center items-center"
          >
           
                      {loading?<VscLoading  className="animate-spin transition-all text-center text-2xl"/>:' Sign Up'}
           
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="text-blue-600 font-medium hover:underline"
            >
              Sign In
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default SignUp;