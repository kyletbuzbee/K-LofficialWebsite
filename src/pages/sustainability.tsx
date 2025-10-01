import React, { FC } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import RecyclingCalculator from "@/components/RecyclingCalculator"; // New engagement component
import Image from "next/image";

const SustainabilityPage: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Sustainability | K&L Recycling</title>
        <meta
          name="description"
          content="Our commitment to environmental stewardship and sustainable recycling practices."
        />
      </Head>

      <section className="bg-gray-800 text-white py-20">
        <div
          className="container mx-auto px-6 text-center"
          data-aos="fade-down"
        >
          <h1 className="text-4xl md:text-6xl font-black">
            Environmental Stewardship
          </h1>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
            Recycling isn&apos;t just our business; it&apos;s our commitment to
            sustainable future.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-delay="100">
            <h2 className="text-3xl font-black text-gray-900">
              Our Certifications
            </h2>
            <p className="text-lg text-gray-700 mt-4">
              We adhere to the highest industry standards for safety and
              environmental responsibility. Our certifications from R2 and ISN
              are a testament to our rigorous processes.
            </p>
            <div className="flex space-x-8 mt-8">
              <Image
                src="/images/r2-certified-logo.png"
                alt="R2 Certified"
                className="h-20 w-auto animate-zoom-in"
                width={120}
                height={80}
              />
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="200">
            <Image
              src="https://evreka.co/wp-content/uploads/2022/03/scrap-metal-recycling-guide-a-way-to-sustainable-development-scaled.jpg" // Sustainable yard image [image:6]
              alt="Sustainable recycling practices"
              width={600}
              height={400}
              className="rounded-lg shadow-xl animate-fade-slide"
            />
          </div>
        </div>
      </section>

      {/* Enhanced Community Section with Imagery and Animations */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-black text-center text-gray-900 mb-12"
            data-aos="fade-up"
          >
            Community Engagement
          </h2>
          <p
            className="text-center text-lg text-gray-700 mb-8 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We actively participate in local initiatives to promote recycling
            and sustainability.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Recycling Drives",
                description:
                  "Hosting annual events for community metal collection.",
                image:
                  "https://www.hermiston.gov/sites/default/files/imageattachments/parksrec/page/16401/2022_community_recycle_day.png",
              }, // Community event [image:7]
              {
                title: "Educational Workshops",
                description:
                  "Partnering with schools to teach recycling benefits.",
                image:
                  "https://www.merriam.org/files/sharedassets/public/v/1/1.-photos/events/recycle-event-web-image.jpg?w=1080",
              }, // Event [image:8]
              {
                title: "Local Partnerships",
                description:
                  "Collaborating with charities for eco-friendly projects.",
                image:
                  "https://i.ytimg.com/vi/Yo8q6M_7t1U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDaUdIF4nzkIAQTnaAMEzxLwGrlEw",
              }, // Event [image:9]
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="rounded-md mb-4 animate-zoom-in"
                />
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New User Engagement: Recycling Calculator */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl font-black text-gray-900 mb-12"
            data-aos="fade-up"
          >
            Calculate Your Recycling Impact
          </h2>
          <RecyclingCalculator />
        </div>
      </section>
    </Layout>
  );
};

export default SustainabilityPage;
