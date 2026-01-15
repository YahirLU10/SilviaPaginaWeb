
import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const animatedElementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    animatedElementsRef.current = Array.from(
      document.querySelectorAll('.fade-in-section')
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    animatedElementsRef.current.forEach((el) => observer.observe(el));

    return () => {
      animatedElementsRef.current.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);
};
