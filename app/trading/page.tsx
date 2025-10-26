"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Zap, Wallet, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { useEffect, useState } from "react"

interface CryptoData {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  price_change_percentage_24h: number
  price_change_percentage_1h_in_currency: number
  market_cap: number
  total_volume: number
}

export default function TradingPage() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([])
  const [loading, setLoading] = useState(true)
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  useEffect(() => {
    fetchCryptoData()
    const interval = setInterval(fetchCryptoData, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [])

  const fetchCryptoData = async () => {
    try {
      const response = await fetch("/api/crypto-prices")
      const data = await response.json()
      setCryptoData(data)
    } catch (error) {
      console.error("Error fetching crypto data:", error)
    } finally {
      setLoading(false)
    }
  }

  const connectWallet = async () => {
    setIsWalletConnected(true)
  }

  const formatPrice = (price: number) => {
    if (price < 0.01) {
      return `$${price.toFixed(8)}`
    }
    return `$${price.toFixed(2)}`
  }

  const formatPercentage = (percentage: number) => {
    const isPositive = percentage > 0
    return (
      <span className={`flex items-center gap-1 ${isPositive ? "text-green-500" : "text-red-500"}`}>
        {isPositive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
        {Math.abs(percentage).toFixed(2)}%
      </span>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            BlockBit Trading Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced trading tools for Solana memecoins and DeFi tokens
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">🚀 Newest Solana Memecoins</h2>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              Live Prices
            </Badge>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-4">
                    <div className="h-16 bg-muted rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {cryptoData.slice(0, 8).map((coin) => (
                <Card
                  key={coin.id}
                  className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <img src={coin.image || "/placeholder.svg"} alt={coin.name} className="w-8 h-8 rounded-full" />
                        <div>
                          <h3 className="font-semibold">{coin.name}</h3>
                          <p className="text-sm text-muted-foreground uppercase">{coin.symbol}</p>
                        </div>
                      </div>
                      {coin.price_change_percentage_24h > 10 && (
                        <Badge className="bg-green-500/10 text-green-500 border-green-500/20">Surging</Badge>
                      )}
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">{formatPrice(coin.current_price)}</span>
                        {formatPercentage(coin.price_change_percentage_24h)}
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>1h: {formatPercentage(coin.price_change_percentage_1h_in_currency || 0)}</span>
                        <span>Vol: ${(coin.total_volume / 1000000).toFixed(1)}M</span>
                      </div>
                    </div>
                    <button
                      className="w-full mt-3 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                      onClick={() => (window as any).interact_button?.()}
                    >
                      <Wallet className="h-4 w-4" />
                      Connect Wallet to Buy
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Spot Trading
              </CardTitle>
              <CardDescription>Trade memecoins with advanced charting</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary">Start Trading</Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                DeFi Protocols
              </CardTitle>
              <CardDescription>Access liquidity pools and yield farming</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary">Explore DeFi</Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-primary" />
                Portfolio
              </CardTitle>
              <CardDescription>Track your investments and performance</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary">View Portfolio</Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">Connect your wallet to start trading</p>
          <button
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-md text-lg flex items-center justify-center gap-2 mx-auto hover:opacity-90 transition-opacity"
            onClick={() => (window as any).interact_button?.()}
          >
            <Wallet className="h-5 w-5" />
            Connect Wallet to Trade
          </button>
        </div>
      </div>
    </div>
  )
}
