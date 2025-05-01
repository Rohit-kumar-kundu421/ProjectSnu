"use client"

import { useEffect, useRef } from "react"

interface TypedTextProps {
  text: string
  className?: string
  speed?: number
}

export default function TypedText({ text, className = "", speed = 100 }: TypedTextProps) {
  const elementRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current
    element.textContent = ""

    // Adjust typing speed based on screen size for better UX on laptops
    const adjustedSpeed = window.innerWidth >= 1280 && window.innerWidth <= 1920 ? speed * 0.8 : speed

    let i = 0
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i)
        i++
      } else {
        clearInterval(typeInterval)
      }
    }, adjustedSpeed)

    return () => clearInterval(typeInterval)
  }, [text, speed])

  return <h1 ref={elementRef} className={className}></h1>
}
