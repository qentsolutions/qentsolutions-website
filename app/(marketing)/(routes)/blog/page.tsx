"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  "All Topics",
  "Cold Emailing",
  "SEO",
  "Copywriting",
  "Marketing",
  "Productivity"
];

const posts = [
  {
    id: 1,
    title: "Mastering Customer Relationships in 2024",
    slug: "mastering-customer-relationships-2024",
    description:
      "Learn the latest strategies and tools for building lasting customer relationships in today's digital landscape. Discover how AI and automation can enhance your CRM efforts.",
    date: "Mar 16, 2024",
    datetime: "2024-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Sarah Chen",
      role: "Head of Customer Success",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "The Future of Business Automation",
    slug: "future-business-automation",
    description:
      "Explore how automation is transforming business operations and learn practical ways to implement automated solutions in your workflow.",
    date: "Mar 10, 2024",
    datetime: "2024-03-10",
    category: { title: "Productivity", href: "#" },
    author: {
      name: "Alex Morgan",
      role: "Tech Lead",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Effective Email Marketing Strategies",
    slug: "effective-email-marketing",
    description:
      "Discover proven email marketing techniques that drive engagement and conversions. Learn how to craft compelling campaigns that resonate with your audience.",
    date: "Mar 5, 2024",
    datetime: "2024-03-05",
    category: { title: "Cold Emailing", href: "#" },
    author: {
      name: "Lisa Thompson",
      role: "Marketing Specialist",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  }
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Topics");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "All Topics" || post.category.title === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Insights for Growth
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Discover strategies, tips, and insights to help your business thrive in today&apos;s digital landscape.
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-6 py-3 rounded-full border-2 border-transparent focus:border-white bg-white/10 text-white placeholder-gray-300 focus:outline-none backdrop-blur-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors
                ${selectedCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="p-6 flex-1">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600">
                    {post.category.title}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {post.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Image
                    src={post.author.imageUrl}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      {post.author.name}
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest articles and insights delivered to your inbox weekly.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4 flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <Button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;