"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps extends MotionProps {
  texts: string[];
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
  pauseDuration?: number;
}

export function TypingAnimation({
  texts,
  className,
  duration = 100,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  pauseDuration = 1000,
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!startOnView) {
      const timeout = setTimeout(() => setStarted(true), delay);
      return () => clearTimeout(timeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setTimeout(() => setStarted(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    if (!started || texts.length === 0) return;

    const currentText = texts[currentIndex];

    if (isWaiting) {
      const timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsErasing(true);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isErasing) {
      let i = currentText.length - 1;
      const interval = setInterval(() => {
        if (i >= 0) {
          setDisplayedText(currentText.substring(0, i));
          i--;
        } else {
          clearInterval(interval);
          setIsErasing(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }, duration);
      return () => clearInterval(interval);
    } else {
      let i = 0;
      const interval = setInterval(() => {
        if (i < currentText.length) {
          setDisplayedText(currentText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setIsWaiting(true);
        }
      }, duration);
      return () => clearInterval(interval);
    }
  }, [
    started,
    currentIndex,
    isErasing,
    isWaiting,
    texts,
    duration,
    pauseDuration,
  ]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        "text-4xl font-bold leading-[5rem] tracking-[-0.02em]",
        className
      )}
      {...props}
    >
      {displayedText}
      {started && <span className="cursor">|</span>}
      <style jsx>{`
        .cursor {
          display: inline-block;
          margin-left: 0.1em;
          animation: blink 1.2s infinite;
        }
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          50.01%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </MotionComponent>
  );
}
