"use client";

import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "react-hot-toast";
import { Mail, MessageSquare, Calendar as CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00"
];

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    message: "",
    honeypot: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [bookingStep, setBookingStep] = useState<'date' | 'time' | 'form'>('date');

  useEffect(() => {
    const isSubmitted = localStorage.getItem("formSubmitted");
    if (isSubmitted) {
      setFormSubmitted(true);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    if (!agreed) {
      toast.error("Please agree to the privacy policy.");
      return;
    }

    if (!date || !selectedTime) {
      toast.error("Please select a date and time for the meeting.");
      return;
    }

    try {
      const meetingData = {
        ...formData,
        meetingDate: date,
        meetingTime: selectedTime,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(meetingData),
      });

      if (res.ok) {
        toast.success("Meeting scheduled successfully!");
        localStorage.setItem("formSubmitted", "true");
        setFormSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          message: "",
          honeypot: "",
        });
        setAgreed(false);
      } else {
        toast.error("Failed to schedule meeting.");
      }
    } catch (e) {
      toast.error(`Failed to schedule meeting. ${e}`);
    }
  };

  const renderBookingStep = () => {
    switch (bookingStep) {
      case 'date':
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <CalendarIcon className="h-5 w-5 text-blue-600" />
              <h3>Select a Date</h3>
            </div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => date < new Date() || date > addDays(new Date(), 30)}
              className="rounded-md border"
            />
            <Button
              className="w-full"
              onClick={() => setBookingStep('time')}
              disabled={!date}
            >
              Next: Select Time
            </Button>
          </div>
        );
      
      case 'time':
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Clock className="h-5 w-5 text-blue-600" />
              <h3>Select a Time</h3>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  className={cn(
                    "w-full",
                    selectedTime === time && "bg-blue-600 hover:bg-blue-500"
                  )}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setBookingStep('date')}
              >
                Back
              </Button>
              <Button
                className="w-full"
                onClick={() => setBookingStep('form')}
                disabled={!selectedTime}
              >
                Next: Your Details
              </Button>
            </div>
          </div>
        );
      
      case 'form':
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="firstName">First name</Label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <Label htmlFor="lastName">Last name</Label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="family-name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <Label htmlFor="company">Company (optional)</Label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="terms" checked={agreed} onCheckedChange={setAgreed} />
                <Label htmlFor="terms" className="text-sm text-gray-600">
                  By selecting this, you agree to our{" "}
                  <a href="#" className="font-semibold text-blue-600">
                    privacy policy
                  </a>
                  .
                </Label>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => setBookingStep('time')}
              >
                Back
              </Button>
              <Button type="submit" className="w-full" disabled={!agreed}>
                Schedule Meeting
              </Button>
            </div>
          </form>
        );
    }
  };

  if (formSubmitted) {
    return (
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meeting Scheduled!
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Thank you for scheduling a meeting. You will receive an email with the Google Meet link shortly.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Date: {date ? format(date, 'MMMM d, yyyy') : ''}<br />
            Time: {selectedTime}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact <span className="text-blue-600">sales</span>
            </h2>
            <div className="mt-10 space-y-8">
              <div className="flex items-center gap-x-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:contact@qentsolutions.com" className="text-gray-600 hover:text-blue-600">
                    contact@qentsolutions.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-x-4">
                <MessageSquare className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Customer Support</p>
                  <p className="text-gray-600">
                    Our support team is available around the clock to address any questions or updates you may have.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-gray-50 p-8">
            <h3 className="text-2xl font-semibold mb-6">Schedule a Meeting</h3>
            {date && selectedTime && bookingStep !== 'date' && bookingStep !== 'time' && (
              <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">Selected Date & Time:</p>
                <p className="font-medium">
                  {format(date, 'MMMM d, yyyy')} at {selectedTime}
                </p>
              </div>
            )}
            {renderBookingStep()}
          </div>
        </div>
      </div>
    </div>
  );
}