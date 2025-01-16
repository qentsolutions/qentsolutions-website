"use client";

import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookOpen, TextCursor, Star, Database, Users } from "lucide-react";
import config from "@/app/config";

const solutions = [
  {
    label: "Website",
    href: "/website",
    icon: TextCursor,
    description: "Create your professional website",
  },
  {
    label: "ERP System",
    href: "/erp",
    icon: Database,
    description: "Streamline your business operations",
  },
  {
    label: "CRM",
    href: "/crm",
    icon: Users,
    description: "Manage customer relationships",
  }
];

const resources = [
  {
    label: "Blog",
    href: "/blog",
    icon: BookOpen,
    description: "Get a better understanding of your traffic",
  },
  {
    label: "New Features",
    href: "/new-features",
    icon: Star,
    description: "Stay up to date with our latest updates",
  }
];

const mainRoutes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
];

export const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="px-4">
        <Image
          src="/logo.svg"
          width={50}
          height={50}
          alt={`${config.appName} logo`}
          className="mb-8 mt-4"
        />
      </div>

      {/* Main Routes */}
      {mainRoutes.map((route) => (
        <SidebarItem key={route.href} {...route} />
      ))}

      {/* Solutions Section */}
      <div className="mt-4 px-6">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Solutions
        </h3>
        {solutions.map((solution) => (
          <Link
            key={solution.href}
            href={solution.href}
            className="flex items-center gap-3 px-2 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
          >
            <solution.icon className="h-5 w-5" aria-hidden="true" />
            <div>
              <div className="font-medium">{solution.label}</div>
              <p className="text-xs text-gray-500">{solution.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Resources Section */}
      <div className="mt-4 px-6">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Resources
        </h3>
        {resources.map((resource) => (
          <Link
            key={resource.href}
            href={resource.href}
            className="flex items-center gap-3 px-2 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
          >
            <resource.icon className="h-5 w-5" aria-hidden="true" />
            <div>
              <div className="font-medium">{resource.label}</div>
              <p className="text-xs text-gray-500">{resource.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-4 px-6">
        <Link href="https://qentsolutions.com/auth/register" className="mx-6">
          <button
            type="submit"
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};