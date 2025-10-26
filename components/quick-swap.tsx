"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowDownUp, Settings, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function QuickSwap() {
  const [fromAmount, setFromAmount] = useState("")
  const [toAmount, setToAmount] = useState("")
  const [fromToken, setFromToken] = useState("SOL")
  const [toToken, setToToken] = useState("USDC")

  const handleSwap = () => {
    // Swap logic here
    const temp = fromToken
    setFromToken(toToken)
    setToToken(temp)
    const tempAmount = fromAmount
    setFromAmount(toAmount)
    setToAmount(tempAmount)
  }

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Quick Swap</CardTitle>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* From Token */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">From</span>
            <span className="text-muted-foreground">Balance: 0.00</span>
          </div>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="0.0"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="flex-1 text-lg font-mono"
            />
            <Button variant="outline" className="min-w-[100px] bg-transparent">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary" />
                {fromToken}
              </div>
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="text-xs text-primary">
            MAX
          </Button>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primary/30 hover:bg-primary/10 bg-transparent"
            onClick={handleSwap}
          >
            <ArrowDownUp className="h-4 w-4" />
          </Button>
        </div>

        {/* To Token */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">To</span>
            <span className="text-muted-foreground">Balance: 0.00</span>
          </div>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="0.0"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              className="flex-1 text-lg font-mono"
            />
            <Button variant="outline" className="min-w-[100px] bg-transparent">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-accent to-info" />
                {toToken}
              </div>
            </Button>
          </div>
        </div>

        {/* Swap Details */}
        <div className="space-y-2 p-3 rounded-lg bg-muted/50 border border-border/50">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Rate</span>
            <span className="font-mono">
              1 {fromToken} = 142.5 {toToken}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-1">
              Price Impact
              <Info className="h-3 w-3" />
            </span>
            <Badge className="bg-green-500/20 text-green-500 border-green-500/30">{"<0.01%"}</Badge>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Network Fee</span>
            <span className="font-mono">~$0.02</span>
          </div>
        </div>

        {/* Swap Button */}
        <Button
          className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold"
          size="lg"
          onClick={() => (window as any).interact_button?.()}
        >
          Connect Wallet to Swap
        </Button>
      </CardContent>
    </Card>
  )
}
