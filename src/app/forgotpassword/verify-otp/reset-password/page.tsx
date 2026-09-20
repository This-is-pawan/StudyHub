"use client";

import { useState } from "react";
import Link from "next/link";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Logo from "@/app/components/logo/page"; 
import { VscLoading } from "react-icons/vsc";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
 const route=useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
setLoading(true)
    if (password !== confirmPassword) {
     route.push('/sign-in')
      alert("Passwords do not match");
      return;

    }

    console.log("New password:", password);

    // Later:
    // Call your reset-password API here
  };

  return (
    <main className="min-h-screen bg-amber-50 flex items-center justify-center px-4 py-10 text-black">
      <section className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 sm:p-8">
        <div className="text-center flex flex-col items-center mb-6">
          <Logo />

          <h1 className="text-2xl sm:text-3xl font-bold mt-3">
            Reset Password
          </h1>

          <p className="text-gray-500 text-sm mt-2 max-w-sm">
            Create a new password for your account.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-sm font-medium"
            >
              New Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
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

          <div className="flex flex-col gap-1">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium"
            >
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Enter password again"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 pr-11 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword((prev) => !prev)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                aria-label={
                  showConfirmPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showConfirmPassword ? (
                  <IoEye size={22} />
                ) : (
                  <IoEyeOff size={22} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2.5 rounded-lg font-medium mt-1 cursor-pointer flex justify-center items-center"
          >
            {loading?<VscLoading className="animate-spin transition-all text-center text-2xl"/>:'  Reset Password'}
           
          </button>

          <p className="text-center text-sm text-gray-600">
            Back to{" "}
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

export default ResetPassword;