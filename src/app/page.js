"use client";
import { useProvideAuth } from "../../lib/auth";
import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";
import DashboardShell from "@/components/DashboardShell";
import FreePlanEmptyState from "@/components/FreePlanEmptyState";
import AddSiteModal from "@/components/AddSiteModal";

export default function Home() {
  const auth = useProvideAuth();

  return (
    <>
      <Head>
        <title>Hot Feedback</title>
        <link rel="icon" href="/feedback-logo.svg" />
      </Head>
      <main className="w-screen h-screen bg-gray-100 flex justify-center items-center">
        <Navbar />
        <div>
          <div className="text-black bg-neutral-50 rounded-lg shadow-md p-16">
            <div className="flex justify-center items-center  mb-4">
              <Image
                src="/feedback-logo.svg"
                height={120}
                width={120}
                alt="logo"
              />
            </div>
            <h1 className="h1 text-3xl font-bold mb-8"> Hot Feedback </h1>
            <div className="flex justify-center items-center">
              {auth?.user ? (
                <Link
                  href="/dashboard"
                  className="rounded-lg shadow-md px-4 py-2 bg-teal-200"
                >
                  View Dashboard
                </Link>
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
      </main>
    </>
  );
}
