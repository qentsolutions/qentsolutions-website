'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Pause, Play, Volume2 } from 'lucide-react'
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

export default function StatsSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const stats = [
    {
      value: "~30 mins",
      label: "time to get started"
    },
    {
      value: "90%",
      label: "avg. team collaboration rate"
    },
    {
      value: "95%",
      label: "avg. task completion rate"
    },
    {
      value: "5x",
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
          <h2 className="mb-12 text-3xl font-semibold text-white md:text-4xl">
            Simplifying teamwork with integrated {" "}
            <span className="border-b-2 border-white">project tools</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="text-4xl font-bold text-blue-600 md:text-5xl">
                    {stat.value}
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

