import { Button } from "@/components/ui/button";
import React from "react";
import { useAuthStore } from "@/store/auth";
import AppLayout from "@/layouts/AppLayout";
import { Link } from "react-router-dom";
import SnippetCard from "@/components/SnippetCard";
const Dashboard = () => {
  const logout = useAuthStore((state) => state.logout);
  return (
    <AppLayout>
      <div className="max-w-6xl py-10 mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          <div className="col-span-1 md:col-span-4">
            <div className="flex items-center justify-between px-2 py-4">
              <h2 className="text-2xl font-semibold font-grotesk">
                Recent Snippets
              </h2>
              <Link
                to="/dashboard"
                className="flex items-center gap-2 px-4 py-1 text-sm rounded-md text-primary hover:bg-neutral-100"
              >
                View All
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={20}
                  height={20}
                  color={"currentColor"}
                  fill={"none"}
                >
                  <path
                    d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="px-2 py-4 space-y-2 bg-white divide-y rounded-md divide-border border-border">
              <SnippetCard />
              <SnippetCard />
              <SnippetCard />
              <SnippetCard />
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="p-4 bg-white border rounded-md border-border"></div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
