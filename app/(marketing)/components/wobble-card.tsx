"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WobbleCardProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}

const WobbleCard = ({
  children,
  containerClassName,
  className,
}: WobbleCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.2s ease-out",
      }}
      className={cn(
        "rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300",
        containerClassName
      )}
    >
      <div
        className={cn(
          "relative h-full p-8 sm:p-10 [background-image:radial-gradient(175%_100%_at_top,rgba(255,255,255,0.2),rgba(255,255,255,0))]",
          className
        )}
      >
        <motion.div
          style={{
            transform: isHovering
              ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.02, 1.02, 1)`
              : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
            transition: "transform 0.2s ease-out",
          }}
          className="h-full"
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WobbleCard;