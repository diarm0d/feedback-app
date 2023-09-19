import React from "react";
import DashboardShell from "./DashboardShell";
import AddSiteModal from "./AddSiteModal";

const EmptyState = () => (
  <DashboardShell>
    <div className="flex justify-center items-center p-4 ">
      <h2 className="text-lg mb-4">You haven’t added any sites.</h2>
      <span className="mb-4">Let’s get started.</span>
      <AddSiteModal />
    </div>
  </DashboardShell>
);

export default EmptyState;
