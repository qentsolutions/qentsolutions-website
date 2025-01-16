import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <main className="h-[80vh] bg-white flex items-center justify-center">
      <div className="container mx-auto px-4 py-12 text-center">
        {/* Hero Section */}
        <div className="mb-6 flex justify-center gap-2 text-8xl font-black text-gray-800">
          <div className="relative">
            <div className="h-16 w-16 overflow-hidden rounded-full bg-blue-500">
              <Image
                src="/g2-reviewer.png"
                alt="Profile 1"
                width={64}
                height={64}
                className="object-cover mt-2"
              />
            </div>
          </div>

          <span>Project Management</span>
        </div>

        <h1 className="mb-6 text-8xl text-gray-800 font-black">With Ease</h1>

        <p className="mx-auto mb-6 max-w-3xl text-xl text-gray-600">
          Transform the way you collaborate and deliver projects, all in one simple platform.
        </p>

        <div className="mb-12 flex justify-center gap-4">
          <Button size="lg" className="bg-blue-500 px-8 hover:bg-blue-600">
            BOOK A DEMO
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            START FOR FREE
          </Button>
        </div>

        {/* Logos Section */}
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-3 items-center gap-12 grayscale md:grid-cols-5 lg:grid-cols-9">
            {[
              "Fellow",
              "Home to go",
              "Ideogram",
              "Join",
              "Miro",
              "Moss",
              "tl;dv",
              "Typeform",
              "VEED.IO",
            ].map((logo) => (
              <div key={logo} className="flex justify-center">
                <span className="text-sm font-semibold text-gray-400">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  )
}

