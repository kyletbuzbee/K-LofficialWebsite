import React from "react";
import Image from "next/image";

const fleet = [
  {
    name: "Roll-Off Truck",
    description: "For large industrial and construction site cleanups.",
    image: "/images/roll-off-truck.jpg", // replace with actual image
  },
  {
    name: "Flatbed Truck",
    description: "For transporting large equipment and materials.",
    image: "/images/flatbed-truck.jpg", // replace with actual image
  },
  {
    name: "Grapple Truck",
    description: "For heavy-duty lifting and loading of scrap metal.",
    image: "/images/grapple-truck.jpg", // replace with actual image
  },
];

export function FleetShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Our Fleet, Your Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have the right equipment for any job, big or small.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleet.map((vehicle, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <Image
                src={vehicle.image}
                alt={vehicle.name}
                width={400}
                height={300}
                className="object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-gray-700">{vehicle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
