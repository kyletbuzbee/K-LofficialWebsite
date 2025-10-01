import React, { FC } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

// --- (Keep CheckIcon component here) ---

const SERVICES_DATA = {
  industrial: {
    title: 'Industrial Scrap Management',
    description: 'We partner with manufacturing facilities to transform scrap metal waste streams into significant revenue.',
    image: '/images/Contruction.jpg', // Corrected path
    details: [
      'Customized collection schedules tailored to your production cycles.',
      'A wide array of on-site containers including roll-offs, gondolas, and totes.',
      'Detailed reporting on material recovery to support your financial and ESG goals.',
    ]
  },
  demolition: {
    title: 'Demolition & C&D Debris',
    description: 'A full-service demolition recycling partner. We handle all metal recovery from C&D sites, ensuring the highest standards of safety.',
    image: '/images/demolition-safety.png', // Corrected path
    details: [
      'Pre-demolition site assessment to create an efficient recovery plan.',
      'Safe and compliant handling of structural steel, rebar, and all other metals.',
      'Seamless coordination with your crews to minimize project delays.',
    ]
  },
  // ... other services
};

const ServicesPage: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Our Services | K&L Recycling</title>
        <meta name="description" content="Explore our comprehensive scrap metal services for industrial, demolition, and commercial projects." />
      </Head>
      <div className="animate-fade-in">
          <section className="bg-gray-800 text-white py-20">
              <div className="container mx-auto px-6 text-center" data-aos="fade-down">
                  <h1 className="text-4xl md:text-6xl font-black">Our Services</h1>
                  <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
                      Tailored recycling solutions for every project.
                  </p>
              </div>
          </section>

          <div className="py-20 md:py-28 space-y-20">
              {Object.keys(SERVICES_DATA).map((key, index) => (
                  <section key={key} id={key} className="container mx-auto px-6 scroll-mt-20">
                      {/* ... rest of the dynamic section ... */}
                  </section>
              ))}
          </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;