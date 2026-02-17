"use client";

import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import React from "react";

const DashboardPage = () => {
  const router = useRouter();

  // Mock user for now since auth is removed
  const user = { firstName: "Guest" };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl font-medium">Welcome {user?.firstName}!</h1>
      <p className="text-gray-500 mt-2">You are signed in (Guest Mode).</p>
      <div className="flex items-center justify-center gap-4 mt-4">
        <Button onClick={() => router.push("/")} variant="outline">
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default DashboardPage;
