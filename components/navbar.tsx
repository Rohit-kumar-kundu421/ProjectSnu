"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3 lg:py-4 flex justify-between items-center laptop-optimized">
        <div className="logo">
          <Image
            src="/images/water.png"
            alt="Clean Water Logo"
            width={45}
            height={45}
            className="lg:w-[50px] lg:h-[50px]"
          />
        </div>
        <ul className="flex space-x-3 md:space-x-4 lg:space-x-6 text-sm md:text-base">
          <li>
            <Link
              href="/"
              className={`text-xl hover:text-blue-500 transition-colors ${pathname === "/" ? "text-blue-500 font-semibold" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`text-xl hover:text-blue-500 transition-colors ${pathname === "/about" ? "text-blue-500 font-semibold" : ""}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/our-ideas"
              className={`text-xl hover:text-blue-500 transition-colors ${pathname === "/our-ideas" ? "text-blue-500 font-semibold" : ""}`}
            >
              Our Ideas
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`text-xl hover:text-blue-500 transition-colors ${pathname === "/contact" ? "text-blue-500 font-semibold" : ""}`}
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://forms.gle/kaBo2Q4aLyvLgSqr7"
              className="bg-blue-500 text-white px-2 py-1 md:px-3 md:py-1 rounded hover:bg-blue-600 transition-colors text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Feedback
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
