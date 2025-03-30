import type React from "react"
import { Activity, Gamepad2, GanttChartSquare, Home, LogOut, Menu, Swords, Trophy, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"

interface NavItemProps {
  icon: React.ElementType
  label: string
  href: string
  active?: boolean
}

function NavItem({ icon: Icon, label, href, active }: NavItemProps) {
  return (
    <Link
      to={href}
      className={cn(
        "w-full px-6 py-3 flex items-center space-x-3 rounded cursor-pointer text-[0.9rem] font-medium transition-colors",
        active ? "bg-zinc-950" : "hover:bg-zinc-900",
      )}
    >
      <Icon size={18} />
      <p>{label}</p>
    </Link>
  )
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = window.location.pathname

  const navItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: Swords, label: "Challenges", href: "/challenges" },
    { icon: Gamepad2, label: "Games", href: "/games" },
    { icon: Activity, label: "Meditation Room", href: "/meditation" },
    { icon: GanttChartSquare, label: "Report Analysis", href: "/reports" },
    { icon: Trophy, label: "Success Stories", href: "/success-stories" },
  ]

  return (
    <div className="w-full dark text-accent-foreground h-screen flex justify-between bg-black p-0 md:p-6 space-x-0 md:space-x-4 overflow-hidden">
      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-10 bg-black p-4 flex justify-between items-center border-b border-zinc-800">
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn3.iconfinder.com/data/icons/education-science-vol-2-1/512/psychology_brain_neuro_mind-512.png"
            alt="MindSync Logo"
            className="w-8"
          />
          <p className="font-semibold text-xl">MindSync</p>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-500">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] bg-black border-zinc-800">
              <div className="flex flex-col h-full py-6">
                <div className="flex items-center justify-start px-4 space-x-2 mb-6">
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/education-science-vol-2-1/512/psychology_brain_neuro_mind-512.png"
                    alt="MindSync Logo"
                    className="w-8"
                  />
                  <p className="font-semibold text-xl">MindSync</p>
                </div>

                <div className="flex-1 space-y-1">
                  {navItems.map((item) => (
                    <NavItem
                      key={item.label}
                      icon={item.icon}
                      label={item.label}
                      href={item.href}
                      active={pathname === item.href}
                    />
                  ))}
                </div>

                <Link
                  to="/login"
                  className="w-full mt-4 px-6 py-2 flex items-center space-x-2 rounded text-red-400 font-medium cursor-pointer justify-center text-sm hover:text-white hover:bg-red-950 transition-colors"
                >
                  <p>Logout</p>
                  <LogOut size={18} className="ml-2" />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="h-full w-[13.5rem] hidden md:flex flex-col space-y-6 pt-4 pb-6">
        <div className="flex items-center justify-start px-4 space-x-2">
          <img
            src="https://cdn3.iconfinder.com/data/icons/education-science-vol-2-1/512/psychology_brain_neuro_mind-512.png"
            className="w-8"
          />
          <p className="font-semibold text-xl">MindSync</p>
        </div>
        <div className="flex-1 space-y-4">
          <Link to={`/dashboard`} className="w-full px-6 py-3 flex items-center space-x-3 rounded bg-zinc-950 hover:bg-zinc-900 cursor-pointer text-[0.9rem] font-medium">
            <Home size={18} />
            <p>Home</p>
          </Link>
          <Link to={`/challenges`} className="w-full px-6 py-3 flex items-center space-x-3 rounded cursor-pointer hover:bg-zinc-900 text-[0.9rem] font-medium">
            <Swords size={18} />
            <p>Challenges</p>
          </Link>
          <Link to={`/games`} className="w-full px-6 py-3 flex items-center space-x-3 rounded cursor-pointer hover:bg-zinc-900 text-[0.9rem] font-medium">
            <Gamepad2 size={18} />
            <p>Games</p>
          </Link>
          <Link to={`/meditation`} className="w-full px-6 py-3 flex items-center space-x-3 rounded cursor-pointer hover:bg-zinc-900 text-[0.9rem] font-medium">
            <Activity size={18} />
            <p>Meditation Room</p>
          </Link>
          <Link to={`/meditaion`} className="w-full px-6 py-3 flex items-center space-x-3 rounded cursor-pointer hover:bg-zinc-900 text-[0.9rem] font-medium">
            <GanttChartSquare size={18} />
            <p>Report Analysis</p>
          </Link>
          <Link to={`/library`} className="w-full px-6 py-3 flex items-center space-x-3 rounded cursor-pointer hover:bg-zinc-900 text-[0.9rem] font-medium">
            <Trophy size={18} />
            <p>Success Stories</p>
          </Link>
        </div>

        <div className="w-full px-6 py-2 flex items-center space-x-2 rounded text-red-400 font-medium cursor-pointer justify-center text-sm hover:text-white hover:bg-red-950">
          <p>Logout</p>
          <LogOut size={18} className="mr-6" />
        </div>
      </nav>

      {/* Main Content */}
      <div className="h-full flex-1 flex flex-col mt-16 md:mt-0 overflow-hidden">{children}</div>
    </div>
  )
}