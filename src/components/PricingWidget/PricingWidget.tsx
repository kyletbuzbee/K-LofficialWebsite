import React, { useState, useEffect } from "react";

interface PricingItem {
  name: string;
  price: number;
  unit: string;
}

interface PricingData {
  [key: string]: PricingItem;
}

export function PricingWidget() {
  const [pricing, setPricing] = useState<PricingData | null>(null);
  const [material, setMaterial] = useState("copper");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/pricing")
      .then((res) => res.json())
      .then((data) => {
        setPricing(data);
        setLoading(false);
      });
  }, []);

  const handleMaterialChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMaterial(e.target.value);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Live Scrap Metal Prices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get up-to-date pricing for your scrap metal.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
          {loading || !pricing ? (
            <p>Loading prices...</p>
          ) : (
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {Object.values(pricing).map((item) => (
                  <div key={item.name} className="text-center">
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-2xl font-bold text-green-600">
                      ${item.price.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">{item.unit}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center">
                <select
                  value={material}
                  onChange={handleMaterialChange}
                  className="w-full p-4 border border-gray-300 rounded-l-lg"
                >
                  {Object.keys(pricing).map((key) => (
                    <option key={key} value={key}>
                      {pricing[key].name}
                    </option>
                  ))}
                </select>
                <button className="bg-green-600 text-white p-4 rounded-r-lg font-bold">
                  Get Price
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}