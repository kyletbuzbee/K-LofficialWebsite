import React, { FC, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout'; // Assuming you have a Layout component

// --- Data for Materials ---
const materialsData = [
  { name: 'Copper', category: 'non-ferrous', image: '/images/copper.png', description: 'Includes pipes, tubing, and clean copper wire.' },
  { name: 'Aluminum', category: 'non-ferrous', image: '/images/aluminum.png', description: 'Cans, siding, extrusions, and wheels.' },
  { name: 'Brass', category: 'non-ferrous', image: '/images/brass.jpg', description: 'Fittings, valves, and decorative items.' },
  { name: 'Stainless Steel', category: 'non-ferrous', image: '/images/stainlesssteel.jpg', description: 'Sinks, appliances, and industrial equipment.' },
  { name: 'Steel & Iron', category: 'ferrous', image: 'https://placehold.co/400x300/6b7280/ffffff?text=Steel', description: 'Structural steel, cast iron, and light sheet.' },
  { name: 'Vehicles', category: 'ferrous', image: 'https://placehold.co/400x300/6b7280/ffffff?text=Vehicle', description: 'Cars, trucks, and farm equipment. Fluids must be drained.' },
];

const MaterialsPage: FC = () => {
  const [filter, setFilter] = useState('all');

  const filteredMaterials = materialsData.filter(material => 
    filter === 'all' || material.category === filter
  );

  return (
    <Layout>
      <Head>
        <title>Materials We Buy | K&L Recycling</title>
        <meta name="description" content="We buy a wide range of ferrous and non-ferrous metals at competitive prices." />
      </Head>
      
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-6 text-center" data-aos="fade-down">
          <h1 className="text-4xl md:text-6xl font-black">Materials We Buy</h1>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
            Competitive pricing for all ferrous and non-ferrous metals.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4 mb-12" data-aos="fade-up">
            <button onClick={() => setFilter('all')} className={`font-semibold px-6 py-2 rounded-full transition ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>All Materials</button>
            <button onClick={() => setFilter('non-ferrous')} className={`font-semibold px-6 py-2 rounded-full transition ${filter === 'non-ferrous' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>Non-Ferrous</button>
            <button onClick={() => setFilter('ferrous')} className={`font-semibold px-6 py-2 rounded-full transition ${filter === 'ferrous' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>Ferrous</button>
          </div>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMaterials.map((material, index) => (
              <div key={material.name} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                <img src={material.image} alt={material.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{material.name}</h3>
                  <p className="text-gray-600 mt-2">{material.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MaterialsPage;