"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { FeatureCarousel } from "./components/feature-carousel";
import { FeatureTimeline } from "./components/feature-timeline";
import { FeatureFilters } from "./components/feature-filters";
import { features } from "./data";
import { motion } from "framer-motion";

export default function NewFeatures() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState("all");
  const [selectedTeam, setSelectedTeam] = useState("all");

  // Extract unique values for filters
  const types = Array.from(new Set(features.map(f => f.type)));
  const products = Array.from(new Set(features.map(f => f.product)));
  const teams = Array.from(new Set(features.map(f => f.team)));

  // Filter features based on search and selected filters
  const filteredFeatures = features.filter(feature => {
    const matchesSearch = 
      feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feature.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = selectedType === "all" || feature.type === selectedType;
    const matchesProduct = selectedProduct === "all" || feature.product === selectedProduct;
    const matchesTeam = selectedTeam === "all" || feature.team === selectedTeam;

    return matchesSearch && matchesType && matchesProduct && matchesTeam;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold mb-4">What's New</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Stay up to date with our latest features, improvements, and updates
            </p>
          </motion.div>
        </div>
      </div>
      
      <FeatureCarousel />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">All Updates & Releases</h2>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search features..."
                className="w-full rounded-md border border-gray-200 pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <FeatureFilters
            types={types}
            products={products}
            teams={teams}
            selectedType={selectedType}
            selectedProduct={selectedProduct}
            selectedTeam={selectedTeam}
            onTypeChange={setSelectedType}
            onProductChange={setSelectedProduct}
            onTeamChange={setSelectedTeam}
          />

          <FeatureTimeline features={filteredFeatures} />
        </div>
      </div>
    </div>
  );
}