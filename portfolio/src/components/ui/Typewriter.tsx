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
    let timerId: NodeJS.Timeout;

    if (isPaused) {
      timerId = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting) {
      if (displayText === "") {
        // Move to next text after deletion
        timerId = setTimeout(() => {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 50); // Small delay before starting next text
      } else {
        // Continue deleting
        timerId = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, deleteSpeed);
      }
    } else {
      if (displayText === currentText) {
        // Finished typing, pause before deleting
        timerId = setTimeout(() => {
          setIsPaused(true);
        }, 100); // Small delay before pausing
      } else {
        // Continue typing
        timerId = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, speed);
      }
    }

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [displayText, currentIndex, isDeleting, isPaused, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-0.5 h-6 md:h-8 bg-emerald-400 ml-1 animate-pulse" />
    </span>
  );
}
