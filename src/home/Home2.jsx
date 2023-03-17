import React from 'react'
import image from '../assets/images/Desktop1.png'
import './Home2.css'

export default function Home2() {
    return (
        <div className='flex justify-center gap-16 items-center overflow-x-hidden h-screen bg-stone-900'>
            <div className='w-[800px]'>
                <img className='drop-shadow-2xl shadow-zinc-400 rounded-xl' src={image} alt='about-img' />
            </div>
            <div className='flex flex-col gap-5 w-96'>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-300'>About</h3>
                <h2 className='text-slate-100 font-extrabold text-3xl'>The Indian Game Theory Society</h2>
                <p className='text-slate-300 font-thin text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolores maiores vel iste quae iusto sed at neque, facere doloribus tempora rerum ipsam fugiat commodi similique praesentium expedita iure, voluptatum quisquam vitae. Ab maxime dolore sint unde voluptatum, impedit atque?</p>
                <button className='bg-gradient-to-r from-indigo-700 to-pink-400 text-white font-medium text-lg w-44 rounded-full h-10'>Learn more</button>
            </div>
            <div className='absolute z-0 w-32 rounded-full shadow-2xl shadow-blue-300' ></div>
        </div>
    )
}