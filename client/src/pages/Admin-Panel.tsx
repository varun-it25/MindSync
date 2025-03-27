import { Activity, Gamepad2, GanttChartSquare, Home, LogOut, Swords, Trophy } from "lucide-react"

export default function Admin_Panel(){
  return (
    <div className="w-screen h-screen dark flex justify-between items-center bg-black text-accent-foreground p-6 space-x-4">

      <nav className="h-full w-[13.5rem] hidden md:flex flex-col space-y-6 pt-4 pb-6">
        <div className="flex items-center justify-start px-4 space-x-2">
          <img src="https://cdn3.iconfinder.com/data/icons/education-science-vol-2-1/512/psychology_brain_neuro_mind-512.png" className="w-8" />
          <p className="font-semibold text-xl">MindSync</p>
        </div>
        <div className="flex-1 space-y-4">
          <div className="w-full px-6 py-3 flex items-center space-x-3 rounded bg-zinc-950 hover:bg-zinc-900 cursor-pointer text-[0.9rem] font-medium">
            <Home size={18} />
            <p>Home</p>
          </div>
          <div className="w-full px-6 py-3 flex items-center space-x-3 rounded cursor-pointer hover:bg-zinc-900 text-[0.9rem] font-medium">
            <Swords size={18} />
            <p>Challenges</p>
          </div>
          <div className="w-full px-6 py-3 flex items-center space-x-3 rounded cursor-pointer hover:bg-zinc-900 text-[0.9rem] font-medium">
            <Gamepad2 size={18} />
            <p>Games</p>
          </div>
          <div className="w-full px-6 py-3 flex items-center space-x-3 rounded cursor-pointer hover:bg-zinc-900 text-[0.9rem] font-medium">
            <Activity size={18} />
            <p>Meditation Room</p>
          </div>
          <div className="w-full px-6 py-3 flex items-center space-x-3 rounded cursor-pointer hover:bg-zinc-900 text-[0.9rem] font-medium">
            <GanttChartSquare size={18} />
            <p>Report Analysis</p>
          </div>
          <div className="w-full px-6 py-3 flex items-center space-x-3 rounded cursor-pointer hover:bg-zinc-900 text-[0.9rem] font-medium">
            <Trophy size={18} />
            <p>Success Stories</p>
          </div>
        </div>

        <div className="w-full px-6 py-2 flex items-center space-x-2 rounded text-red-400 font-medium cursor-pointer justify-center text-sm hover:text-white hover:bg-red-950">
          <p>Logout</p>
          <LogOut size={18} className="mr-6" />
        </div>
      </nav>

      <div className="h-full flex-1 flex flex-col space-y-4">
        <div className="w-full h-[4rem] bg-zinc-950 rounded-xl"></div>
        <div className="w-full flex-1 bg-zinc-950 rounded-xl"></div>
      </div>

      <div className="h-full w-[13.5rem] bg-zinc-950 rounded-xl hidden md:flex"></div>
    </div>
  )
}