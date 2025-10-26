"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { WalletConnectButton } from "@/components/wallet-connect-button"
import { AirdropCard } from "@/components/airdrop-card"
import { Search, Filter, Clock, Gift, TrendingUp, CheckCircle, AlertCircle } from "lucide-react"

interface Airdrop {
  id: string
  name: string
  symbol: string
  description: string
  logo: string
  status: "upcoming" | "active" | "ended" | "claimed"
  category: string
  blockchain: string
  totalReward: string
  participants: number
  maxParticipants?: number
  startDate: string
  endDate: string
  requirements: string[]
  claimAmount?: string
  website: string
  twitter: string
  discord?: string
  difficulty: "Easy" | "Medium" | "Hard"
  estimatedValue: string
}

export default function AirdropsPage() {
  const [airdrops, setAirdrops] = useState<Airdrop[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [walletConnected, setWalletConnected] = useState(false)

  const categories = [
    { id: "all", name: "All Categories", color: "bg-primary" },
    { id: "defi", name: "DeFi", color: "bg-green-500" },
    { id: "memecoin", name: "Memecoins", color: "bg-purple-500" },
    { id: "nft", name: "NFTs", color: "bg-pink-500" },
    { id: "gaming", name: "Gaming", color: "bg-blue-500" },
    { id: "layer2", name: "Layer 2", color: "bg-orange-500" },
  ]

  const statusFilters = [
    { id: "all", name: "All Status" },
    { id: "upcoming", name: "Upcoming" },
    { id: "active", name: "Active" },
    { id: "ended", name: "Ended" },
    { id: "claimed", name: "Claimed" },
  ]

  useEffect(() => {
    fetchAirdrops()
  }, [])

  const fetchAirdrops = async () => {
    setLoading(true)
    try {
      // Simulate API call - in production, this would fetch from a real API
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setAirdrops(getMockAirdrops())
    } catch (error) {
      console.error("Error fetching airdrops:", error)
    } finally {
      setLoading(false)
    }
  }

  const filteredAirdrops = airdrops.filter((airdrop) => {
    const matchesSearch =
      airdrop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airdrop.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || airdrop.category === selectedCategory
    const matchesStatus = selectedStatus === "all" || airdrop.status === selectedStatus

    return matchesSearch && matchesCategory && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-500"
      case "active":
        return "bg-green-500"
      case "ended":
        return "bg-gray-500"
      case "claimed":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "upcoming":
        return <Clock className="h-4 w-4" />
      case "active":
        return <Gift className="h-4 w-4" />
      case "ended":
        return <AlertCircle className="h-4 w-4" />
      case "claimed":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Airdrop Discovery</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Discover and claim the latest Solana airdrops. Never miss free tokens again!
            </p>
            <WalletConnectButton
              onConnect={() => setWalletConnected(true)}
              onDisconnect={() => setWalletConnected(false)}
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">{airdrops.length}</div>
                <div className="text-sm text-muted-foreground">Total Airdrops</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-500">
                  {airdrops.filter((a) => a.status === "active").length}
                </div>
                <div className="text-sm text-muted-foreground">Active Now</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-500">
                  {airdrops.filter((a) => a.status === "upcoming").length}
                </div>
                <div className="text-sm text-muted-foreground">Upcoming</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-500">$2.4M+</div>
                <div className="text-sm text-muted-foreground">Total Value</div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search airdrops..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button onClick={fetchAirdrops} disabled={loading}>
                <TrendingUp className="mr-2 h-4 w-4" />
                Refresh
              </Button>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? category.color : ""}
                >
                  <Filter className="mr-1 h-3 w-3" />
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Status Filters */}
            <div className="flex flex-wrap gap-2">
              {statusFilters.map((status) => (
                <Button
                  key={status.id}
                  variant={selectedStatus === status.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedStatus(status.id)}
                >
                  {selectedStatus === status.id && getStatusIcon(status.id)}
                  <span className={selectedStatus === status.id ? "ml-1" : ""}>{status.name}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Airdrops Grid */}
          {loading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="h-3 bg-muted rounded"></div>
                      <div className="h-3 bg-muted rounded w-2/3"></div>
                      <div className="h-8 bg-muted rounded"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <>
              {filteredAirdrops.length === 0 ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Gift className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No airdrops found matching your criteria.</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredAirdrops.map((airdrop) => (
                    <AirdropCard key={airdrop.id} airdrop={airdrop} walletConnected={walletConnected} />
                  ))}
                </div>
              )}
            </>
          )}

          {/* Featured Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Featured Opportunities</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-purple-500" />
                    Exclusive Airdrop Alert
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Get notified about exclusive airdrops before they go public. Join our premium alert system.
                  </p>
                  <Button className="w-full bg-purple-500 hover:bg-purple-600">Join Premium Alerts</Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    Airdrop Farming Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Learn advanced strategies to maximize your airdrop earnings with our comprehensive guide.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn Strategies
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function getMockAirdrops(): Airdrop[] {
  return [
    {
      id: "1",
      name: "BlockBit Protocol",
      symbol: "SMEME",
      description: "Revolutionary memecoin protocol on Solana with automated yield farming and community governance.",
      logo: "/blockchain-cryptocurrency-logo-emerald-green.jpg",
      status: "active",
      category: "memecoin",
      blockchain: "Solana",
      totalReward: "10,000,000 SMEME",
      participants: 15420,
      maxParticipants: 50000,
      startDate: "2024-01-15",
      endDate: "2024-02-15",
      requirements: ["Hold 0.1 SOL", "Follow Twitter", "Join Discord", "Complete tasks"],
      claimAmount: "500 SMEME",
      website: "https://blockbit.io",
      twitter: "https://twitter.com/blockbit",
      discord: "https://discord.gg/blockbit",
      difficulty: "Easy",
      estimatedValue: "$125",
    },
    {
      id: "2",
      name: "DeFi Boost",
      symbol: "BOOST",
      description: "Next-generation DeFi yield optimizer with cross-chain capabilities and automated strategies.",
      logo: "/defi-protocol-logo-blue-gradient.jpg",
      status: "upcoming",
      category: "defi",
      blockchain: "Solana",
      totalReward: "5,000,000 BOOST",
      participants: 0,
      maxParticipants: 25000,
      startDate: "2024-02-01",
      endDate: "2024-03-01",
      requirements: ["Provide liquidity", "Stake tokens", "Refer 3 friends"],
      website: "https://defiboost.io",
      twitter: "https://twitter.com/defiboost",
      difficulty: "Medium",
      estimatedValue: "$200",
    },
    {
      id: "3",
      name: "Pixel Warriors",
      symbol: "PIXEL",
      description: "Play-to-earn NFT game with unique pixel art characters and blockchain-based battles.",
      logo: "/pixel-art-gaming-nft-character.jpg",
      status: "active",
      category: "gaming",
      blockchain: "Solana",
      totalReward: "2,500,000 PIXEL",
      participants: 8750,
      maxParticipants: 15000,
      startDate: "2024-01-10",
      endDate: "2024-02-10",
      requirements: ["Play 10 games", "Own 1 NFT", "Complete tutorial"],
      claimAmount: "250 PIXEL",
      website: "https://pixelwarriors.game",
      twitter: "https://twitter.com/pixelwarriors",
      difficulty: "Easy",
      estimatedValue: "$75",
    },
    {
      id: "4",
      name: "Layer Zero Bridge",
      symbol: "LZB",
      description: "Cross-chain bridge protocol enabling seamless asset transfers between multiple blockchains.",
      logo: "/blockchain-bridge-network-orange.jpg",
      status: "upcoming",
      category: "layer2",
      blockchain: "Solana",
      totalReward: "8,000,000 LZB",
      participants: 0,
      maxParticipants: 40000,
      startDate: "2024-02-20",
      endDate: "2024-03-20",
      requirements: ["Bridge $100+", "Use 3 different chains", "Hold for 30 days"],
      website: "https://layerzerobridge.io",
      twitter: "https://twitter.com/layerzerobridge",
      difficulty: "Hard",
      estimatedValue: "$300",
    },
    {
      id: "5",
      name: "Meme Factory",
      symbol: "MFAC",
      description: "Community-driven meme creation platform with tokenized memes and viral rewards system.",
      logo: "/meme-coin-factory-purple-gradient.jpg",
      status: "ended",
      category: "memecoin",
      blockchain: "Solana",
      totalReward: "15,000,000 MFAC",
      participants: 45000,
      maxParticipants: 50000,
      startDate: "2023-12-01",
      endDate: "2024-01-01",
      requirements: ["Create 5 memes", "Get 100 likes", "Share on social"],
      website: "https://memefactory.fun",
      twitter: "https://twitter.com/memefactory",
      difficulty: "Medium",
      estimatedValue: "$180",
    },
    {
      id: "6",
      name: "NFT Marketplace Pro",
      symbol: "NFTMP",
      description: "Advanced NFT marketplace with AI-powered pricing and cross-chain compatibility.",
      logo: "/nft-marketplace-digital-art-pink.jpg",
      status: "claimed",
      category: "nft",
      blockchain: "Solana",
      totalReward: "3,000,000 NFTMP",
      participants: 12000,
      maxParticipants: 20000,
      startDate: "2023-11-15",
      endDate: "2023-12-15",
      requirements: ["Trade 5 NFTs", "List 1 NFT", "Verify profile"],
      claimAmount: "400 NFTMP",
      website: "https://nftmarketplacepro.io",
      twitter: "https://twitter.com/nftmarketplacepro",
      difficulty: "Easy",
      estimatedValue: "$95",
    },
  ]
}
