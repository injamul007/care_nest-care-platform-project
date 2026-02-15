"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home, Briefcase, Info, LogIn, Calendar } from "lucide-react";
import careNEstIcon from "../../public/careNest_icon.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/services", label: "Services", icon: Briefcase },
    { href: "/about", label: "About", icon: Info },
    { href: "/login", label: "Login", icon: LogIn },
  ];

  return (
    <header className="sticky top-0 z-50 bg-linear-to-r from-white via-white/95 to-white/90 backdrop-blur-xl border-b border-border shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex flex-col leading-tight shrink-0">
          <div className="flex items-center gap-2">
            {/* CareNest Icon */}
            <div className="relative">
              <Image
                src={careNEstIcon}
                alt="CareNest Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold bg-linear-to-r from-(--primary) to-(--secondary) bg-clip-text text-transparent">
                CareNest
              </span>
              <span className="text-xs text-gray-500 hidden sm:block">
                Trusted Care at Home
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          <Link
            href="/"
            className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
              pathname === "/"
                ? "text-(--primary) bg-primary/10 border-b-2 border-(--primary)"
                : "text-(--primary) hover:text-(--primary) hover:bg-primary/5"
            }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
              pathname === "/services"
                ? "text-(--primary) bg-primary/10 border-b-2 border-(--primary)"
                : "text-(--primary) hover:text-(--primary) hover:bg-primary/5"
            }`}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
              pathname === "/about"
                ? "text-(--primary) bg-primary/10 border-b-2 border-(--primary)"
                : "text-(--primary) hover:text-(--primary) hover:bg-primary/5"
            }`}
          >
            About
          </Link>
          <Link
            href="/login"
            className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
              pathname === "/login"
                ? "text-(--primary) bg-primary/10 border-b-2 border-(--primary)"
                : "text-(--primary) hover:text-(--primary) hover:bg-primary/5"
            }`}
          >
            Login
          </Link>

          {/* CTA Button */}
          <Link
            href="/services"
            className="ml-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-(--accent) to-orange-400 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Calendar size={18} />
            <span>Book Now</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-(--text)"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={28} className="animate-pulse" color="teal" />
          ) : (
            <Menu size={28} color="teal" />
          )}
        </button>
      </nav>

      {/* Mobile Menu - Enhanced Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div className="absolute top-0 left-0 right-0 bg-linear-to-b from-white to-gray-50 shadow-2xl animate-in slide-in-from-top-2 duration-300">
            <div className="px-6 py-6 space-y-3 max-h-[calc(100vh-80px)] overflow-y-auto">
              {/* Menu Items with Icons */}
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-medium group transition-all duration-300 ${
                      isActive
                        ? "bg-linear-to-r from-primary/15 to-secondary/15 text-(--secondary) border-l-4 border-(--secondary)"
                        : "text-(--primary) hover:bg-linear-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-(--primary)"
                    }`}
                  >
                    <Icon
                      size={22}
                      className={`group-hover:scale-110 transition-transform ${
                        isActive ? "text-(--secondary)" : "text-(--primary)"
                      }`}
                    />
                    <span className="text-base">{item.label}</span>
                  </Link>
                );
              })}

              {/* Divider */}
              <div className="my-2 h-px bg-linear-to-r from-transparent via-border to-transparent" />

              {/* Book Now Button - Mobile */}
              <div className="pt-3">
                <Link
                  href="/services"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-3 w-full px-5 py-3.5 rounded-xl bg-linear-to-r from-(--accent) to-orange-400 text-white font-semibold hover:shadow-xl hover:shadow-orange-200 transition-all duration-300 group"
                >
                  <Calendar
                    size={20}
                    className="group-hover:rotate-12 transition-transform"
                  />
                  <span className="text-base">Book a Service</span>
                </Link>
              </div>

              {/* Additional Info */}
              <div className="pt-4 px-4 text-center">
                <p className="text-xs text-gray-600 font-medium">
                  Available 24/7 for your care needs
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
