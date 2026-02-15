"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import careNEstIcon from "../../public/careNest_icon.png";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating back-to-top button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-linear-to-r from-accent to-orange-400 text-white shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:-translate-y-2 md:bottom-10 md:right-10 lg:bottom-12 lg:right-12 animate-pulse"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-current"
          >
            <path d="M12 4v16m8-10l-8-8-8 8" />
          </svg>
        </button>
      )}

      <footer className="lg:pt-16 pt-4 bg-(--primary)/30 text-white">
        <div className="container-max mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand Section */}
            <div>
              <Link href="/">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg">
                    <Image
                      src={careNEstIcon}
                      alt="CareNest Logo"
                      // width={36}
                      // height={36}
                      className="object-contain"
                      priority
                    />
                  </span>
                  <div>
                    <div className="text-2xl font-bold">CareNest</div>
                    <div className="text-sm text-white/80">
                      Trusted Care at Home
                    </div>
                  </div>
                </div>
              </Link>
              <p className="text-white/80 text-sm">
                CareNest provides professional and reliable caregiving services,
                trusted by families everywhere.
              </p>

              {/* Social Icons */}
              <div className="mt-4 flex gap-4">
                {[
                  {
                    icon: FaFacebookF,
                    link: "https://www.facebook.com/",
                    label: "Facebook",
                  },
                  {
                    icon: FaXTwitter,
                    link: "https://x.com/",
                    label: "Twitter",
                  },
                  {
                    icon: FaInstagram,
                    link: "https://www.instagram.com/",
                    label: "Instagram",
                  },
                  {
                    icon: FaLinkedinIn,
                    link: "https://www.linkedin.com/",
                    label: "LinkedIn",
                  },
                ].map(({ icon: Icon, link, label }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="rounded-full bg-white/10 p-3 hover:bg-(--accent)/30 transition-colors"
                  >
                    <Icon className="text-white text-sm" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="mb-3 font-semibold text-white/90 text-lg">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-(--accent) transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-(--accent) transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-(--accent) transition-colors"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-white/90 text-lg">
                  Contact
                </h4>
                <p className="text-sm text-white/80">hello@carenest.example</p>
                <p className="text-sm text-white/80">+1 (555) 123-4567</p>
              </div>
            </div>

            {/* Newsletter / CTA */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-white/90 text-lg">
                Subscribe to our newsletter
              </h4>
              <p className="text-white/80 text-sm">
                Get updates on caregiving tips, services, and special offers.
              </p>
              <form className="mt-2 flex flex-wrap w-full max-w-md gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:border-(--accent) focus:bg-white/20"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-linear-to-r from-(--accent) to-orange-400 px-5 py-2 font-semibold text-(--text) hover:bg-(--accent)/30 transition-colors w-full"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/70">
            © {new Date().getFullYear()} CareNest — All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
