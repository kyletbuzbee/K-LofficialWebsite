import React from "react";
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
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Resources", href: "/resources" }, // New link to Resources page
    { name: "Locations", href: "/contact" },
    { name: "Contact", href: "/contact" },
  ],
};

const contactInfo = {
  address: "4134 Chandler Hwy, Tyler, TX 75702",
  phone: "(800) 533-8081",
  phoneHref: "tel:800-533-8081",
  email: "dispatch@kl-recycling.com",
  emailHref: "mailto:dispatch@kl-recycling.com",
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-black text-white">K&L Recycling</h3>
            <p className="text-gray-400 mt-2">
              Your premier industrial recycling partner with over 50 years of
              experience.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-200">Services</h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-200">Company</h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-200">Contact Us</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>{contactInfo.address}</li>
              <li>
                <a
                  href={contactInfo.phoneHref}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.emailHref}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>
            Copyright © {new Date().getFullYear()} K&L Recycling. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
