"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, BarChart3, Users2, Package, Workflow, Database, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    name: "Financial Management",
    description: "Comprehensive accounting, budgeting, and financial reporting tools to streamline your financial operations.",
    icon: BarChart3,
  },
  {
    name: "Human Resources",
    description: "Complete HR management including payroll, attendance, and employee performance tracking.",
    icon: Users2,
  },
  {
    name: "Inventory Management",
    description: "Real-time inventory tracking, automated reordering, and warehouse management.",
    icon: Package,
  },
  {
    name: "Process Automation",
    description: "Automate repetitive tasks and workflows to increase efficiency and reduce errors.",
    icon: Workflow,
  },
  {
    name: "Data Integration",
    description: "Seamless integration with other business systems and third-party applications.",
    icon: Database,
  },
  {
    name: "Security & Compliance",
    description: "Enterprise-grade security features and compliance with industry regulations.",
    icon: Shield,
  },
];

const modules = [
  {
    title: "Finance & Accounting",
    features: [
      "General Ledger",
      "Accounts Payable/Receivable",
      "Asset Management",
      "Financial Reporting",
      "Budgeting & Forecasting",
      "Tax Management"
    ]
  },
  {
    title: "Supply Chain",
    features: [
      "Purchase Order Management",
      "Inventory Control",
      "Warehouse Management",
      "Supplier Management",
      "Demand Planning",
      "Logistics Management"
    ]
  },
  {
    title: "Human Resources",
    features: [
      "Employee Management",
      "Payroll Processing",
      "Time & Attendance",
      "Performance Management",
      "Training & Development",
      "Benefits Administration"
    ]
  }
];

export default function ERPPage() {
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
              Enterprise Resource Planning
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Streamline your business operations with our comprehensive ERP solution. 
              Integrate and manage all your business processes in one unified platform.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Schedule a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Business Management
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage your business operations efficiently
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

      {/* Modules Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integrated Modules
            </h2>
            <p className="text-xl text-gray-600">
              Our ERP system offers a complete suite of integrated modules
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4">{module.title}</h3>
                <ul className="space-y-3">
                  {module.features.map((feature) => (
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
            <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have streamlined their operations with our ERP solution.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}