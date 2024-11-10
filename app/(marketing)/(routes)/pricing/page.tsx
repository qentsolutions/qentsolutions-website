"use client";
import React, { useState } from "react";
import FAQ from "./components/faq";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Check, X } from "lucide-react";
import AvatarCircles from "@/app/(marketing)/components/avatar-circles";
import { motion } from "framer-motion";

const Pricing = () => {
  const [isAnnually, setIsAnnually] = useState(false);

  const PRICES = {
    starter: 15,
    growth: 30,
    business: 50,
  };
  const DISCOUNTS = {
    starter: 0.85,
    growth: 0.8,
    business: 0.75,
  };

  const toggleAnnually = () => {
    setIsAnnually(!isAnnually);
  };

  const getPrice = (monthlyPrice: number, discount: number) => {
    return isAnnually ? monthlyPrice * 12 * discount : monthlyPrice;
  };

  const getOriginalAnnualPrice = (monthlyPrice: number) => {
    return monthlyPrice * 12;
  };

  return (
    <div>
      <div className="min-h-screen">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center pt-20 pb-12 px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple pricing, <span className="text-blue-600">no commitment</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. Switch or cancel anytime.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Label htmlFor="yearly" className="text-base">
              Monthly
            </Label>
            <Switch onCheckedChange={toggleAnnually} />
            <Label htmlFor="yearly" className="text-base">
              Yearly
            </Label>
            <span className="ml-4 text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">
              Save up to 25%
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 px-4 lg:px-8 max-w-7xl mx-auto mb-20">
          {/* Starter Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 max-w-md mx-auto w-full"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Starter</h2>
              <div className="text-4xl font-bold mb-2">
                {isAnnually && (
                  <p className="text-base text-gray-500 line-through mb-1">
                    ${getOriginalAnnualPrice(PRICES.starter)}
                  </p>
                )}
                ${getPrice(PRICES.starter, DISCOUNTS.starter)}
                <span className="text-base font-medium ml-1">
                  {isAnnually ? "/year" : "/month"}
                </span>
              </div>
              <p className="text-gray-600">Perfect for small teams</p>
            </div>

            <button className="w-full py-3 px-4 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors mb-8">
              Get Started
            </button>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Up to 5 team members</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Basic analytics</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span>1GB storage</span>
              </li>
            </ul>
          </motion.div>

          {/* Growth Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-600 max-w-md mx-auto w-full lg:scale-105 relative"
          >
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-xl text-sm font-medium">
              Most Popular
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Growth</h2>
              <div className="text-4xl font-bold mb-2">
                {isAnnually && (
                  <p className="text-base text-gray-500 line-through mb-1">
                    ${getOriginalAnnualPrice(PRICES.growth)}
                  </p>
                )}
                ${getPrice(PRICES.growth, DISCOUNTS.growth)}
                <span className="text-base font-medium ml-1">
                  {isAnnually ? "/year" : "/month"}
                </span>
              </div>
              <p className="text-gray-600">Best for growing businesses</p>
            </div>

            <button className="w-full py-3 px-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors mb-8">
              Get Started
            </button>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Everything in Starter</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span>10GB storage</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Priority support</span>
              </li>
            </ul>
          </motion.div>

          {/* Business Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1 bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 max-w-md mx-auto w-full"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Business</h2>
              <div className="text-4xl font-bold mb-2">
                {isAnnually && (
                  <p className="text-base text-gray-500 line-through mb-1">
                    ${getOriginalAnnualPrice(PRICES.business)}
                  </p>
                )}
                ${getPrice(PRICES.business, DISCOUNTS.business)}
                <span className="text-base font-medium ml-1">
                  {isAnnually ? "/year" : "/month"}
                </span>
              </div>
              <p className="text-gray-600">For large organizations</p>
            </div>

            <button className="w-full py-3 px-4 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors mb-8">
              Contact Sales
            </button>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Everything in Growth</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Unlimited storage</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span>24/7 premium support</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Custom integrations</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Feature Comparison Table */}
        <div className="lg:flex flex-col justify-center px-10 pb-12 lg:mx-32 2xl:mx-64 hidden">
          <div className="mt-28 border-t border-solid border-gray-900 border-opacity-10">
            <div className="flex gap-5">
              <div className="flex flex-col w-[24%]">
                <div className="mt-24 text-lg font-semibold leading-6 text-gray-900">
                  Catered for business
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[24%]">
                <div className="flex flex-col mt-12 text-sm">
                  <div className="font-semibold text-base text-gray-900 leading-[171%]">
                    Starter
                  </div>
                  <div className="mt-4 leading-6 text-gray-600">
                    All your essential business finances, taken care of.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[53%]">
                <div className="grow">
                  <div className="flex gap-5">
                    <div className="flex flex-col w-[45%]">
                      <div className="flex flex-col grow justify-end pt-12 pb-1 text-sm border-t-2 border-blue-600">
                        <div className="font-semibold text-base text-blue-600 leading-[171%]">
                          Growth
                        </div>
                        <div className="mt-4 leading-6 text-gray-600">
                          The best financial services for your thriving business.
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[43%]">
                      <div className="flex flex-col mt-12 text-sm">
                        <div className="font-semibold text-base text-gray-900 leading-[171%]">
                          Business
                        </div>
                        <div className="mt-4 leading-6 text-gray-600">
                          Convenient features to take your business to the next level.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="flex gap-5 mt-10 w-full">
            <div className="flex flex-col my-auto text-sm leading-4 text-gray-900 mx-14">
              <div>Tax Savings</div>
              <div className="mt-9">Easy to use accounting</div>
              <div className="mt-9">Multi-accounts</div>
              <div className="mt-9">Invoicing</div>
              <div className="mt-9">Exclusive offers</div>
              <div className="mt-9">6 months free advisor</div>
              <div className="mt-9">Mobile and web access</div>
            </div>
            <div className="flex-auto px-px">
              <div className="flex gap-5">
                {/* Starter Features */}
                <div className="flex flex-col w-[33%]">
                  <div className="flex justify-center items-center px-16 py-4 rounded-lg shadow-sm bg-gray-50">
                    <div className="flex flex-col items-center w-[90px]">
                      <Check className="w-5 text-blue-600" />
                      <Check className="mt-7 w-5 text-blue-600" />
                      <div className="self-stretch mt-8">3 accounts</div>
                      <div className="self-stretch mt-9">3 invoices</div>
                      <X className="mt-7 w-5 text-gray-400" />
                      <X className="mt-7 w-5 text-gray-400" />
                      <X className="mt-7 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Growth Features */}
                <div className="flex flex-col ml-5 w-[33%]">
                  <div className="flex justify-center items-center px-16 py-4 rounded-lg shadow-sm bg-gray-50 border-2 border-blue-600">
                    <div className="flex flex-col items-center w-[90px]">
                      <Check className="w-5 text-blue-600" />
                      <Check className="mt-7 w-5 text-blue-600" />
                      <div className="self-stretch mt-8">Unlimited</div>
                      <div className="self-stretch mt-9">Unlimited</div>
                      <Check className="mt-7 w-5 text-blue-600" />
                      <Check className="mt-7 w-5 text-blue-600" />
                      <Check className="mt-7 w-5 text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Business Features */}
                <div className="flex flex-col ml-5 w-[33%]">
                  <div className="flex justify-center items-center px-16 py-4 rounded-lg shadow-sm bg-gray-50">
                    <div className="flex flex-col items-center w-[90px]">
                      <Check className="w-5 text-blue-600" />
                      <Check className="mt-7 w-5 text-blue-600" />
                      <div className="self-stretch mt-8">Unlimited</div>
                      <div className="self-stretch mt-9">Unlimited</div>
                      <Check className="mt-7 w-5 text-blue-600" />
                      <Check className="mt-7 w-5 text-blue-600" />
                      <Check className="mt-7 w-5 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Perks Section */}
          <div className="mt-16 text-lg font-semibold leading-4 text-gray-900">
            Other perks
          </div>
          <div className="flex gap-5 mt-11 w-full">
            <div className="flex flex-col my-auto text-sm leading-6 mx-14 text-gray-900">
              <div>24/7 customer support</div>
              <div className="mt-9">Instant notifications</div>
              <div className="mt-9">Budgeting tools</div>
              <div className="mt-9">Digital receipts</div>
              <div className="mt-9">Pots to separate money</div>
              <div className="mt-9">Free bank transfers</div>
            </div>
            <div className="flex-auto px-px">
              <div className="flex gap-5">
                {/* Starter Other Perks */}
                <div className="flex flex-col w-[33%]">
                  <div className="flex justify-center items-center px-16 py-4 rounded-lg shadow-sm bg-gray-50">
                    <div className="flex flex-col items-center w-[90px]">
                      <X className="w-5 text-gray-400" />
                      <Check className="mt-7 w-5 text-blue-600" />
                      <Check className="mt-7 w-5 text-blue-600" />
                      <Check className="mt-7 w-5 text-blue-600" />
                      <X className="mt-7 w-5 text-gray-400" />
                      <X className="mt-7 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Growth Other Perks */}
                <div className="flex flex-col ml-5 w-[33%]">
                  <div className="flex justify-center items-center px-16 py-4 rounded-lg shadow-sm bg-gray-50 border-2 border-blue-600">
                    <div className="flex flex-col items-center w-[90px]">
                      <Check className="w-5 text-blue-600" />
                      <Check className="mt-7 w-5 text-blue-600" />
                      <Check className="mt-7 w-5 text-blue-600" />
                      <Check className="mt-7 w-5 text-blue-600" />
                      <Check className="mt-7 w-5 text-blue-600" />
                      <Check className="mt-7 w-5 text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Business Other Perks */}
                <div className="flex flex-col ml-5 w-[33%]">
                  <div className="flex justify-center items-center px-16 py-4 rounded-lg shadow-sm bg-gray-50">
                    <div className="flex flex-col items-center w-[90px]">
                      <Check className="w-5 text-blue-600" />
                      <Check className="mt-7 w-5 text-blue-600" />
                      <Check className="mt-7 w-5 text-blue-600" />
                      <Check className="mt-7 w-5 text-blue-600" />
                      <Check className="mt-7 w-5 text-blue-600" />
                      <Check className="mt-7 w-5 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-5 mt-11 w-full">
            <div className="flex flex-col my-auto text-sm leading-6 mx-14 text-gray-900">
              <div className="text-white pointer-events-none select-none">
                ------------------------
              </div>
            </div>
            <div className="flex-auto px-px">
              <div className="flex gap-5">
                <div className="flex flex-col w-[33%]">
                  <button className="flex justify-center items-center px-16 py-2 rounded-full shadow-sm bg-gray-50 border-2 border-gray-200 cursor-pointer hover:text-blue-600">
                    <span>Get started</span>
                  </button>
                </div>
                <div className="flex flex-col ml-5 w-[33%]">
                  <button className="flex justify-center items-center px-16 py-2 rounded-full shadow-sm bg-blue-600 border-2 border-blue-600 cursor-pointer hover:bg-blue-700">
                    <span className="text-white font-semibold">Get started</span>
                  </button>
                </div>
                <div className="flex flex-col ml-5 w-[33%]">
                  <button className="flex justify-center items-center px-16 py-2 rounded-full shadow-sm bg-gray-50 border-2 border-gray-200 cursor-pointer hover:text-blue-600">
                    <span>Get started</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8">
                Trusted by <span className="text-blue-600">100,000+</span> users worldwide
              </h2>
              <div className="flex flex-col items-center gap-6">
                <AvatarCircles
                  avatarUrls={[
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
                  ]}
                  numPeople={99}
                />
                <p className="text-gray-600">Reviewer on Google and G2</p>
                <div className="flex items-center justify-center gap-8 mt-4">
                  <Image
                    src="/google-reviewer.png"
                    alt="Google Reviews"
                    width={120}
                    height={40}
                    className="h-10 object-contain"
                  />
                  <Image
                    src="/g2-reviewer.png"
                    alt="G2 Reviews"
                    width={120}
                    height={40}
                    className="h-10 object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <div className="max-w-5xl mx-auto px-4 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-16 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied users and transform your business today.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Start Your Free Trial
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;