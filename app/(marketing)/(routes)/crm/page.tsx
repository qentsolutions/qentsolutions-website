"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Users, MessageSquare, BarChart2, Target, Settings, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    name: "Contact Management",
    description: "Centralize and organize all your customer information in one place with advanced segmentation.",
    icon: Users,
  },
  {
    name: "Communication Tools",
    description: "Integrated email, chat, and call center capabilities for seamless customer interactions.",
    icon: MessageSquare,
  },
  {
    name: "Analytics & Reporting",
    description: "Comprehensive reporting tools to track sales performance and customer engagement.",
    icon: BarChart2,
  },
  {
    name: "Lead Management",
    description: "Track and nurture leads through your sales pipeline with automated workflows.",
    icon: Target,
  },
  {
    name: "Workflow Automation",
    description: "Automate repetitive tasks and create custom workflows for your sales process.",
    icon: Settings,
  },
  {
    name: "Email Marketing",
    description: "Create and manage email campaigns directly from your CRM system.",
    icon: Mail,
  },
];

const benefits = [
  {
    title: "Sales Management",
    features: [
      "Pipeline Management",
      "Opportunity Tracking",
      "Sales Forecasting",
      "Quote Management",
      "Territory Management",
      "Commission Tracking"
    ]
  },
  {
    title: "Marketing Automation",
    features: [
      "Campaign Management",
      "Lead Scoring",
      "Email Marketing",
      "Social Media Integration",
      "Landing Page Builder",
      "Marketing Analytics"
    ]
  },
  {
    title: "Customer Service",
    features: [
      "Ticket Management",
      "Knowledge Base",
      "Customer Portal",
      "Service Level Agreements",
      "Customer Feedback",
      "Case Resolution"
    ]
  }
];

export default function CRMPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Customer Relationship Management
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Build stronger customer relationships and drive growth with our powerful CRM solution.
              Manage leads, automate sales processes, and deliver exceptional customer experiences.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto max-w-5xl"
          >
            <Image
              src="/lead-management.png"
              alt="CRM Dashboard"
              width={1200}
              height={600}
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-900">Live Customer Data</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful CRM Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage customer relationships effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive CRM Solution
            </h2>
            <p className="text-xl text-gray-600">
              Transform your customer relationships with our integrated CRM tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <ul className="space-y-3">
                  {benefit.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-16 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to grow your business?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have improved their customer relationships with our CRM solution.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}