"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { useInView } from "react-intersection-observer";
import AnimatedCounter from "./AnimatedCounter"; // Assuming AnimatedCounter is created

const Hero: FC = (): JSX.Element => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadedData={() => setIsVideoLoaded(true)}
          poster="/images/hero_background_high_res.jpg"
        >
          <source src="/videos/scrap-yard-video.webm" type="video/webm" />
          <source src="/videos/scrap-yard-video.mp4" type="video/mp4" />
        </video>
        {/* Fallback Image */}
        {!isVideoLoaded && (
          <Image
            src="/images/hero_background_high_res.jpg" // <-- Correct high-res image
            alt="Metal Recycling Facility"
            fill
            priority
            quality={90} // Quality can be slightly reduced for performance
            className="object-cover"
          />
        )}
        {/* Overlay gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
          className="max-w-6xl mx-auto"
        >
          <motion.h1
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="text-6xl md:text-8xl font-black leading-tight drop-shadow-2xl"
          >
            Your Partner in Metal Recycling
          </motion.h1>
          <motion.p
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="text-xl md:text-2xl mt-6 max-w-3xl mx-auto font-light drop-shadow-lg"
          >
            Professional scrap metal solutions for industries and individuals.
          </motion.p>
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mt-12"
          >
            <Button href="/contact" variant="primary">
              Get a Free Quote
            </Button>
            <Button href="/services" variant="secondary">
              View Our Services
            </Button>
          </motion.div>
          <StatsSection />
        </motion.div>
      </div>
    </section>
  );
};

// Button Component
const buttonVariants = cva(
  "inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1",
  {
    variants: {
      variant: {
        primary:
          "bg-royal-blue-600 text-white hover:bg-royal-blue-700 shadow-lg hover:shadow-xl",
        secondary:
          "bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ href, variant, children }) => (
  <Link href={href} className={buttonVariants({ variant })}>
    {children}
  </Link>
);

// Stats Section and individual Stat components
const statsData = [
  { value: "68+", label: "Years Experience", icon: "🏆" },
  { value: "10000+", label: "Tons Recycled Annually", icon: "♻️" },
  { value: "500+", label: "Active Partners", icon: "🤝" },
];

const StatsSection: FC = () => (
  <motion.div
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.8 },
      },
    }}
    className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 text-white"
  >
    {statsData.map((stat) => (
      <AnimatedStat key={stat.label} {...stat} />
    ))}
  </motion.div>
);

interface AnimatedStatProps {
  value: string;
  label: string;
  icon: string;
}

const AnimatedStat: FC<AnimatedStatProps> = ({ value, label, icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
      }}
      className="text-center"
    >
      <div className="text-4xl">{icon}</div>
      <div className="text-3xl font-bold mt-2">
        {inView && <AnimatedCounter to={numericValue} />}
        {suffix}
      </div>
      <div className="text-sm font-light uppercase tracking-wider mt-1">
        {label}
      </div>
    </motion.div>
  );
};

export default Hero;
