// src/components/AnimatedCounter.tsx
import { useState, useEffect, useRef } from 'react';
<<<<<<< HEAD
import useOnScreen from '@/hooks/useOnScreen'; // FIX: Removed the incorrect "@src/"
=======
import useOnScreen from '../hooks/useOnScreen'; // FIX: Using a direct relative path
>>>>>>> 5ae19663dd826bb4ecb2e552e897ff772571a78f

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  separator?: string;
  decimals?: number;
}

const AnimatedCounter = ({
  target,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = '',
  separator = ',',
  decimals = 0
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, { threshold: 0.1 });
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      let start = 0;
      const end = target;
      const startTime = Date.now();
      const easeOutQuart = (t: number) => 1 - --t * t * t * t;
      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const currentValue = start + (end - start) * easedProgress;
        if (progress >= 1) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(decimals > 0 ? parseFloat(currentValue.toFixed(decimals)) : Math.ceil(currentValue));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isVisible, target, duration, decimals, hasAnimated]);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  return (
    <div ref={ref} className={`inline-flex items-center ${className}`}>
      {prefix && <span className="mr-1">{prefix}</span>}
      <span>
        {formatNumber(count)}
      </span>
      {suffix && <span className="ml-1">{suffix}</span>}
    </div>
  );
};

export default AnimatedCounter;
