import "@/app/globals.css";
import { Suspense } from "react";
import Navbar from "@/components/Navbar"; // @/* alias works if configured
import DevtoolsRedirect from "@/components/DevtoolsRedirect";
import StarsCanvas from "@/components/StarsCanvas"; // @/* alias works if configured
import Footer from "@/components/Footer";
import { AuthProviderWrapper } from "@/components/AuthProviderWrapper";

export const metadata = {
  title: "SA Studios",
  description: "Discover cutting-edge Roblox games...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-gray-900 text-white flex flex-col min-h-screen">
        <DevtoolsRedirect />
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <AuthProviderWrapper>
          <main className="flex-grow">{children}</main>
        </AuthProviderWrapper>
        <Footer />
        <StarsCanvas />
      </body>
    </html>
  );
}
