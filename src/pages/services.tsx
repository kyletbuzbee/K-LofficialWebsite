import React, { FC, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import ServiceModal from "@/components/ServiceModal";
import { SERVICES_DATA } from "@/data/services";

const ServicesPage: FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const serviceCategories = [
    {
      title: "Industrial Services",
      description:
        "Comprehensive solutions for manufacturing and industrial facilities",
      services: ["industrial", "roll-off"],
      color: "from-royal-blue-600 to-electric-blue-600",
    },
    {
      title: "Demolition & Construction",
      description:
        "Specialized metal recovery from construction and demolition sites",
      services: ["demolition"],
      color: "from-orange-600 to-red-600",
    },
    {
      title: "Public Services",
      description: "Open to individuals and small businesses",
      services: ["public-services", "car-crushing"],
      color: "from-green-600 to-emerald-600",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>
          Services - Scrap Metal Recycling Solutions | K&L Recycling
        </title>
        <meta
          name="description"
          content="Professional scrap metal recycling services including industrial pickup, demolition services, roll-off containers, and public drop-off. Competitive pricing and reliable service."
        />
        <link rel="canonical" href="https://www.klrecycling.com/services" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-royal-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Comprehensive scrap metal recycling solutions for industrial,
            commercial, and residential customers
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/contact#quote-tool"
              className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors text-lg"
            >
              Get Free Quote
            </Link>
            <Link
              href="/locations"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-royal-blue-600 transition-colors text-lg"
            >
              Find Location
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the service category that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mx-auto mb-6`}
                >
                  <span className="text-white text-2xl">
                    {index === 0 ? "🏭" : index === 1 ? "🏗️" : "👥"}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {category.description}
                </p>
                <div className="space-y-2">
                  {category.services.map((serviceId) => {
                    const service = SERVICES_DATA[serviceId];
                    return (
                      <div
                        key={serviceId}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-royal-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{service.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Detailed Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on any service to learn more about our offerings and pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {Object.entries(SERVICES_DATA).map(([id, service], index) => (
              <div
                key={id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedService(id)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-gray-600"
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
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Key Benefits:
                    </h4>
                    <div className="space-y-1">
                      {service.benefits?.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-royal-blue-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-royal-blue-600 font-semibold hover:text-royal-blue-700">
                      Learn More →
                    </span>
                    <div className="text-sm text-gray-500">Click to expand</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Competitive Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer competitive market-based pricing with transparent,
              no-hidden-fee service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                material: "Copper",
                price: "$3.50-$4.50",
                unit: "per lb",
                color: "from-orange-500 to-red-500",
              },
              {
                material: "Aluminum",
                price: "$0.60-$1.20",
                unit: "per lb",
                color: "from-gray-400 to-gray-600",
              },
              {
                material: "Steel",
                price: "$0.08-$0.15",
                unit: "per lb",
                color: "from-gray-600 to-gray-800",
              },
              {
                material: "Brass",
                price: "$2.00-$3.00",
                unit: "per lb",
                color: "from-yellow-500 to-yellow-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  <span className="text-white font-bold text-lg">
                    {item.material.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.material}
                </h3>
                <div className="text-2xl font-black text-royal-blue-600 mb-1">
                  {item.price}
                </div>
                <div className="text-sm text-gray-500">{item.unit}</div>
                <div className="text-xs text-gray-400 mt-2">
                  *Prices subject to market fluctuations
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-royal-blue-50 to-electric-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Current Pricing?
              </h3>
              <p className="text-gray-600 mb-6">
                Metal prices fluctuate daily. Contact us for real-time pricing
                on your specific materials.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  href="/contact#quote-tool"
                  className="bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Get Quote
                </Link>
                <a
                  href="tel:+17135550123"
                  className="border-2 border-royal-blue-600 text-royal-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-royal-blue-50 transition-all duration-300"
                >
                  Call (713) 555-0123
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/contact#quote-tool"
              className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors text-lg"
            >
              Get Free Quote
            </Link>
            <Link
              href="/locations"
              className="border-2 border-blue-500 text-blue-500 font-bold py-4 px-8 rounded-xl hover:bg-blue-500 hover:text-white transition-colors text-lg"
            >
              Find Location
            </Link>
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          service={SERVICES_DATA[selectedService]}
        />
      )}
    </Layout>
  );
};

export default ServicesPage;
