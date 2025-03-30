import { Button } from "@/components/ui/button";
import axios from "axios";
import notch from "./Polygon 1.png";
import {
  Activity,
  Gamepad2,
  GanttChartSquare,
  Home,
  Library,
  LogOut,
  ReceiptText,
  Swords,
  Trophy,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Link } from "react-router-dom";

function BubbleBox({ message }: { message: string }) {
  return (
    <div className="relative flex justify-center top-[-1rem]">
      <div className="absolute top-[-2rem] px-4 py-2 rounded border bg-zinc-300 text-black text-sm font-bold text-nowrap">
        {message}
      </div>
      <img src={notch} className="absoluet top-[-5rem] h-3" />
    </div>
  );
}

export default function Games() {
  const [open, setOpen] = useState(false);
  const [open_2, setOpen_2] = useState(false);
  const [userInput, setUserInput] = useState("");

  async function submitUserInput() {
    const r = await axios.post("http://localhost:5000/detect-mood", {
      text: userInput,
    });
    const emotion = r.data.emotion;
    localStorage.setItem("user-emotion", emotion);
  }

  const closeDialog = () => {
    setOpen(false);
  };

  const closeDialog_2 = () => {
    setOpen_2(false);
  };

  const openDialog = () => {
    setOpen(true);
  };
  const openDialog_2 = () => {
    setOpen_2(true);
  };

  return (
    <div className="w-screen h-screen dark flex justify-between items-center bg-black text-accent-foreground p-6 space-x-4">
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
                  <Library size={18} />
                  <p>Library</p>
                </Link>
              </div>
      
              <div className="w-full px-6 py-2 flex items-center space-x-2 rounded text-red-400 font-medium cursor-pointer justify-center text-sm hover:text-white hover:bg-red-950">
                <p>Logout</p>
                <LogOut size={18} className="mr-6" />
              </div>
            </nav>

      <div className="h-full flex-1 flex flex-col space-y-4">
        <iframe src="https://www.bubbleshooter.net/games/bubble-shooter-pop-now/" frameBorder="0" scrolling="no" className="w-full h-full rounded-xl" ></iframe>
      </div>

      <div className="h-full w-[13.5rem] rounded-xl hidden md:flex">
        <div className="w-full h-fit border p-4 rounded-xl space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold">How was your day?</p>
            <img
              src="https://png.pngtree.com/png-clipart/20230105/original/pngtree-question-doubt-asking-concept-png-image_8872853.png"
              className="w-12 mt-[-0.5rem]"
            />
          </div>
          <Button className="w-full cursor-pointer">Say something</Button>
        </div>
      </div>
    </div>
  );
}
