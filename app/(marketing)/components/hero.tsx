import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LandingPage() {
  return (
    <main className="h-[80vh] bg-white flex items-center justify-center">
      <div className="container mx-auto text-gray-800 font-black px-4 py-12 text-center">
        {/* Hero Section */}
        <div className="mb-4 flex justify-center gap-2 text-8xl font-black text-gray-800">
          <span>Project Management</span>
        </div>

        <div className="relative text-8xl mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-blue-500 via-indigo-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">With Ease.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 py-4">
            <span className="">With Ease.</span>
          </div>
        </div>
        <p className="mx-auto my-6 max-w-3xl text-xl text-gray-600">
          Transform the way you collaborate and deliver projects, all in one simple platform.
        </p>

        <div className="mb-12 flex justify-center gap-4">
          <Button size="lg" className=" px-8 " variant={"outline"}>
            CONTACT SALES
          </Button>
          <Link href="https://app.qentsolutions/auth/register">
            <Button size="lg" className="bg-gradient-to-l from-blue-500  to-indigo-500  px-8 hover:bg-blue-600">
              START FOR FREE
            </Button>
          </Link>

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

