/* eslint-disable @typescript-eslint/no-explicit-any */
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { ReactNode, useEffect } from 'react'

interface ISmoothScroll {
  children: ReactNode
}

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }: ISmoothScroll) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Lower values create a smoother scroll effect
      smoothWheel: true, // Enables smooth scrolling for mouse wheel events
    })

    // Update ScrollTrigger each time the user scrolls
    lenis.on('scroll', () => ScrollTrigger.update())

    // Define a function to run at each animation frame
    const scrollFn = (time: any) => {
      lenis.raf(time) // Run Lenis' requestAnimationFrame method
      requestAnimationFrame(scrollFn) // Recursively call scrollFn on each frame
    }

    // Start the animation frame loop
    requestAnimationFrame(scrollFn)
  }, [])

  return <>{children}</>
}
