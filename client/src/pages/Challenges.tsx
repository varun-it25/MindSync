import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AppShell from "@/components/app-shell"
import { Calendar, Clock, Filter, Medal, Plus, Search, Trophy, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function ChallengesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [joinDialogOpen, setJoinDialogOpen] = useState(false)
  const [selectedChallenge, setSelectedChallenge] = useState<any>(null)

  const challenges = [
    {
      id: 1,
      title: "7-Day Mindfulness Challenge",
      description: "Practice mindfulness for 10 minutes every day for a week",
      category: "mindfulness",
      participants: 245,
      duration: "7 days",
      startDate: "Aug 15, 2023",
      points: 250,
      progress: 0,
      status: "upcoming",
    },
    {
      id: 2,
      title: "Stress Reduction Marathon",
      description: "Complete a series of stress-reducing activities over 14 days",
      category: "stress",
      participants: 189,
      duration: "14 days",
      startDate: "Aug 20, 2023",
      points: 500,
      progress: 0,
      status: "upcoming",
    },
    {
      id: 3,
      title: "Focus Improvement Challenge",
      description: "Enhance your concentration through daily exercises",
      category: "focus",
      participants: 312,
      duration: "10 days",
      startDate: "Aug 5, 2023",
      points: 350,
      progress: 60,
      status: "active",
    },
    {
      id: 4,
      title: "Sleep Better Challenge",
      description: "Improve your sleep quality with evening relaxation techniques",
      category: "sleep",
      participants: 278,
      duration: "21 days",
      startDate: "Jul 25, 2023",
      points: 600,
      progress: 75,
      status: "active",
    },
    {
      id: 5,
      title: "Gratitude Journal Challenge",
      description: "Write down three things you're grateful for each day",
      category: "mindfulness",
      participants: 423,
      duration: "30 days",
      startDate: "Jul 1, 2023",
      points: 450,
      progress: 100,
      status: "completed",
    },
    {
      id: 6,
      title: "Digital Detox Weekend",
      description: "Reduce screen time and practice being present",
      category: "mindfulness",
      participants: 156,
      duration: "2 days",
      startDate: "Jul 15, 2023",
      points: 200,
      progress: 100,
      status: "completed",
    },
  ]

  const filteredChallenges = (status: string) => {
    return challenges
      .filter((challenge) => challenge.status === status)
      .filter(
        (challenge) =>
          challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          challenge.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
  }

  const handleJoinChallenge = (challenge: any) => {
    setSelectedChallenge(challenge)
    setJoinDialogOpen(true)
  }

  const confirmJoin = () => {
    // Logic to join challenge would go here
    setJoinDialogOpen(false)
    // Update UI to show challenge as joined
  }

  return (
    <AppShell>
      <div className="flex dark text-accent-foreground flex-col gap-6 p-4 md:p-6 overflow-auto h-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Challenges</h1>
            <p className="text-muted-foreground">Join challenges to improve your mental wellness and earn rewards</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search challenges..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create
            </Button>
          </div>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="active">Active & Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="discover">Discover</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredChallenges("active").map((challenge) => (
                <Card key={challenge.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge>{challenge.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        {challenge.participants}
                      </div>
                    </div>
                    <CardTitle className="mt-2">{challenge.title}</CardTitle>
                    <CardDescription>{challenge.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                          {challenge.duration}
                        </div>
                        <div className="flex items-center">
                          <Trophy className="h-4 w-4 mr-1 text-yellow-500" />
                          {challenge.points} pts
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{challenge.progress}%</span>
                        </div>
                        <Progress value={challenge.progress} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Continue Challenge
                    </Button>
                  </CardFooter>
                </Card>
              ))}

              {filteredChallenges("upcoming").map((challenge) => (
                <Card key={challenge.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge>{challenge.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        {challenge.participants}
                      </div>
                    </div>
                    <CardTitle className="mt-2">{challenge.title}</CardTitle>
                    <CardDescription>{challenge.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                          {challenge.duration}
                        </div>
                        <div className="flex items-center">
                          <Trophy className="h-4 w-4 mr-1 text-yellow-500" />
                          {challenge.points} pts
                        </div>
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>Starts: {challenge.startDate}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" onClick={() => handleJoinChallenge(challenge)}>
                      Join Challenge
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredChallenges("completed").map((challenge) => (
                <Card key={challenge.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge>{challenge.category}</Badge>
                      <Medal className="h-5 w-5 text-yellow-500" />
                    </div>
                    <CardTitle className="mt-2">{challenge.title}</CardTitle>
                    <CardDescription>{challenge.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                          {challenge.duration}
                        </div>
                        <div className="flex items-center">
                          <Trophy className="h-4 w-4 mr-1 text-yellow-500" />
                          {challenge.points} pts earned
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Completed</span>
                          <span>100%</span>
                        </div>
                        <Progress value={100} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Results
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="discover" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Similar content to active tab but with different challenges */}
              <Card className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge>focus</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      412
                    </div>
                  </div>
                  <CardTitle className="mt-2">30-Day Focus Challenge</CardTitle>
                  <CardDescription>Improve your concentration with daily exercises</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                        30 days
                      </div>
                      <div className="flex items-center">
                        <Trophy className="h-4 w-4 mr-1 text-yellow-500" />
                        750 pts
                      </div>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>Starts: Sep 1, 2023</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    onClick={() =>
                      handleJoinChallenge({
                        id: 7,
                        title: "30-Day Focus Challenge",
                        description: "Improve your concentration with daily exercises",
                        category: "focus",
                        participants: 412,
                        duration: "30 days",
                        startDate: "Sep 1, 2023",
                        points: 750,
                      })
                    }
                  >
                    Join Challenge
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge>mindfulness</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      289
                    </div>
                  </div>
                  <CardTitle className="mt-2">Meditation Mastery</CardTitle>
                  <CardDescription>Master different meditation techniques in 21 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                        21 days
                      </div>
                      <div className="flex items-center">
                        <Trophy className="h-4 w-4 mr-1 text-yellow-500" />
                        600 pts
                      </div>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>Starts: Sep 15, 2023</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    onClick={() =>
                      handleJoinChallenge({
                        id: 8,
                        title: "Meditation Mastery",
                        description: "Master different meditation techniques in 21 days",
                        category: "mindfulness",
                        participants: 289,
                        duration: "21 days",
                        startDate: "Sep 15, 2023",
                        points: 600,
                      })
                    }
                  >
                    Join Challenge
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={joinDialogOpen} onOpenChange={setJoinDialogOpen}>
        <DialogContent className="sm:max-w-[425px] dark text-accent-foreground">
          <DialogHeader>
            <DialogTitle>Join Challenge</DialogTitle>
            <DialogDescription>
              Are you ready to commit to this challenge? You'll need to complete all activities to earn the full points.
            </DialogDescription>
          </DialogHeader>

          {selectedChallenge && (
            <div className="space-y-4 py-4">
              <div className="bg-zinc-800 rounded-lg p-4">
                <h3 className="font-medium mb-2">{selectedChallenge.title}</h3>
                <p className="text-sm text-muted-foreground">{selectedChallenge.description}</p>

                <div className="flex justify-between mt-4 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                    {selectedChallenge.duration}
                  </div>
                  <div className="flex items-center">
                    <Trophy className="h-4 w-4 mr-1 text-yellow-500" />
                    {selectedChallenge.points} pts
                  </div>
                </div>
              </div>

              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                <span>Starts: {selectedChallenge.startDate}</span>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setJoinDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={confirmJoin}>Join Challenge</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AppShell>
  )
}