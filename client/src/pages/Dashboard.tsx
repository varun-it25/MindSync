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

export default function Admin_Panel() {
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
        <div className="w-full flex-1 bg-zinc-900 rounded-xl p-6 flex flex-col items-center overflow-auto">
          <div className="bg-zinc-700 rounded-xl w-full px-5 py-3 flex justify-between items-center">
            <p className="font-medium">How was your day?</p>

            <Dialog
              open={open}
              onOpenChange={(openState) => setOpen(openState)}
            >
              <DialogTrigger asChild>
                <Button onClick={openDialog} className="cursor-pointer">
                  <ReceiptText />
                  <p>Say something</p>
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[425px] dark text-accent-foreground">
                <DialogHeader>
                  <DialogTitle>
                    How was your day?{" "}
                  </DialogTitle>
                  <DialogDescription>
                    Write about your day in this textbox.
                  </DialogDescription>
                </DialogHeader>

                <textarea
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  rows={6}
                  className="border border-zinc-700 rounded-xl focus:border-none p-3"
                ></textarea>

                <DialogFooter>
                  <Button
                    onClick={() => {
                      submitUserInput();
                      closeDialog();
                      openDialog_2();
                      setUserInput("")
                    }}
                    className="cursor-pointer"
                  >
                    Send
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog
              open={open_2}
              onOpenChange={(openState) => setOpen_2(openState)}
            >
              <DialogContent className="sm:max-w-[425px] dark text-accent-foreground">
                <DialogHeader>
                  <DialogTitle>Your Emotion Now !</DialogTitle>
                </DialogHeader>

                <div className="w-full aspect-square bg-green-800 rounded-lg flex justify-center items-center ">
                  <p className="text-5xl">
                    {localStorage.getItem("user-emotion")}
                  </p>
                </div>

                <DialogFooter>
                  <Button onClick={closeDialog_2} className="cursor-pointer">
                    Okay
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="w-full rounded-xl flex-1 px-5 pt-12 pb-3 flex flex-col items-center space-y-20 overflow-auto">
            <Link
              to={`/meditation`}
              className="w-14 aspect-square rounded-full border-4 border-zinc-200 bg-zinc-700 flex justify-center items-center relative cursor-pointer"
            >
              <p className="pb-0.5 font-bold text-xl text-white ml-2">1</p>
              <BubbleBox message="Meditation Room" />
            </Link>

            <Link
              to={`/challenges`}
              className="w-14 aspect-square rounded-full border-4 border-zinc-600 bg-zinc-700 text-zinc-400 flex justify-center items-center text-xl font-bold ml-[7rem] relative cursor-pointer"
              title="Locked"
            >
              <p className="pb-0.5 font-bold text-xl">2</p>
            </Link>

            <Link
              to={`/game`}
              className="w-14 aspect-square rounded-full border-4 border-zinc-600 bg-zinc-700 text-zinc-400 flex justify-center items-center text-xl font-bold ml-[-8rem] cursor-pointer"
              title="Locked"
            >
              <p className="pb-0.5 font-bold text-xl">3</p>
            </Link>
            <Link
              to={`/game`}
              className="w-14 aspect-square rounded-full border-4 border-zinc-600 bg-zinc-700 text-zinc-400 flex justify-center items-center text-xl font-bold ml-[-rem] cursor-pointer"
              title="Locked"
            >
              <p className="pb-0.5 font-bold text-xl">4</p>
            </Link>
          </div>
        </div>
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
