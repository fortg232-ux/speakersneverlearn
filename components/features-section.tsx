import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Newspaper, Gift, Shield, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"

export function FeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Neural Learning Hub",
      description: "Master crypto protocols, DeFi algorithms, and airdrop hunting with our quantum-enhanced guides.",
      href: "/learn",
      gradient: "from-blue-500/20 to-purple-500/20",
      iconBg: "bg-blue-500/20 border-blue-500/30",
      iconColor: "text-blue-400",
    },
    {
      icon: Newspaper,
      title: "Live Data Stream",
      description: "Real-time crypto intelligence and market analysis from trusted neural networks.",
      href: "/news",
      gradient: "from-green-500/20 to-emerald-500/20",
      iconBg: "bg-green-500/20 border-green-500/30",
      iconColor: "text-green-400",
    },
    {
      icon: Gift,
      title: "Airdrop Matrix",
      description: "Discover and claim the latest airdrops through our advanced detection algorithms.",
      href: "/airdrops",
      gradient: "from-primary/20 to-secondary/20",
      iconBg: "bg-primary/20 border-primary/30",
      iconColor: "text-primary",
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Trade with confidence using our military-grade encryption and insurance protocols.",
      href: "/security",
      gradient: "from-orange-500/20 to-red-500/20",
      iconBg: "bg-orange-500/20 border-orange-500/30",
      iconColor: "text-orange-400",
    },
    {
      icon: Zap,
      title: "Hyperspeed Execution",
      description: "Execute trades in nanoseconds on Solana's quantum-enhanced blockchain network.",
      href: "/speed",
      gradient: "from-yellow-500/20 to-amber-500/20",
      iconBg: "bg-yellow-500/20 border-yellow-500/30",
      iconColor: "text-yellow-400",
    },
    {
      icon: TrendingUp,
      title: "AI Analytics Core",
      description: "Make informed decisions with professional-grade charts and predictive market intelligence.",
      href: "/analytics",
      gradient: "from-secondary/20 to-primary/20",
      iconBg: "bg-secondary/20 border-secondary/30",
      iconColor: "text-secondary",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,127,0.1)_0%,transparent_70%)]" />
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Cyberpunk Arsenal
          </h2>
          <p className="text-muted-foreground">
            From neural learning to quantum earning, we've got all the tools for your digital frontier journey
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Link key={feature.title} href={feature.href}>
              <Card
                className={`slide-up hover:shadow-[0_0_30px_rgba(255,0,127,0.3)] transition-all duration-300 cursor-pointer neon-border bg-card/80 backdrop-blur-sm hover:bg-card/90 group bg-gradient-to-br ${feature.gradient}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg border ${feature.iconBg} group-hover:neon-pulse`}
                    >
                      <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                    </div>
                    <CardTitle className="text-lg font-mono">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
