// src/app/_not-found/NotFoundClient.js
"use client";

import { useSearchParams } from "next/navigation";

export default function NotFoundClient() {
  const searchParams = useSearchParams();
  const param = searchParams.get("param");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      {param && <p className="mt-2 text-lg">Parameter: {param}</p>}
    </div>
  );
}
