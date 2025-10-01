import React, { FC } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const SustainabilityPage: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Sustainability | K&L Recycling</title>
        <meta name="description" content="Our commitment to environmental stewardship and sustainable recycling practices." />
      </Head>

      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-6 text-center" data-aos="fade-down">
          <h1 className="text-4xl md:text-6xl font-black">Environmental Stewardship</h1>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
            Recycling isn't just our business; it's our commitment to a sustainable future.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-black text-gray-900">Our Certifications</h2>
            <p className="text-lg text-gray-700 mt-4">We adhere to the highest industry standards for safety and environmental responsibility. Our certifications from R2 and ISN are a testament to our rigorous processes.</p>
            <div className="flex space-x-8 mt-8">
              <img src="/images/r2-certified-logo.png" alt="R2 Certified" className="h-20" />
              <img src="/images/isn-logo.png" alt="ISN Compliant" className="h-20" />
            </div>
          </div>
          <div data-aos="fade-left">
            <img src="https://placehold.co/600x400/22c55e/ffffff?text=Green+Initiatives" alt="Sustainable practices" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SustainabilityPage;