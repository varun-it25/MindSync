import React from 'react'
import { ThreeDCard } from "@/components/ThreeDCard";
import mood from "../assets/mood.png"
import personalised from "../assets/personalised.png"
import ai from "../assets/ai.png"

const Features = () => {

    const features = 
[
    {
    title: "AI-Driven Brain Activity Monitoring",
    desc: "Leverage advanced AI algorithms to analyze brain activity, providing real-time insights into your mental health.",
    },
    {
    title: "Mood Tracking",
    desc: "Track your mood with AI-powered journaling to gain personalized insights and identify patterns for better mental well-being.",
    },
    {
    title: " Personalized Therapy Plans",
    desc: "Receive custom mental health plans based on your unique needs, including therapy sessions, activities, and challenges.",
    },
    {
    title: " AI-Powered Chatbot Support",
    desc: "Access 24/7 mental health support through an AI-driven chatbot, offering guidance and real-time assistance.",
    },
    {
    title: "Therapist Marketplace",
    desc: "Find and book professional therapists for personalized virtual counseling, tailored to your mental health needs.",
    },
]
  return (
    <div>
       <div className="mx-auto px-auto text-center">
      <p className="font-bold text-4xl sm:text-5xl">Our Features</p>
      </div>

        <div className='flex justify-around p-10'>       
        <ThreeDCard title={features[0].title} desc={features[0].desc} src={ai} />
        <ThreeDCard title={features[1].title} desc={features[1].desc} src={mood}/>
        <ThreeDCard title={features[2].title} desc={features[2].desc} src={personalised}/>
        </div>
        <div className='flex justify-around p-10'>       
        <ThreeDCard title={features[3].title} desc={features[3].desc} src={ai} />
        <ThreeDCard title={features[4].title} desc={features[4].desc} src={mood}/>
       
        </div>  
        
    </div>
  )
}

export default Features