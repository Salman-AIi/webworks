import { Suspense } from "react";
import GamesClient from "@/components/GamesClient";

export const metadata = {
  title: "Games - SA Studios",
  description: "Explore all our Roblox games crafted by SA Studios.",
};

export default function GamesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          Loading...
        </div>
      }>
      <GamesClient />
    </Suspense>
  );
}
