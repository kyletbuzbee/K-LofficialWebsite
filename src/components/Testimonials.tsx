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
    <section className="py-20 md:py-28 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-black text-gray-900"
          data-aos="fade-up"
        >
          What Our Partners Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4">
                <svg
                  className="w-10 h-10 text-royal-blue-500 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-lg italic text-gray-700 mb-6">
                &quot;{testimonial.quote}&quot;
              </p>
              <cite className="block not-italic font-bold text-gray-900">
                {testimonial.name}
              </cite>
              <p className="text-gray-500 text-sm mt-1">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
