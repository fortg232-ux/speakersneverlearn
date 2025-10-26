"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Activity, Cpu, Zap } from "lucide-react"

export function TradingSection() {
  const [selectedPair, setSelectedPair] = useState("SOL/USDT")

  const tradingPairs = [
    { pair: "SOL/USDT", price: "$98.45", change: "+5.67%", volume: "$2.4M", positive: true },
    { pair: "BONK/SOL", price: "0.000012", change: "+12.34%", volume: "$890K", positive: true },
    { pair: "WIF/SOL", price: "0.0045", change: "-2.11%", volume: "$1.2M", positive: false },
    { pair: "PEPE/SOL", price: "0.000089", change: "+8.92%", volume: "$650K", positive: true },
  ]

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Neural Trading Matrix
          </h2>
          <p className="text-muted-foreground">
            Real-time quantum analysis and trading opportunities for the hottest Solana memecoins
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Trading Pairs */}
          <div className="lg:col-span-2">
            <Card className="neon-border bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/20 neon-pulse">
                    <Activity className="h-5 w-5 text-primary" />
                  </div>
                  Memecoin Trading Protocols
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tradingPairs.map((pair, index) => (
                    <div
                      key={pair.pair}
                      className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all duration-300 hover:bg-primary/5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(255,0,127,0.3)] ${
                        selectedPair === pair.pair ? "bg-primary/10 border-primary neon-border" : "border-border/50"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => setSelectedPair(pair.pair)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30">
                          <span className="text-sm font-bold text-primary font-mono">
                            {pair.pair.split("/")[0].slice(0, 2)}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium font-mono">{pair.pair}</div>
                          <div className="text-sm text-muted-foreground">Vol: {pair.volume}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-medium text-lg">{pair.price}</div>
                        <Badge
                          variant={pair.positive ? "default" : "destructive"}
                          className={`text-xs font-mono ${pair.positive ? "bg-green-500/20 text-green-400 border-green-500/50" : "bg-red-500/20 text-red-400 border-red-500/50"}`}
                        >
                          {pair.positive ? (
                            <TrendingUp className="mr-1 h-3 w-3" />
                          ) : (
                            <TrendingDown className="mr-1 h-3 w-3" />
                          )}
                          {pair.change}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Trade */}
          <div>
            <Card className="neon-border bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-secondary/20 cyan-glow">
                    <Zap className="h-5 w-5 text-secondary" />
                  </div>
                  Quantum Trade
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-6 border-2 border-dashed border-primary/30 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 neon-border">
                  <div className="text-3xl font-bold text-primary mb-2 font-mono">
                    {tradingPairs.find((p) => p.pair === selectedPair)?.price}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4 font-mono">{selectedPair}</div>
                  <Badge
                    variant={tradingPairs.find((p) => p.pair === selectedPair)?.positive ? "default" : "destructive"}
                    className="font-mono"
                  >
                    {tradingPairs.find((p) => p.pair === selectedPair)?.change}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 neon-pulse">
                    Execute Buy
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-red-500/50 text-red-400 hover:bg-red-500/10 hover:border-red-500 bg-transparent"
                  >
                    Execute Sell
                  </Button>
                </div>

                <Button
                  variant="outline"
                  className="w-full bg-transparent border-secondary/50 hover:bg-secondary/10 hover:border-secondary"
                >
                  <Cpu className="mr-2 h-4 w-4" />
                  Advanced Neural Interface
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
