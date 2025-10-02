import React from "react";
import Link from "next/link";
import FacebookIcon from "./FacebookIcon";
import LinkedInIcon from "./LinkedInIcon";

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: FacebookIcon,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: LinkedInIcon,
  },
];

const footerLinks = {
  services: [
    { name: "Industrial Scrap", href: "/services#industrial" },
    { name: "Demolition", href: "/services#demolition" },
    { name: "Roll-Off Containers", href: "/services#roll-off" },
    { name: "Car Crushing", href: "/services#car-crushing" },
    { name: "Public Services", href: "/services#public-services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Locations", href: "/locations" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/resources#faq" },
    { name: "Recycling Guides", href: "/resources#guides" },
    { name: "Materials We Accept", href: "/materials" },
    { name: "Sustainability", href: "/sustainability" },
  ],
};

const contactInfo = {
  address: "4134 Chandler Hwy, Tyler, TX 75702",
  phone: "(800) 533-8081",
  phoneHref: "tel:800-533-8081",
  email: "dispatch@kl-recycling.com",
  emailHref: "mailto:dispatch@kl-recycling.com",
};

const certifications = [
  { name: "EPA Compliant", icon: "✅" },
  { name: "R2 Certified", icon: "♻️" },
  { name: "ISO 14001", icon: "🏆" },
  { name: "OSHA Certified", icon: "🛡️" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-royal-blue-900 to-electric-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full mix-blend-soft-light filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-royal-blue-600 to-electric-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg">K&L</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">
                  K&L Recycling
                </h3>
                <p className="text-sm text-blue-200">Since 1956</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 max-w-md">
              Your premier industrial recycling partner with over 68 years of
              experience. We transform waste into value while protecting the
              environment.
            </p>

            {/* Trust Indicators */}
            <div className="mb-6">
              <h4 className="font-bold text-blue-200 mb-3">
                Certifications & Compliance
              </h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="bg-white/10 backdrop-blur-sm text-blue-100 text-xs px-3 py-1 rounded-full flex items-center space-x-1"
                  >
                    <span>{cert.icon}</span>
                    <span>{cert.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-xl text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-royal-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-xl text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-royal-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h4 className="font-bold text-xl text-white mb-4">Resources</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-royal-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <h4 className="font-bold text-lg text-white mb-3">
                Contact Info
              </h4>
              <div className="space-y-2 text-blue-100">
                <p className="text-sm">{contactInfo.address}</p>
                <a
                  href={contactInfo.phoneHref}
                  className="block text-royal-blue-300 hover:text-white transition-colors font-semibold"
                >
                  {contactInfo.phone}
                </a>
                <a
                  href={contactInfo.emailHref}
                  className="block text-royal-blue-300 hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-blue-100 mb-6">
              Get the latest recycling news, market updates, and special offers
              delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-royal-blue-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-200 text-sm">
              <p>
                Copyright © {new Date().getFullYear()} K&L Recycling. All
                rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
