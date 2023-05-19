import React from "react";
import blob from "./blob.png";
import planet1 from "./planet1.png"
import planet2 from "./planet2.png"
import ufo from "./UFO.png"
import EventsTab from "./EventTab";

export default function Events() {
    return (
        
        <div className="bg-[#101010] ">
        <div className="flex justify-center">
                <p className='absolute top-[8.5rem] lg:top-[50vh] mx-auto !leading-normal font-extrabold text-5xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500'>Events</p>
                <p className='absolute top-[12rem] lg:top-[70vh] text-slate-300 text-md lg:text-xl mx-auto'>Where boredom ends.</p>
            </div>
            <img src={ufo} className="absolute hidden lg:block mx-auto object-cover translate-y-[15vh] translate-x-170vh] w-[10vw] mt-[6rem] rotate-[-10deg] " />
            <img src={ufo} className="absolute hidden lg:block mx-auto object-cover  translate-y-[20vh] translate-x-[20vh] w-[20vw] mt-[6rem] rotate-[20deg]" />
            
            <section className="mt-[20rem] lg:mt-[45rem] w-full flex justify-center">
                <EventsTab />
            </section>

            <img src={planet1} className="absolute hidden lg:block w-[10rem] lg:w-[30rem] right-[15%] top-[0rem] lg:top-[-10vh] translate-x-[20vw] " />
            <img src={planet2} className="absolute hidden lg:block w-[20rem] left-[-150px] top-[-2rem] lg:top-[10rem] m-0 left-[-400px] lg:w-[50rem] rotate-[-30deg]" />
            
        </div>
    )
} 