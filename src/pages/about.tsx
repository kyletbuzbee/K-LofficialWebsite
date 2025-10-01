import React, { FC } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Testimonials from '../components/Testimonials';

const AboutPage: FC = () => {
  return (
    <Layout>
      <Head>
        <title>About Us | K&L Recycling</title>
        <meta name="description" content="Learn about K&L Recycling's 50+ year history of providing reliable and professional scrap metal recycling services." />
      </Head>
      <div className="animate-fade-in">
          <section className="bg-gray-800 text-white py-20">
              <div className="container mx-auto px-6 text-center" data-aos="fade-down">
                  <h1 className="text-4xl md:text-6xl font-black">A Legacy of Reliability Since 1956</h1>
                  <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
                      A multi-generational family business committed to our partners and our community.
                  </p>
              </div>
          </section>

          <section className="py-20 md:py-28 bg-white">
              <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                  <div data-aos="fade-right">
                      <img src="/images/project-planning-scrap.jpg" alt="K&L Recycling yard" className="rounded-lg shadow-2xl"/>
                  </div>
                  <div data-aos="fade-left">
                      <h2 className="text-3xl font-black text-gray-900">Our Story</h2>
                      <p className="text-lg text-gray-700 mt-4">Founded over 50 years ago, K&L Recycling started with a single truck and a simple promise: to provide honest, reliable service to the businesses of East Texas. That promise remains the bedrock of our company today.</p>
                      <h3 className="text-2xl font-bold text-gray-900 mt-8">Our Mission</h3>
                      <p className="text-lg text-gray-700 mt-2">To provide the safest, most efficient, and most profitable scrap management solutions for our industrial partners.</p>
                  </div>
              </div>
          </section>

          {/* Use the Testimonials component for consistency */}
          <Testimonials />
      </div>
    </Layout>
  );
};

export default AboutPage;