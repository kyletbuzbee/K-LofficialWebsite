import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === "POST") {
    // TODO: Add email sending logic with SendGrid/Resend
    // const sendGridApiKey = process.env.SENDGRID_API_KEY;
    // const resendApiKey = process.env.RESEND_API_KEY;

    // Basic honeypot check
    if (req.body.honeypot) {
      return res.status(200).json({ message: "Success" });
    }

    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // TODO: Add logic to store to a lightweight DB (Fauna/Upstash)

    res.status(200).json({ message: "Success" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
