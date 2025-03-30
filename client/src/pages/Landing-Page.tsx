import Features from "@/components/Features";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HeroText } from "@/components/HeroText";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";

export default function Landing_Page(){
  return (
    <div className="w-screen dark bg-black text-accent-foreground">
      <Navbar />
      <section className="relative flex justify-center h-[90vh] sm:h-[100%] p-4">
        <div className="absolute w-full h-full top-0 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-3 sm:space-y-5 z-1">
            {/* <p className="font-bold text-4xl sm:text-5xl">TREAT DEPRESSION</p>
            <p className="font-semibold text-3xl sm:text-4xl">WITH CHALLENGES</p> */}
            <HeroText/>

            <div className="flex space-x-4 p-4">
              <Link to={`/`}><Button className="cursor-pointer" variant={`outline`}>Learn More</Button></Link>
              <Link to={`/start`}><Button className="cursor-pointer">Get Started</Button></Link>
            </div>
          </div>
        </div>
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnJ0OHo2Z2RlOWZ6czJzNGxtbjV6ZWVxcmxrbDBhbmp0NnJheGN5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lkdIhnHHnFma6xvICt/giphy.gif" className="w-[30.2rem] opacity-50 object-contain" />
      </section>
      <div>
        <Features/>
      </div>
      <AppleCardsCarouselDemo />
    </div>
  )
}