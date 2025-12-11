"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export default function Typewriter({
  texts,
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  className = "",
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        const deleteTimer = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, deleteSpeed);
        return () => clearTimeout(deleteTimer);
      }
    } else {
      if (displayText === currentText) {
        setIsPaused(true);
      } else {
        const typeTimer = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, speed);
        return () => clearTimeout(typeTimer);
      }
    }
  }, [displayText, currentIndex, isDeleting, isPaused, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-0.5 h-6 md:h-8 bg-emerald-400 ml-1 animate-pulse" />
    </span>
  );
}
