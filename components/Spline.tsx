'use client'

import { Application } from '@splinetool/runtime'
import { useEffect, useRef } from 'react'

export default function Spline({ scene }: { scene: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const app = new Application(canvasRef.current)
    app.load(scene)

    return () => {
      app.dispose()
    }
  }, [scene])

  return <canvas ref={canvasRef} className="w-full h-full" />
} 