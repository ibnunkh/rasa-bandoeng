"use client";

import { Coffee, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { href: "/", label: "Beranda" },
    { href: "/cafes", label: "Daftar Cafe" },
    { href: "/about", label: "Tentang Kami" },
  ];

  return (
    <header className="fixed w-full border-b border-b-gray-600 border-border backdrop-blur-lg top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Coffee size={32} className="text-primary" />
            <h1 className="text-2xl font-semibold text-primary">
              Rasa Bandoeng
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 font-raleway">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "underline underline-offset-8 decoration-secondary decoration-2"
                    : "text-foreground hover:underline hover:underline-offset-8 decoration-2"
                } text-lg font-semibold`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={handleMenu}
              className="p-2 rounded-xl focus:outline-none hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-black shadow-lg border-t border-gray-200/50 z-40">
          <div className="flex flex-col space-y-2 px-4 py-4 font-raleway">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`${
                  pathname === link.href
                    ? "text-foreground bg-primary/50 border-l-4 border-primary backdrop-blur-sm"
                    : "text-foreground hover:bg-white/10 hover:backdrop-blur-sm"
                } text-lg font-semibold px-4 py-3 rounded-r-lg transition-all duration-300 block`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
