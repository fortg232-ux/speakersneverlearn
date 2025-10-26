import { type NextRequest, NextResponse } from "next/server"

interface NewsAPIResponse {
  status: string
  totalResults: number
  articles: Array<{
    source: { id: string | null; name: string }
    author: string | null
    title: string
    description: string | null
    url: string
    urlToImage: string | null
    publishedAt: string
    content: string | null
  }>
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category") || "all"

  try {
    // Build search query based on category
    let query = "cryptocurrency OR bitcoin OR ethereum OR crypto"

    switch (category) {
      case "bitcoin":
        query = "bitcoin OR BTC"
        break
      case "ethereum":
        query = "ethereum OR ETH"
        break
      case "solana":
        query = "solana OR SOL"
        break
      case "defi":
        query = "DeFi OR decentralized finance"
        break
      case "nft":
        query = "NFT OR non-fungible token"
        break
      case "regulation":
        query = "cryptocurrency regulation OR crypto law"
        break
      default:
        query = "cryptocurrency OR bitcoin OR ethereum OR crypto OR blockchain"
    }

    // Try multiple news sources for better coverage
    const sources = [
      // Primary: NewsAPI (requires API key in production)
      {
        url: `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&pageSize=20&language=en`,
        headers: {
          "X-API-Key": process.env.NEWS_API_KEY || "demo-key",
        },
      },
    ]

    // Fallback to mock data if no API key or in development
    if (!process.env.NEWS_API_KEY) {
      const mockArticles = generateMockNews(category)
      return NextResponse.json({ articles: mockArticles })
    }

    // Try to fetch from NewsAPI
    try {
      const response = await fetch(sources[0].url, {
        headers: sources[0].headers,
        next: { revalidate: 300 }, // Cache for 5 minutes
      })

      if (!response.ok) {
        throw new Error(`NewsAPI error: ${response.status}`)
      }

      const data: NewsAPIResponse = await response.json()

      // Filter and clean the articles
      const cleanedArticles = data.articles
        .filter(
          (article) =>
            article.title &&
            article.description &&
            !article.title.includes("[Removed]") &&
            !article.description.includes("[Removed]"),
        )
        .map((article) => ({
          id: `${article.source.name}-${Date.parse(article.publishedAt)}`,
          title: article.title,
          description: article.description,
          url: article.url,
          urlToImage: article.urlToImage,
          publishedAt: article.publishedAt,
          source: article.source,
          category: category,
        }))

      return NextResponse.json({ articles: cleanedArticles })
    } catch (apiError) {
      console.error("NewsAPI failed, using mock data:", apiError)
      const mockArticles = generateMockNews(category)
      return NextResponse.json({ articles: mockArticles })
    }
  } catch (error) {
    console.error("Error fetching crypto news:", error)

    // Return mock data as fallback
    const mockArticles = generateMockNews(category)
    return NextResponse.json({ articles: mockArticles })
  }
}

function generateMockNews(category: string) {
  const baseArticles = [
    {
      id: "1",
      title: "Bitcoin Reaches New All-Time High as Institutional Adoption Grows",
      description:
        "Bitcoin surged to unprecedented levels today as major corporations continue to add the cryptocurrency to their treasury reserves, signaling growing institutional confidence.",
      url: "https://example.com/bitcoin-ath",
      urlToImage: "/bitcoin-chart-cryptocurrency-trading-screen.jpg",
      publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      source: { name: "CryptoDaily" },
      category: "bitcoin",
    },
    {
      id: "2",
      title: "Ethereum 2.0 Staking Rewards Hit Record Levels",
      description:
        "Ethereum validators are seeing unprecedented returns as network activity surges and staking participation reaches new milestones across the ecosystem.",
      url: "https://example.com/eth-staking",
      urlToImage: "/ethereum-blockchain-network-visualization-blue.jpg",
      publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
      source: { name: "DeFi Pulse" },
      category: "ethereum",
    },
    {
      id: "3",
      title: "Solana DeFi TVL Surpasses $15 Billion Milestone",
      description:
        "The Solana ecosystem continues its rapid growth with total value locked in DeFi protocols reaching a new record, driven by innovative new projects and low transaction costs.",
      url: "https://example.com/solana-tvl",
      urlToImage: "/solana-defi-dashboard-purple-gradient.jpg",
      publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      source: { name: "Solana News" },
      category: "solana",
    },
    {
      id: "4",
      title: "Major DeFi Protocol Launches Cross-Chain Bridge",
      description:
        "A leading decentralized finance protocol has announced the launch of its highly anticipated cross-chain bridge, enabling seamless asset transfers between multiple blockchains.",
      url: "https://example.com/defi-bridge",
      urlToImage: "/blockchain-bridge-network-connection-green.jpg",
      publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
      source: { name: "DeFi Times" },
      category: "defi",
    },
    {
      id: "5",
      title: "NFT Marketplace Sees 300% Surge in Trading Volume",
      description:
        "Non-fungible token trading activity has exploded this week, with several high-profile collections driving unprecedented volume across major marketplaces.",
      url: "https://example.com/nft-surge",
      urlToImage: "/nft-digital-art-marketplace-colorful.jpg",
      publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
      source: { name: "NFT Insider" },
      category: "nft",
    },
    {
      id: "6",
      title: "Crypto Regulation Framework Approved by Major Economy",
      description:
        "A comprehensive cryptocurrency regulatory framework has been approved, providing clear guidelines for digital asset operations and potentially setting a global precedent.",
      url: "https://example.com/crypto-regulation",
      urlToImage: "/government-regulation-legal-documents.jpg",
      publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
      source: { name: "Regulatory Watch" },
      category: "regulation",
    },
    {
      id: "7",
      title: "New Memecoin Gains 1000% in 24 Hours",
      description:
        "A Solana-based memecoin has captured the attention of traders worldwide, experiencing explosive growth and becoming the most traded token on decentralized exchanges.",
      url: "https://example.com/memecoin-pump",
      urlToImage: "/cryptocurrency-price-chart-rocket-moon.jpg",
      publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
      source: { name: "Meme Tracker" },
      category: "all",
    },
    {
      id: "8",
      title: "Crypto Exchange Announces Zero-Fee Trading",
      description:
        "A major cryptocurrency exchange has announced the elimination of trading fees for spot transactions, potentially disrupting the competitive landscape of crypto trading platforms.",
      url: "https://example.com/zero-fees",
      urlToImage: "/crypto-exchange-trading-interface-modern.jpg",
      publishedAt: new Date(Date.now() - 14 * 60 * 60 * 1000).toISOString(),
      source: { name: "Exchange News" },
      category: "all",
    },
  ]

  // Filter articles based on category
  if (category === "all") {
    return baseArticles
  }

  return baseArticles.filter((article) => article.category === category || article.category === "all").slice(0, 6)
}
