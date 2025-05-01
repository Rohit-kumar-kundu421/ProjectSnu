"use client"

import { useEffect, useRef } from "react"

export default function About() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll(".scroll-item")
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10 h-[50vh]"></div>

      <div className="container mx-auto px-4 py-8 md:py-16 laptop-optimized" ref={contentRef}>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-blue-600 scroll-item opacity-0">
          About
        </h1>

        <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md scroll-item opacity-0">
          <p className="mb-3 md:mb-4 text-gray-700 text-sm md:text-base">
            Access to safe water, sanitation, and hygiene is a fundamental human need. Billions of people are projected
            to lack these essential services by 2030 unless global efforts improve dramatically.
          </p>

          <p className="mb-4 md:mb-6 text-gray-700 text-sm md:text-base">
            Water demand is rising due to population growth, urbanization, and industrial demands. Half the world's
            population already experiences severe water scarcity at least one month each year, and climate change is
            expected to exacerbate these issues.
          </p>

          <h4 className="text-lg md:text-xl font-semibold mb-2 text-blue-600">Why It Matters?</h4>
          <p className="mb-4 md:mb-6 text-gray-700 text-sm md:text-base">
            Access to water, sanitation, and hygiene is a human right, critical for health, poverty reduction, food
            security, and more. Water is essential for ecosystems, biodiversity, and climate change mitigation.
          </p>

          <h4 className="text-lg md:text-xl font-semibold mb-2 text-blue-600">What Can We Do?</h4>
          <p className="text-gray-700 text-sm md:text-base">
            We must work to increase investments, promote innovation, and encourage cooperation to ensure sustainable
            water and sanitation services for all. You can get involved through global initiatives like World Water Day.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 md:mt-12 scroll-item opacity-0">
          <video className="w-full h-auto rounded-lg shadow-lg" controls poster="/images/video-thumbnail.jpg">
            <source src="/videos/water1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </main>
  )
}
