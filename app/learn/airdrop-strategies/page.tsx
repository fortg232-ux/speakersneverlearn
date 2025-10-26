"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, ArrowLeft, ArrowRight, Coins } from "lucide-react"
import Link from "next/link"

export default function AirdropStrategiesPage() {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [completedLessons, setCompletedLessons] = useState<number[]>([])

  const lessons = [
    {
      title: "What are Airdrops?",
      content: `Airdrops are free distributions of cryptocurrency tokens to wallet addresses, typically used for marketing, community building, or rewarding early users.

**Types of Airdrops:**

**Standard Airdrops**
• Free tokens sent to existing wallet holders
• Usually require holding specific tokens
• Example: Holding ETH to receive new tokens

**Bounty Airdrops**
• Require completing tasks
• Social media engagement, referrals
• More effort but potentially higher rewards

**Exclusive Airdrops**
• For specific communities or early users
• Often the most valuable
• Require being "in the know"

**Fork Airdrops**
• When blockchains split
• Holders of original token get new tokens
• Example: Bitcoin Cash fork

**Why Projects Do Airdrops:**
• Build community and awareness
• Distribute tokens fairly
• Reward early supporters
• Create network effects
• Generate buzz and media attention

**Famous Successful Airdrops:**
• Uniswap (UNI): $1,200+ per eligible wallet
• Ethereum Name Service (ENS): $8,000+ average
• Aptos (APT): $1,000+ for testnet users
• Arbitrum (ARB): $1,250+ for bridge users

**Airdrop Seasons:**
• Bull markets see more airdrops
• Layer 2 solutions often airdrop
• DeFi protocols reward early users
• NFT projects use airdrops for utility`,
      quiz: {
        question: "What was one of the most valuable airdrops in crypto history?",
        options: ["Dogecoin airdrop", "Uniswap (UNI) airdrop", "Bitcoin airdrop", "Ethereum airdrop"],
        correct: 1,
      },
    },
    {
      title: "Finding Airdrop Opportunities",
      content: `Success in airdrop hunting requires staying informed and being proactive about discovering opportunities.

**Information Sources:**

**Social Media:**
• Twitter: Follow airdrop hunters and project accounts
• Telegram: Join airdrop channels and communities
• Discord: Project-specific servers often announce airdrops
• Reddit: r/CryptoCurrency and project subreddits

**Specialized Platforms:**
• AirdropAlert.com: Comprehensive airdrop listings
• CoinMarketCap Airdrops: Verified opportunities
• Airdrop.io: Community-driven platform
• DeFiPulse: Track DeFi protocol airdrops

**On-Chain Analysis:**
• Look for new protocols launching
• Monitor governance proposals
• Track token distribution plans
• Analyze tokenomics for airdrop allocation

**Early Indicators:**
• Testnet launches (often precede mainnet airdrops)
• VC funding announcements
• Team hiring for "token distribution"
• Community building efforts
• Beta product launches

**Red Flags to Avoid:**
• Asking for private keys or seed phrases
• Requiring upfront payments
• Unverified social media accounts
• Too-good-to-be-true promises
• Pressure to act immediately

**Research Checklist:**
• Verify official project channels
• Check team backgrounds
• Read whitepaper and tokenomics
• Look for audit reports
• Assess community engagement`,
      quiz: {
        question: "What's a major red flag for fake airdrops?",
        options: [
          "Requiring social media follows",
          "Asking for private keys",
          "Having a whitepaper",
          "Being announced on Twitter",
        ],
        correct: 1,
      },
    },
    {
      title: "Qualifying for Airdrops",
      content: `Different airdrops have different qualification criteria. Understanding these helps maximize your chances.

**Common Qualification Methods:**

**Snapshot-Based:**
• Hold specific tokens at a certain date/time
• Wallet must contain minimum amounts
• Some require holding for extended periods
• Example: Hold 0.1 ETH on December 1st

**Activity-Based:**
• Use protocol features before airdrop
• Make transactions, provide liquidity
• Interact with smart contracts
• Example: Trade on DEX before token launch

**Social Tasks:**
• Follow social media accounts
• Share, like, and comment on posts
• Join Telegram or Discord groups
• Refer friends to the project

**Testnet Participation:**
• Use protocol on test networks
• Provide feedback and bug reports
• Often most valuable airdrops
• Requires technical knowledge

**NFT Holdings:**
• Hold specific NFT collections
• Some projects airdrop to NFT communities
• Blue-chip NFTs often get airdrops
• Example: BAYC holders receiving ApeCoin

**Strategies to Maximize Eligibility:**

**Diversification:**
• Participate in multiple opportunities
• Don't put all effort into one project
• Spread across different blockchain ecosystems

**Early Adoption:**
• Be among first users of new protocols
• Higher rewards for early supporters
• Monitor new project launches

**Consistent Activity:**
• Regular transactions show genuine usage
• Avoid obvious farming behavior
• Build natural usage patterns`,
      quiz: {
        question: "What type of airdrop qualification often provides the highest rewards?",
        options: ["Social media tasks", "Testnet participation", "Holding stablecoins", "Following influencers"],
        correct: 1,
      },
    },
    {
      title: "Airdrop Farming Strategies",
      content: `Airdrop farming involves strategically positioning yourself to qualify for multiple airdrops.

**Multi-Chain Strategy:**
• Maintain wallets on multiple blockchains
• Ethereum, Solana, Polygon, Arbitrum, etc.
• Each ecosystem has different opportunities
• Bridge tokens between chains when needed

**DeFi Interaction Strategy:**
• Use new DeFi protocols early
• Provide liquidity to new pools
• Participate in governance voting
• Stake tokens in new protocols

**Layer 2 Strategy:**
• Use Ethereum Layer 2 solutions
• Arbitrum, Optimism, Polygon often airdrop
• Bridge funds and use native applications
• Maintain activity over time

**Testnet Strategy:**
• Participate in testnets of promising projects
• Provide valuable feedback
• Report bugs and issues
• Often leads to mainnet airdrops

**Portfolio Allocation for Airdrops:**
• 60%: Established tokens (ETH, SOL, etc.)
• 25%: New protocol interactions
• 10%: Testnet and experimental
• 5%: High-risk, high-reward opportunities

**Time Management:**
• Set aside specific time for airdrop activities
• Use tools to track opportunities
• Automate where possible (carefully)
• Don't let farming consume all your time

**Cost-Benefit Analysis:**
• Calculate gas fees vs potential rewards
• Consider time investment
• Factor in opportunity costs
• Not all airdrops are worth pursuing

**Advanced Techniques:**
• Sybil farming (multiple wallets)
• Smart contract interactions
• Governance participation
• Community contributions`,
      quiz: {
        question: "What percentage of portfolio should typically be allocated to new protocol interactions?",
        options: ["60%", "25%", "10%", "5%"],
        correct: 1,
      },
    },
    {
      title: "Claiming and Managing Airdrops",
      content: `Successfully claiming airdrops and managing the received tokens is crucial for maximizing value.

**Claiming Process:**

**Preparation:**
• Keep some ETH/SOL for gas fees
• Ensure wallet is connected properly
• Verify official claiming website
• Never share private keys

**Common Claiming Methods:**
• Direct wallet claims (most common)
• Website-based claiming interfaces
• Smart contract interactions
• Merkle tree proofs

**Timing Considerations:**
• Claim early to avoid network congestion
• Some airdrops have expiration dates
• Gas fees vary throughout the day
• Consider market conditions

**Post-Claim Strategy:**

**Immediate Decisions:**
• Hold vs. sell immediately
• Stake for additional rewards
• Provide liquidity for trading fees
• Participate in governance

**Tax Implications:**
• Airdrops are often taxable events
• Record fair market value at receipt
• Keep detailed records
• Consult tax professionals

**Security Best Practices:**
• Use hardware wallets for large amounts
• Never click suspicious links
• Verify all websites and contracts
• Be wary of "dust" attacks

**Token Management:**
• Research tokenomics and vesting
• Understand utility and use cases
• Monitor development progress
• Set price targets for selling

**Common Mistakes to Avoid:**
• Panic selling immediately
• Ignoring tax implications
• Falling for fake claiming sites
• Not researching token utility
• Keeping all tokens in hot wallets

**Maximizing Value:**
• Stake tokens if possible
• Participate in governance for rewards
• Use tokens in protocol ecosystem
• Consider long-term holding potential`,
      quiz: {
        question: "What's important to keep for tax purposes when claiming airdrops?",
        options: [
          "Only the final sale price",
          "Fair market value at receipt",
          "Just the transaction hash",
          "Nothing is needed",
        ],
        correct: 1,
      },
    },
    {
      title: "Advanced Airdrop Techniques",
      content: `Advanced strategies for experienced airdrop hunters looking to maximize opportunities.

**Sybil Farming:**
• Using multiple wallets to increase allocation
• Each wallet must appear as unique user
• Requires significant capital and management
• Higher risk but potentially higher rewards
• Ethical considerations vary by community

**Smart Contract Analysis:**
• Read contract code for airdrop criteria
• Understand snapshot mechanisms
• Identify minimum requirements
• Find optimal interaction patterns

**Governance Participation:**
• Vote on protocol proposals
• Often weighted heavily in airdrops
• Shows long-term commitment
• Requires understanding of proposals

**Community Contributions:**
• Write documentation or tutorials
• Provide customer support
• Create educational content
• Bug bounty participation
• Often leads to special allocations

**Cross-Chain Opportunities:**
• Bridge assets between chains
• Use cross-chain protocols
• Maintain presence on multiple networks
• Bridge timing can affect eligibility

**MEV and Front-Running:**
• Monitor mempool for airdrop announcements
• Use flashbots for private transactions
• Automated claiming strategies
• Requires technical expertise

**Risk Management:**
• Diversify across many opportunities
• Don't invest more than you can lose
• Consider opportunity costs
• Have exit strategies

**Tools and Automation:**
• DeBank for portfolio tracking
• Zapper for DeFi interactions
• Custom scripts for monitoring
• Alert systems for new opportunities

**Staying Ahead:**
• Follow key influencers and researchers
• Join exclusive communities
• Monitor GitHub repositories
• Track VC investments and partnerships`,
      quiz: {
        question: "What advanced technique involves using multiple wallets?",
        options: ["Cross-chain bridging", "Sybil farming", "Governance voting", "Smart contract analysis"],
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
              <Coins className="h-5 w-5 text-purple-500" />
              <h1 className="text-2xl font-bold">Airdrop Strategies</h1>
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
