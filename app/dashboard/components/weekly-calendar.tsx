"use client";

import * as React from "react";
import { addDays, format, startOfWeek, getHours, getMinutes } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";

export default function WeeklyCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const startOfCurrentWeek = startOfWeek(date || new Date(), { weekStartsOn: 1 });

  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(startOfCurrentWeek, i));
  const hours = Array.from({ length: 24 }, (_, i) => i);

  const events = [
    { day: 1, startHour: 22, endHour: 25, title: "Team Meeting" },
    { day: 3, startHour: 14, endHour: 16, title: "Project Review" },
    { day: 5, startHour: 9, endHour: 11, title: "Client Call" },
  ];

  const getLocalHour = (hour: number) => {
    const now = new Date();
    const localDate = new Date(now.setHours(hour, 0, 0, 0));
    return localDate.getHours();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Weekly Calendar</h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow"
        />
        <Card className="flex-grow p-4 overflow-hidden relative">
          <h2 className="text-xl font-semibold mb-2">
            Week of {format(startOfCurrentWeek, "MMMM d, yyyy")}
          </h2>
          <div className="grid grid-cols-8 gap-2 mt-4 min-w-[800px] max-h-[80vh] overflow-y-auto">
            <div className="col-span-1"></div>
            {weekDays.map((day, index) => (
              <div key={index} className="text-center font-medium">
                {format(day, "EEE")}
                <br />
                {format(day, "d")}
              </div>
            ))}
            {hours.map((hour) => (
              <React.Fragment key={hour}>
                <div className="text-right pr-2 text-sm">{getLocalHour(hour)}:00</div>
                {weekDays.map((_, dayIndex) => (
                  <div key={dayIndex} className="border-t border-l h-12 relative">
                    {events
                      .filter((event) => {
                        const eventStartHour = event.startHour + (event.day === dayIndex ? 0 : 24);
                        const eventEndHour = event.endHour + (event.day === dayIndex ? 0 : 24);
                        return (
                          event.day === dayIndex &&
                          eventStartHour <= hour + (dayIndex === 0 ? 24 : 0) &&
                          eventEndHour > hour
                        );
                      })
                      .map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className="absolute left-0 right-0 bg-blue-200 text-blue-800 text-xs p-1 overflow-hidden"
                          style={{
                            top: 0,
                            height: `${(event.endHour - Math.max(event.startHour, hour)) * 100}%`,
                            zIndex: 10,
                          }}
                        >
                          {hour === event.startHour && event.title}
                        </div>
                      ))}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>


        </Card>
      </div>
    </div>
  );
}
