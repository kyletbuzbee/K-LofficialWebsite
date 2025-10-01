import React, { FC } from 'react';

const testimonials = [
  {
    quote: "K&L's container service is night and day compared to our last vendor. They are always on time, which has completely eliminated our production bottlenecks.",
    name: "John D.",
    title: "Operations Manager, Manufacturing Plant"
  },
  {
    quote: "Their team is professional, their pricing is transparent, and they are a true partner in our demolition projects. Highly recommend.",
    name: "Sarah P.",
    title: "Project Lead, Fritcher Construction"
  },
    {
    quote: "Working with K&L has significantly increased our scrap revenue. Their guidance on sorting materials has been invaluable for our bottom line.",
    name: "Mike R.",
    title: "Facility Director, Industrial Fabricator"
  }
];

const Testimonials: FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900" data-aos="fade-up">What Our Partners Say</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
              <p className="text-lg italic text-gray-700">"{testimonial.quote}"</p>
              <cite className="block mt-6 not-italic font-bold text-gray-900">– {testimonial.name}</cite>
              <p className="text-gray-500">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;