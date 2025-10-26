"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, ArrowLeft, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function DeFiGuidePage() {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [completedLessons, setCompletedLessons] = useState<number[]>([])

  const lessons = [
    {
      title: "What is DeFi?",
      content: `Decentralized Finance (DeFi) refers to a blockchain-based form of finance that does not rely on central financial intermediaries such as brokerages, exchanges, or banks.

**Key Principles:**
• **Decentralization**: No central authority controls the system
• **Permissionless**: Anyone can participate without approval
• **Transparent**: All transactions are visible on the blockchain
• **Composable**: DeFi protocols can be combined like building blocks
• **Global**: Accessible to anyone with an internet connection

**Traditional Finance vs DeFi:**

Traditional Finance:
• Banks control your money
• Limited operating hours
• Geographic restrictions
• High fees and slow transfers
• Requires intermediaries

DeFi:
• You control your money
• 24/7 availability
• Global access
• Lower fees and fast transfers
• Direct peer-to-peer transactions

**Popular DeFi Protocols:**
• Uniswap: Decentralized exchange
• Aave: Lending and borrowing
• Compound: Interest earning
• MakerDAO: Stablecoin creation`,
      quiz: {
        question: "What makes DeFi different from traditional finance?",
        options: [
          "It's only for tech experts",
          "It's decentralized and permissionless",
          "It's more expensive",
          "It only works with Bitcoin",
        ],
        correct: 1,
      },
    },
    {
      title: "Decentralized Exchanges (DEXs)",
      content: `Decentralized Exchanges allow you to trade cryptocurrencies directly with other users without a central authority.

**How DEXs Work:**
• **Automated Market Makers (AMMs)**: Use algorithms to set prices
• **Liquidity Pools**: Users provide funds for trading
• **Smart Contracts**: Execute trades automatically
• **No KYC**: Trade without identity verification

**Popular DEXs:**
• **Uniswap**: Largest Ethereum DEX
• **PancakeSwap**: Binance Smart Chain DEX
• **Raydium**: Solana-based DEX
• **SushiSwap**: Community-owned DEX

**Advantages:**
• No central point of failure
• Lower fees than centralized exchanges
• No account creation required
• Global access
• You control your funds

**Disadvantages:**
• Can be complex for beginners
• Gas fees can be high
• Less liquidity for some pairs
• No customer support
• Permanent loss risk

**Trading on DEXs:**
1. Connect your wallet
2. Select trading pair
3. Set slippage tolerance
4. Confirm transaction
5. Pay gas fees`,
      quiz: {
        question: "What powers most decentralized exchanges?",
        options: ["Central servers", "Automated Market Makers", "Bank partnerships", "Government regulation"],
        correct: 1,
      },
    },
    {
      title: "Liquidity Pools & Yield Farming",
      content: `Liquidity pools are the backbone of DeFi, enabling trading and earning opportunities.

**What are Liquidity Pools?**
• Smart contracts containing pairs of tokens
• Enable trading without order books
• Users provide liquidity and earn fees
• Prices determined by token ratios

**How to Provide Liquidity:**
1. Choose a trading pair (e.g., ETH/USDC)
2. Deposit equal values of both tokens
3. Receive LP (Liquidity Provider) tokens
4. Earn trading fees from the pool

**Yield Farming:**
• Strategy to maximize returns on crypto holdings
• Provide liquidity to earn rewards
• Often involves multiple protocols
• Can include governance tokens as rewards

**Popular Yield Farming Strategies:**
• **Single Asset Staking**: Stake one token for rewards
• **LP Token Farming**: Provide liquidity and stake LP tokens
• **Yield Aggregators**: Protocols that optimize yields automatically
• **Leveraged Farming**: Borrow to increase position size

**Risks:**
• **Impermanent Loss**: Value changes when providing liquidity
• **Smart Contract Risk**: Bugs or exploits
• **Rug Pulls**: Developers abandon projects
• **High Gas Fees**: Ethereum network congestion

**Calculating Returns:**
• APY: Annual Percentage Yield
• APR: Annual Percentage Rate
• Consider gas fees and risks
• Compound rewards for maximum returns`,
      quiz: {
        question: "What is impermanent loss?",
        options: [
          "Losing your private keys",
          "Value changes when providing liquidity",
          "Exchange getting hacked",
          "Government banning crypto",
        ],
        correct: 1,
      },
    },
    {
      title: "Lending & Borrowing",
      content: `DeFi lending protocols allow you to earn interest on your crypto or borrow against your holdings.

**How DeFi Lending Works:**
• Lenders deposit crypto into pools
• Borrowers take loans using collateral
• Interest rates set by supply and demand
• Smart contracts handle everything automatically

**Popular Lending Protocols:**
• **Aave**: Multi-chain lending platform
• **Compound**: Ethereum-based lending
• **Venus**: Binance Smart Chain lending
• **Solend**: Solana lending protocol

**Lending Benefits:**
• Earn passive income on holdings
• No credit checks required
• Instant withdrawals (usually)
• Transparent interest rates
• Global accessibility

**Borrowing Use Cases:**
• Access liquidity without selling assets
• Leverage trading positions
• Tax optimization strategies
• Emergency funds

**Collateralization:**
• Over-collateralized loans (150-200%)
• Prevents defaults and protects lenders
• Liquidation if collateral value drops
• Different assets have different ratios

**Interest Rate Models:**
• **Utilization Rate**: Percentage of funds borrowed
• **Supply Rate**: Interest earned by lenders
• **Borrow Rate**: Interest paid by borrowers
• **Dynamic Rates**: Change based on demand

**Risks:**
• Liquidation risk for borrowers
• Smart contract vulnerabilities
• Interest rate volatility
• Platform-specific risks`,
      quiz: {
        question: "Why are DeFi loans over-collateralized?",
        options: [
          "To make more profit",
          "To prevent defaults and protect lenders",
          "Government requirement",
          "Technical limitation",
        ],
        correct: 1,
      },
    },
    {
      title: "Stablecoins in DeFi",
      content: `Stablecoins are cryptocurrencies designed to maintain stable value, crucial for DeFi operations.

**Types of Stablecoins:**

**Fiat-Collateralized:**
• Backed by traditional currencies
• Examples: USDC, USDT, BUSD
• Most stable but centralized
• Require trust in issuer

**Crypto-Collateralized:**
• Backed by other cryptocurrencies
• Examples: DAI, sUSD
• Over-collateralized for stability
• More decentralized

**Algorithmic:**
• Use algorithms to maintain peg
• Examples: UST (failed), FRAX
• Most decentralized but riskiest
• Complex mechanisms

**Stablecoin Uses in DeFi:**
• Trading pair base currency
• Yield farming rewards
• Lending and borrowing
• Store of value during volatility
• Cross-border payments

**Popular Stablecoins:**
• **USDC**: Circle's regulated stablecoin
• **USDT**: Tether's widely-used stablecoin
• **DAI**: MakerDAO's decentralized stablecoin
• **FRAX**: Partially algorithmic stablecoin

**Risks:**
• **Depeg Risk**: Losing dollar parity
• **Regulatory Risk**: Government intervention
• **Centralization Risk**: Single point of failure
• **Collateral Risk**: Backing asset problems

**Choosing Stablecoins:**
• Consider decentralization level
• Check audit reports
• Monitor collateralization ratios
• Understand redemption mechanisms`,
      quiz: {
        question: "What's the main advantage of crypto-collateralized stablecoins?",
        options: ["They're cheaper", "They're more decentralized", "They're faster", "They're government-backed"],
        correct: 1,
      },
    },
    {
      title: "DeFi on Solana",
      content: `Solana has become a major DeFi ecosystem due to its speed and low costs.

**Why Solana for DeFi?**
• **High Speed**: 65,000+ transactions per second
• **Low Fees**: Fractions of a penny per transaction
• **Growing Ecosystem**: Hundreds of protocols
• **Developer Friendly**: Rust programming language

**Major Solana DeFi Protocols:**

**DEXs:**
• **Raydium**: AMM and liquidity provider
• **Orca**: User-friendly DEX
• **Serum**: Central limit order book
• **Jupiter**: DEX aggregator

**Lending:**
• **Solend**: Leading lending protocol
• **Mango Markets**: Margin trading platform
• **Tulip Protocol**: Yield farming

**Yield Farming:**
• **Marinade**: Liquid staking
• **Saber**: Stablecoin DEX
• **Quarry**: Mining protocol

**Unique Solana Features:**
• **Proof of History**: Faster consensus
• **Parallel Processing**: Multiple transactions simultaneously
• **Low Resource Requirements**: Efficient validation
• **Composability**: Protocols work together seamlessly

**Getting Started on Solana DeFi:**
1. Get a Solana wallet (Phantom, Solflare)
2. Buy SOL for transaction fees
3. Bridge assets from other chains if needed
4. Start with established protocols
5. Always do your own research

**Solana DeFi Risks:**
• Network outages (improving)
• Newer ecosystem (less battle-tested)
• Validator centralization concerns
• Bridge risks when moving assets`,
      quiz: {
        question: "What makes Solana attractive for DeFi?",
        options: [
          "It's the oldest blockchain",
          "High speed and low fees",
          "It's government-backed",
          "It only supports Bitcoin",
        ],
        correct: 1,
      },
    },
  ]

  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({})
  const [showQuizResult, setShowQuizResult] = useState<{ [key: number]: boolean }>({})

  const handleQuizAnswer = (lessonIndex: number, answerIndex: number) => {
    setQuizAnswers((prev) => ({ ...prev, [lessonIndex]: answerIndex }))
    setShowQuizResult((prev) => ({ ...prev, [lessonIndex]: true }))

    if (answerIndex === lessons[lessonIndex].quiz.correct) {
      setTimeout(() => {
        if (!completedLessons.includes(lessonIndex)) {
          setCompletedLessons((prev) => [...prev, lessonIndex])
        }
      }, 1000)
    }
  }

  const progress = (completedLessons.length / lessons.length) * 100

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/learn">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Courses
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <h1 className="text-2xl font-bold">DeFi Guide</h1>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-lg">Course Progress</CardTitle>
                  <div className="space-y-2">
                    <Progress value={progress} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      {completedLessons.length} of {lessons.length} lessons completed
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {lessons.map((lesson, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentLesson(index)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        currentLesson === index ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {completedLessons.includes(index) ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <Circle className="h-4 w-4" />
                        )}
                        <span className="text-sm font-medium">{lesson.title}</span>
                      </div>
                    </button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{lessons[currentLesson].title}</CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        Lesson {currentLesson + 1} of {lessons.length}
                      </Badge>
                    </div>
                    {completedLessons.includes(currentLesson) && <CheckCircle className="h-6 w-6 text-green-500" />}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="prose prose-gray max-w-none">
                    <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                      {lessons[currentLesson].content}
                    </div>
                  </div>

                  {/* Quiz Section */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">Quick Quiz</h3>
                    <div className="space-y-4">
                      <p className="font-medium">{lessons[currentLesson].quiz.question}</p>
                      <div className="space-y-2">
                        {lessons[currentLesson].quiz.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleQuizAnswer(currentLesson, index)}
                            disabled={showQuizResult[currentLesson]}
                            className={`w-full text-left p-3 rounded-lg border transition-colors ${
                              showQuizResult[currentLesson]
                                ? index === lessons[currentLesson].quiz.correct
                                  ? "bg-green-50 border-green-200 text-green-800"
                                  : quizAnswers[currentLesson] === index
                                    ? "bg-red-50 border-red-200 text-red-800"
                                    : "bg-muted"
                                : "hover:bg-muted"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                      {showQuizResult[currentLesson] && (
                        <div
                          className={`p-3 rounded-lg ${
                            quizAnswers[currentLesson] === lessons[currentLesson].quiz.correct
                              ? "bg-green-50 text-green-800"
                              : "bg-red-50 text-red-800"
                          }`}
                        >
                          {quizAnswers[currentLesson] === lessons[currentLesson].quiz.correct
                            ? "Correct! Well done."
                            : "Incorrect. The correct answer is highlighted above."}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between pt-6 border-t">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
                      disabled={currentLesson === 0}
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous
                    </Button>
                    <Button
                      onClick={() => setCurrentLesson(Math.min(lessons.length - 1, currentLesson + 1))}
                      disabled={currentLesson === lessons.length - 1}
                    >
                      Next
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
