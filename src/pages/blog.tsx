import React, { FC } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';

// --- Mock Data for Blog Posts ---
const blogPosts = [
  {
    slug: 'maximizing-scrap-value',
    title: '5 Tips for Maximizing Your Scrap Metal Value',
    date: 'September 28, 2025',
    excerpt: 'Learn how proper sorting and preparation can significantly increase the revenue you get from your scrap metal.',
    image: '/images/project-planning-scrap.jpg',
  },
  {
    slug: 'demolition-safety-protocols',
    title: 'Safety First: Our Process for On-Site Demolition Recycling',
    date: 'September 15, 2025',
    excerpt: 'Discover the meticulous planning and safety protocols that go into every K&L demolition project to ensure a safe and efficient process.',
    image: '/images/demolition-safety.png',
  },
];

const BlogPage: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Blog | K&L Recycling</title>
        <meta name="description" content="News, insights, and tips from the scrap metal recycling experts at K&L Recycling." />
      </Head>
      
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-6 text-center" data-aos="fade-down">
          <h1 className="text-4xl md:text-6xl font-black">Our Blog</h1>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
            Industry insights, company news, and helpful tips.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up">
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">{post.title}</h3>
                  <p className="text-gray-600 mt-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;