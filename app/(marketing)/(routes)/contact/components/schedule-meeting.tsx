"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Clock, MessageSquare, CalendarIcon } from "lucide-react";
import { motion } from "framer-motion";
import { format, addDays } from "date-fns";
import { cn } from "@/lib/utils";

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00"
];

export function ScheduleMeeting() {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [bookingStep, setBookingStep] = useState<'date' | 'time' | 'form'>('form');

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg p-8"
    >
      <h2 className="text-2xl font-semibold mb-8">Schedule a Meeting</h2>
      
      {date && selectedTime && bookingStep === 'form' && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600">Selected Date & Time:</p>
          <p className="font-medium text-gray-900">
            {format(date, 'MMMM d, yyyy')} at {selectedTime}
          </p>
        </div>
      )}

      {bookingStep === 'date' && (
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
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
      )}

      {bookingStep === 'time' && (
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
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
              Confirm Time
            </Button>
          </div>
        </div>
      )}

      {bookingStep === 'form' && (
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            <MessageSquare className="h-5 w-5 text-blue-600" />
            <h3>Schedule Meeting</h3>
          </div>
          <p className="text-gray-600">
            Choose your preferred date and time for the meeting, and we&apos;ll send you a confirmation email with the meeting details.
          </p>
          <Button
            className="w-full"
            onClick={() => setBookingStep('date')}
          >
            {date && selectedTime ? 'Change Date & Time' : 'Select Date & Time'}
          </Button>
        </div>
      )}
    </motion.div>
  );
}