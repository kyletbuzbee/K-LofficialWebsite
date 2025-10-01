import React, { FC, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import ServiceModal from "@/components/ServiceModal";
import { SERVICES_DATA } from "@/data/services";

const ServicesPage: FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <Layout>
      <Head>
        <title>Services | K&L Recycling</title>
        <meta
          name="description"
          content="Comprehensive scrap metal recycling services for industrial and public needs."
        />
      </Head>
      <section className="bg-gray-800 text-white py-20">
        <div
          className="container mx-auto px-6 text-center"
          data-aos="fade-down"
        >
          <h1 className="text-4xl md:text-6xl font-black">Our Services</h1>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
            Professional scrap management solutions tailored to your needs.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(SERVICES_DATA).map(([id, service], index) => (
            <div
              key={id}
              className="card card-hover cursor-pointer"
              onClick={() => setSelectedService(id)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Image
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
                width={600}
                height={384}
              />
              <div className="p-6">
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
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
