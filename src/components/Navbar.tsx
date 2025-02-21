"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white p-4 w-full max-w-md mx-auto mt-5 rounded-2xl shadow-lg border-2" style={{ borderColor: "rgb(52, 51, 48)" }}>
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold text-mainColor">
          Zain.
        </h1>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl text-mainColor" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg text-mainColor">
          <Link href="/about" className="hover:underline">Projects</Link>
          <Link href="/contact" className="hover:underline">Let's Talk</Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-6 space-y-1 text-lg text-mainColor">
          <Link href="/about" className="hover:underline">Projects</Link>
          <Link href="/contact" className="hover:underline">Let's Talk</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
