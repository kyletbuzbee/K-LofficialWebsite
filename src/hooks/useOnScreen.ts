// src/hooks/useOnScreen.ts
import { useState, useEffect, RefObject } from "react";

interface UseOnScreenOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const useOnScreen = (
  ref: RefObject<Element>,
  options: UseOnScreenOptions = {},
): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const { threshold = 0, rootMargin = "0px", triggerOnce = true } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;

        if (triggerOnce && hasTriggered) {
          return;
        }

        if (isElementIntersecting) {
          setIntersecting(true);
          setHasTriggered(true);
        } else if (!triggerOnce) {
          setIntersecting(false);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, rootMargin, triggerOnce, hasTriggered]);

  return isIntersecting;
};

export default useOnScreen;
