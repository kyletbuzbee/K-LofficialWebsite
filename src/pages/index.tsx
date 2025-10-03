import { FC } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";

import { SERVICES_DATA } from "@/data/services";

const HomePage: FC = (): JSX.Element => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="K&L Recycling is the leading scrap metal recycling facility in Tyler, TX, offering top prices and services for industrial, commercial, and individual clients."
      />
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-20 text-gray-800 mb-4">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Our Recycling Services
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            We offer a comprehensive range of services to meet all your scrap
            metal recycling needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(SERVICES_DATA)
              .slice(0, 6)
              .map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="p-8">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Link
                      href={`/services#${service.id}`}
                      className="text-royal-blue-600 font-semibold hover:underline"
                    >
                      Learn More &rarr;
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <TrustBadges />
    </Layout>
  );
};

export default HomePage;
