"use client"

import { useEffect, useRef } from "react"
import TypedText from "@/components/typed-text"

export default function Contact() {
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
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 md:py-16 laptop-optimized">
        <div ref={contentRef} className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md opacity-0">
          <div className="text-center mb-6 md:mb-8">
            <TypedText text="Contact" className="text-3xl md:text-4xl font-bold text-blue-600" />
          </div>

          <div className="space-y-4 md:space-y-6 text-center">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">Address</h2>
              <p className="text-gray-600 text-sm md:text-base">
                SISTER NIVEDITA UNIVERSITY
                <br />
                NEWTOWN : KOLKATA : 700156
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">Phone</h2>
              <p className="text-gray-600 text-sm md:text-base">9635986981 / 9679432418 / 8927203302 / 9382403463</p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">Email</h2>
              <p className="text-gray-600 text-sm md:text-base">project.snu2023@gmail.com</p>
            </div>

            <div className="pt-4 md:pt-6">
              <a
                href="mailto:project.snu2023@gmail.com"
                className="inline-block bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm md:text-base"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
