import type { NextApiRequest, NextApiResponse } from "next";
import type { PricingApiResponse } from "../../types";

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

type ErrorResponse = {
  message: string;
};
function isValidMaterial( // The type predicate 'material is keyof PricingData' is assignable to the parameter's type 'string | string[] | undefined' because 'keyof PricingData' (which is 'string') is assignable to 'string | string[] | undefined'. The original error message "Type 'string | number' is not assignable to type 'string | string[] | undefined'" seems to be a red herring or from a different context, as 'number' is not involved in this specific type predicate.
  material: string | string[] | undefined,
): material is keyof typeof pricingData {
  return typeof material === "string" && material in pricingData;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PricingApiResponse | ErrorResponse>,
) {
  const { material } = req.query;

  if (req.method === "GET") {
    if (isValidMaterial(material)) {
      res.status(200).json(pricingData[material]);
    } else {
      res.status(200).json(pricingData);
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
