import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      name: "Industrial Scrap",
      href: "/services#industrial",
      desc: "Manufacturing waste solutions",
      icon: "🏭",
    },
    {
      name: "Demolition Services",
      href: "/services#demolition",
      desc: "C&D site metal recovery",
      icon: "🏗️",
    },
    {
      name: "Roll-Off Containers",
      href: "/services#roll-off",
      desc: "On-site container service",
      icon: "📦",
    },
    {
      name: "Car Crushing",
      href: "/services#car-crushing",
      desc: "Vehicle recycling",
      icon: "🚗",
    },
    {
      name: "Public Services",
      href: "/services#public-services",
      desc: "Open to public & businesses",
      icon: "👥",
    },
  ];

  const isActive = (path: string) => router.pathname === path;

  if (!isMounted) {
    return (
      <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Loading skeleton for logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-300 rounded-lg animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 w-32 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-3 w-20 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/50"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-royal-blue-500 rounded-full mix-blend-multiply filter blur-2xl animate-float"></div>
        <div className="absolute top-0 right-1/4 w-24 h-24 bg-electric-blue-500 rounded-full mix-blend-multiply filter blur-2xl animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="flex justify-between items-center py-4">
          {/* Enhanced Logo with Particle Effect */}
          <Link href="/" className="flex items-center space-x-3 group relative">
            <div className="relative w-16 h-16">
              <Image
                src="/images/logo.png"
                alt="K&L Recycling Logo"
                layout="fill"
                objectFit="contain"
                className="group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-black text-gray-900 leading-tight group-hover:text-royal-blue-700 transition-colors gradient-text">
                K&L Recycling
              </h1>
              <p className="text-xs text-gray-500 font-medium">Since 1956</p>
            </div>
            {/* Floating particles */}
            <div className="absolute -top-2 -right-2 w-2 h-2 bg-royal-blue-400 rounded-full animate-float opacity-60"></div>
            <div className="absolute top-1 -left-1 w-1.5 h-1.5 bg-electric-blue-400 rounded-full animate-float animation-delay-2000 opacity-40"></div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-semibold transition-all duration-300 hover:text-royal-blue-700 py-2 border-b-2 ${
                isActive("/")
                  ? "text-royal-blue-700 border-royal-blue-700"
                  : "text-gray-700 border-transparent hover:border-royal-blue-300"
              }`}
            >
              Home
            </Link>

            {/* Enhanced Services Mega Menu */}
            <div className="relative group">
              <button className="font-semibold hover:text-royal-blue-700 transition-all duration-300 flex items-center space-x-2 text-gray-700 py-2 border-b-2 border-transparent hover:border-royal-blue-300">
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 group-hover:rotate-180 ${
                    router.pathname.startsWith("/services")
                      ? "text-royal-blue-700"
                      : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <h3 className="font-black text-gray-900 text-lg mb-4 flex items-center">
                    <span className="w-2 h-2 bg-royal-blue-600 rounded-full mr-2"></span>
                    Our Services
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="p-4 rounded-xl hover:bg-royal-blue-50 transition-all duration-300 group border border-transparent hover:border-royal-blue-200"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{service.icon}</span>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 group-hover:text-royal-blue-700 mb-1 transition-colors">
                              {service.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {service.desc}
                            </div>
                          </div>
                          <svg
                            className="w-4 h-4 text-gray-400 group-hover:text-royal-blue-600 group-hover:translate-x-1 transition-all"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link
                      href="/services"
                      className="flex items-center justify-center w-full bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-glow transition-all duration-300 group"
                    >
                      View All Services
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/locations"
              className={`font-semibold transition-all duration-300 hover:text-royal-blue-700 py-2 border-b-2 ${
                isActive("/locations")
                  ? "text-royal-blue-700 border-royal-blue-700"
                  : "text-gray-700 border-transparent hover:border-royal-blue-300"
              }`}
            >
              Locations
            </Link>

            <Link
              href="/resources"
              className={`font-semibold transition-all duration-300 hover:text-royal-blue-700 py-2 border-b-2 ${
                isActive("/resources")
                  ? "text-royal-blue-700 border-royal-blue-700"
                  : "text-gray-700 border-transparent hover:border-royal-blue-300"
              }`}
            >
              Resources
            </Link>

            <Link
              href="/about"
              className={`font-semibold transition-all duration-300 hover:text-royal-blue-700 py-2 border-b-2 ${
                isActive("/about")
                  ? "text-royal-blue-700 border-royal-blue-700"
                  : "text-gray-700 border-transparent hover:border-royal-blue-300"
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`font-semibold transition-all duration-300 hover:text-royal-blue-700 py-2 border-b-2 ${
                isActive("/contact")
                  ? "text-royal-blue-700 border-royal-blue-700"
                  : "text-gray-700 border-transparent hover:border-royal-blue-300"
              }`}
            >
              Contact
            </Link>

            <Link
              href="/contact#quote-tool"
              className="btn-primary px-8 py-3 group relative overflow-hidden"
            >
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-700 to-electric-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
          </nav>

          {/* Enhanced Mobile menu button */}
          <button
            className="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors group relative"
            aria-label="Toggle mobile menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <div
                className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></div>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <nav className="space-y-4 py-4 border-t border-gray-200">
            <Link
              href="/"
              className={`block font-semibold py-3 px-4 rounded-xl transition-all duration-300 ${
                isActive("/")
                  ? "bg-royal-blue-50 text-royal-blue-700 border-l-4 border-royal-blue-700"
                  : "text-gray-700 hover:bg-gray-50 hover:text-royal-blue-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/services"
              className={`block font-semibold py-3 px-4 rounded-xl transition-all duration-300 ${
                isActive("/services")
                  ? "bg-royal-blue-50 text-royal-blue-700 border-l-4 border-royal-blue-700"
                  : "text-gray-700 hover:bg-gray-50 hover:text-royal-blue-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>

            <Link
              href="/locations"
              className={`block font-semibold py-3 px-4 rounded-xl transition-all duration-300 ${
                isActive("/locations")
                  ? "bg-royal-blue-50 text-royal-blue-700 border-l-4 border-royal-blue-700"
                  : "text-gray-700 hover:bg-gray-50 hover:text-royal-blue-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Locations
            </Link>

            <Link
              href="/resources"
              className={`block font-semibold py-3 px-4 rounded-xl transition-all duration-300 ${
                isActive("/resources")
                  ? "bg-royal-blue-50 text-royal-blue-700 border-l-4 border-royal-blue-700"
                  : "text-gray-700 hover:bg-gray-50 hover:text-royal-blue-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>

            <Link
              href="/about"
              className={`block font-semibold py-3 px-4 rounded-xl transition-all duration-300 ${
                isActive("/about")
                  ? "bg-royal-blue-50 text-royal-blue-700 border-l-4 border-royal-blue-700"
                  : "text-gray-700 hover:bg-gray-50 hover:text-royal-blue-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`block font-semibold py-3 px-4 rounded-xl transition-all duration-300 ${
                isActive("/contact")
                  ? "bg-royal-blue-50 text-royal-blue-700 border-l-4 border-royal-blue-700"
                  : "text-gray-700 hover:bg-gray-50 hover:text-royal-blue-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/contact#quote-tool"
              className="block btn-primary text-center py-4 mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
