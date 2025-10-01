import React, { useState } from "react";

const RecyclingCalculator = () => {
  const [weight, setWeight] = useState(0);
  const [metalType, setMetalType] = useState("steel");
  const [result, setResult] = useState<string | null>(null);

  const calculateImpact = () => {
    let co2Savings = 0;
    switch (metalType) {
      case "steel":
        co2Savings = weight * 1.5;
        break; // kg CO2 saved per kg recycled
      case "aluminum":
        co2Savings = weight * 8;
        break;
      case "copper":
        co2Savings = weight * 4;
        break;
      default:
        break;
    }
    setResult(
      `Recycling ${weight} kg of ${metalType} saves approximately ${co2Savings} kg of CO2 emissions!`,
    );
  };

  return (
    <div
      className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md"
      data-aos="fade-up"
    >
      <label className="block mb-4">
        Metal Type:
        <select
          value={metalType}
          onChange={(e) => setMetalType(e.target.value)}
          className="w-full p-2 border rounded mt-2"
        >
          <option value="steel">Steel</option>
          <option value="aluminum">Aluminum</option>
          <option value="copper">Copper</option>
        </select>
      </label>
      <label className="block mb-4">
        Weight (kg):
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(parseFloat(e.target.value))}
          className="w-full p-2 border rounded mt-2"
        />
      </label>
      <button onClick={calculateImpact} className="btn-primary w-full py-3">
        Calculate Impact
      </button>
      {result && (
        <p className="mt-4 text-green-600 font-bold animate-fade-slide">
          {result}
        </p>
      )}
    </div>
  );
};

export default RecyclingCalculator;
