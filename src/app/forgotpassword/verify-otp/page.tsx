"use client";

import Logo from "@/app/components/logo/page";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { VscLoading } from "react-icons/vsc";

const Page = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const verifyHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    router.push("/forgotpassword/verify-otp/reset-password");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    // only numbers
    if (!/^\d*$/.test(value)) {
      e.target.value = "";
      return;
    }
console.log( inputsRef.current[index ]?.focus());

    // move to next input
    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      // if current input is empty
      if (!e.currentTarget.value && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  return (
    <main className="min-h-screen bg-amber-50 flex items-center justify-center px-4 py-10 text-black">
      <form
        onSubmit={verifyHandle}
        className="w-full max-w-md bg-white shadow-xl border border-blue-100 rounded-2xl p-6 sm:p-8"
      >
        <div className="flex flex-col items-center text-center mb-6">
          <div className="flex justify-center items-center mb-4">
            <Logo />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold capitalize">
            Verify OTP
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Enter the 4-digit OTP sent to your email.
          </p>
        </div>

        <div className="flex justify-center gap-2 sm:gap-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <input
              key={index}
              ref={(element) => {
                inputsRef.current[index] = element;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              required
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 sm:w-14 sm:h-14 text-center text-xl font-semibold border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-2.5 rounded-lg mt-6 font-medium cursor-pointer transition"
        >
          {loading ? (
            <VscLoading className="animate-spin text-2xl" />
          ) : (
            "Verify"
          )}
        </button>
      </form>
    </main>
  );
};

export default Page;