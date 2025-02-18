'use client'

import { Application } from '@splinetool/runtime'
import { useEffect, useRef } from 'react'

export default function SplineRocket() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const app = new Application(canvasRef.current)
    app.load('https://prod.spline.design/Ts9Wd-Sa7uDkGnp7/scene.splinecode')

    return () => {
      app.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
} 