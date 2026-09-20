"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../logo/page";

import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // later auth se replace kar dena
  const [userAuth, setUserAuth] = useState(true);

  // Profile dropdown initially closed
  const [openProfile, setOpenProfile] = useState(false);

  const handleProfile = () => {
    setOpenProfile((prev) => !prev);
    setOpen(false);
  };

  const handleMobileMenu = () => {
    setOpen((prev) => !prev);
    setOpenProfile(false);
  };

  const closeMenus = () => {
    setOpen(false);
    setOpenProfile(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b bg-white shadow-sm">
      {/* Main Navbar */}
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Logo />

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 sm:flex">
          <Link
            href="/"
            className="capitalize tracking-wider text-black transition hover:text-blue-500"
          >
            Home
          </Link>

          <Link
            href="/features"
            className="capitalize tracking-wider text-black transition hover:text-blue-500"
          >
            Features
          </Link>

          <Link
            href="/about"
            className="capitalize tracking-wider text-black transition hover:text-blue-500"
          >
            About
          </Link>

          {/* Authentication */}
          {userAuth ? (
            <button
              type="button"
              onClick={handleProfile}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-blue-500 font-bold uppercase text-white transition hover:bg-blue-600"
              aria-label="Open profile menu"
            >
              P
            </button>
          ) : (
            <Link
              href="/sign-up"
              className="rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
            >
              Sign Up
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={handleMobileMenu}
          className="text-2xl text-blue-600 sm:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <IoClose /> : <FaBarsStaggered />}
        </button>

        {/* Desktop Profile Dropdown */}
        {userAuth && openProfile && (
          <div className="absolute right-4 top-16 hidden w-52 rounded-xl border border-blue-100 bg-white p-3 text-blue-600 shadow-xl sm:block">
            {/* Profile Image */}
            <div className="flex justify-center border-b pb-3">
              <Image
                src="/favicon.ico"
                width={40}
                height={40}
                alt="Profile"
                className="h-10 w-10 rounded-full border-2 border-blue-500 p-0.5"
              />
            </div>

            <ul className="mt-2">
              <li>
                <Link
                  href="/profile"
                  onClick={closeMenus}
                  className="block rounded-md px-3 py-2 capitalize transition hover:bg-blue-50 hover:text-blue-500"
                >
                  Profile
                </Link>
              </li>

              <li>
                <Link
                  href="/settings"
                  onClick={closeMenus}
                  className="block rounded-md px-3 py-2 capitalize transition hover:bg-blue-50 hover:text-blue-500"
                >
                  Settings
                </Link>
              </li>

              <li className="mt-3 border-t pt-3">
                <Link
                  href="/"
                  onClick={closeMenus}
                  className="flex items-center justify-center gap-2 rounded-lg border border-blue-200 px-3 py-2 capitalize transition hover:bg-blue-50"
                >
                  <IoIosLogOut className="text-xl" />
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white px-4 py-4 shadow-md sm:hidden">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={closeMenus}
              className="rounded-md px-2 py-2 text-black transition hover:bg-blue-50 hover:text-blue-500"
            >
              Home
            </Link>

            <Link
              href="/features"
              onClick={closeMenus}
              className="rounded-md px-2 py-2 text-black transition hover:bg-blue-50 hover:text-blue-500"
            >
              Features
            </Link>

            <Link
              href="/about"
              onClick={closeMenus}
              className="rounded-md px-2 py-2 text-black transition hover:bg-blue-50 hover:text-blue-500"
            >
              About
            </Link>

            {userAuth ? (
              <>
                {/* Mobile Profile */}
                <button
                  type="button"
                  onClick={() => setOpenProfile((prev) => !prev)}
                  className="mt-2 flex w-full items-center gap-3 rounded-lg border border-blue-100 p-2 text-left"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 font-bold uppercase text-white">
                    P
                  </div>

                  <span className="font-medium text-black">
                    My Account
                  </span>
                </button>

                {/* Mobile Profile Menu */}
                {openProfile && (
                  <div className="ml-3 mt-1 rounded-lg bg-blue-50 p-2">
                    <Link
                      href="/profile"
                      onClick={closeMenus}
                      className="block rounded-md px-3 py-2 capitalize text-blue-600 hover:bg-white"
                    >
                      Profile
                    </Link>

                    <Link
                      href="/settings"
                      onClick={closeMenus}
                      className="block rounded-md px-3 py-2 capitalize text-blue-600 hover:bg-white"
                    >
                      Settings
                    </Link>

                    <Link
                      href="/"
                      onClick={closeMenus}
                      className="mt-2 flex items-center gap-2 rounded-md border border-blue-200 bg-white px-3 py-2 capitalize text-blue-600"
                    >
                      <IoIosLogOut />
                      Sign Out
                    </Link>
                  </div>
                )}
              </>
            ) : (
              <Link
                href="/sign-up"
                onClick={closeMenus}
                className="mt-2 w-fit rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
              >
                Sign Up
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;