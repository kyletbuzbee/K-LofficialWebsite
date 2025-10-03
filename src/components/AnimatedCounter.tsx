"use client";

import { useEffect } from "react";
import { animate, useMotionValue, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  from?: number;
  to: number;
}

const AnimatedCounter = ({ from = 0, to }: AnimatedCounterProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 2, // Animation duration in seconds
      ease: "easeOut",
    });
    return controls.stop;
  }, [from, to, count]);

  return <>{rounded}</>;
};

export default AnimatedCounter;
