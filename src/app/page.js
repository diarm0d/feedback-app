"use client";
import { useProvideAuth } from "../../lib/auth";

export default function Home() {
  const auth = useProvideAuth();

  return (
    <main className="w-screen h-screen bg-slate-50">
      <div className="flex justify-center items-center">
        <div className="text-black">
          <h1 className="h1 text-3xl"> Hot Feedback </h1>
          {auth?.user ? (
            <button
              className="rounded-lg shadow-md px-4 py-2 bg-gradient-to-r from-purple-200 to-stone-100 text-black"
              onClick={(e) => auth.signout()}
            >
              Sign Out
            </button>
          ) : (
            <button onClick={(e) => auth.signinWithGithub()}>Sign In</button>
          )}
          <p className="">
            {auth?.user ? auth?.user.email : "No user signed in."}{" "}
          </p>
        </div>
      </div>
    </main>
  );
}
