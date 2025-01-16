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
    <div className="w-full bg-gradient-to-t from-blue-600 via-blue-600 to-white mb-48 h-[calc(100vh-80px)]">
      <div className="container mx-auto px-4">
        {/* Video Player Section */}
        <div className="mx-auto mb-16 max-w-3xl rounded-2xl bg-zinc-900 p-48">
          <div className="mb-8 flex items-center justify-center">
            <h2 className="text-4xl font-semibold text-white">Based on</h2>
          </div>

          {/* Video Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="rounded-full p-2 text-white hover:bg-white/10"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6" />
              )}
            </button>

            <Slider
              defaultValue={[0]}
              max={100}
              step={1}
              className="flex-1"
              aria-label="Progress"
            />

            <span className="text-sm text-white/60">00:09</span>

            <button
              className="rounded-full p-2 text-white hover:bg-white/10"
              aria-label="Volume"
            >
              <Volume2 className="h-6 w-6" />
            </button>
          </div>
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

