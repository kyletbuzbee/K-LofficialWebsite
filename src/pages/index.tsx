// src/pages/index.tsx
import React, { FC } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image'; // Performance Fix: Using Next.js Image component
import Layout from '../components/Layout';
import Testimonials from '../components/Testimonials';
import AnimatedCounter from '../components/AnimatedCounter';

const ArrowRightIcon: FC = () => (
    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
);

const HomePage: FC = () => {
  return (
    <Layout>
      <Head>
        <title>K&L Recycling | Industrial Scrap Metal Partner | Texas & Kansas</title>
        <meta name="description" content="K&L Recycling is the leading expert in industrial, commercial, and demolition scrap metal management in Texas and Kansas." />
        {/* SEO Fix: Added Open Graph and Twitter meta tags for social sharing */}
        <meta property="og:title" content="K&L Recycling | Industrial Scrap Metal Partner" />
        <meta property="og:description" content="The trusted expert for industrial and commercial scrap metal management." />
        <meta property="og:image" content="/images/hero-background.jpg" />
        <meta property="og:url" content="https://www.klrecycling.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="animate-fade-in-up">
        {/* Hero Section */}
        <section className="relative text-white bg-gray-800">
            <Image
              src="/images/hero-background.jpg"
              alt="A large crane claw in a scrap yard, representing industrial recycling."
              layout="fill"
              objectFit="cover"
              quality={80}
              priority // Performance: Preload the hero image
            />
            <div className="absolute inset-0 bg-gray-900/60"></div>
            <div className="relative container mx-auto px-6 py-32 md:py-48 text-center">
                <h1 className="text-4xl md:text-6xl font-black leading-tight text-shadow">
                    Your Premier Industrial Recycling Partner
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mt-6 text-shadow">
                    For over 50 years, we've delivered reliable, profitable, and safe scrap management solutions.
                </p>
                <div className="mt-10">
                    <Link href="/contact" className="group bg-blue-600 text-white font-bold text-lg py-4 px-10 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-xl inline-flex items-center">
                        Get Your Free Quote <ArrowRightIcon />
                    </Link>
                </div>
            </div>
        </section>

        {/* Stats & Trust Bar */}
        <section className="bg-gray-900 text-white py-12">
            <div className="container mx-auto grid sm:grid-cols-3 gap-8 text-center">
                <div>
                    <h3 className="text-5xl font-black text-blue-400"><AnimatedCounter target={50} suffix="+" /></h3>
                    <p className="mt-1 text-gray-400 font-semibold">Years of Service</p>
                </div>
                <div>
                    <h3 className="text-5xl font-black text-blue-400"><AnimatedCounter target={500} suffix="+" /></h3>
                    <p className="mt-1 text-gray-400 font-semibold">Industrial Partners</p>
                </div>
                <div>
                    <h3 className="text-5xl font-black text-blue-400"><AnimatedCounter target={10000} separator="," suffix="+" /></h3>
                    <p className="mt-1 text-gray-400 font-semibold">Tons Processed Annually</p>
                </div>
            </div>
        </section>

        <Testimonials />
      </div>
    </Layout>
  );
};

export default HomePage;