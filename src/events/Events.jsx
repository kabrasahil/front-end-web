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
            <img src="https://drive.google.com/uc?export=view&id=1MIj5oBTYkE-ZGhD6-ictjQd-b8ubbQq4" className="absolute hidden lg:block mx-auto object-cover translate-y-[15vh] translate-x-170vh] w-[10vw] mt-[6rem] rotate-[-10deg] " />
            <img src="https://drive.google.com/uc?export=view&id=1MIj5oBTYkE-ZGhD6-ictjQd-b8ubbQq4" className="absolute hidden lg:block mx-auto object-cover  translate-y-[20vh] translate-x-[20vh] w-[20vw] mt-[6rem] rotate-[20deg]" />
            
            <section className="mt-[15rem] lg:mt-[45rem] w-full flex justify-center">
                <EventsTab />
            </section>

            <img src="https://drive.google.com/uc?export=view&id=1x4ZU4Uao4jzoGTaTvhdEhISTyReNw7O8" className="absolute hidden lg:inline w-[6rem] lg:w-[20rem] right-[15%] top-[0rem] lg:top-[0vh] translate-x-[15vw] " />
            <img src="https://drive.google.com/uc?export=view&id=11FBxJiC2-0CT9Ds4wazl5u-gStQQtoAE" className="absolute hidden lg:block w-[20rem]  top-[-2rem] lg:top-[10rem] m-0 left-[-400px] lg:w-[50rem] rotate-[-30deg]" />
            
        </div>
    )
} 