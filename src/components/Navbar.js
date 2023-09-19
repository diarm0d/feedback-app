import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useProvideAuth } from "../../lib/auth";

const Navbar = () => {
  const auth = useProvideAuth();

  return (
    <div className="w-full h-18 fixed top-0 flex justify-center shadow-sm bg-neutral-50 border-b border-gray-200">
      <div className="w-9/12 flex justify-between">
        <div className="flex items-center">
          <div className="pr-8 py-4">
            <Image src="/feedback-logo.svg" height={40} width={40} alt="logo" />
          </div>
          <Link className="px-8 py-4" href="/">
            Home
          </Link>
          <Link className="px-8 py-4" href="/dashboard">
            Dashboard
          </Link>
        </div>
        <div className="flex items-center pl-8 py-4">
          {auth?.user ? (
            <>
              <div className="pr-4">{auth.user.name}</div>
              <div className="">
                <Image
                  src={auth.user.photoUrl}
                  height={40}
                  width={40}
                  layout="fixed"
                  alt="avatar"
                  className="rounded-full"
                />
              </div>
            </>
          ) : (
            <button
              className="rounded-lg shadow-md px-4 py-2 bg-teal-200"
              onClick={(e) => auth.signinWithGithub()}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
