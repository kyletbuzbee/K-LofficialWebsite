"use client";

import Link from "next/link";
import Image from "next/image";
import React, { type FC, type ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";

// Define animation variants for the hero content
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger the animation of children
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 }, // Keep this line
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{
            scale: [1.2, 1.3],
            transition: {
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }
          }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/hero_background.jpg"
            alt="Metal Recycling Facility"
            fill
            priority
            quality={100}
            className="object-cover"
          />
        </motion.div>
        
        {/* Overlay gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-pattern opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-9xl font-black text-white leading-tight drop-shadow-2xl text-shadow-heavy"
          >
            Your Partner in
            <br />
            Metal Recycling
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-4xl text-white mt-6 max-w-3xl mx-auto font-semibold drop-shadow-lg text-shadow-medium"
          >{`Professional scrap metal recycling solutions for industries and individuals`}</motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mt-12"
          >
            <Button href="/contact#quote-tool" variant="primary">
              Get a Free Quote
            </Button>
            <Button href="/services" variant="secondary">
              View Our Services
            </Button>
          </motion.div>

          {/* Quick Stats with Recycle Icon Pulse */}
          <StatsSection />
        </motion.div>
      </div>

      {/* Scroll Indicator with Subtle Bounce */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-20">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white text-sm font-semibold drop-shadow-lg text-shadow-light">
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

// Abstracted button styles using class-variance-authority for type-safe variants
const buttonVariants = cva(
  "relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white hover:from-royal-blue-700 hover:to-electric-blue-700 shadow-lg hover:shadow-2xl hover:scale-105",
        secondary:
          "bg-white/10 text-white border-2 border-white/20 backdrop-blur-sm hover:bg-white/20 shadow-lg hover:shadow-2xl hover:scale-105",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  children: ReactNode;
}

// Reusable Button component built on top of Next.js Link
const Button: FC<ButtonProps> = ({ href, variant, children }) => (
  <Link href={href} className={buttonVariants({ variant })}>
    <span className="relative z-10">{children}</span>
    {/* Simplified hover effect */}
    {variant === "primary" && (
      <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-700 to-electric-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
    )}
    {variant === "secondary" && (
      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
    )}
  </Link>
);

const HeroBackground: FC = () => (
  <div className="absolute inset-0 z-0" aria-hidden="true">
    {/* Main Background Image with Ken Burns effect */}
    <div className="absolute inset-0 z-2 overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ 
          scale: 1.2,
          transition: {
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero_background.jpg"
          alt="Metal Recycling Facility"
          fill
          quality={100}
          priority
          className="object-cover object-center"
        />
      </motion.div>
    </div>

    {/* Subtle Overlay Pattern */}
    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] z-3"></div>

    {/* Gradient Overlay for Text Readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40 z-4"></div>

    {/* Vignette Effect */}
    <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/30 z-5"></div>

    {/* Animated Particles for Depth */}
    <motion.div 
      className="absolute inset-0 z-6"
      initial="hidden"
      animate="visible"
    >
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{ 
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0 
          }}
          animate={{
            y: [null, "-100%"],
            opacity: [0, 0.3, 0],
            transition: {
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }
          }}
        />
      ))}
    </motion.div>

    {/* Shimmer effect overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer z-20"></div>
  </div>
);

const statsData = [
  { value: "68+", label: "Years Experience", icon: "🏆" },
  { value: "10,000+", label: "Tons Annual", icon: "♻️" },
  { value: "500+", label: "Active Partners", icon: "♻️" },
];

const StatsSection: FC = () => (
  <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
    {statsData.map((stat) => (
      <AnimatedStat key={stat.label} {...stat} />
    ))}
  </div>
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

  return (
    <div ref={ref} className="text-center group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        <span className="text-3xl recycle-icon mr-2" aria-hidden="true">
          {icon}
        </span>
        <div className="text-2xl font-black text-electric-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg text-shadow-light">
          {/* This is a simplified representation. For a true count-up, you'd use a library or a more complex hook. */}
          {value}
        </div>
      </motion.div>
      <div className="text-white text-sm font-semibold drop-shadow-md text-shadow-light">
        {label}
      </div>
    </div>
  );
};

export default Hero;
