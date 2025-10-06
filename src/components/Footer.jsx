"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <a
          href="/"
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
        >
          <div className="w-8 h-8 bg-[#915EFF] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SA</span>
          </div>
          <span className="font-semibold text-lg hover:text-[#915EFF] transition-colors duration-300">
            Salman Ali Studios
          </span>
        </a>

        <div className="text-sm text-center md:text-right text-gray-400">
          <p className="hover:text-[#915EFF] transition-colors duration-300">
            &copy; {new Date().getFullYear()} Salman Ali Studios. All rights
            reserved.
          </p>
          <p className="mt-1 hover:text-[#915EFF] transition-colors duration-300">
            Mobile Game Advertising & PC Game Development
          </p>
        </div>
      </div>
    </footer>
  );
}
