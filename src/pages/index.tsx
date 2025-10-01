import React, { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { allPosts } from "@/data/posts";

const BlogPage: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Blog | K&L Recycling</title>
        <meta
          name="description"
          content="News, insights, and tips from the scrap metal recycling experts at K&L Recycling."
        />
      </Head>

      <section className="bg-gradient-to-br from-gray-900 to-royal-blue-900 text-white py-20">
        <div
          className="container mx-auto px-6 text-center"
          data-aos="fade-down"
        >
          <h1 className="text-4xl md:text-6xl font-black">Our Blog</h1>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto text-blue-100">
            Industry insights, company news, and helpful tips.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    width={600}
                    height={384}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-royal-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-royal-blue-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-royal-blue-600 font-semibold group-hover:text-royal-blue-700">
                    Read More
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
