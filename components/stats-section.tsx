"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Users, Coins, Activity } from "lucide-react"

export function StatsSection() {
  const [stats, setStats] = useState([
    { label: "Neural Network Volume", value: "$0", target: 2.4, icon: Database },
    { label: "Active Cyber Traders", value: "0", target: 15.2, icon: Users },
    { label: "Memecoins Indexed", value: "0", target: 847, icon: Coins },
    { label: "Quantum Transactions", value: "0", target: 98.5, icon: Activity },
  ])

  useEffect(() => {
    const animateStats = () => {
      stats.forEach((stat, index) => {
        let current = 0
        const increment = stat.target / 100
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.target) {
            current = stat.target
            clearInterval(timer)
          }

          setStats((prev) =>
            prev.map((s, i) =>
              i === index
                ? {
                    ...s,
                    value:
                      index === 0
                        ? `$${current.toFixed(1)}B`
                        : index === 1
                          ? `${current.toFixed(1)}K`
                          : index === 2
                            ? Math.floor(current).toString()
                            : `${current.toFixed(1)}K`,
                  }
                : s,
            ),
          )
        }, 50)
      })
    }

    const timer = setTimeout(animateStats, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-r from-background via-primary/5 to-background relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,127,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,127,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="container relative">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="text-center slide-up neon-border bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 group-hover:neon-pulse">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary md:text-3xl font-mono mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
