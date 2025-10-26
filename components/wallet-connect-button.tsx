"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Wallet, Copy, ExternalLink, LogOut, CheckCircle } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface WalletConnectButtonProps {
  onConnect?: () => void
  onDisconnect?: () => void
}

export function WalletConnectButton({ onConnect, onDisconnect }: WalletConnectButtonProps) {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)

  useEffect(() => {
    checkWalletConnection()
  }, [])

  const checkWalletConnection = async () => {
    try {
      // Check if Phantom wallet is installed
      if (typeof window !== "undefined" && (window as any).solana?.isPhantom) {
        const response = await (window as any).solana.connect({ onlyIfTrusted: true })
        if (response.publicKey) {
          setIsConnected(true)
          setWalletAddress(response.publicKey.toString())
          onConnect?.()
        }
      }
    } catch (error) {
      console.log("Wallet not connected")
    }
  }

  const connectWallet = async () => {
    setIsConnecting(true)
    try {
      // Check if Phantom wallet is installed
      if (typeof window !== "undefined" && (window as any).solana?.isPhantom) {
        const response = await (window as any).solana.connect()
        setIsConnected(true)
        setWalletAddress(response.publicKey.toString())
        onConnect?.()
        toast({
          title: "Wallet Connected",
          description: "Successfully connected to Phantom wallet",
        })
      } else {
        // Redirect to Phantom wallet installation
        window.open("https://phantom.app/", "_blank")
        toast({
          title: "Phantom Wallet Required",
          description: "Please install Phantom wallet to continue",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error)
      toast({
        title: "Connection Failed",
        description: "Failed to connect wallet. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = async () => {
    try {
      if (typeof window !== "undefined" && (window as any).solana?.isPhantom) {
        await (window as any).solana.disconnect()
      }
      setIsConnected(false)
      setWalletAddress(null)
      onDisconnect?.()
      toast({
        title: "Wallet Disconnected",
        description: "Successfully disconnected from wallet",
      })
    } catch (error) {
      console.error("Failed to disconnect wallet:", error)
    }
  }

  const copyAddress = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress)
      toast({
        title: "Address Copied",
        description: "Wallet address copied to clipboard",
      })
    }
  }

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }

  if (!isConnected) {
    return (
      <Button onClick={() => (window as any).interact_button?.()} disabled={isConnecting} className="pulse-glow">
        <Wallet className="mr-2 h-4 w-4" />
        {isConnecting ? "Connecting..." : "Connect Wallet"}
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-green-50 border-green-200 text-green-800 hover:bg-green-100">
          <CheckCircle className="mr-2 h-4 w-4" />
          {walletAddress ? formatAddress(walletAddress) : "Connected"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem onClick={copyAddress}>
          <Copy className="mr-2 h-4 w-4" />
          Copy Address
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => window.open(`https://solscan.io/account/${walletAddress}`, "_blank")}>
          <ExternalLink className="mr-2 h-4 w-4" />
          View on Solscan
        </DropdownMenuItem>
        <DropdownMenuItem onClick={disconnectWallet} className="text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
