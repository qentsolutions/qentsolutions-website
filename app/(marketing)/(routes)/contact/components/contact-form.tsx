"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "react-hot-toast";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (data: FormData) => void;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) {
      toast.error("Please agree to the privacy policy.");
      return;
    }
    onSubmit(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg p-8"
    >
      <h2 className="text-2xl font-semibold mb-8">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="firstName">First name</Label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              defaultValue=""
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <Label htmlFor="lastName">Last name</Label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              defaultValue=""
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <input
            type="email"
            name="email"
            id="email"
            required
            defaultValue=""
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <Label htmlFor="company">Company (optional)</Label>
          <input
            type="text"
            name="company"
            id="company"
            defaultValue=""
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <textarea
            name="message"
            id="message"
            rows={4}
            required
            defaultValue=""
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch 
            id="terms" 
            checked={agreed} 
            onCheckedChange={setAgreed}
            aria-label="Accept privacy policy"
          />
          <Label htmlFor="terms" className="text-sm text-gray-600">
            By selecting this, you agree to our{" "}
            <Link href="/privacy-policy" className="text-blue-600 hover:underline">
              privacy policy
            </Link>
            .
          </Label>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
          disabled={!agreed}
        >
          Send Message
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </motion.div>
  );
}