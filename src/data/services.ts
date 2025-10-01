import { Service } from "@/types";

export const SERVICES_DATA: { [key: string]: Service } = {
  industrial: {
    id: "industrial",
    title: "Industrial Scrap Management",
    description:
      "We partner with manufacturing facilities to transform scrap metal waste streams into significant revenue.",
    image: "/images/Contruction.jpg",
    details: [
      "Customized collection schedules tailored to your production cycles.",
      "A wide array of on-site containers including roll-offs, gondolas, and totes.",
      "Detailed reporting on material recovery to support your financial and ESG goals.",
    ],
    benefits: [
      "Increase revenue from scrap materials",
      "Reduce waste management costs",
      "Improve workplace safety",
      "Meet sustainability targets",
    ],
    icon: "🏭",
    content: `
      <h3>Transform Your Manufacturing Waste Into Revenue</h3>
      <p>Our industrial scrap management program is designed specifically for manufacturing facilities looking to optimize their waste streams and generate additional revenue. With over 57 years of experience, we understand the unique challenges of industrial scrap management.</p>
      
      <h4>Customized Container Solutions</h4>
      <p>We provide the right container for your specific needs - from compact totes for high-value materials to large roll-offs for bulk scrap. Our containers are strategically placed for maximum efficiency and safety.</p>
      
      <h4>Flexible Scheduling</h4>
      <p>Your production schedule drives our pickup schedule. We work around your operations to minimize disruption while ensuring you never run out of capacity.</p>
      
      <h4>Detailed Reporting</h4>
      <p>Receive comprehensive reports on material volumes, revenue generated, and environmental impact. Perfect for ESG reporting and financial tracking.</p>
    `,
  },
  demolition: {
    id: "demolition",
    title: "Demolition & C&D Debris",
    description:
      "A full-service demolition recycling partner. We handle all metal recovery from C&D sites, ensuring the highest standards of safety.",
    image: "/images/demolition-safety.png",
    details: [
      "Pre-demolition site assessment to create an efficient recovery plan.",
      "Safe and compliant handling of structural steel, rebar, and all other metals.",
      "Seamless coordination with your crews to minimize project delays.",
    ],
    benefits: [
      "Maximize metal recovery from demolition sites",
      "Reduce landfill costs",
      "Ensure regulatory compliance",
      "Fast project turnaround",
    ],
    icon: "🏗️",
    content: `
      <h3>Your Trusted Demolition Recycling Partner</h3>
      <p>We specialize in metal recovery from construction and demolition sites. Our experienced team ensures maximum value recovery while maintaining the highest safety standards.</p>
      
      <h4>Site Assessment</h4>
      <p>Before demolition begins, our experts assess the site to identify valuable metals and plan efficient recovery methods.</p>
      
      <h4>Safe Handling</h4>
      <p>All materials are handled in compliance with OSHA and local regulations. We use specialized equipment for safe and efficient metal extraction.</p>
      
      <h4>Coordination</h4>
      <p>We work closely with your demolition team to integrate our services seamlessly into your project timeline.</p>
    `,
  },
  "roll-off": {
    id: "roll-off",
    title: "Roll-Off Container Services",
    description:
      "Reliable on-site container service for efficient scrap collection and transportation.",
    image: "/images/roll-off-container.jpg",
    details: [
      "Various container sizes to match your volume needs.",
      "Prompt delivery and pickup services.",
      "Secure and weather-resistant containers.",
    ],
    benefits: [
      "Convenient on-site storage",
      "Flexible rental periods",
      "Competitive pricing",
      "24/7 emergency service",
    ],
    icon: "📦",
    content: `
      <h3>Efficient Scrap Collection Solutions</h3>
      <p>Our roll-off container service provides a convenient way to collect and transport large volumes of scrap metal from your site.</p>
      
      <h4>Container Options</h4>
      <p>Choose from 10 to 40 yard containers, open-top or closed, based on your specific requirements.</p>
      
      <h4>Service Reliability</h4>
      <p>We offer scheduled pickups or on-call service to fit your needs. Our drivers are experienced and punctual.</p>
      
      <h4>Pricing Transparency</h4>
      <p>No hidden fees. Our pricing is straightforward and competitive, with detailed invoices showing material weights and current market values.</p>
    `,
  },
  "car-crushing": {
    id: "car-crushing",
    title: "Car Crushing & Auto Recycling",
    description:
      "We purchase and process end-of-life vehicles, providing competitive prices and convenient service.",
    image: "/images/hero-background.jpg",
    details: [
      "Top dollar paid for junk vehicles, running or not.",
      "Free towing in most cases.",
      "Environmentally responsible processing.",
      "Fast, hassle-free transactions.",
    ],
    benefits: [
      "Get cash for your old vehicle",
      "Free towing service",
      "Proper disposal of fluids and hazardous materials",
      "Same-day service available",
    ],
    icon: "🚗",
    content: `
      <h3>Turn Your Old Vehicle Into Cash</h3>
      <p>Whether it's a car, truck, van, or SUV, we buy vehicles in any condition. Our car crushing and auto recycling service is fast, convenient, and environmentally responsible.</p>
      
      <h4>Top Dollar Paid</h4>
      <p>We offer competitive prices based on current scrap metal values, vehicle weight, and condition. Get a quote over the phone in minutes.</p>
      
      <h4>Free Towing</h4>
      <p>In most cases, we provide free towing service. Just call us, and we'll arrange a convenient pickup time.</p>
      
      <h4>Environmentally Responsible</h4>
      <p>All fluids, batteries, and hazardous materials are properly removed and disposed of according to EPA regulations. The remaining metal is recycled into new products.</p>
    `,
  },
  "public-services": {
    id: "public-services",
    title: "Public Drop-Off Services",
    description:
      "We welcome the public and small businesses to drop off scrap metal at our facilities for competitive prices.",
    image: "/images/project-planning-scrap.jpg",
    details: [
      "Convenient yard locations throughout Texas and Kansas.",
      "Competitive pricing on all grades of ferrous and non-ferrous metals.",
      "Knowledgeable staff to assist with material identification.",
      "Fast, accurate weighing and payment.",
    ],
    benefits: [
      "No appointment necessary",
      "Competitive market prices",
      "Immediate payment",
      "Friendly, helpful staff",
    ],
    icon: "🧑‍🔧",
    content: `
      <h3>Public Welcome at All Locations</h3>
      <p>K&L Recycling yards are open to the public for scrap metal drop-offs. Whether you're a homeowner cleaning out the garage or a small contractor with project scrap, we're here to help.</p>
      
      <h4>What We Accept</h4>
      <p>We accept all types of ferrous metals (steel, iron, cast iron) and non-ferrous metals (copper, aluminum, brass, stainless steel). Bring in appliances, car parts, metal furniture, wire, and more.</p>
      
      <h4>Simple Process</h4>
      <p>Drive onto our scale, unload your materials with guidance from our staff, and receive immediate payment based on accurate weight and current market prices. It's that easy!</p>
      
      <h4>Multiple Locations</h4>
      <p>With facilities throughout Texas and Kansas, there's likely a K&L Recycling location near you. Check our locations page for the nearest yard.</p>
    `,
  },
};