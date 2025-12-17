'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from './ThemeProvider'

export function LightRays() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const rays: Array<{
      x: number
      y: number
      angle: number
      length: number
      speed: number
      opacity: number
    }> = []

    // Create multiple light rays
    const rayCount = 10
    for (let i = 0; i < rayCount; i++) {
      rays.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        angle: Math.random() * Math.PI * 2,
        length: 300 + Math.random() * 400,
        speed: 0.3 + Math.random() * 0.4,
        opacity: theme === 'dark' 
          ? 0.15 + Math.random() * 0.2 
          : 0.08 + Math.random() * 0.12,
      })
    }

    let animationFrameId: number
    let isMounted = true

    const animate = () => {
      if (!isMounted || !ctx) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      rays.forEach((ray) => {
        // Update position
        ray.x += Math.cos(ray.angle) * ray.speed
        ray.y += Math.sin(ray.angle) * ray.speed

        // Wrap around edges
        if (ray.x < -ray.length) ray.x = canvas.width + ray.length
        if (ray.x > canvas.width + ray.length) ray.x = -ray.length
        if (ray.y < -ray.length) ray.y = canvas.height + ray.length
        if (ray.y > canvas.height + ray.length) ray.y = -ray.length

        // Draw ray with gradient
        const endX = ray.x + Math.cos(ray.angle) * ray.length
        const endY = ray.y + Math.sin(ray.angle) * ray.length

        const gradient = ctx.createLinearGradient(ray.x, ray.y, endX, endY)

        if (theme === 'dark') {
          // Dark mode: brighter, more visible rays
          gradient.addColorStop(0, `rgba(14, 165, 233, ${ray.opacity})`)
          gradient.addColorStop(0.3, `rgba(147, 51, 234, ${ray.opacity * 0.7})`)
          gradient.addColorStop(0.6, `rgba(236, 72, 153, ${ray.opacity * 0.4})`)
          gradient.addColorStop(1, 'transparent')
        } else {
          // Light mode: subtle, softer rays
          gradient.addColorStop(0, `rgba(14, 165, 233, ${ray.opacity})`)
          gradient.addColorStop(0.4, `rgba(147, 51, 234, ${ray.opacity * 0.5})`)
          gradient.addColorStop(1, 'transparent')
        }

        ctx.strokeStyle = gradient
        ctx.lineWidth = theme === 'dark' ? 2.5 : 2
        ctx.lineCap = 'round'
        ctx.shadowBlur = 15
        ctx.shadowColor = theme === 'dark' 
          ? `rgba(14, 165, 233, ${ray.opacity * 0.5})`
          : `rgba(14, 165, 233, ${ray.opacity * 0.3})`
        
        ctx.beginPath()
        ctx.moveTo(ray.x, ray.y)
        ctx.lineTo(endX, endY)
        ctx.stroke()
      })

      if (isMounted) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animate()

    return () => {
      isMounted = false
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}

