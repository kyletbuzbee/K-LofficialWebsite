import React, { FC } from "react";
import { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    quote:
      "K&L's container service is night and day compared to our last vendor. They are always on time, which has completely eliminated our production bottlenecks.",
    name: "John D.",
    title: "Operations Manager, Manufacturing Plant",
  },
  {
    quote:
      "Their team is professional, their pricing is transparent, and they are a true partner in our demolition projects. Highly recommend.",
    name: "Sarah P.",
    title: "Project Lead, Fritcher Construction",
  },
  {
    quote:
      "Working with K&L has significantly increased our scrap revenue. Their guidance on sorting materials has been invaluable for our bottom line.",
    name: "Mike R.",
    title: "Facility Director, Industrial Fabricator",
  },
];

const Testimonials: FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-royal-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-electric-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-16">
          <h2
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6 gradient-text"
            data-aos="fade-up"
          >
            What Our Partners Say
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Don&apos;t just take our word for it - hear from our satisfied
            customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-royal-blue-500 to-electric-blue-500"></div>

              {/* Quote icon with animation */}
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-500 to-electric-blue-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                {/* Floating particles */}
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-royal-blue-400 rounded-full animate-float opacity-60"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-electric-blue-400 rounded-full animate-float animation-delay-2000 opacity-40"></div>
              </div>

              {/* Rating stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ⭐
                  </span>
                ))}
              </div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author info */}
              <div className="border-t border-gray-100 pt-6">
                <cite className="block not-italic font-bold text-gray-900 text-lg">
                  {testimonial.name}
                </cite>
                <p className="text-gray-500 text-sm mt-1">
                  {testimonial.title}
                </p>

                {/* Company badge */}
                <div className="mt-3 inline-block bg-gradient-to-r from-royal-blue-50 to-electric-blue-50 text-royal-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                  Verified Customer
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-500/5 to-electric-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Happy Customers" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "68+", label: "Years Experience" },
            { number: "100%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-3xl font-black text-royal-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
