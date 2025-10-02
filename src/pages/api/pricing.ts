import type { NextApiRequest, NextApiResponse } from "next";

// Mock pricing data. In a real application, this would come from a database or a third-party API.
const pricingData = {
  copper: {
    name: "Copper",
    price: 4.5,
    unit: "per lb",
  },
  aluminum: {
    name: "Aluminum",
    price: 1.2,
    unit: "per lb",
  },
  brass: {
    name: "Brass",
    price: 2.8,
    unit: "per lb",
  },
  "stainless-steel": {
    name: "Stainless Steel",
    price: 0.8,
    unit: "per lb",
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { material } = req.query;

  if (req.method === "GET") {
    if (material && typeof material === "string" && pricingData[material]) {
      res.status(200).json(pricingData[material]);
    } else {
      res.status(200).json(pricingData);
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
