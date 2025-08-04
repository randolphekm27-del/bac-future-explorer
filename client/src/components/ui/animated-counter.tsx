import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export function AnimatedCounter({ end, duration = 2000, className, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span className={cn("font-bold text-primary", className)}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}