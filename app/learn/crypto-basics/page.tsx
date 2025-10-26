"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, ArrowLeft, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

export default function CryptoBasicsPage() {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [completedLessons, setCompletedLessons] = useState<number[]>([])

  const lessons = [
    {
      title: "What is Cryptocurrency?",
      content: `Cryptocurrency is a digital or virtual currency that uses cryptography for security. Unlike traditional currencies issued by governments (fiat currencies), cryptocurrencies operate on decentralized networks based on blockchain technology.

Key characteristics:
• **Decentralized**: No central authority controls it
• **Secure**: Uses cryptographic techniques
• **Transparent**: All transactions are recorded on a public ledger
• **Global**: Can be sent anywhere in the world
• **24/7**: Markets never close

The first and most well-known cryptocurrency is Bitcoin, created in 2009 by an anonymous person or group known as Satoshi Nakamoto.`,
      quiz: {
        question: "What makes cryptocurrency different from traditional money?",
        options: [
          "It's only digital",
          "It's decentralized and uses cryptography",
          "It's more expensive",
          "It's only for tech experts",
        ],
        correct: 1,
      },
    },
    {
      title: "Understanding Blockchain",
      content: `Blockchain is the underlying technology that powers most cryptocurrencies. Think of it as a digital ledger that records transactions across many computers in a way that makes it nearly impossible to change, hack, or cheat.

How it works:
• **Blocks**: Groups of transactions bundled together
• **Chain**: Blocks linked chronologically using cryptography
• **Distributed**: Copies exist on thousands of computers worldwide
• **Immutable**: Once recorded, transactions cannot be easily altered

Benefits:
• Transparency: All transactions are visible
• Security: Extremely difficult to hack
• No intermediaries: Direct peer-to-peer transactions
• Global access: Available to anyone with internet`,
      quiz: {
        question: "What is a blockchain?",
        options: [
          "A type of cryptocurrency",
          "A digital ledger of transactions",
          "A computer program",
          "A trading platform",
        ],
        correct: 1,
      },
    },
    {
      title: "Types of Cryptocurrencies",
      content: `There are thousands of cryptocurrencies, each with different purposes and features:

**Bitcoin (BTC)**
• The first cryptocurrency
• Digital gold and store of value
• Limited supply of 21 million coins

**Ethereum (ETH)**
• Smart contract platform
• Powers decentralized applications (dApps)
• Second-largest cryptocurrency

**Solana (SOL)**
• High-speed blockchain
• Low transaction fees
• Popular for DeFi and NFTs

**Stablecoins (USDT, USDC)**
• Pegged to stable assets like USD
• Reduce volatility
• Used for trading and payments

**Memecoins (DOGE, SHIB)**
• Started as jokes or memes
• Community-driven
• Highly volatile but popular`,
      quiz: {
        question: "What is the main purpose of stablecoins?",
        options: ["To make profits", "To reduce volatility", "To replace Bitcoin", "To create memes"],
        correct: 1,
      },
    },
    {
      title: "Crypto Wallets",
      content: `A cryptocurrency wallet is a digital tool that allows you to store, send, and receive cryptocurrencies. It doesn't actually store coins but holds the keys to access them on the blockchain.

**Types of Wallets:**

**Hot Wallets (Online)**
• Software wallets on your phone/computer
• Easy to use for daily transactions
• More vulnerable to hacks
• Examples: MetaMask, Trust Wallet

**Cold Wallets (Offline)**
• Hardware devices or paper wallets
• Maximum security for long-term storage
• Less convenient for frequent use
• Examples: Ledger, Trezor

**Key Concepts:**
• **Public Key**: Your wallet address (like an email address)
• **Private Key**: Secret key to access your funds (like a password)
• **Seed Phrase**: 12-24 words to recover your wallet

Remember: "Not your keys, not your crypto!"`,
      quiz: {
        question: "What's the difference between hot and cold wallets?",
        options: [
          "Hot wallets are more expensive",
          "Cold wallets are offline and more secure",
          "Hot wallets only store Bitcoin",
          "There's no difference",
        ],
        correct: 1,
      },
    },
    {
      title: "How to Buy Cryptocurrency",
      content: `Getting started with cryptocurrency is easier than ever. Here's a step-by-step guide:

**Step 1: Choose an Exchange**
• Centralized exchanges: Coinbase, Binance, Kraken
• Easy to use, good for beginners
• Require identity verification

**Step 2: Complete Verification**
• Provide ID and personal information
• This is required by law (KYC/AML)
• Usually takes 1-3 days

**Step 3: Add Payment Method**
• Bank account (lowest fees)
• Debit/credit card (instant but higher fees)
• PayPal or other methods

**Step 4: Buy Cryptocurrency**
• Start with small amounts
• Consider dollar-cost averaging
• Popular starter coins: Bitcoin, Ethereum

**Step 5: Secure Your Investment**
• Transfer to your own wallet
• Never share private keys
• Enable two-factor authentication

**Pro Tips:**
• Start small and learn
• Only invest what you can afford to lose
• Do your own research (DYOR)`,
      quiz: {
        question: "What's the best strategy for beginners buying crypto?",
        options: [
          "Buy as much as possible immediately",
          "Start small and learn gradually",
          "Only buy memecoins",
          "Wait for prices to crash",
        ],
        correct: 1,
      },
    },
    {
      title: "Reading Crypto Charts",
      content: `Understanding price charts is crucial for making informed decisions in crypto trading.

**Basic Chart Types:**

**Line Charts**
• Shows closing prices over time
• Good for seeing overall trends
• Simple and easy to read

**Candlestick Charts**
• Shows open, high, low, close prices
• Green/white = price went up
• Red/black = price went down
• Most detailed information

**Key Indicators:**
• **Moving Averages**: Smooth out price action
• **Volume**: How much was traded
• **Support/Resistance**: Price levels where buying/selling occurs

**Time Frames:**
• 1m, 5m, 15m: Day trading
• 1h, 4h: Swing trading
• 1d, 1w: Long-term investing

**Reading the Market:**
• **Bull Market**: Prices generally rising
• **Bear Market**: Prices generally falling
• **Sideways**: Prices moving in a range

Remember: Past performance doesn't guarantee future results!`,
      quiz: {
        question: "What does a green candlestick indicate?",
        options: ["Price went down", "Price went up", "High volume", "Market is closed"],
        correct: 1,
      },
    },
    {
      title: "Common Crypto Terms",
      content: `The crypto world has its own language. Here are essential terms you need to know:

**Trading Terms:**
• **HODL**: Hold On for Dear Life (long-term holding)
• **FOMO**: Fear of Missing Out
• **FUD**: Fear, Uncertainty, and Doubt
• **ATH**: All-Time High
• **ATL**: All-Time Low
• **Pump**: Rapid price increase
• **Dump**: Rapid price decrease

**Technical Terms:**
• **Hash**: Unique identifier for transactions
• **Mining**: Process of validating transactions
• **Staking**: Earning rewards by holding coins
• **Fork**: Changes to blockchain protocol
• **Gas**: Transaction fees on Ethereum

**Community Terms:**
• **Diamond Hands**: Strong holders who don't sell
• **Paper Hands**: Weak holders who sell quickly
• **Whale**: Someone with large crypto holdings
• **Ape**: Buying without research
• **Moon/Mooning**: Expecting huge price increases
• **Rekt**: Losing money badly

**DeFi Terms:**
• **Yield Farming**: Earning rewards by providing liquidity
• **Liquidity Pool**: Funds locked in smart contracts
• **DEX**: Decentralized Exchange
• **TVL**: Total Value Locked`,
      quiz: {
        question: "What does HODL mean in crypto?",
        options: ["Sell immediately", "Hold for long term", "Trade frequently", "Avoid crypto"],
        correct: 1,
      },
    },
    {
      title: "Crypto Risks and Safety",
      content: `Cryptocurrency investing comes with significant risks. Understanding them is crucial for protecting your investment.

**Market Risks:**
• **Volatility**: Prices can swing wildly
• **Regulatory Risk**: Government actions can affect prices
• **Technology Risk**: Bugs or hacks in protocols
• **Liquidity Risk**: Difficulty selling some coins

**Security Risks:**
• **Exchange Hacks**: Centralized exchanges can be compromised
• **Phishing**: Fake websites stealing your information
• **Scams**: Ponzi schemes, fake projects, rug pulls
• **Lost Keys**: Losing access to your wallet forever

**Safety Best Practices:**
• Use reputable exchanges and wallets
• Enable two-factor authentication
• Keep software updated
• Use strong, unique passwords
• Store large amounts in cold storage
• Never share private keys or seed phrases
• Be skeptical of "guaranteed" returns
• Verify website URLs carefully

**Red Flags to Avoid:**
• Promises of guaranteed profits
• Pressure to invest quickly
• Unlicensed investment advisors
• Projects with anonymous teams
• Too-good-to-be-true returns

**Golden Rules:**
• Only invest what you can afford to lose
• Do your own research (DYOR)
• Diversify your investments
• Start small and learn gradually`,
      quiz: {
        question: "What's the most important rule for crypto investing?",
        options: [
          "Buy as much as possible",
          "Only invest what you can afford to lose",
          "Follow social media tips",
          "Invest in every new coin",
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
              <BookOpen className="h-5 w-5 text-primary" />
              <h1 className="text-2xl font-bold">Crypto Basics</h1>
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
