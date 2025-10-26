"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Flame } from "lucide-react"

export function MarketOverview() {
  const topGainers = [
    { name: "BONK", symbol: "BONK", change: 45.67, price: "$0.000012", volume: "$12.4M" },
    { name: "WIF", symbol: "WIF", change: 32.11, price: "$2.45", volume: "$8.9M" },
    { name: "PEPE", symbol: "PEPE", change: 28.92, price: "$0.000089", volume: "$15.2M" },
  ]

  const topLosers = [
    { name: "DOGE", symbol: "DOGE", change: -12.34, price: "$0.087", volume: "$5.6M" },
    { name: "SHIB", symbol: "SHIB", change: -8.45, price: "$0.000024", volume: "$7.3M" },
    { name: "FLOKI", symbol: "FLOKI", change: -6.78, price: "$0.000034", volume: "$4.1M" },
  ]

  const trending = [
    { name: "BOME", symbol: "BOME", volume: "$23.4M", holders: "45.2K" },
    { name: "SLERF", symbol: "SLERF", volume: "$18.7M", holders: "32.8K" },
    { name: "MYRO", symbol: "MYRO", volume: "$14.2M", holders: "28.5K" },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Top Gainers */}
      <Card className="border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-500">
            <TrendingUp className="h-5 w-5" />
            Top Gainers 24h
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {topGainers.map((coin, index) => (
            <div
              key={coin.symbol}
              className="flex items-center justify-between p-3 rounded-lg bg-card/50 border border-green-500/10 hover:border-green-500/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 text-green-500 font-bold text-xs">
                  #{index + 1}
                </div>
                <div>
                  <div className="font-semibold text-sm">{coin.name}</div>
                  <div className="text-xs text-muted-foreground">{coin.volume}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono text-sm">{coin.price}</div>
                <Badge className="bg-green-500/20 text-green-500 border-green-500/30 text-xs">+{coin.change}%</Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Top Losers */}
      <Card className="border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-500">
            <TrendingDown className="h-5 w-5" />
            Top Losers 24h
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {topLosers.map((coin, index) => (
            <div
              key={coin.symbol}
              className="flex items-center justify-between p-3 rounded-lg bg-card/50 border border-red-500/10 hover:border-red-500/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20 text-red-500 font-bold text-xs">
                  #{index + 1}
                </div>
                <div>
                  <div className="font-semibold text-sm">{coin.name}</div>
                  <div className="text-xs text-muted-foreground">{coin.volume}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono text-sm">{coin.price}</div>
                <Badge className="bg-red-500/20 text-red-500 border-red-500/30 text-xs">{coin.change}%</Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Trending */}
      <Card className="border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-500">
            <Flame className="h-5 w-5" />
            Trending Now
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trending.map((coin, index) => (
            <div
              key={coin.symbol}
              className="flex items-center justify-between p-3 rounded-lg bg-card/50 border border-amber-500/10 hover:border-amber-500/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/20 text-amber-500 font-bold text-xs">
                  #{index + 1}
                </div>
                <div>
                  <div className="font-semibold text-sm">{coin.name}</div>
                  <div className="text-xs text-muted-foreground">{coin.holders} holders</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono text-sm text-amber-500">{coin.volume}</div>
                <div className="text-xs text-muted-foreground">24h Vol</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
