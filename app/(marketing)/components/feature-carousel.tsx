"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "./feature-card";

const features = [
  {
    title: "Marketing",
    subtitle: "Work Management",
    color: "bg-purple-600",
    image: "/hero-landing-img.png",
    features: [
      "Social media schedule",
      "Marketing strategy",
      "Content calendar",
      "Campaign planning",
    ],
  },
  {
    title: "Projects and Tasks",
    subtitle: "Work Management",
    color: "bg-purple-400",
    image: "/hero-landing-img.png",
    features: [
      "Project management",
      "Task tracking",
      "Team scheduling",
      "Progress reports",
    ],
  },
  {
    title: "Sales and CRM",
    subtitle: "CRM",
    color: "bg-emerald-600",
    image: "/hero-landing-img.png",
    features: [
      "Lead management",
      "Sales pipeline",
      "Opportunity tracking",
      "Sales reporting",
    ],
  },
  {
    title: "IT and Support",
    subtitle: "Service",
    color: "bg-blue-400",
    image: "/hero-landing-img.png",
    features: [
      "Ticket management",
      "Knowledge base",
      "SLA monitoring",
      "Customer support",
    ],
  },
  {
    title: "Operations",
    subtitle: "Work Management",
    color: "bg-purple-500",
    image: "/hero-landing-img.png",
    features: [
      "Inventory management",
      "Order tracking",
      "Logistics",
      "Procurement",
    ],
  },
  {
    title: "Creative and Design",
    subtitle: "Work Management",
    color: "bg-gray-500",
    image: "/hero-landing-img.png",
    features: [
      "Asset management",
      "Creative workflow",
      "Design review",
      "Media library",
    ],
  },
];

export function FeatureCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardWidth = 416; // card width (400) + gap (16)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      let newPosition;
      if (direction === "left") {
        newPosition = scrollLeft - cardWidth;
      } else {
        newPosition = scrollLeft + cardWidth;
      }

      if (newPosition < 0) {
        newPosition = scrollWidth - clientWidth;
      } else if (newPosition >= scrollWidth - clientWidth) {
        newPosition = 0;
      }

      scrollRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-8">
      
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden gap-4 pb-8 snap-x snap-mandatory scrollbar-hide"
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      <div className="hidden sm:block">
        <Button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full w-14 h-14 bg-[#14162C] hover:bg-[#14162C]/90 text-white border-0 shadow-lg"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>

        <Button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full w-14 h-14 bg-[#14162C] hover:bg-[#14162C]/90 text-white border-0 shadow-lg"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
}