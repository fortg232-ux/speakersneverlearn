"use client"

import { useState } from "react"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

interface TickerData {
  symbol: string
  price: string
  change: number
}

export function PriceTicker() {
  const [tickers, setTickers] = useState<TickerData[]>([
    { symbol: "BTC", price: "$98,234", change: 2.45 },
    { symbol: "ETH", price: "$3,456", change: -1.23 },
    { symbol: "SOL", price: "$142.67", change: 5.67 },
    { symbol: "BONK", price: "$0.000012", change: 12.34 },
    { symbol: "WIF", price: "$2.45", change: -2.11 },
    { symbol: "PEPE", price: "$0.000089", change: 8.92 },
    { symbol: "DOGE", price: "$0.087", change: 3.45 },
    { symbol: "SHIB", price: "$0.000024", change: -0.89 },
  ])

  return (
    <div className="bg-card/50 backdrop-blur-sm border-y border-border/50 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-3">
        {[...tickers, ...tickers].map((ticker, index) => (
          <div
            key={`${ticker.symbol}-${index}`}
            className="inline-flex items-center gap-2 px-6 border-r border-border/30"
          >
            <span className="font-semibold text-sm">{ticker.symbol}</span>
            <span className="font-mono text-sm">{ticker.price}</span>
            <span
              className={`flex items-center gap-1 text-xs font-medium ${
                ticker.change > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {ticker.change > 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
              {Math.abs(ticker.change).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
