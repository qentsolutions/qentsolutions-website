"use client";
import Image from "next/image";
import TestimonialsAvatars from "./testimonials-avatars";
import { Medal } from "lucide-react";
import { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input";
import { motion } from "framer-motion";

export default function Hero() {
  const placeholders = [
    "What challenges do you face in your business?",
    "How can technology streamline your processes?",
    "What features do you need in a custom software?",
    "Looking for a modern website design?",
    "How can we help you grow your business?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 opacity-90" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute -left-4 top-0 h-72 w-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -right-4 top-0 h-72 w-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 h-72 w-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 pt-24 pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 md:gap-8 lg:gap-8 items-center justify-center text-center lg:text-left lg:items-start w-full lg:w-1/2"
          >
            <div className="flex items-center border shadow-sm py-2 px-4 bg-white dark:bg-gray-800 text-amber-700 dark:text-amber-300 rounded-full uppercase text-sm font-medium backdrop-blur-sm">
              <Medal className="h-6 w-6 mr-2" aria-hidden="true" />
              Your Trusted Technology Partner
            </div>
            
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-900 dark:text-white">
              Elevate Your Business with
              <span className="relative">
                <span className="block sm:inline ml-0 sm:ml-2 text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text font-bold">
                  Tailored Solutions
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mt-4 md:mt-8 max-w-2xl">
              At Qent Solutions, we craft customized software and websites designed to meet your unique business challenges.
              Let us connect the dots between innovation and efficiency.
            </p>
            
            <div className="w-full max-w-xl backdrop-blur-sm">
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
              />
            </div>
            
            <TestimonialsAvatars />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
          >
            <div className="relative">
              {/* Gradient glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
              
              <div className="relative">
                <Image
                  src="/hero-landing-img.png"
                  alt="Qent Solutions platform interface showcasing custom software solutions"
                  className="w-full rounded-lg shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                  priority={true}
                  width={700}
                  height={700}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}