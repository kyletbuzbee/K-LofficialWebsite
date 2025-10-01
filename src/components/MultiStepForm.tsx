// /components/MultiStepForm.tsx
import { useState, FormEvent } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface FormData {
  service: string;
  details: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  timeline: string;
}

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    service: "",
    details: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    timeline: "1-2 weeks",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    {
      id: "scrap-pricing",
      name: "Scrap Pricing",
      icon: "💰",
      description: "Get current market prices for your materials",
    },
    {
      id: "roll-off",
      name: "Roll-Off Container",
      icon: "📦",
      description: "On-site container rental services",
    },
    {
      id: "demolition",
      name: "Demolition Services",
      icon: "🏗️",
      description: "Full-service C&D metal recovery",
    },
    {
      id: "car-crushing",
      name: "Car Crushing",
      icon: "🚗",
      description: "Vehicle recycling and processing",
    },
    {
      id: "industrial",
      name: "Industrial Program",
      icon: "🏭",
      description: "Custom scrap management solutions",
    },
    {
      id: "consultation",
      name: "Consultation",
      icon: "💼",
      description: "Expert advice and planning",
    },
  ];

  const timelines = [
    { value: "immediate", label: "Immediately (Within 48 hours)" },
    { value: "1-2 weeks", label: "1-2 Weeks" },
    { value: "2-4 weeks", label: "2-4 Weeks" },
    { value: "1+ months", label: "1+ Month (Planning phase)" },
  ];

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleServiceSelect = (service: string) => {
    setFormData({ ...formData, service });
    nextStep();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form Submitted:", formData);
    setIsSubmitting(false);
    nextStep(); // Proceed to success step
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceSelect(service.name)}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-left group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </button>
            ))}
          </div>
        );
      case 2:
        return (
          <div>
            <textarea
              value={formData.details}
              onChange={(e) => updateFormData("details", e.target.value)}
              placeholder="Tell us about your project..."
              className="w-full p-4 rounded-lg border border-gray-300 focus:border-blue-500 h-32 mb-6"
              required
            />
            <label
              htmlFor="timeline-select"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Project Timeline
            </label>
            <select
              id="timeline-select"
              value={formData.timeline}
              onChange={(e) => updateFormData("timeline", e.target.value)}
              className="w-full p-4 rounded-lg border border-gray-300 focus:border-blue-500 mb-6"
            >
              {timelines.map((tl) => (
                <option key={tl.value} value={tl.value}>
                  {tl.label}
                </option>
              ))}
            </select>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateFormData("name", e.target.value)}
              placeholder="Full Name"
              className="w-full p-4 rounded-lg border border-gray-300 focus:border-blue-500 mb-4"
              required
            />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
              placeholder="Email Address"
              className="w-full p-4 rounded-lg border border-gray-300 focus:border-blue-500 mb-4"
              required
            />
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => updateFormData("phone", e.target.value)}
              placeholder="Phone Number"
              className="w-full p-4 rounded-lg border border-gray-300 focus:border-blue-500 mb-4"
              required
            />
            <input
              type="text"
              value={formData.company}
              onChange={(e) => updateFormData("company", e.target.value)}
              placeholder="Company Name (Optional)"
              className="w-full p-4 rounded-lg border border-gray-300 focus:border-blue-500 mb-6"
            />
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <LoadingSpinner size="sm" color="white" />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="text-center p-8 bg-green-100 rounded-xl">
            <svg
              className="w-16 h-16 mx-auto text-green-500 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Request Submitted!
            </h3>
            <p className="text-gray-700">
              We&apos;ll get back to you soon with a custom quote.
            </p>
            <div className="mt-6">
              <h5 className="font-semibold text-gray-900 mb-3">
                What happens next?
              </h5>
              <div className="space-y-3 text-left">
                <div className="flex items-center text-gray-700">
                  <div className="w-6 h-6 bg-royal-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 text-white">
                    1
                  </div>
                  <span>We&apos;ll review your project details</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-6 h-6 bg-royal-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 text-white">
                    2
                  </div>
                  <span>
                    Provide competitive pricing based on current market rates
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-6 h-6 bg-royal-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 text-white">
                    3
                  </div>
                  <span>Schedule on-site assessment if needed</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button
                type="button"
                onClick={() => (window.location.href = "/")}
                className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-xl hover:bg-gray-600 transition-colors"
              >
                Back to Home
              </button>
              <button
                type="button"
                onClick={() => (window.location.href = "/contact")}
                className="px-6 py-3 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white font-semibold rounded-xl hover:shadow-glow transition-all duration-300"
              >
                Contact Us Directly
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl">
      <form onSubmit={handleSubmit}>
        <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
          Get Your Free Quote
        </h2>
        <div className="mb-6">
          <div className="bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>
        {renderStep()}
      </form>
    </div>
  );
};

export default MultiStepForm;
