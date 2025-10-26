"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Search, ExternalLink, Clock, TrendingUp, Filter } from "lucide-react"
import Link from "next/link"

interface NewsArticle {
  id: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  source: {
    name: string
  }
  category?: string
}

export default function NewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [error, setError] = useState<string | null>(null)

  const categories = [
    { id: "all", name: "All News", color: "bg-primary" },
    { id: "bitcoin", name: "Bitcoin", color: "bg-orange-500" },
    { id: "ethereum", name: "Ethereum", color: "bg-blue-500" },
    { id: "solana", name: "Solana", color: "bg-purple-500" },
    { id: "defi", name: "DeFi", color: "bg-green-500" },
    { id: "nft", name: "NFTs", color: "bg-pink-500" },
    { id: "regulation", name: "Regulation", color: "bg-red-500" },
  ]

  useEffect(() => {
    fetchNews()
  }, [selectedCategory])

  const fetchNews = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/crypto-news?category=${selectedCategory}`)
      if (!response.ok) {
        throw new Error("Failed to fetch news")
      }
      const data = await response.json()
      setArticles(data.articles || [])
    } catch (err) {
      setError("Failed to load news. Please try again later.")
      console.error("Error fetching news:", err)
    } finally {
      setLoading(false)
    }
  }

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) return "Just now"
    if (diffInHours < 24) return `${diffInHours}h ago`
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays < 7) return `${diffInDays}d ago`
    return date.toLocaleDateString()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Crypto News
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stay updated with the latest cryptocurrency news and market insights
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search news articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button onClick={fetchNews} disabled={loading}>
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
          </div>

          {/* Error State */}
          {error && (
            <Card className="mb-8 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
              <CardContent className="p-6 text-center">
                <p className="text-red-800 dark:text-red-400">{error}</p>
                <Button onClick={fetchNews} className="mt-4">
                  Try Again
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Loading State */}
          {loading && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i}>
                  <CardHeader className="p-0">
                    <Skeleton className="h-48 w-full rounded-t-lg" />
                  </CardHeader>
                  <CardContent className="p-4 space-y-3">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* News Articles */}
          {!loading && !error && (
            <>
              {filteredArticles.length === 0 ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <p className="text-muted-foreground">No articles found matching your search.</p>
                  </CardContent>
                </Card>
              ) : (
                <>
                  <div className="mb-6 flex items-center justify-between">
                    <p className="text-muted-foreground">{filteredArticles.length} articles found</p>
                    <Badge variant="outline" className="border-green-500/50 bg-green-500/10">
                      <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse mr-2" />
                      Live Updates
                    </Badge>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredArticles.map((article, index) => (
                      <Card
                        key={article.id || index}
                        className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden border-border/50 hover:border-primary/50"
                      >
                        <CardHeader className="p-0">
                          <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20">
                            <img
                              src={
                                article.urlToImage ||
                                `/placeholder.svg?height=200&width=400&query=cryptocurrency news ${article.source.name || "/placeholder.svg"}`
                              }
                              alt={article.title}
                              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.src = `/placeholder.svg?height=200&width=400&query=crypto news blockchain`
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Badge className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm text-foreground border-border/50">
                              {article.source.name}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                <span>{formatTimeAgo(article.publishedAt)}</span>
                              </div>
                            </div>

                            <h3 className="font-semibold line-clamp-2 leading-tight text-balance group-hover:text-primary transition-colors">
                              {article.title}
                            </h3>

                            {article.description && (
                              <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                                {article.description}
                              </p>
                            )}

                            <Link href={article.url} target="_blank" rel="noopener noreferrer">
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full bg-transparent hover:bg-primary/10 hover:border-primary/50 group/btn"
                              >
                                <span className="group-hover/btn:mr-1 transition-all">Read Full Article</span>
                                <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              )}
            </>
          )}

          <div className="mt-12">
            <Card className="bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 border-primary/20 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                    <span className="font-semibold">Live Market Updates</span>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="animate-scroll whitespace-nowrap text-sm text-muted-foreground font-mono">
                      <span className="text-green-500">BTC +2.5%</span> •{" "}
                      <span className="text-green-500">ETH +1.8%</span> •{" "}
                      <span className="text-green-500">SOL +5.2%</span> •{" "}
                      <span className="text-red-500">BNB -0.3%</span> •{" "}
                      <span className="text-green-500">ADA +3.1%</span> •{" "}
                      <span className="text-green-500">MATIC +2.9%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
