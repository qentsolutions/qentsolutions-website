'use client'

import { Card, CardContent } from "@/components/ui/card"
import NumberTicker from "@/components/ui/number-ticker"

export default function StatsSection() {
  const stats = [
    {
      value: 5,
      unit: "min",
      label: "time to get started"
    },
    {
      value: 90,
      unit: "%",
      label: "avg. team collaboration rate"
    },
    {
      value: 95,
      unit: "%",
      label: "avg. task completion rate"
    },
    {
      value: 5,
      unit: "x",
      label: "increase in team productivity"
    }
  ]

  return (
    <div className="w-full bg-gradient-to-t from-blue-600 via-indigo-600 to-white mb-20 pb-28">
      <div className="container mx-auto px-4">
        {/* Video Player Section */}
        <div className="mx-auto mb-16 max-w-7xl rounded-2xl bg-zinc-900 p-48 h-[600px]">
        </div>

        {/* Stats Section */}
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="mb-12 text-3xl font-semibold text-white md:text-4xl">
            Simplifying teamwork with integrated {" "}
            <span className="border-b-2 border-white">project tools</span>
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="text-4xl font-bold text-blue-600 md:text-5xl flex items-baseline">
                    <NumberTicker value={stat.value} />
                    {stat.unit && (
                      <span className="text-lg text-gray-500 ml-1">
                        {stat.unit}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-center text-sm text-gray-600">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}  