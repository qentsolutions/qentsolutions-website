"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FilterSection {
  title: string;
  options: string[];
  key: "type" | "product" | "team" | "plan" | "benefit";
}

const filterSections: FilterSection[] = [
  {
    title: "Release type",
    key: "type",
    options: [
      "New release",
      "Performance",
      "Announcement",
      "Feature upgrade",
      "Apps & integrations",
      "Gradual release"
    ]
  },
  {
    title: "Product",
    key: "product",
    options: ["WorkCanvas", "Analytics", "CRM", "Marketing"]
  },
  {
    title: "Teams",
    key: "team",
    options: ["Product", "Engineering", "Design", "Marketing"]
  },
  {
    title: "Plan",
    key: "plan",
    options: ["Free", "Pro", "Enterprise"]
  },
  {
    title: "Benefit",
    key: "benefit",
    options: ["Productivity", "Security", "Integration", "Analytics"]
  }
];

interface SidebarProps {
  selectedFilters: Record<string, string[]>;
  onFilterChange: (filters: Record<string, string[]>) => void;
}

export function Sidebar({ selectedFilters, onFilterChange }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(
    Object.fromEntries(filterSections.map(section => [section.key, true]))
  );

  const toggleSection = (key: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleFilter = (sectionKey: string, value: string) => {
    onFilterChange({
      ...selectedFilters,
      [sectionKey]: selectedFilters[sectionKey]?.includes(value)
        ? selectedFilters[sectionKey].filter(item => item !== value)
        : [...(selectedFilters[sectionKey] || []), value]
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-900">Filters</h2>
        <button
          onClick={() => onFilterChange({})}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Clear all
        </button>
      </div>

      {filterSections.map((section) => (
        <div key={section.key}>
          <button
            onClick={() => toggleSection(section.key)}
            className="flex w-full items-center justify-between py-2"
          >
            <span className="text-sm font-medium text-gray-900">{section.title}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                expandedSections[section.key] ? "rotate-180" : ""
              }`}
            />
          </button>

          {expandedSections[section.key] && (
            <div className="mt-2 space-y-2">
              {section.options.map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={selectedFilters[section.key]?.includes(option) || false}
                    onChange={() => toggleFilter(section.key, option)}
                  />
                  <span className="ml-2 text-sm text-gray-600">{option}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}