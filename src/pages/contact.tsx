import React, { FC, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout'; // Make sure you have a Layout component

// --- Type Definitions ---
interface FormData {
    service: string;
    details: string;
    name: string;
    email: string;
    company: string;
    phone: string;
}

// --- Helper Components ---
const ArrowRightIcon: React.FC = () => (
  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
  </svg>
);

// --- Contact Page Component ---
const ContactPage: FC = () => {
    const [step, setStep] = useState<number>(1);
    const [formData, setFormData] = useState<FormData>({
        service: '', details: '', name: '', email: '', company: '', phone: ''
    });
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleServiceSelect = (service: string) => {
        setFormData(prev => ({ ...prev, service }));
        setStep(2);
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Here you would typically send the form data to an API
        setIsSubmitted(true);
    };

    const renderFormContent = () => {
        if (isSubmitted) {
            return (
                <div className="text-center p-8">
                    <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h3 className="text-3xl font-bold text-gray-900 mt-4">Thank You!</h3>
                    <p className="text-gray-700 mt-2">Your request has been sent. Our team will get back to you shortly.</p>
                </div>
            );
        }

        switch(step) {
            case 1:
                return (
                    <div className="animate-fade-in">
                        <h4 className="font-bold text-2xl mb-4 text-gray-900">What service do you need?</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button type="button" onClick={() => handleServiceSelect('Industrial Scrap')} className="p-4 rounded-lg bg-gray-100 hover:bg-blue-100 border border-gray-200 hover:border-blue-500 text-center font-semibold transition-all duration-300">Industrial Scrap</button>
                            <button type="button" onClick={() => handleServiceSelect('Demolition Services')} className="p-4 rounded-lg bg-gray-100 hover:bg-blue-100 border border-gray-200 hover:border-blue-500 text-center font-semibold transition-all duration-300">Demolition Services</button>
                            <button type="button" onClick={() => handleServiceSelect('Roll-Off Containers')} className="p-4 rounded-lg bg-gray-100 hover:bg-blue-100 border border-gray-200 hover:border-blue-500 text-center font-semibold transition-all duration-300">Roll-Off Containers</button>
                            <button type="button" onClick={() => handleServiceSelect('Car Crushing')} className="p-4 rounded-lg bg-gray-100 hover:bg-blue-100 border border-gray-200 hover:border-blue-500 text-center font-semibold transition-all duration-300">Car Crushing</button>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="animate-fade-in">
                        <h4 className="font-bold text-2xl mb-4 text-gray-900">Tell us about your project.</h4>
                        <p className="text-gray-600 mb-4">Service selected: <strong>{formData.service}</strong></p>
                        <textarea name="details" value={formData.details} onChange={handleInputChange} placeholder="Describe your material, estimated volume, project scope, or any questions..." rows={5} className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        <div className="flex justify-between mt-4">
                        <button type="button" onClick={() => setStep(1)} className="bg-gray-200 text-gray-800 font-bold py-2 px-6 rounded-lg hover:bg-gray-300 transition">Back</button>
                        <button type="button" onClick={() => setStep(3)} className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition">Next</button>
                    </div>
                    </div>
                );
            case 3:
                return (
                     <div className="animate-fade-in">
                        <h4 className="font-bold text-2xl mb-4 text-gray-900">How can we reach you?</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" required className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" required className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Company Name" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="flex justify-between mt-4">
                        <button type="button" onClick={() => setStep(2)} className="bg-gray-200 text-gray-800 font-bold py-2 px-6 rounded-lg hover:bg-gray-300 transition">Back</button>
                        <button type="submit" className="group bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition-all flex items-center">Submit Request <ArrowRightIcon /></button>
                    </div>
                    </div>
                );
            default:
                return null;
        }
    }

    return (
        <>
            <Head>
                <title>Contact Us | K&L Recycling</title>
                <meta name="description" content="Contact K&L Recycling for a custom quote or find directions to our scrap metal recycling yards across Texas and Kansas." />
            </Head>
            <div className="animate-fade-in">
                <section className="bg-gray-800 text-white py-20">
                    <div className="container mx-auto px-6 text-center" data-aos="fade-down">
                        <h1 className="text-4xl md:text-6xl font-black">Contact Us</h1>
                        <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
                            Ready to get started? Request a quote or find a location near you.
                        </p>
                    </div>
                </section>
                
                <section className="py-20 md:py-28">
                    <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-3">
                            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-2xl">
                                {!isSubmitted && (
                                    <div className="mb-6">
                                        <div className="bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${(step / 3) * 100}%` }}></div>
                                        </div>
                                    </div>
                                )}
                                {renderFormContent()}
                            </form>
                        </div>
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-black text-gray-900 mb-6">Our Locations</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h3 className="font-black text-xl text-blue-700">K&L Recycling (Main Office)</h3>
                                    <p className="text-gray-700 mt-2">4134 Chandler Highway<br/>Tyler, TX 75702</p>
                                    <p className="font-bold mt-1"><a href="tel:800-533-8081" className="hover:text-blue-700">(800) 533-8081</a></p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h3 className="font-black text-xl text-blue-700">Acme Scrap</h3>
                                    <p className="text-gray-700 mt-2">700 Frey Street<br/>Great Bend, KS 67530</p>
                                    <p className="font-bold mt-1"><a href="tel:620-793-6532" className="hover:text-blue-700">(620) 793-6532</a></p>
                                </div>
                                <p className="text-gray-600 text-center">... and 7 other locations throughout Texas!</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ContactPage;