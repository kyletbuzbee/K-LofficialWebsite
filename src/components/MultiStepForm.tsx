// /components/MultiStepForm.tsx
import { useState, FormEvent } from "react";

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
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What service do you need?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service.name)}
                  className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-left group transform hover:-translate-y-2 border-2 border-transparent hover:border-royal-blue-200 relative overflow-hidden"
                >
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-500/5 to-electric-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-royal-blue-700 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-royal-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Tell us about your project
            </h3>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Project Details
              </label>
              <textarea
                value={formData.details}
                onChange={(e) => updateFormData("details", e.target.value)}
                placeholder="Describe your project, materials, quantities, and any specific requirements..."
                className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-royal-blue-500 focus:ring-2 focus:ring-royal-blue-200 transition-all duration-300 h-32 resize-none"
                required
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="timeline-select"
                className="block text-sm font-semibold text-gray-700 mb-3"
              >
                Project Timeline
              </label>
              <div className="relative">
                <select
                  id="timeline-select"
                  value={formData.timeline}
                  onChange={(e) => updateFormData("timeline", e.target.value)}
                  className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-royal-blue-500 focus:ring-2 focus:ring-royal-blue-200 transition-all duration-300 appearance-none bg-white"
                >
                  {timelines.map((tl) => (
                    <option key={tl.value} value={tl.value}>
                      {tl.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="px-8 py-3 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="px-8 py-3 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Next →
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Your Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-royal-blue-500 focus:ring-2 focus:ring-royal-blue-200 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  placeholder="your.email@company.com"
                  className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-royal-blue-500 focus:ring-2 focus:ring-royal-blue-200 transition-all duration-300"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  placeholder="(555) 123-4567"
                  className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-royal-blue-500 focus:ring-2 focus:ring-royal-blue-200 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => updateFormData("company", e.target.value)}
                  placeholder="Your company (optional)"
                  className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-royal-blue-500 focus:ring-2 focus:ring-royal-blue-200 transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="px-8 py-3 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center space-x-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Request</span>
                    <span className="text-xl">🚀</span>
                  </>
                )}
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-200 rounded-full translate-y-12 -translate-x-12 opacity-20"></div>

            <div className="relative z-10">
              {/* Success icon with animation */}
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                <svg
                  className="w-10 h-10 text-white"
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
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Request Submitted Successfully! 🎉
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Thank you for your interest! We&apos;ll get back to you within
                24 hours with a custom quote.
              </p>

              <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
                <h5 className="font-bold text-gray-900 mb-4 text-lg">
                  What happens next?
                </h5>
                <div className="space-y-4 text-left">
                  <div className="flex items-center text-gray-700">
                    <div className="w-8 h-8 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-4 text-white">
                      1
                    </div>
                    <span className="font-semibold">
                      We&apos;ll review your project details
                    </span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-8 h-8 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-4 text-white">
                      2
                    </div>
                    <span className="font-semibold">
                      Provide competitive pricing based on current market rates
                    </span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-8 h-8 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-4 text-white">
                      3
                    </div>
                    <span className="font-semibold">
                      Schedule on-site assessment if needed
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div className="bg-gradient-to-r from-royal-blue-50 to-electric-blue-50 rounded-xl p-6 mb-8">
                <h6 className="font-bold text-gray-900 mb-3">
                  Need immediate assistance?
                </h6>
                <p className="text-gray-700 mb-3">
                  Call us directly for faster service:
                </p>
                <a
                  href="tel:+17135550123"
                  className="text-2xl font-bold text-royal-blue-600 hover:text-royal-blue-700 transition-colors"
                >
                  (713) 555-0123
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  onClick={() => (window.location.href = "/")}
                  className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                >
                  ← Back to Home
                </button>
                <button
                  type="button"
                  onClick={() => (window.location.href = "/contact")}
                  className="px-8 py-3 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us Directly →
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 p-8 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
            <h2 className="text-3xl font-black">Get Your Free Quote</h2>
          </div>
          <p className="text-blue-100 text-center">
            Tell us about your project and we&apos;ll provide a custom quote
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8">
        {/* Enhanced Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold text-gray-600">
              Step {currentStep} of 4
            </span>
            <span className="text-sm font-semibold text-royal-blue-600">
              {Math.round((currentStep / 4) * 100)}% Complete
            </span>
          </div>
          <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 h-3 rounded-full transition-all duration-700 ease-out relative progress-bar"
              style={
                {
                  "--progress-width": `${(currentStep / 4) * 100}%`,
                } as React.CSSProperties
              }
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>

          {/* Step indicators */}
          <div className="flex justify-between mt-4">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  step <= currentStep
                    ? "bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="min-h-[400px]">{renderStep()}</div>
      </form>
    </div>
  );
};

export default MultiStepForm;
