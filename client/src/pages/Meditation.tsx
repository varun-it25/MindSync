import Navbar from "@/components/Navbar";
import girl from "@/assets/girl.png";
import { useState, useEffect, useRef } from "react";
import audioFile from "@/assets/5-MinuteMeditationYouCanDoAnywhere.mp3";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Meditation() {
  const audioRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playedTime, setPlayedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const duration = 180; // Duration of the guided meditation in seconds (3 mins)

  // Start or stop audio and timer
  const toggleMeditation = () => {
    if(playedTime === 0){
      setPlayedTime(1)
    }
    if (isPlaying) {
      // Stop audio and clear timer
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      clearInterval(intervalId);
      setProgress(0);
    } else {
      // Play audio and start timer
      audioRef.current.play();
      const id = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 1 : 100));
      }, (duration * 1000) / 100);
      setIntervalId(id);
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Clean up interval when unmounting
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div className="w-screen h-screen dark bg-black text-accent-foreground">
      <section className="relative flex justify-center h-[90vh] sm:h-[100%] p-4">
        <div className="relative w-60 h-60 mt-40 flex justify-center items-center">
          <svg
            className="w-90 h-90 transform -rotate-90"
            viewBox="0 0 100 100"
          >
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              className="stroke-current text-gray-700"
              strokeWidth="10"
              fill="transparent"
            />
            {/* Progress Circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              className="stroke-current text-blue-500 transition-all duration-1000"
              strokeWidth="10"
              fill="transparent"
              strokeDasharray="283"
              strokeDashoffset={(1 - progress / 100) * 283}
              strokeLinecap="round"
            />
          </svg>
          {/* Timer Text */}
          <div className="absolute text-white text-2xl font-bold">
            {Math.floor((duration * (100 - progress)) / 100)}s
          </div>
        </div>

        {/* Brain Image at the Top */}
        <div className="absolute top-20 flex justify-center items-center w-full">
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnJ0OHo2Z2RlOWZ6czJzNGxtbjV6ZWVxcmxrbDBhbmp0NnJheGN5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lkdIhnHHnFma6xvICt/giphy.gif"
            className="w-[30.2rem] opacity-50 object-contain"
          />
        </div>

        {/* Meditation Audio */}
        <audio ref={audioRef} src={audioFile} preload="auto" />

        {/* Meditation Control Button */}
        <button
          onClick={toggleMeditation}
          className={`absolute bottom-20 px-6 py-2 rounded-lg text-white ${
            isPlaying ? "bg-red-500 hover:bg-red-700" : "bg-green-500 hover:bg-green-700"
          }`}
        >
          {isPlaying ? "Stop Meditation" : "Start Meditation"}
        </button>
        {
           !isPlaying && playedTime !== 0 &&  <Link to="/dashboard" className="absolute bottom-20 right-[40%]"><Button className="cursor-pointer">Next</Button></Link>
        }

        {/* Girl Images at the Bottom */}
        <div className="absolute bottom-20 flex justify-center w-full space-x-150 mb-20 ">
          <img
            src={girl}
            className="h-70 w-70 animate-float-meditate"
            alt="girl-left"
          />
          <img src={girl} className="h-70 w-70" alt="girl-right" />
        </div>
      </section>
    </div>
  );
}
