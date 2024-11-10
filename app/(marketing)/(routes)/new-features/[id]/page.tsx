"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Types
interface Feature {
  id: string;
  type: "new" | "upgrade" | "announcement";
  date: string;
  month: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  product?: string;
  team?: string;
  content?: {
    type: "paragraph" | "image" | "list";
    content?: string;
    items?: string[];
    imageUrl?: string;
    imageAlt?: string;
  }[];
}

// Sample features data - In a real app, this would come from an API or database
const features: Record<string, Feature> = {
  "1": {
    id: "1",
    type: "new",
    date: "November 4",
    month: "November",
    title: "Create a two-way synced timeline template",
    description: "Ensure that both your boards and WorkCanvas are aligned with the two-way sync timeline template.",
    image: "/hero-landing-img.png",
    tags: ["WorkCanvas", "For all teams"],
    product: "WorkCanvas",
    team: "Product",
    content: [
      {
        type: "paragraph",
        content: "We're excited to introduce our new two-way synced timeline template feature. This powerful addition to WorkCanvas enables seamless collaboration and real-time updates across your entire workflow."
      },
      {
        type: "image",
        imageUrl: "/hero-landing-img.png",
        imageAlt: "Timeline template demonstration"
      },
      {
        type: "paragraph",
        content: "The two-way sync ensures that any changes made in either your boards or WorkCanvas are instantly reflected across both platforms, maintaining consistency and reducing the risk of miscommunication."
      },
      {
        type: "list",
        items: [
          "Real-time synchronization between boards and WorkCanvas",
          "Automatic updates across all connected platforms",
          "Visual timeline representation",
          "Customizable templates for different project types"
        ]
      }
    ]
  },
  "2": {
    id: "2",
    type: "upgrade",
    date: "November 3",
    month: "November",
    title: "Use predefined frame sizes on WorkCanvas!",
    description: "You can now choose a predefined frame size on your canvas for more precise exporting to PDF and PNG's.",
    image: "/hero-landing-img.png",
    tags: ["WorkCanvas", "For all teams"],
    product: "WorkCanvas",
    team: "Design",
    content: [
      {
        type: "paragraph",
        content: "We've enhanced WorkCanvas with predefined frame sizes to make your export process smoother and more professional than ever."
      },
      {
        type: "image",
        imageUrl: "/hero-landing-img.png",
        imageAlt: "Frame sizes demonstration"
      },
      {
        type: "paragraph",
        content: "Choose from a variety of standard sizes or create your own custom frames. This update ensures your exports are perfectly sized every time, whether you're creating presentations, documents, or marketing materials."
      },
      {
        type: "list",
        items: [
          "Standard paper sizes (A4, Letter, etc.)",
          "Common social media dimensions",
          "Presentation formats",
          "Custom size options"
        ]
      }
    ]
  }
};

export default function FeatureDetails() {
  const params = useParams();
  const id = params.id as string;
  const feature = features[id];

  if (!feature) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Feature not found</h1>
          <Link 
            href="/new-features"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Return to Updates
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
          <Link 
            href="/new-features"
            className="inline-flex items-center text-white hover:text-gray-200 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Updates
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center text-sm">
              <Calendar className="mr-2 h-4 w-4" />
              {feature.date}
            </div>
            <div className="flex items-center text-sm">
              <Clock className="mr-2 h-4 w-4" />
              5 min read
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">{feature.title}</h1>
          
          <div className="flex flex-wrap gap-2">
            {feature.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm font-medium bg-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-sm p-6 sm:p-8"
        >
          {feature.content?.map((section, index) => {
            switch (section.type) {
              case "paragraph":
                return (
                  <p key={index} className="text-gray-600 mb-6 leading-relaxed">
                    {section.content}
                  </p>
                );
              case "image":
                return (
                  <div key={index} className="relative h-96 mb-8 rounded-lg overflow-hidden">
                    <Image
                      src={section.imageUrl || "/placeholder.jpg"}
                      alt={section.imageAlt || "Feature illustration"}
                      fill
                      className="object-cover"
                    />
                  </div>
                );
              case "list":
                return (
                  <ul key={index} className="list-disc list-inside mb-6 space-y-2">
                    {section.items?.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              default:
                return null;
            }
          })}
        </motion.div>
      </div>
    </div>
  );
}