import Link from "next/link"
import { TrendingUp, Twitter, Github, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <TrendingUp className="h-5 w-5" />
              </div>
              <span className="font-bold text-xl font-mono">BlockBit</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The ultimate platform for Solana memecoin trading and education.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Trading</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/trading" className="hover:text-primary">
                  Spot Trading
                </Link>
              </li>
              <li>
                <Link href="/trading/advanced" className="hover:text-primary">
                  Advanced Trading
                </Link>
              </li>
              <li>
                <Link href="/trading/api" className="hover:text-primary">
                  API Trading
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Learn</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/learn/basics" className="hover:text-primary">
                  Crypto Basics
                </Link>
              </li>
              <li>
                <Link href="/learn/defi" className="hover:text-primary">
                  DeFi Guide
                </Link>
              </li>
              <li>
                <Link href="/learn/airdrops" className="hover:text-primary">
                  Airdrop Strategies
                </Link>
              </li>
              <li>
                <Link href="/learn/security" className="hover:text-primary">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Community</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 BlockBit. All rights reserved. Trade responsibly.</p>
        </div>
      </div>
    </footer>
  )
}
