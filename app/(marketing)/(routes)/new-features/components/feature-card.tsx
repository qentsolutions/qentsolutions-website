"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  type: string;
  learnMoreLink: string;
}

export function FeatureCard({
  title,
  description,
  image,
  type,
  learnMoreLink,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <div className="flex flex-col md:flex-row gap-6 p-6">
        <div className="flex-1">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            {type}
          </span>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <Link href={learnMoreLink}>
            <Button variant="outline" className="group">
              Learn more
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        <div className="flex-1">
          <div className="relative h-48 md:h-full rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={`Screenshot showing ${title}`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}