"use client"

import { useEffect, useRef } from "react"
import TypedText from "@/components/typed-text"

const ideas = [
  {
    title: "Rain Water Harvesting",
    description:
      "Rainwater harvesting is a process of collecting and storing rainwater for future use. It involves the capture, conveyance, and storage of rainwater from rooftops and other surfaces.",
  },
  {
    title: "Water Conservation Techniques",
    description:
      "Implementing simple water conservation techniques can reduce water wastage and ensure sustainable water use for the future.",
  },
  {
    title: "Sustainable Sanitation",
    description:
      "Sustainable sanitation solutions ensure the safe disposal of human waste, contributing to better public health and environmental protection.",
  },
  {
    title: "Greywater Recycling",
    description:
      "Greywater recycling involves reusing water from baths, sinks, washing machines, and other appliances for purposes like irrigation and toilet flushing.",
  },
  {
    title: "Desalination Technologies",
    description:
      "Desalination turns seawater into fresh water, providing a viable solution for water-scarce regions, especially in coastal areas.",
  },
  {
    title: "Water-Efficient Irrigation",
    description:
      "Drip irrigation and other water-efficient irrigation systems help save water in agriculture while ensuring crops receive sufficient hydration.",
  },
  {
    title: "Plastic-Free Water Solutions",
    description:
      "Promoting plastic-free water solutions like reusable bottles and filtration systems helps reduce plastic waste and protect marine life.",
  },
  {
    title: "Urban Water Management",
    description:
      "Efficient urban water management systems help cities cope with growing water demand while ensuring equitable distribution of water resources.",
  },
]

export default function OurIdeas() {
  const ideasRef = useRef<HTMLDivElement>(null)

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

    if (ideasRef.current) {
      const cards = ideasRef.current.querySelectorAll(".idea-card")
      cards.forEach((card, index) => {
        setTimeout(() => {
          observer.observe(card)
        }, index * 100)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 md:py-12 laptop-optimized">
        <div className="text-center mb-8 md:mb-12">
          <TypedText text="Our Ideas" className="text-3xl md:text-4xl font-bold text-blue-600" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6" ref={ideasRef}>
          {ideas.map((idea, index) => (
            <div
              key={index}
              className="idea-card bg-white p-4 md:p-6 rounded-lg shadow-md border border-blue-100 opacity-0 transform transition-all duration-300 h-full flex flex-col"
            >
              <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-blue-600">{idea.title}</h2>
              <p className="text-gray-600 mb-4 flex-grow text-sm md:text-base">{idea.description}</p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-medium inline-flex items-center text-sm md:text-base"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
          <video className="w-full h-auto rounded-lg shadow-lg" controls poster="/images/video-thumbnail.jpg">
            <source src="/videos/water2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="text-center mt-8 md:mt-12 text-lg md:text-xl font-bold text-blue-600">
          Thank You For Visiting Our Website
        </p>
      </div>
    </main>
  )
}
