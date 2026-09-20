"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../components/logo/page";
import { useRouter } from "next/navigation";
import { VscLoading } from "react-icons/vsc";


const ForgotPassword = () => {
  const route=useRouter()
  const [email, setEmail] = useState("");
  const [loading,setLoading]=useState(false)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Reset password email:", email);
    setLoading(true)
route.push('/forgotpassword/verify-otp')
    // Later:
    // call your forgot-password API here
  };

  return (
    <main className="min-h-screen bg-amber-50 flex items-center justify-center px-4 py-10 text-black">
      <section className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 sm:p-8">
        <div className="text-center flex flex-col items-center mb-6">
          <Logo />

          <h1 className="text-2xl sm:text-3xl font-bold mt-3">
            Forgot Password?
          </h1>

          <p className="text-gray-500 text-sm mt-2 max-w-sm">
            Enter your email address and we will send you instructions to reset
            your password.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm font-medium"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2.5 rounded-lg font-medium mt-1 flex justify-center items-center cursor-pointer"
          >
            {loading?<VscLoading  className="animate-spin transition-all text-center text-2xl"/>:' Send Reset Links'}
           
          </button>

          <p className="text-center text-sm text-gray-600">
            Remember your password?{" "}
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

export default ForgotPassword;