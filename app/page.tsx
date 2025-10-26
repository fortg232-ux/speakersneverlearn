import { HeroSection } from "@/components/hero-section"
import { PriceTicker } from "@/components/price-ticker"
import { MarketOverview } from "@/components/market-overview"
import { TradingSection } from "@/components/trading-section"
import { StatsSection } from "@/components/stats-section"
import { QuickSwap } from "@/components/quick-swap"
import { OrderBook } from "@/components/order-book"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background cyber-grid">
      <HeroSection />
      <PriceTicker />
      <StatsSection />
      <div className="container mx-auto px-4 py-12">
        <MarketOverview />
      </div>
      <TradingSection />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-6">
          <QuickSwap />
          <OrderBook />
        </div>
      </div>
      <FeaturesSection />
      <Footer />
    </div>
  )
}
