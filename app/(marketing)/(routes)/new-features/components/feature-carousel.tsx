"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { features } from "../data";

export function FeatureCarousel() {
  // Get the last 2 features
  const latestFeatures = [...features]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (latestFeatures.length > 0) {
      const timer = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % latestFeatures.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [latestFeatures.length]);


  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + latestFeatures.length) % latestFeatures.length);
  };

  return (
    <div className="relative h-[500px] bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    {latestFeatures[currentIndex].type}
                  </span>
                  <h2 className="text-4xl font-bold text-gray-900">
                    {latestFeatures[currentIndex].title}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {latestFeatures[currentIndex].description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">
                      {latestFeatures[currentIndex].date}
                    </span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">
                      {latestFeatures[currentIndex].team}
                    </span>
                  </div>
                  <Link
                    href={`/new-features/${latestFeatures[currentIndex].id}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                  >
                    Learn more
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="relative h-96">
                  <Image
                    src={latestFeatures[currentIndex].image || "/hero-landing-img.png"}
                    alt={`${latestFeatures[currentIndex].title} feature preview`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50"
        onClick={() => paginate(-1)}
        aria-label="Previous feature"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50"
        onClick={() => paginate(1)}
        aria-label="Next feature"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {latestFeatures.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            aria-label={`Go to feature ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}