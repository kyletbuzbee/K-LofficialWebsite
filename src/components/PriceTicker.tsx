import React, { FC } from 'react';

const priceData = [
  { name: 'Copper', price: '$4.52/lb', change: '+0.03', up: true },
  { name: 'Aluminum', price: '$1.31/lb', change: '-0.01', up: false },
  { name: 'Steel Scrap', price: '$420/ton', change: '+5.00', up: true },
  { name: 'Lead', price: '$1.05/lb', change: '+0.02', up: true },
  { name: 'Brass', price: '$2.85/lb', change: '-0.02', up: false },
];

const PriceTicker: FC = () => {
  return (
    <div className="bg-gray-900 text-white py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...priceData, ...priceData].map((item, index) => (
          <div key={index} className="mx-6 text-lg inline-flex items-center">
            <span className="font-bold mr-2">{item.name}:</span>
            <span className="mr-2">{item.price}</span>
            <span className={item.up ? 'text-green-400' : 'text-red-400'}>
              {item.up ? '▲' : '▼'} {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceTicker;
