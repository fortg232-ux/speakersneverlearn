"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function OrderBook() {
  const buyOrders = [
    { price: "142.45", amount: "12.5", total: "1,780.63" },
    { price: "142.40", amount: "8.3", total: "1,181.92" },
    { price: "142.35", amount: "15.7", total: "2,234.90" },
    { price: "142.30", amount: "6.2", total: "882.26" },
    { price: "142.25", amount: "20.1", total: "2,859.23" },
  ]

  const sellOrders = [
    { price: "142.55", amount: "10.2", total: "1,454.01" },
    { price: "142.60", amount: "7.8", total: "1,112.28" },
    { price: "142.65", amount: "13.4", total: "1,911.51" },
    { price: "142.70", amount: "5.9", total: "841.93" },
    { price: "142.75", amount: "18.6", total: "2,655.15" },
  ]

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Order Book</CardTitle>
          <Badge variant="outline" className="font-mono text-xs">
            SOL/USDC
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Header */}
        <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground font-medium pb-2 border-b border-border/50">
          <div>Price (USDC)</div>
          <div className="text-right">Amount (SOL)</div>
          <div className="text-right">Total (USDC)</div>
        </div>

        {/* Sell Orders */}
        <div className="space-y-1">
          {sellOrders.reverse().map((order, index) => (
            <div
              key={`sell-${index}`}
              className="grid grid-cols-3 gap-2 text-xs font-mono py-1 px-2 rounded hover:bg-red-500/5 cursor-pointer relative overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-red-500/10"
                style={{ width: `${(Number.parseFloat(order.amount) / 20) * 100}%` }}
              />
              <div className="text-red-500 relative z-10">{order.price}</div>
              <div className="text-right relative z-10">{order.amount}</div>
              <div className="text-right text-muted-foreground relative z-10">{order.total}</div>
            </div>
          ))}
        </div>

        {/* Spread */}
        <div className="flex items-center justify-center py-2 border-y border-border/50">
          <Badge className="bg-primary/20 text-primary border-primary/30 font-mono">Spread: $0.10 (0.07%)</Badge>
        </div>

        {/* Buy Orders */}
        <div className="space-y-1">
          {buyOrders.map((order, index) => (
            <div
              key={`buy-${index}`}
              className="grid grid-cols-3 gap-2 text-xs font-mono py-1 px-2 rounded hover:bg-green-500/5 cursor-pointer relative overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-green-500/10"
                style={{ width: `${(Number.parseFloat(order.amount) / 20) * 100}%` }}
              />
              <div className="text-green-500 relative z-10">{order.price}</div>
              <div className="text-right relative z-10">{order.amount}</div>
              <div className="text-right text-muted-foreground relative z-10">{order.total}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
