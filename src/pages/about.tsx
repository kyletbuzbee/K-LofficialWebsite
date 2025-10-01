import { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonials";

const AboutPage: FC = () => {
  return (
    <Layout>
      <Head>
        <title>About Us | K&L Recycling</title>
        <meta
          name="description"
          content="Learn about K&L Recycling's over 50 year history of providing reliable and professional scrap metal recycling services."
        />
      </Head>
      <div className="animate-fade-in">
        <section className="bg-gray-800 text-white py-20">
          <div
            className="container mx-auto px-6 text-center"
            data-aos="fade-down"
          >
            <h1 className="text-4xl md:text-6xl font-black">
              A Legacy of Reliability With Over 50 Years
            </h1>
            <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
              A multi-generational family business committed to our partners and
              our community.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <Image
                src="/images/project-planning-scrap.jpg"
                alt="K&L Recycling yard"
                className="rounded-lg shadow-2xl"
                width={1200}
                height={800}
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl font-black text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-700 mt-4">
                With over 50 years of experience, K&L Recycling started with a
                single truck and a simple promise: to provide honest, reliable
                service to the businesses of East Texas. That promise remains
                the bedrock of our company today.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mt-8">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 mt-2">
                To provide the safest, most efficient, and most profitable scrap
                management solutions for our industrial partners.
              </p>
            </div>
          </div>
        </section>

        {/* New: Leadership/Team Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2
              className="text-4xl font-black text-center text-gray-900 mb-12"
              data-aos="fade-up"
            >
              Our Leadership Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Andy Wells",
                  title: "CEO",
                  bio: "With 30 years in the industry, Andy leads K&L with a focus on innovation and customer service.",
                  image: "/images/leader1.jpg",
                },
                {
                  name: "Mark Wells",
                  title: "Operations Director",
                  bio: "Mark oversees daily operations, ensuring efficiency and safety across all locations.",
                  image: "/images/leader2.jpg",
                },
                {
                  name: "Sarah Johnson",
                  title: "Sustainability Manager",
                  bio: "Sarah drives our environmental initiatives, holding certifications in sustainable recycling.",
                  image: "/images/leader3.jpg",
                },
              ].map((leader, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    width={128}
                    height={128}
                  />
                  <h3 className="text-xl font-bold text-gray-900">
                    {leader.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{leader.title}</p>
                  <p className="text-gray-700 text-sm">{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New: Awards and Certifications Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2
              className="text-4xl font-black text-gray-900 mb-12"
              data-aos="fade-up"
            >
              Awards and Certifications
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  name: "R2 Certified",
                  description:
                    "Responsible Recycling certification for electronics and metals.",
                  image: "/images/r2-certified-logo.png",
                },
                {
                  name: "ISN Compliant",
                  description:
                    "Industry-leading safety and compliance standards.",
                  image: "/images/isn-logo.png",
                },
                {
                  name: "East Texas Business Award",
                  description:
                    "Recognized for outstanding community contributions in 2024.",
                  image: "/images/award1.png",
                },
              ].map((award, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Image
                    src={award.image}
                    alt={award.name}
                    className="h-20 mx-auto mb-4"
                    width={120}
                    height={80}
                  />
                  <h3 className="text-xl font-bold text-gray-900">
                    {award.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Testimonials />
      </div>
    </Layout>
  );
};

export default AboutPage;
