import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-black text-white">K&L Recycling</h3>
                        <p className="text-gray-400 mt-2">Your premier industrial recycling partner since 1956.</p>
                         <div className="flex space-x-4 mt-6">
                            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-500 transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg></a>
                            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-500 transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-gray-200">Services</h4>
                        <ul className="mt-4 space-y-2">
                           <li><a href="/services#industrial" className="text-gray-400 hover:text-white transition-colors">Industrial Scrap</a></li>
                           <li><a href="/services#demolition" className="text-gray-400 hover:text-white transition-colors">Demolition</a></li>
                           <li><a href="/services#rolloff" className="text-gray-400 hover:text-white transition-colors">Roll-Off Containers</a></li>
                           <li><a href="/services#carcrushing" className="text-gray-400 hover:text-white transition-colors">Car Crushing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-gray-200">Company</h4>
                        <ul className="mt-4 space-y-2">
                             <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                             <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Locations</a></li>
                             <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-gray-200">Contact Us</h4>
                        <ul className="mt-4 space-y-2 text-gray-400">
                            <li>4134 Chandler Hwy<br/>Tyler, TX 75702</li>
                            <li><a href="tel:800-533-8081" className="hover:text-white transition-colors">(800) 533-8081</a></li>
                            <li><a href="mailto:dispatch@kl-recycling.com" className="hover:text-white transition-colors">dispatch@kl-recycling.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
                    <p>Copyright © {new Date().getFullYear()} K&L Recycling. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

