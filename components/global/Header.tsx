"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Track if page is scrolled past hero threshold
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide header when scrolling down, show header when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isTransparent = !scrolled && !open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${visible || open
        ? "translate-y-0 opacity-100"
        : "-translate-y-full opacity-0 pointer-events-none"
        } ${isTransparent
          ? "bg-transparent border-b border-white/10"
          : "bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm text-neutral-900"
        }`}
    >
      <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-6 sm:px-12 md:px-16 lg:px-24">
        {/* Logo */}
        <a href="/" className="relative block h-20 w-[145px]">
          <Image
            src="/logo/logo.svg"
            alt="Advise Edu"
            fill
            sizes="145px"
            className={`object-contain object-left transition-all duration-300 ${isTransparent ? "brightness-0 invert" : ""
              }`}
            priority
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-7 lg:flex">
          {[
            ["Home", "#home"],
            ["B.Tech", "#btech"],
            ["Arts & Science", "#arts"],
            ["Attestation", "#attestation"],
            ["About", "#about"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={`text-sm font-semibold transition-colors ${isTransparent
                ? "text-white hover:text-[#FAAF40]"
                : "text-neutral-800 hover:text-[#1B75BB]"
                }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right Action Area (Desktop) */}
        <div className="hidden items-center gap-3.5 lg:flex">
          {/* 24/7 Custom SVG Icon */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-colors duration-300"
            aria-label="24/7 Support"
          >
            <path
              d="M20.0104 21.6717C21.0076 21.6716 21.982 21.9697 22.8085 22.5277C23.6349 23.0857 24.2756 23.878 24.6483 24.803C25.021 25.7279 25.1086 26.7431 24.8999 27.7182C24.6912 28.6933 24.1957 29.5837 23.4771 30.275L20.2937 33.3367H25.0104V36.67H15.0104L15.0087 33.7967L21.1654 27.8717C21.3641 27.6807 21.5123 27.4435 21.5968 27.1812C21.6813 26.919 21.6994 26.6398 21.6496 26.3688C21.5998 26.0978 21.4836 25.8434 21.3114 25.6283C21.1391 25.4132 20.9162 25.2442 20.6627 25.1364C20.4091 25.0285 20.1328 24.9853 19.8584 25.0104C19.584 25.0355 19.3201 25.1283 19.0903 25.2804C18.8606 25.4325 18.6721 25.6392 18.5418 25.882C18.4116 26.1248 18.3435 26.3961 18.3437 26.6717H15.0104C15.0104 25.3456 15.5372 24.0738 16.4749 23.1361C17.4126 22.1985 18.6843 21.6717 20.0104 21.6717ZM30.0104 21.6717V28.3383H33.3437V21.6717H36.6771V36.6717H33.3437V31.6717H26.6771V21.6717H30.0104ZM6.67708 20.005C6.67563 22.0042 7.12433 23.9781 7.9899 25.7802C8.85548 27.5823 10.1157 29.1664 11.6771 30.415V34.4417C9.143 32.9786 7.03876 30.8742 5.57593 28.34C4.1131 25.8058 3.34324 22.9311 3.34375 20.005H6.67708ZM20.0104 3.33834C28.6521 3.33834 35.7588 9.91501 36.5938 18.3383H33.2404C32.9019 15.6508 31.753 13.13 29.9465 11.1116C28.14 9.09313 25.7616 7.6727 23.1279 7.03933C20.4942 6.40597 17.73 6.58971 15.2033 7.56609C12.6766 8.54248 10.5072 10.2652 8.98375 12.505H13.3437V15.8383H3.34375V5.83834H6.67708V10.0033C8.22864 7.93244 10.2415 6.25169 12.556 5.09446C14.8704 3.93723 17.4228 3.33704 20.0104 3.33834Z"
              fill={isTransparent ? "white" : "#171717"}
            />
          </svg>

          {/* Contact Number Button */}
          <Button
            href="tel:+919000000000"
            variant="orange"
            size="sm"
            className="normal-case font-bold"
          >
            <Phone size={16} />
            <span>+91 90000 00000</span>
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden ${isTransparent ? "text-white" : "text-neutral-900"
            }`}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="border-t border-neutral-200 bg-white px-5 py-5 text-neutral-900 lg:hidden shadow-lg">
          <div className="flex flex-col">
            {[
              ["Home", "#home"],
              ["B.Tech", "#btech"],
              ["Arts & Science", "#arts"],
              ["Attestation", "#attestation"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-neutral-100 py-3 text-base font-medium text-neutral-900 hover:text-[#1B75BB]"
              >
                {label}
              </a>
            ))}

            <Button
              href="tel:+919000000000"
              onClick={() => setOpen(false)}
              variant="orange"
              size="lg"
              fullWidth
              className="mt-4 normal-case text-base py-4 min-h-[60px]"
            >
              <Phone size={22} />
              <span>Call +91 90000 00000</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
