import React, { FC } from "react";
import Head from "next/head";
import Layout from "../components/Layout";

// Sample Blog Posts/Data
const blogPosts = [
  {
    title: "Recycling Tips for Beginners",
    excerpt:
      "Learn how to prepare your scrap metal for the best prices and environmental impact.",
    date: "September 15, 2025",
    link: "#",
  },
  {
    title: "Current Scrap Metal Market Trends",
    excerpt:
      "Stay updated on prices for copper, aluminum, and more in Texas and Kansas.",
    date: "August 20, 2025",
    link: "#",
  },
  {
    title: "Sustainable Practices in Industry",
    excerpt:
      "How businesses can reduce waste and increase revenue through recycling.",
    date: "July 10, 2025",
    link: "#",
  },
];

const downloadableGuides = [
  {
    name: "Material Preparation Guide",
    description: "PDF guide on sorting and preparing metals.",
    link: "/downloads/prep-guide.pdf",
  },
  {
    name: "Sustainability Report 2024",
    description: "Our annual report on environmental impact.",
    link: "/downloads/sustainability-2024.pdf",
  },
];

const ResourcesPage: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Resources | K&L Recycling</title>
        <meta
          name="description"
          content="Recycling tips, market updates, and downloadable guides from K&L Recycling."
        />
      </Head>

      <section className="bg-gray-800 text-white py-20">
        <div
          className="container mx-auto px-6 text-center"
          data-aos="fade-down"
        >
          <h1 className="text-4xl md:text-6xl font-black">Resources & Blog</h1>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
            Stay informed with our latest articles, tips, and guides on
            recycling and sustainability.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl font-black text-center text-gray-900 mb-12"
            data-aos="fade-up"
          >
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                  <a
                    href={post.link}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Guides Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl font-black text-center text-gray-900 mb-12"
            data-aos="fade-up"
          >
            Downloadable Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {downloadableGuides.map((guide, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {guide.name}
                </h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <a
                  href={guide.link}
                  className="btn-primary px-6 py-3 inline-block"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResourcesPage;
