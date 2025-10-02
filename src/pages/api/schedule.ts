import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === "POST") {
    // Basic honeypot check
    if (req.body.honeypot) {
      return res.status(200).json({ message: "Success" });
    }

    const {
      name,
      email,
      phone,
      address,
      city,
      state,
      zip,
      pickupDate,
      materials,
    } = req.body;

    // Basic validation
    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !state ||
      !zip ||
      !pickupDate ||
      !materials
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // TODO: Add logic to handle the schedule data (e.g., send email, save to DB)

    res.status(200).json({ message: "Success" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
