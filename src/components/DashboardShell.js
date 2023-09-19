import React from "react";
import Navbar from "./Navbar";
import Breadcrumbs from "./Breadcrumbs";
// import { useAuth } from "@/lib/auth";

const DashboardShell = ({ children }) => {
  // const { user, signout } = useAuth();

  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-gray-100 flex justify-center items-start">
        <div className="w-9/12 mt-32">
          <Breadcrumbs />
          <div className="bg-neutral-50 rounded-lg shadow-md mt-8">
            <div className="">
              <h1 className="text-3xl px-8 pt-8 pb-2 border-b">My sites</h1>
              <div className="flex justify-center items-center px-8 py-16">
                {/* <button className="bg-teal-200 rounded-lg shadow-md px-4 py-2">
                  Add site
                </button> */}
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardShell;
