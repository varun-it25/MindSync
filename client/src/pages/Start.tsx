import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Start = () => {
  const [step, setStep] = useState<number>(1)
  const nav = useNavigate();

  return (
    <>
      {
        step == 1 && (
            <div className="w-screen h-screen dark bg-black text-accent-foreground p-10 flex flex-col items-center">
                <p className="text-3xl">Please select a reason for depression</p>

                <div className="flex justify-center space-x-6 items-center flex-1 w-full p-4">
                    <div className="border w-80 bg-zinc-700 hover:bg-zinc-600 aspect-square rounded-2xl flex flex-col justify-center items-center space-y-4 cursor-pointer" onClick={() => setStep(2)}>
                      <img src="https://cdn-icons-png.freepik.com/512/5783/5783300.png" className="w-32" />
                      <p className="text-xl font-bold">Stress</p>
                    </div>
                    <div className="border w-80 bg-zinc-800 hover:bg-red-950 aspect-square rounded-2xl flex flex-col justify-center items-center space-y-4 cursor-pointer relative" title="It is under development.">
                      <img src="https://cdn-icons-png.flaticon.com/128/3476/3476320.png" className="w-32 mt-5" />
                      <p className="text-xl font-bold">Social Isolation</p>
                      <div className="w-full text-center absolute top-0 flex justify-center items-center">
                        <p className="text-red-500 text-xs p-6 w-full">It is under development.</p>
                      </div>
                    </div>
                    <div className="border w-80 bg-zinc-800 hover:bg-red-950 aspect-square rounded-2xl flex flex-col justify-center items-center space-y-4 cursor-pointer relative" title="It is under development.">
                      <img src="https://cdn0.iconfinder.com/data/icons/psychology-disorder-aqua-vol-1/500/Addiction-512.png" className="w-32 mt-5" />
                      <p className="text-xl font-bold">Addiction</p>
                      <div className="w-full text-center absolute top-0 flex justify-center items-center">
                        <p className="text-red-500 text-xs p-6 w-full">It is under development.</p>
                      </div>
                    </div>
                </div>

                <div className="flex p-4 justify-center items-center space-x-3">
                  <div className="w-4 aspect-square rounded-full border border-white bg-zinc-700"></div>
                  <div className="w-4 aspect-square rounded-full border border-white"></div>
                </div>
            </div>
        )
      }
      {
        step == 2 && (
            <div className="w-screen h-screen dark bg-black text-accent-foreground p-10 flex flex-col items-center">
                <p className="text-3xl">How many time you suffer from Stress</p>

                <div className="flex justify-center space-x-6 items-center flex-1 w-full p-4">
                    <div className="border w-80 bg-zinc-700 hover:bg-zinc-600 aspect-square rounded-2xl flex flex-col justify-center items-center space-y-4 cursor-pointer" onClick={() => nav("/dashboard")}>
                      <img src="https://cdn-icons-png.flaticon.com/512/6997/6997941.png" className="w-32" />
                      <p className="text-xl font-bold">Short Time</p>
                    </div>

                    <div className="border w-80 bg-zinc-700 hover:bg-zinc-600 aspect-square rounded-2xl flex flex-col justify-center items-center space-y-4 cursor-pointer" onClick={() => nav("/dashboard")}>
                      <img src="https://cdn-icons-png.flaticon.com/512/8625/8625931.png" className="w-32" />
                      <p className="text-xl font-bold">Long Time</p>
                    </div>
                </div>

                <div className="flex p-4 justify-center items-center space-x-3">
                  <div className="w-4 aspect-square rounded-full border border-white"></div>
                  <div className="w-4 aspect-square rounded-full border border-white bg-zinc-700"></div>
                </div>
            </div>
        )
      }
    </>
  )
}

export default Start