import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const EventPage = () => {
    const event_id = useParams().id;

    const [event, setEvent] = useState({
        event_title: 'Stratazenith',
        date_time: new Date.now(),
        location: 'NSUT, Delhi',
        main_poster: "https://cluboldbar.com.au/wp-content/uploads/2022/08/Halloween-Costume-Party-Poster-2050-%C3%97-780px-1067-%C3%97-600px-512-%C3%97-256px-Instagram-Post-Square.jpg",
        details: '{% lorem 50 w %}',
        
    })

    return (
        <div className='min-h-screen'>

            <div className="flex justify-center">
                <p className='absolute top-[8.5rem] lg:top-[20vh] mx-auto !leading-normal font-extrabold text-5xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500'>Stratazenith</p>
            </div>
        </div>
    )
}

export default EventPage