export async function GET() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=solana,dogwifcoin,bonk,book-of-meme,cat-in-a-dogs-world,jeo-boden,popcat,mog-coin,brett,andy,slerf,mother-iggy&order=market_cap_desc&per_page=12&page=1&sparkline=true&price_change_percentage=1h,24h,7d",
      {
        headers: {
          Accept: "application/json",
        },
        next: { revalidate: 60 }, // Cache for 1 minute
      },
    )

    if (!response.ok) {
      throw new Error("Failed to fetch crypto prices")
    }

    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    console.error("Error fetching crypto prices:", error)

    const fallbackData = [
      {
        id: "solana",
        symbol: "sol",
        name: "Solana",
        image: "https://assets.coingecko.com/coins/images/4128/thumb/solana.png",
        current_price: 98.45,
        price_change_percentage_24h: 5.67,
        price_change_percentage_1h_in_currency: 1.23,
        market_cap: 45000000000,
        total_volume: 2100000000,
      },
      {
        id: "dogwifcoin",
        symbol: "wif",
        name: "dogwifhat",
        image: "https://assets.coingecko.com/coins/images/33566/thumb/dogwifhat.jpg",
        current_price: 2.34,
        price_change_percentage_24h: 12.45,
        price_change_percentage_1h_in_currency: 3.21,
        market_cap: 2300000000,
        total_volume: 180000000,
      },
      {
        id: "book-of-meme",
        symbol: "bome",
        name: "Book of Meme",
        image: "/placeholder-i0x3l.png",
        current_price: 0.0089,
        price_change_percentage_24h: 18.92,
        price_change_percentage_1h_in_currency: 5.67,
        market_cap: 580000000,
        total_volume: 45000000,
      },
      {
        id: "cat-in-a-dogs-world",
        symbol: "mew",
        name: "Cat in a dogs world",
        image: "/placeholder-m009p.png",
        current_price: 0.0067,
        price_change_percentage_24h: 22.15,
        price_change_percentage_1h_in_currency: 7.89,
        market_cap: 650000000,
        total_volume: 38000000,
      },
      {
        id: "popcat",
        symbol: "popcat",
        name: "Popcat",
        image: "/placeholder-ft737.png",
        current_price: 1.45,
        price_change_percentage_24h: 16.78,
        price_change_percentage_1h_in_currency: 4.23,
        market_cap: 1400000000,
        total_volume: 89000000,
      },
      {
        id: "jeo-boden",
        symbol: "boden",
        name: "Jeo Boden",
        image: "/placeholder-fbzzv.png",
        current_price: 0.034,
        price_change_percentage_24h: 28.45,
        price_change_percentage_1h_in_currency: 8.91,
        market_cap: 340000000,
        total_volume: 25000000,
      },
      {
        id: "bonk",
        symbol: "bonk",
        name: "Bonk",
        image: "https://assets.coingecko.com/coins/images/28600/thumb/bonk.jpg",
        current_price: 0.000034,
        price_change_percentage_24h: 8.92,
        price_change_percentage_1h_in_currency: 2.15,
        market_cap: 2100000000,
        total_volume: 95000000,
      },
      {
        id: "slerf",
        symbol: "slerf",
        name: "Slerf",
        image: "/placeholder-1linz.png",
        current_price: 0.23,
        price_change_percentage_24h: 31.67,
        price_change_percentage_1h_in_currency: 9.45,
        market_cap: 230000000,
        total_volume: 18000000,
      },
    ]

    return Response.json(fallbackData)
  }
}
