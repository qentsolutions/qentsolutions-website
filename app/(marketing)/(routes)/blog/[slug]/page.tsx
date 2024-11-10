"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Simulated blog data - In a real app, this would come from a database or CMS
const blogPosts: Record<string, {
  title: string;
  description: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    imageUrl: string;
  };
  content: {
    type: string;
    content?: string;
    url?: string;
    alt?: string;
    caption?: string;
    items?: string[];
  }[];
  relatedPosts: {
    title: string;
    slug: string;
    image: string;
  }[];
}> = {
  "mastering-customer-relationships-2024": {
    title: "Mastering Customer Relationships in 2024",
    description: "Learn the latest strategies and tools for building lasting customer relationships in today's digital landscape. Discover how AI and automation can enhance your CRM efforts.",
    date: "Mar 16, 2024",
    readTime: "8 min read",
    author: {
      name: "Sarah Chen",
      role: "Head of Customer Success",
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    content: [
      {
        type: "paragraph",
        content: "In today's rapidly evolving business landscape, maintaining strong customer relationships is more crucial than ever. As we navigate through 2024, the integration of artificial intelligence and automation has revolutionized how businesses interact with their customers."
      },
      {
        type: "heading",
        content: "The Evolution of Customer Relationships"
      },
      {
        type: "paragraph",
        content: "Traditional customer relationship management has undergone a significant transformation. With the advent of AI-powered tools and data analytics, businesses can now understand their customers better than ever before."
      },
      {
        type: "image",
        url: "/hero-landing-img.png",
        alt: "Modern CRM Dashboard",
        caption: "Modern CRM systems provide deep insights into customer behavior"
      },
      {
        type: "heading",
        content: "Key Strategies for 2024"
      },
      {
        type: "list",
        items: [
          "Implement AI-driven personalization",
          "Leverage predictive analytics",
          "Focus on omnichannel engagement",
          "Prioritize customer data privacy"
        ]
      }
    ],
    relatedPosts: [
      {
        title: "The Future of Business Automation",
        slug: "future-business-automation",
        image: "/hero-landing-img.png"
      },
      {
        title: "Effective Email Marketing Strategies",
        slug: "effective-email-marketing",
        image: "/hero-landing-img.png"
      }
    ]
  },
  // Add more blog posts here
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = slug in blogPosts ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link href="/blog">
            <Button>Return to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-white hover:text-gray-200 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center text-sm">
              <Calendar className="mr-2 h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center text-sm">
              <Clock className="mr-2 h-4 w-4" />
              {post.readTime}
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center">
            <Image
              src={post.author.imageUrl}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="ml-4">
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-gray-300">{post.author.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
          {post.content.map((section, index) => {
            switch (section.type) {
              case "paragraph":
                return (
                  <p key={index} className="text-gray-600 mb-6 leading-relaxed">
                    {section.content}
                  </p>
                );
              case "heading":
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    {section.content}
                  </h2>
                );
              case "image":
                return (
                  <figure key={index} className="my-8">
  <Image
    src={section.url ?? '/placeholder-image.png'} // URL par défaut si `undefined`
    alt={section.alt ?? 'Default description'}
    width={800}
    height={400}
    className="rounded-lg"
  />
  {section.caption && (
    <figcaption className="text-sm text-gray-500 mt-2 text-center">
      {section.caption}
    </figcaption>
  )}
</figure>
                );
              case "list":
                return (
                  <ul key={index} className="list-disc list-inside mb-6 space-y-2">
                    {section?.items?.map((item, itemIndex) => (
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
        </div>

        {/* Share Button */}
        <div className="flex justify-center mt-8">
          <Button
            onClick={() => {
              navigator.share({
                title: post.title,
                text: post.description,
                url: window.location.href,
              }).catch(console.error);
            }}
            className="inline-flex items-center"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share this article
          </Button>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {post.relatedPosts.map((relatedPost, index) => (
              <Link 
                key={index}
                href={`/blog/${relatedPost.slug}`}
                className="group block"
              >
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}