// /components/MultiStepForm.tsx
import { useState, FormEvent } from 'react';
import LoadingSpinner from './LoadingSpinner';

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
    service: '',
    details: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    timeline: '1-2 weeks'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { id: 'scrap-pricing', name: 'Scrap Pricing', icon: '💰', description: 'Get current market prices for your materials' },
    { id: 'roll-off', name: 'Roll-Off Container', icon: '📦', description: 'On-site container rental services' },
    { id: 'demolition', name: 'Demolition Services', icon: '🏗️', description: 'Full-service C&D metal recovery' },
    { id: 'car-crushing', name: 'Car Crushing', icon: '🚗', description: 'Vehicle recycling and processing' },
    { id: 'industrial', name: 'Industrial Program', icon: '🏭', description: 'Custom scrap management solutions' },
    { id: 'consultation', name: 'Consultation', icon: '💼', description: 'Expert advice and planning' }
  ];

  const timelines = [
    { value: 'immediate', label: 'Immediately (Within 48 hours)' },
    { value: '1-2 weeks', label: '1-2 Weeks' },
    { value: '2-4 weeks', label: '2-4 Weeks' },
    { value: '1+ months', label: '1+ Month (Planning phase)' }
  ];

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceSelect = (service: string) => {
    setFormData({ ...formData, service });
    nextStep();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form Submitted:', formData);
    nextStep();
    setIsSubmitting(false);
  };
  
  const progress = (currentStep / 4) * 100;

  return (
    <div className="bg-gradient-to-br from-gray-900 to-royal-blue-900 rounded-3xl shadow-2xl overflow-hidden">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 p-8 text-white">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-black mb-2">Get Your Custom Quote</h3>
          <p className="text-blue-100 text-lg">Complete this form and we'll get back to you within 24 hours</p>
        </div>
        
        {/* Enhanced Progress Bar */}
        <div className="mb-2">
          <div className="flex justify-between text-sm font-semibold text-blue-100 mb-2">
            <span>Service</span>
            <span>Details</span>
            <span>Contact</span>
            <span>Complete</span>
          </div>
          <div className="bg-white/20 rounded-full h-3">
            <div 
              className="bg-white h-3 rounded-full transition-all duration-500 ease-out progress-bar shadow-glow"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Service Selection */}
          <div className={`transition-all duration-500 ${currentStep === 1 ? 'block animate-fade-in-up' : 'hidden'}`}>
            <h4 className="font-bold text-2xl mb-6 text-white text-center">What service do you need?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <button 
                  key={service.id}
                  type="button" 
                  onClick={() => handleServiceSelect(service.name)}
                  className={`p-6 rounded-2xl text-left transition-all duration-300 transform hover:scale-105 border-2 ${
                    formData.service === service.name
                      ? 'bg-white border-electric-blue-500 shadow-glow'
                      : 'bg-gray-800 border-gray-700 hover:border-electric-blue-300 hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">{service.icon}</span>
                    <div>
                      <h5 className={`font-bold text-lg mb-1 ${
                        formData.service === service.name ? 'text-gray-900' : 'text-white'
                      }`}>
                        {service.name}
                      </h5>
                      <p className={`text-sm ${
                        formData.service === service.name ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Project Details */}
          <div className={`transition-all duration-500 ${currentStep === 2 ? 'block animate-fade-in-up' : 'hidden'}`}>
            <h4 className="font-bold text-2xl mb-6 text-white text-center">Tell us about your project</h4>
            <div className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-3">Project Timeline</label>
                <select 
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-electric-blue-500 transition-colors"
                >
                  {timelines.map((timeline) => (
                    <option key={timeline.value} value={timeline.value}>
                      {timeline.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-3">Project Details</label>
                <textarea 
                  value={formData.details} 
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Describe your materials, quantities, project scope, and any specific requirements..."
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue-500 transition-colors resize-none"
                ></textarea>
                <p className="text-gray-400 text-sm mt-2">
                  {formData.details.length}/500 characters
                </p>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                type="button" 
                onClick={prevStep}
                className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
                Back
              </button>
              <button 
                type="button" 
                onClick={nextStep}
                disabled={!formData.details.trim()}
                className="px-8 py-3 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white font-semibold rounded-xl hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:-translate-y-0.5 flex items-center"
              >
                Next
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Step 3: Contact Info */}
          <div className={`transition-all duration-500 ${currentStep === 3 ? 'block animate-fade-in-up' : 'hidden'}`}>
            <h4 className="font-bold text-2xl mb-6 text-white text-center">How can we reach you?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-semibold mb-3">Full Name *</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  required 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-3">Company</label>
                <input 
                  type="text" 
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company name (optional)"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-3">Email Address *</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-3">Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue-500 transition-colors"
                />
              </div>
            </div>
            
            <div className="bg-blue-900/30 border border-blue-700/50 rounded-2xl p-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-blue-200 text-sm">
                    We respect your privacy. Your information will only be used to provide your quote and will never be shared with third parties.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button 
                type="button" 
                onClick={prevStep}
                className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
                Back
              </button>
              <button 
                type="submit" 
                disabled={!formData.name || !formData.email || isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white font-semibold rounded-xl hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:-translate-y-0.5 flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="sm" color="white" className="mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    Submit Request
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Step 4: Success Message */}
          <div className={`transition-all duration-500 ${currentStep === 4 ? 'block animate-fade-in-up' : 'hidden'}`}>
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h4 className="font-bold text-3xl mb-4 text-white">Thank You!</h4>
              <p className="text-gray-300 text-lg mb-2">Your request has been sent successfully.</p>
              <p className="text-gray-400 mb-6">
                Our team will review your information and get back to you within 24 hours with your custom quote.
              </p>
              
              <div className="bg-gray-800 rounded-2xl p-6 max-w-md mx-auto mb-6">
                <h5 className="font-semibold text-white mb-3">What happens next?</h5>
                <div className="space-y-3 text-left">
                  <div className="flex items-center text-gray-300">
                    <div className="w-6 h-6 bg-royal-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-3">1</div>
                    <span>We'll review your project details</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-6 h-6 bg-royal-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-3">2</div>
                    <span>Provide competitive pricing based on current market rates</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-6 h-6 bg-royal-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-3">3</div>
                    <span>Schedule on-site assessment if needed</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  type="button" 
                  onClick={() => window.location.href = '/'}
                  className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-xl hover:bg-gray-600 transition-colors"
                >
                  Back to Home
                </button>
                <button 
                  type="button" 
                  onClick={() => window.location.href = '/contact'}
                  className="px-6 py-3 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white font-semibold rounded-xl hover:shadow-glow transition-all duration-300"
                >
                  Contact Us Directly
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;