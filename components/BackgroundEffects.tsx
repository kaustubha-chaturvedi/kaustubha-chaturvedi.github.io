"use client"

interface BackgroundEffectsProps {
  mousePosition: { x: number; y: number }
  scrollY: number
}

export default function BackgroundEffects({ mousePosition, scrollY }: BackgroundEffectsProps) {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div
        className="absolute w-[600px] h-[600px] bg-gradient-to-br from-blue-600/10 via-slate-700/15 to-orange-600/10 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.02}px) rotate(${scrollY * 0.1}deg)`,
          left: "20%",
          top: "10%",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] bg-gradient-to-br from-slate-600/15 via-blue-700/10 to-gray-700/15 rounded-full blur-2xl"
        style={{
          transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.03}px) rotate(${-scrollY * 0.05}deg)`,
          right: "10%",
          bottom: "20%",
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] bg-gradient-to-br from-orange-500/10 via-amber-600/15 to-slate-600/10 rounded-full blur-xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.015}px)`,
          left: "60%",
          top: "60%",
        }}
      />
    </div>
  )
}
