import React, { FC } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import MultiStepForm from "@/components/MultiStepForm";

// --- Contact Page Component ---
const ContactPage: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Contact | K&L Recycling</title>
        <meta
          name="description"
          content="Contact K&L Recycling for scrap metal services in Texas and Kansas."
        />
      </Head>
      <div className="animate-fade-in">
        <section className="bg-gray-800 text-white py-20">
          <div
            className="container mx-auto px-6 text-center"
            data-aos="fade-down"
          >
            <h1 className="text-4xl md:text-6xl font-black">Contact Us</h1>
            <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
              Ready to get started? Request a quote or find a location near you.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3" id="quote-tool">
              <MultiStepForm />
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-gray-900 mb-6">
                Our Locations
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="font-black text-xl text-blue-700">
                    K&L Recycling (Main Office)
                  </h3>
                  <p className="text-gray-700 mt-2">
                    4134 Chandler Highway
                    <br />
                    Tyler, TX 75702
                  </p>
                  <p className="font-bold mt-1">
                    <a href="tel:800-533-8081" className="hover:text-blue-700">
                      (800) 533-8081
                    </a>
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="font-black text-xl text-blue-700">
                    Acme Scrap
                  </h3>
                  <p className="text-gray-700 mt-2">
                    700 Frey Street
                    <br />
                    Great Bend, KS 67530
                  </p>
                  <p className="font-bold mt-1">
                    <a href="tel:620-793-6532" className="hover:text-blue-700">
                      (620) 793-6532
                    </a>
                  </p>
                </div>
                <p className="text-gray-600 text-center">
                  ... and 7 other locations throughout Texas!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* New: Interactive Map Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2
              className="text-4xl font-black text-center text-gray-900 mb-12"
              data-aos="fade-up"
            >
              Find Us on the Map
            </h2>
            <div
              className="w-full h-96 rounded-lg overflow-hidden shadow-xl"
              data-aos="fade-up"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.123456789!2d-95.250123456789!3d32.350123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8649b123456789%3A0x1234567890abcdef!2sK%26L%20Recycling!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage;
