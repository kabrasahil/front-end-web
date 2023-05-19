import React from "react";
import blob from "./blob.png";
import planet1 from "./planet1.png"
import planet2 from "./planet2.png"
import ufo from "./UFO.png"
import EventsTab from "./EventTab";

export default function Events() {
    return (
        <div>
            <img src={ufo} className="object-cover w-[100vw] z-10" />
            <section className="bg-[#101010] w-full flex justify-center">
                <EventsTab />
            </section>

            <img src={planet1} className="absolute w-[10rem] lg:w-[40rem] right-[15vw] top-[0rem] lg:top-10 z-[-1] lg:right-[20%]" />
            <img src={planet2} className="absolute w-[20rem] left-[-150px] top-[-2rem] lg:top-0 m-0 lg:left-[-400px] lg:w-[70rem] rotate-[-30deg]" />
            <div className="flex justify-center">
                <p className='absolute top-[5rem] lg:top-[25rem] mx-auto !leading-normal font-extrabold text-5xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500'>Events</p>
                <p className='absolute top-[9rem] lg:top-[35rem] text-slate-300 text-md lg:text-xl mx-auto'>Where boredom ends.</p>
            </div>
        </div>
    )
} 