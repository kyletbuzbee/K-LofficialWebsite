import React, { FC } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';

const jobOpenings = [
  { title: 'CDL Truck Driver', location: 'Tyler, TX', type: 'Full-Time' },
  { title: 'Heavy Equipment Operator', location: 'Great Bend, KS', type: 'Full-Time' },
  { title: 'Yard Foreman', location: 'Tyler, TX', type: 'Full-Time' },
];

const CareersPage: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Careers | K&L Recycling</title>
        <meta name="description" content="Join the K&L Recycling team and build a career in a vital industry." />
      </Head>
      
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-6 text-center" data-aos="fade-down">
          <h1 className="text-4xl md:text-6xl font-black">Join Our Team</h1>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
            Build a rewarding career at K&L Recycling and help us create a more sustainable future.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-12" data-aos="fade-up">Current Openings</h2>
          <div className="max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 flex justify-between items-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div>
                  <h3 className="text-2xl font-bold text-blue-700">{job.title}</h3>
                  <p className="text-gray-600 mt-1">{job.location} | {job.type}</p>
                </div>
                <Link href="/contact" className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition">
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CareersPage;