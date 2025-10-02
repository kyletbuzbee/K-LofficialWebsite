import React, { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { SERVICES_DATA } from "@/data/services";

const HomePage: FC = () => {
  const services = Object.values(SERVICES_DATA);

  return (
    <Layout>
      <Head>
        <title>
          K&L Recycling - Professional Scrap Metal Recycling Since 1956
        </title>
        <meta
          name="description"
          content="Professional scrap metal recycling services for industrial, demolition, and public customers. Competitive pricing, reliable service, and environmental responsibility since 1956."
        />
        <meta
          name="keywords"
          content="scrap metal recycling, industrial scrap, demolition recycling, metal recycling, Texas, Kansas"
        />
        <link rel="canonical" href="https://www.klrecycling.com" />
      </Head>

      {/* Hero Section */}
      <Hero />

      {/* Quick Access Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link
              href="/locations"
              className="group bg-gradient-to-br from-royal-blue-50 to-electric-blue-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-royal-blue-600 to-electric-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Find Your Location
              </h3>
              <p className="text-gray-600 mb-4">
                Locate the nearest K&L Recycling facility
              </p>
              <span className="text-royal-blue-600 font-semibold group-hover:text-royal-blue-700">
                View Locations →
              </span>
            </Link>

            <Link
              href="/contact#quote-tool"
              className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Sell Your Metal
              </h3>
              <p className="text-gray-600 mb-4">
                Get competitive prices for your scrap metal
              </p>
              <span className="text-green-600 font-semibold group-hover:text-green-700">
                Get Quote →
              </span>
            </Link>

            <Link
              href="/contact"
              className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Contact Us
              </h3>
              <p className="text-gray-600 mb-4">
                Speak with our recycling experts
              </p>
              <span className="text-orange-600 font-semibold group-hover:text-orange-700">
                Call Now →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Our Recycling Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive scrap metal recycling solutions for industrial,
              commercial, and residential customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.slice(0, 6).map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.id === 'roll-off' ? '/images/demolition-safety.png' : service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.benefits?.slice(0, 2).map((benefit, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-royal-blue-100 text-royal-blue-700 px-2 py-1 rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center text-royal-blue-600 font-semibold hover:text-royal-blue-700 transition-colors"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
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
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="btn-primary text-lg px-8 py-4 group relative overflow-hidden"
            >
              <span className="relative z-10">View All Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-700 to-electric-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600">
              Over 68 years of reliable service and environmental responsibility
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-royal-blue-600 to-electric-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-black text-xl">68+</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Years Experience</h3>
              <p className="text-sm text-gray-600">Since 1956</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-black text-xl">10K+</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Tons Recycled</h3>
              <p className="text-sm text-gray-600">Annually</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-black text-xl">500+</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Active Partners</h3>
              <p className="text-sm text-gray-600">Businesses</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-black text-xl">100%</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Compliance</h3>
              <p className="text-sm text-gray-600">EPA Standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials We Accept */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-royal-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Materials We Accept
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We recycle all types of ferrous and non-ferrous metals at
              competitive prices
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Steel & Iron",
                icon: "🔩",
                desc: "Structural steel, rebar, cast iron",
              },
              {
                name: "Aluminum",
                icon: "🥤",
                desc: "Cans, siding, automotive parts",
              },
              {
                name: "Copper",
                icon: "🔌",
                desc: "Wire, pipes, electrical components",
              },
              {
                name: "Brass",
                icon: "🎺",
                desc: "Fittings, valves, musical instruments",
              },
              {
                name: "Stainless Steel",
                icon: "🍴",
                desc: "Appliances, cookware, fixtures",
              },
              { name: "Lead", icon: "🔋", desc: "Batteries, pipes, weights" },
              {
                name: "Zinc",
                icon: "⚡",
                desc: "Die cast, galvanized materials",
              },
              {
                name: "Nickel",
                icon: "🪙",
                desc: "Coins, alloys, aerospace parts",
              },
            ].map((material, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-3">{material.icon}</div>
                <h3 className="font-bold text-lg mb-2">{material.name}</h3>
                <p className="text-sm text-blue-200">{material.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/materials"
              className="btn-secondary text-lg px-8 py-4 group relative overflow-hidden"
            >
              <span className="relative z-10">View All Materials</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Turn Your Scrap Into Cash?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get competitive prices for your scrap metal. Contact us today for a
            free quote or visit one of our convenient locations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/contact#quote-tool"
              className="group relative inline-block px-8 py-4 font-bold text-white bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-electric-blue-600 to-royal-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Get Free Quote</span>
            </Link>
            <Link
              href="/locations"
              className="group relative inline-block px-8 py-4 font-bold text-white border-2 border-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative">Find Location</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
