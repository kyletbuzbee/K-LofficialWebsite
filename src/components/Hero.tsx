import Link from "next/link";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-primary">
      {/* Enhanced Background with Recycling Imagery */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 animate-gradient"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>

        {/* Animated Orbs with Subtle Pulse */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animate-pulse-slow"></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-electric-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-royal-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Video Background Fallback */}
        <div className="absolute inset-0 bg-gray-900/60 z-10"></div>

        {/* Static Recycling Image Fallback with Zoom Animation */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 animate-zoom-in"
          style={{
            backgroundImage:
              "url('https://www.cohenusa.com/wp-content/uploads/2021/01/1360835_Cohenillustrationmetalrecycling_desktop_051122-1.png')", // Recycling process image [image:0]
            backgroundBlendMode: "overlay",
          }}
        ></div>
      </div>

      {/* Enhanced Content with Fade-Slide Animation */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <div
          className={`max-w-6xl mx-auto transform transition-all duration-1000 animate-fade-slide ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight animate-fade-in-up">
            Transforming Waste
            <br />
            Into Value
          </h1>
          <p
            className="text-xl md:text-3xl text-white/80 mt-6 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Professional scrap metal recycling solutions for industries and
            individuals
          </p>
          <div
            className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mt-12 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              href="/contact#quote-tool"
              className="btn-primary text-lg px-10 py-5 group relative overflow-hidden"
            >
              <span className="relative z-10">Get a Free Quote</span>
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

          {/* Quick Stats with Recycle Icon Pulse */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 animate-fade-in-up">
            {[
              { value: "68+", label: "Years Experience", icon: "♻️" },
              { value: "10,000+", label: "Tons Annual", icon: "♻️" },
              { value: "500+", label: "Active Partners", icon: "♻️" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <span className="text-3xl recycle-icon mr-2">{stat.icon}</span>
                <div className="text-2xl font-black text-electric-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator with Subtle Bounce */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-20">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/80 text-sm font-medium">
            Scroll to Explore
          </span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
