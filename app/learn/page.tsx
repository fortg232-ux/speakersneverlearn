import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Shield, Coins, TrendingUp, Clock, Users, Star } from "lucide-react"
import Link from "next/link"

export default function LearnPage() {
  const courses = [
    {
      id: "crypto-basics",
      title: "Crypto Basics",
      description: "Master the fundamentals of cryptocurrency, blockchain, and digital assets",
      icon: BookOpen,
      difficulty: "Beginner",
      duration: "2 hours",
      lessons: 8,
      progress: 0,
      students: "12.5K",
      rating: 4.9,
      color: "bg-blue-500",
    },
    {
      id: "defi-guide",
      title: "DeFi Guide",
      description: "Learn decentralized finance protocols, yield farming, and liquidity provision",
      icon: TrendingUp,
      difficulty: "Intermediate",
      duration: "3 hours",
      lessons: 12,
      progress: 0,
      students: "8.2K",
      rating: 4.8,
      color: "bg-green-500",
    },
    {
      id: "airdrop-strategies",
      title: "Airdrop Strategies",
      description: "Discover proven methods to find and claim profitable airdrops",
      icon: Coins,
      difficulty: "Intermediate",
      duration: "1.5 hours",
      lessons: 6,
      progress: 0,
      students: "15.3K",
      rating: 4.9,
      color: "bg-purple-500",
    },
    {
      id: "security",
      title: "Keep Your Crypto Safe",
      description: "Essential security practices to protect your digital assets",
      icon: Shield,
      difficulty: "Beginner",
      duration: "1 hour",
      lessons: 5,
      progress: 0,
      students: "9.7K",
      rating: 5.0,
      color: "bg-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Learn Crypto</h1>
            <p className="text-xl text-muted-foreground">
              Master cryptocurrency trading, DeFi, and security with our comprehensive courses
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {courses.map((course, index) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${course.color} text-white`}>
                        <course.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{course.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary">{course.difficulty}</Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{course.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{course.description}</p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>

                  <Link href={`/learn/${course.id}`}>
                    <Button className="w-full">{course.progress > 0 ? "Continue Learning" : "Start Course"}</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Become a Crypto Expert?</h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of students who have mastered crypto trading and DeFi
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Your Journey
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
