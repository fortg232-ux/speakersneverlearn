"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Clock,
  ExternalLink,
  Twitter,
  MessageCircle,
  Gift,
  CheckCircle,
  AlertCircle,
  Calendar,
  Coins,
} from "lucide-react"
import { toast } from "@/hooks/use-toast"

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

interface AirdropCardProps {
  airdrop: Airdrop
  walletConnected: boolean
}

export function AirdropCard({ airdrop, walletConnected }: AirdropCardProps) {
  const [isClaiming, setIsClaiming] = useState(false)
  const [isParticipating, setIsParticipating] = useState(false)

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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
      case "Hard":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const getProgressPercentage = () => {
    if (!airdrop.maxParticipants) return 0
    return (airdrop.participants / airdrop.maxParticipants) * 100
  }

  const handleParticipate = async () => {
    if (typeof window !== "undefined" && (window as any).interact_button) {
      ;(window as any).interact_button()
    }

    setIsParticipating(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast({
        title: "Successfully Joined!",
        description: `You're now participating in the ${airdrop.name} airdrop`,
      })
    } catch (error) {
      toast({
        title: "Participation Failed",
        description: "Failed to join airdrop. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsParticipating(false)
    }
  }

  const handleClaim = async () => {
    if (typeof window !== "undefined" && (window as any).interact_button) {
      ;(window as any).interact_button()
    }

    setIsClaiming(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000))
      toast({
        title: "Tokens Claimed!",
        description: `Successfully claimed ${airdrop.claimAmount} to your wallet`,
      })
    } catch (error) {
      toast({
        title: "Claim Failed",
        description: "Failed to claim tokens. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsClaiming(false)
    }
  }

  return (
    <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden border-border/50 hover:border-primary/50">
      <div className="relative h-32 w-full overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20">
        <img
          src={airdrop.logo || "/placeholder.svg"}
          alt={airdrop.name}
          className="h-full w-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        <div className="absolute -bottom-8 left-6">
          <div className="h-16 w-16 rounded-xl border-4 border-card bg-card shadow-lg overflow-hidden">
            <img src={airdrop.logo || "/placeholder.svg"} alt={airdrop.name} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <CardHeader className="pb-3 pt-10">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2">{airdrop.name}</CardTitle>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary" className="text-xs font-mono">
                {airdrop.symbol}
              </Badge>
              <Badge className={`text-xs ${getStatusColor(airdrop.status)}`}>
                {getStatusIcon(airdrop.status)}
                <span className="ml-1 capitalize">{airdrop.status}</span>
              </Badge>
              <Badge className={getDifficultyColor(airdrop.difficulty)}>{airdrop.difficulty}</Badge>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{airdrop.description}</p>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
            <div className="text-xs text-muted-foreground mb-1">Total Reward</div>
            <div className="font-semibold text-sm">{airdrop.totalReward}</div>
          </div>
          <div className="p-3 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <div className="text-xs text-muted-foreground mb-1">Est. Value</div>
            <div className="font-bold text-sm text-green-600 dark:text-green-400">{airdrop.estimatedValue}</div>
          </div>
        </div>

        {/* Participation Progress */}
        {airdrop.maxParticipants && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Participants</span>
              <span className="font-medium">
                {airdrop.participants.toLocaleString()} / {airdrop.maxParticipants.toLocaleString()}
              </span>
            </div>
            <Progress value={getProgressPercentage()} className="h-2" />
          </div>
        )}

        {/* Dates */}
        <div className="flex items-center justify-between text-xs text-muted-foreground bg-muted/30 p-2 rounded-lg">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{formatDate(airdrop.startDate)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{formatDate(airdrop.endDate)}</span>
          </div>
        </div>

        {/* Requirements */}
        <div>
          <div className="text-sm font-medium mb-2 flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-primary" />
            Requirements
          </div>
          <div className="space-y-1.5">
            {airdrop.requirements.slice(0, 3).map((req, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="h-1.5 w-1.5 bg-primary/60 rounded-full" />
                <span>{req}</span>
              </div>
            ))}
            {airdrop.requirements.length > 3 && (
              <div className="text-xs text-muted-foreground pl-3.5">
                +{airdrop.requirements.length - 3} more requirements
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-2">
          {airdrop.status === "active" && (
            <>
              {airdrop.claimAmount ? (
                <button
                  onClick={handleClaim}
                  disabled={isClaiming}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 font-medium transition-all duration-200 shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30"
                >
                  <Coins className="h-4 w-4" />
                  {isClaiming ? "Claiming..." : `Claim ${airdrop.claimAmount}`}
                </button>
              ) : (
                <button
                  onClick={handleParticipate}
                  disabled={isParticipating}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 font-medium transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                >
                  <Gift className="h-4 w-4" />
                  {isParticipating ? "Joining..." : "Join Airdrop"}
                </button>
              )}
            </>
          )}

          {airdrop.status === "upcoming" && (
            <Button variant="outline" className="w-full bg-transparent" disabled>
              <Clock className="mr-2 h-4 w-4" />
              Starts {formatDate(airdrop.startDate)}
            </Button>
          )}

          {airdrop.status === "ended" && (
            <Button variant="outline" className="w-full bg-transparent" disabled>
              <AlertCircle className="mr-2 h-4 w-4" />
              Airdrop Ended
            </Button>
          )}

          {airdrop.status === "claimed" && (
            <Button
              variant="outline"
              className="w-full bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-400"
              disabled
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              Already Claimed
            </Button>
          )}

          {/* Social Links */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 bg-transparent hover:bg-primary/10 hover:border-primary/50"
              asChild
            >
              <a href={airdrop.website} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 bg-transparent hover:bg-blue-500/10 hover:border-blue-500/50"
              asChild
            >
              <a href={airdrop.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-3 w-3" />
              </a>
            </Button>
            {airdrop.discord && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 bg-transparent hover:bg-purple-500/10 hover:border-purple-500/50"
                asChild
              >
                <a href={airdrop.discord} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-3 w-3" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
