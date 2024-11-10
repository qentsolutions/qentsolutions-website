"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Feature } from "../types";

interface FeatureTimelineProps {
  features: Feature[];
}

export function FeatureTimeline({ features }: FeatureTimelineProps) {
  const groupedFeatures = features.reduce((acc, feature) => {
    if (!acc[feature.month]) {
      acc[feature.month] = [];
    }
    acc[feature.month].push(feature);
    return acc;
  }, {} as Record<string, Feature[]>);

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-blue-100" />

      {Object.entries(groupedFeatures).map(([month, monthFeatures]) => (
        <div key={month} className="mb-12">
          {/* Month marker */}
          <div className="flex items-center mb-8">
            <div className="relative">
              <div className="absolute left-0 w-5 h-5 bg-blue-600 rounded-full" />
            </div>
            <h2 className="text-lg font-semibold ml-8">{month}</h2>
          </div>

          {/* Features */}
          <div className="space-y-8">
            {monthFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative ml-8"
              >
                {/* Feature marker */}
                <div className="absolute -left-6 top-3 w-2.5 h-2.5 bg-gray-300 rounded-full" />
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-sm text-blue-600">{feature.type}</span>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-gray-500">{feature.date}</span>
                        </div>

                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600 mb-4">{feature.description}</p>

                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">{feature.product}</span>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-600">{feature.team}</span>
                          </div>
                        </div>
                      </div>

                      {feature.image && (
                        <div className="ml-6 flex-shrink-0">
                          <div className="relative w-64 h-40 rounded-lg overflow-hidden bg-gray-100">
                            <Image
                              src={feature.image}
                              alt={`Screenshot of ${feature.title}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <Link
                      href={`/new-features/${feature.id}`}
                      className="inline-flex items-center mt-4 text-sm text-gray-600 hover:text-gray-900"
                    >
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}