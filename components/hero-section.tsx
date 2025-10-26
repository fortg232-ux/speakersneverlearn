"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, TrendingUp, Coins, Shield, Network } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 sm:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl float-animation" />
        <div
          className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-secondary/10 blur-3xl float-animation"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-60 w-60 rounded-full bg-accent/10 blur-3xl float-animation"
          style={{ animationDelay: "2s" }}
        />

        <div className="absolute inset-0 blockchain-grid opacity-30" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="slide-up">
            <div className="mb-8 flex justify-center">
              <div className="flex items-center space-x-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border web3-border px-6 py-3 text-sm font-medium text-primary backdrop-blur-sm">
                <Network className="h-4 w-4" />
                <span>Powered by Solana Blockchain</span>
                <Zap className="h-4 w-4" />
              </div>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block mb-2">Welcome to</span>
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent gradient-shift">
                BlockBit
              </span>
              <span className="block mt-2">Web3 Trading</span>
            </h1>

            <p className="mb-8 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
              Experience the future of decentralized trading on Solana. Advanced DeFi protocols, real-time market data,
              and lightning-fast execution for the next generation of memecoin trading.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 pulse-emerald text-lg px-8 py-4"
              >
                <Shield className="mr-2 h-5 w-5" />
                Start Trading Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-primary/10 text-lg px-8 py-4 transition-colors bg-transparent"
              >
                Explore DeFi Hub
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$2.4B+</div>
                <div className="text-sm text-muted-foreground">Total Volume</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 hidden lg:block">
          <div className="float-animation">
            <div className="p-3 rounded-lg bg-primary/10 border web3-border">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 right-10 hidden lg:block">
          <div className="float-animation" style={{ animationDelay: "1.5s" }}>
            <div className="p-3 rounded-lg bg-secondary/10 border web3-border">
              <Coins className="h-8 w-8 text-secondary" />
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-20 hidden xl:block">
          <div className="float-animation" style={{ animationDelay: "0.5s" }}>
            <div className="p-2 rounded-lg bg-accent/10 border web3-border">
              <Network className="h-6 w-6 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
