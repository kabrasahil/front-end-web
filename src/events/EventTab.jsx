import React, { useState, useRef } from 'react';
import { SERVER_URL } from '../config';
import { useEffect } from 'react';
export default function EventsTab() {
    const Ref = useRef(null);
    const [event, setEvent] = useState([])
    const [Remtime, setRemTime] = useState('00:00:00');

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }

    const [pge_no, setPge_no] = useState(0);


    const fetchEvents = async () => {
        const response = await fetch(`${SERVER_URL}/api/event/getevents/${pge_no}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            const data = await response.json();
            if (data.success) {
                setEvent([...event, ...data.events]);
            }
        }

    }

    useEffect(() => {
        fetchEvents();
    }, [pge_no])


    useEffect(() => {

        window.addEventListener("scroll", () => {
            // Calculate the distance between the bottom of the page and the current scroll position
            const distanceToBottom =
                document.documentElement.offsetHeight -
                (window.innerHeight + window.scrollY);

            // Check if the user has reached the bottom of the page
            if (distanceToBottom <= 0) {
                setPge_no(pge_no + 1);
            }
        });

    }, [])

    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {
            setRemTime(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    // const [mouseover,setMouseover] = useState(false);
    return (
        <div className='flex flex-col'>
            {event.map(({ event_title, _id, date, time, date_time, location, main_poster, HTML, event_moderators, active, registrations_open, registrations, created_by }) => {
                return (
                    <div >
                        <div className='w-[70vw]  shadow-[0_0_50px_10px_rgb(0,0,0)] lg:mt-24 my-10 rounded-xl flex lg:flex-row flex-col-reverse justify-between object-cover '>
                            <div className={' w-[40vw] text-white py-5 pl-5 lg:!py-10 lg:!pl-10 !pr-0 lg:p-10 z-10 '}>
                                <h1 className='text-2xl lg:text-5xl font-bold'>{event_title}</h1>
                                <p className='absolute lg:static text-md lg:text-xl pt-2 lg:pt-10 font-light translate-x-[58vw] lg:translate-x-0 translate-y-[-2.5rem] lg:translate-y-0'>Starts in</p>
                                <p className='absolute lg:static text-slate-200 text-xl lg:text-3xl my-0 lg:my-3 font-semibold translate-x-[57vw] lg:translate-x-0 translate-y-[-0.5rem] lg:translate-y-0'>{Remtime}</p>
                                <div className="translate-x-[0px] lg:translate-x-[20px] w-[50vw] items-center mt-4 lg:my-8 py-1 lg:py-5 shadow-[0_0_5px_-10px_rgb(0,0,0)] text-white bg-gray-700 bg-clip-padding rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-20 flex">
                                    <div className='flex'>
                                        <div className='text-center flex flex-col gap-2 px-2 lg:px-10 border-r border-slate-600'>
                                            <h1 className='text-xs lg:text-lg font-semibold'>Location</h1>
                                            <p className='text-xs lg:text-md'>{location}</p>
                                        </div>
                                        <div className='text-center flex flex-col gap-2 px-2 lg:px-10 border-r border-slate-600'>
                                            <h1 className='text-xs lg:text-lg font-semibold'>Date</h1>
                                            <p className='text-xs lg:text-md'>{date}</p>
                                        </div>
                                        <div className='text-center flex flex-col gap-2 px-2 lg:px-10 border-r border-slate-600'>
                                            <h1 className='text-xs lg:text-lg font-semibold'>Time</h1>
                                            <p className='text-xs lg:text-md'>{time}</p>
                                        </div>
                                        <div className=' flex flex-col gap-2 items-center px-2 lg:px-10'>
                                            <h1 className='text-xs lg:text-lg font-semibold'>Registrations</h1>
                                            <div className={(registrations_open) ? "w-2 h-2 lg:w-5 lg:h-5 rounded-full bg-green-500" : "w-2 h-2 lg:w-5 lg:h-5 rounded-full bg-red-500"}></div>
                                        </div>

                                    </div>
                                    <a href={`/events/${_id}`} className='bg-gradient-to-r from-blue-400 to-pink-500 shadow-md shadow-slate-800 focus:shadow-sm focus:shadow-slate-700 hover:shadow-lg hover:shadow-slate-900 hover:to-pink-600 hover:from-blue-500  focus:to-pink-600 focus:from-blue-500  rounded-full lg:px-10 px-5 lg:py-2 py-1 lg:mr-5 text-xs lg:text-lg font-normal lg:font-bold block  lg:block'>
                                        Check
                                    </a>

                                </div>
                            </div>

                            <img className='overflow-x-hidden h-[10rem] rounded-t-xl lg:rounded-r-xl lg:w-[50rem] lg:h-[25rem] object-cover z-0' alt="Event Poster" src={main_poster} />

                        </div>

                    </div>
                )
            })}
        </div>
    )
}