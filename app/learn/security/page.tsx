"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, ArrowLeft, ArrowRight, Shield } from "lucide-react"
import Link from "next/link"

export default function SecurityPage() {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [completedLessons, setCompletedLessons] = useState<number[]>([])

  const lessons = [
    {
      title: "Wallet Security Fundamentals",
      content: `Your cryptocurrency wallet is your bank account, vault, and identity all in one. Securing it properly is absolutely critical.

**Types of Wallets:**

**Hot Wallets (Online)**
• Software wallets on phones/computers
• Always connected to internet
• Convenient for daily use
• Higher security risk
• Examples: MetaMask, Trust Wallet, Phantom

**Cold Wallets (Offline)**
• Hardware devices or paper wallets
• Offline storage of private keys
• Maximum security for long-term storage
• Less convenient for frequent transactions
• Examples: Ledger, Trezor, KeepKey

**Key Security Concepts:**

**Private Keys**
• Mathematical proof of ownership
• Never share with anyone
• If lost, funds are gone forever
• If stolen, funds can be drained instantly

**Seed Phrases**
• 12-24 word backup of your wallet
• Can restore wallet on any device
• Write down on paper, never digital
• Store in multiple secure locations

**Public Keys/Addresses**
• Safe to share publicly
• Used to receive cryptocurrency
• Like your bank account number
• Cannot be used to steal funds

**Security Best Practices:**
• Use hardware wallets for large amounts
• Never enter seed phrases on websites
• Verify all addresses before sending
• Use different wallets for different purposes
• Keep software updated`,
      quiz: {
        question: "What should you NEVER do with your seed phrase?",
        options: [
          "Write it on paper",
          "Store it digitally online",
          "Keep multiple copies",
          "Use it to restore your wallet",
        ],
        correct: 1,
      },
    },
    {
      title: "Recognizing Scams and Phishing",
      content: `Cryptocurrency scams are extremely common and sophisticated. Learning to recognize them can save you from devastating losses.

**Common Scam Types:**

**Phishing Websites**
• Fake versions of legitimate sites
• Steal login credentials and seed phrases
• Often use similar URLs (metamask.io vs metamask.com)
• Always verify URLs carefully

**Social Media Scams**
• Fake celebrity endorsements
• "Send 1 ETH, get 2 ETH back" schemes
• Impersonation of official accounts
• Fake giveaways and contests

**Romance Scams**
• Build relationships on dating apps
• Eventually ask for crypto investments
• Promise high returns or help with trading
• Extremely manipulative and personal

**Rug Pulls**
• Developers abandon projects after raising funds
• Liquidity suddenly removed from DEXs
• Social media accounts deleted
• Code contains hidden backdoors

**Fake Support**
• Impersonate customer service
• Contact you first (real support doesn't)
• Ask for private keys or seed phrases
• Create urgency to make you act quickly

**Red Flags to Watch For:**
• Guaranteed returns or "risk-free" investments
• Pressure to act immediately
• Requests for private keys or seed phrases
• Unsolicited contact from "support"
• Too-good-to-be-true offers
• Poor grammar and spelling
• Unverified social media accounts

**Protection Strategies:**
• Always verify official websites and social accounts
• Never share private keys or seed phrases
• Be skeptical of unsolicited offers
• Use bookmarks for frequently visited sites
• Enable 2FA on all accounts
• Research projects thoroughly before investing`,
      quiz: {
        question: "What's a major red flag for cryptocurrency scams?",
        options: [
          "Asking you to verify your identity",
          "Requesting your private keys",
          "Requiring email confirmation",
          "Having a professional website",
        ],
        correct: 1,
      },
    },
    {
      title: "Smart Contract Security",
      content: `Smart contracts power most DeFi applications, but they can contain bugs or malicious code that puts your funds at risk.

**Smart Contract Risks:**

**Code Bugs**
• Programming errors that can be exploited
• Can lead to fund drainage or locks
• Even audited contracts can have issues
• Examples: The DAO hack, various DeFi exploits

**Malicious Code**
• Intentionally harmful functions
• Hidden backdoors for developers
• Unlimited token approvals
• Fake or honeypot contracts

**Upgrade Risks**
• Contracts that can be changed by developers
• New versions might be malicious
• Centralization risks
• Always check if contracts are upgradeable

**Due Diligence Steps:**

**Check Audits**
• Look for professional security audits
• Multiple audits are better than one
• Recent audits are more relevant
• Audits don't guarantee safety

**Verify Contract Code**
• Check if code is verified on block explorers
• Look for open-source repositories
• Compare deployed code with repository
• Be wary of unverified contracts

**Research the Team**
• Anonymous teams are higher risk
• Check team backgrounds and experience
• Look for previous successful projects
• Verify social media presence

**Community Feedback**
• Check discussions on forums and social media
• Look for user reports of issues
• Monitor for unusual activity
• Be wary of fake positive reviews

**Safe Interaction Practices:**
• Start with small amounts
• Revoke token approvals regularly
• Use separate wallets for DeFi
• Monitor transactions carefully
• Keep emergency funds separate`,
      quiz: {
        question: "What should you do before interacting with a new smart contract?",
        options: [
          "Invest all your money immediately",
          "Check for audits and research the team",
          "Only look at the potential returns",
          "Follow social media hype",
        ],
        correct: 1,
      },
    },
    {
      title: "Exchange and Platform Security",
      content: `Centralized exchanges and DeFi platforms each have unique security considerations that affect how you should use them.

**Centralized Exchange Security:**

**Exchange Selection Criteria**
• Regulatory compliance and licensing
• Insurance coverage for user funds
• Security track record and transparency
• Financial stability and backing
• User reviews and reputation

**Account Security**
• Use strong, unique passwords
• Enable two-factor authentication (2FA)
• Use authenticator apps, not SMS
• Regularly review account activity
• Set up withdrawal whitelists

**Fund Management**
• Don't keep large amounts on exchanges
• Use exchanges for trading, not storage
• Withdraw to personal wallets regularly
• Understand insurance coverage limits
• Have multiple exchange accounts for diversification

**DeFi Platform Security:**

**Protocol Research**
• Check total value locked (TVL)
• Look for time-tested protocols
• Verify smart contract audits
• Monitor governance decisions
• Understand tokenomics

**Interaction Safety**
• Use official websites only
• Verify contract addresses
• Check transaction details before confirming
• Monitor for unusual behavior
• Keep some funds in cold storage

**Common Platform Risks:**
• Exit scams and rug pulls
• Smart contract exploits
• Governance attacks
• Oracle manipulation
• Bridge vulnerabilities

**Risk Mitigation:**
• Diversify across multiple platforms
• Don't chase extremely high yields
• Understand the risks you're taking
• Have exit strategies planned
• Keep emergency funds accessible`,
      quiz: {
        question: "What's the safest way to use centralized exchanges?",
        options: [
          "Keep all funds on the exchange",
          "Use them for trading, withdraw for storage",
          "Share your account with friends",
          "Disable all security features",
        ],
        correct: 1,
      },
    },
    {
      title: "Advanced Security Practices",
      content: `For serious cryptocurrency users, advanced security practices provide additional layers of protection against sophisticated attacks.

**Multi-Signature Wallets**
• Require multiple signatures for transactions
• Distribute keys among trusted parties
• Protect against single point of failure
• Popular options: Gnosis Safe, Casa

**Hardware Security Modules (HSMs)**
• Professional-grade security devices
• Used by institutions and serious investors
• Tamper-resistant hardware
• Higher cost but maximum security

**Air-Gapped Systems**
• Computers never connected to internet
• Used for generating and storing keys
• Sign transactions offline
• Transfer via QR codes or USB

**Operational Security (OpSec)**
• Compartmentalize your crypto activities
• Use different identities for different purposes
• Avoid discussing holdings publicly
• Be careful about social media posts
• Consider privacy coins for sensitive transactions

**Privacy Protection**
• Use VPNs for crypto activities
• Consider Tor browser for sensitive operations
• Mix coins to break transaction links
• Use different addresses for each transaction
• Be aware of blockchain analysis

**Estate Planning**
• Document your crypto holdings
• Provide secure access instructions
• Consider multi-sig with trusted parties
• Use services like Casa or Unchained Capital
• Regular review and updates

**Incident Response Plan**
• Know what to do if compromised
• Have emergency contacts ready
• Keep records of all transactions
• Know how to report to authorities
• Have backup recovery methods

**Regular Security Audits**
• Review all wallet and exchange accounts
• Check for unauthorized access
• Update all software and firmware
• Rotate passwords and keys periodically
• Test recovery procedures`,
      quiz: {
        question: "What is a multi-signature wallet?",
        options: [
          "A wallet with multiple cryptocurrencies",
          "A wallet requiring multiple signatures for transactions",
          "A wallet with multiple addresses",
          "A wallet for multiple users",
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
              <Shield className="h-5 w-5 text-red-500" />
              <h1 className="text-2xl font-bold">Keep Your Crypto Safe</h1>
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
