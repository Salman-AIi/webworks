"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setCurrentPath(window.location.pathname + window.location.hash);
  }, [pathname, searchParams]);

  const linkClass = (href) =>
    `transition-colors ${
      href === currentPath
        ? "text-[#915EFF] font-semibold"
        : "text-white hover:text-[#915EFF]"
    }`;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/games", label: "Our Games" },
    { href: "/#about", label: "About Us" },
    { href: "/#game-acquisition", label: "Game Acquisitions" },
    { href: "/#contact", label: "Contact Us" },
  ];

  const handleLinkClick = () => {
    setCurrentPath(window.location.pathname + window.location.hash);
    setIsOpen(false);
  };

  return (
    <nav className="p-6 bg-gray-900 w-full sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-white">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#915EFF] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SA</span>
            </div>
            <span className="text-xl font-bold text-white hover:text-[#915EFF]">
              Salman Ali Studios
            </span>
          </div>
        </Link>

        <ul className="hidden lg:flex gap-6 text-lg">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={linkClass(link.href)}
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden text-white hover:text-[#915EFF] text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 lg:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={linkClass(link.href)}
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
