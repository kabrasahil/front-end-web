import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SERVER_URL } from '../config';
import DOMPurify from 'dompurify';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

const EventPage = () => {
    const event_id = useParams().id;

    const [event, setEvent] = useState(null);

    const fetchEvent = async () => {
        const token = localStorage.getItem('jwt');
        const response = await fetch(`${SERVER_URL}/api/event/${event_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token,
            },
        });

        if (response.ok) {
            const data = await response.json();
            if (data.success) {
                const date = new Date(data.event.date_time);
                const formattedDate = date.toLocaleDateString();
                const formattedTime = date.toLocaleTimeString();

                data.event.date = formattedDate;
                data.event.time = formattedTime;

                setEvent(data.event);
            }
        }
    };

    useEffect(() => {
        fetchEvent();
    }, []);

    return (
        <div className="min-h-screen bg-stone-900 text-gray-300 py-16">
            {event && event._id && (
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center text-white mb-8">
                        {event.event_title}
                    </h1>
                    <img
                        src={event.main_poster}
                        alt="Event Poster"
                        className="w-full md:w-2/3 mx-auto rounded-lg mb-8"
                    />

                    <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-6 w-6 mr-2 ${event.registrations_open ? 'text-green-500' : 'text-red-500'
                                    }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {event.registrations_open ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                )}
                            </svg>
                            <p className="text-sm font-semibold">
                                {event.registrations_open ? 'Registrations Open' : 'Registrations Closed'}
                            </p>
                        </div>
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-2 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <p className="text-sm">{event.date}</p>
                        </div>
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-2 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <p className="text-sm">{event.time}</p>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none mb-8">
                        <ReactMarkdown plugins={[gfm]}>
                            {DOMPurify.sanitize(event.details)}
                        </ReactMarkdown>
                    </div>

                    {/* Register form */}
                    <form className="mt-8">
                        {/* Form fields */}
                    </form>
                </div>
            )}
        </div>
    );
};

export default EventPage;
