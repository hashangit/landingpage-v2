"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-25 w-75">
            <Image
              src="/logo.svg"
              alt="HassleFreeCare Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#problem" className="text-sm font-medium hover:text-brand-teal transition-colors">
            The Challenge
          </Link>
          <Link href="#solution" className="text-sm font-medium hover:text-brand-teal transition-colors">
            Our Solution
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-brand-teal transition-colors">
            How It Works
          </Link>
          <Link href="#contact" className="bg-brand-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-blue/90 transition-all">
            Start a Conversation
          </Link>
        </div>

        <button className="md:hidden text-brand-navy">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
