import Link from 'next/link';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-primary">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 animate-gradient"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-electric-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-royal-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Video Background Fallback */}
        <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
        
        {/* Static Image Fallback */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/images/hero-background.jpg')",
            backgroundBlendMode: 'overlay'
          }}
        ></div>
      </div>

      {/* Enhanced Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <div className={`max-w-6xl mx-auto transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Trust Badge with Animation */}
          <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-white/30 mb-8 animate-fade-in-down shadow-glow">
            <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse shadow-green-glow"></span>
            <span className="text-white font-semibold text-lg">Serving Texas & Kansas Since 1956</span>
          </div>

          {/* Main Heading with Enhanced Typography */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-tight mb-6 text-shadow-lg">
            <span className="block animate-fade-in-up">Your Premier</span>
            <span className="block text-gradient bg-gradient-to-r from-blue-400 via-electric-blue-500 to-royal-blue-600 animate-gradient bg-clip-text text-transparent mt-2">
              Industrial Recycling
            </span>
            <span className="block animate-fade-in-up mt-2">Partner</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in-up">
            Transforming industrial waste streams into revenue through reliable, professional scrap metal management solutions trusted for over 68 years.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up mt-12">
            <Link 
              href="/contact#quote-tool" 
              className="btn-primary text-lg px-10 py-5 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Get Free Quote
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-700 to-electric-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
            
            <Link 
              href="/services" 
              className="btn-secondary text-lg px-10 py-5 group relative overflow-hidden"
            >
              <span className="relative z-10">View Our Services</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 animate-fade-in-up">
            {[
              { value: '68+', label: 'Years Experience' },
              { value: '10,000+', label: 'Tons Annual' },
              { value: '500+', label: 'Active Partners' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl font-black text-electric-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-20">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/80 text-sm font-medium">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;