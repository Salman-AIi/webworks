import { Suspense } from "react";
import NotFoundClient from "./_not-found/NotFoundClient";

export default function NotFound() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          Loading...
        </div>
      }
    >
      <NotFoundClient />
    </Suspense>
  );
}
