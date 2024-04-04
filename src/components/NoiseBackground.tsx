'use client'

import { useEffect, useRef } from 'react'

export function Noise() {
  const element = useRef<HTMLCanvasElement>(null)
  const frameRate = 30
  const frameInterval = 1000 / frameRate

  useEffect(() => {
    const canvas = element.current!
    const ctx = canvas.getContext('2d')
    let lastFrameTime = performance.now()

    if (ctx) {
      canvas.width = canvas.height = 128

      const resize = () => {
        canvas.width = window.innerWidth * window.devicePixelRatio
        canvas.height = window.innerHeight * window.devicePixelRatio
        canvas.style.width = `${window.innerWidth}px`
        canvas.style.height = `${window.innerHeight}px`
      }

      resize()
      window.onresize = resize

      const noise = (ctx: CanvasRenderingContext2D) => {
        const w = ctx.canvas.width
        const h = ctx.canvas.height
        const iData = ctx.createImageData(w, h)
        const buffer32 = new Uint32Array(iData.data.buffer)
        const len = buffer32.length

        for (let i = 0; i < len; i++) {
          if (Math.random() < 0.5) buffer32[i] = 0xffffffff
        }

        ctx.putImageData(iData, 0, 0)
      }

      const loop = () => {
        const now = performance.now()
        const elapsed = now - lastFrameTime

        if (elapsed > frameInterval) {
          lastFrameTime = now - (elapsed % frameInterval)
          noise(ctx)
        }

        requestAnimationFrame(loop)
      }

      loop()
    }
  }, [frameInterval])

  return (
    <canvas
      ref={element}
      className="pointer-events-none absolute -z-10 select-none opacity-[0.07]"
    />
  )
}
