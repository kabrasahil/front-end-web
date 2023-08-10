import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SERVER_URL } from '../config';
import DOMPurify from "dompurify";
import EventGallery from './EventGallery';
import EventRegisterForm from './EventRegisterForm';
import { Context } from '../context/Context';

const EventPage = () => {
    const event_id = useParams().id;

    const [event, setEvent] = useState(null);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [lnameEmpty, setLnameEmpty] = useState(false);

    const [emailR, setEmailR] = useState("");
    const [invalidEmail, setInvalidEmail] = useState(false);

    const [phone, setPhone] = useState('');
    const [invalidPhone, setInvalidPhone] = useState(false);

    const [organization, setOrganization] = useState('');
    const [organizationEmpty, setOrganizationEmpty] = useState(false);

    const [organizationBranch, setOrganizationBranch] = useState('');
    const [organizationRollNumber, setOrganizationRollNumber] = useState('');

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




    const fetchTicket = async () => {

        const token = localStorage.getItem('jwt');
        const response = await fetch(`${SERVER_URL}/api/event/${event_id}/getregistration`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            }
        });
        if (response.ok) {
            const data = await response.json();
            if (data.success) {
                setFname(data.ticket.name.first_name);
                setLname(data.ticket.name.last_name);
                setEmailR(data.ticket.email);
                setPhone(data.ticket.phone);
                setOrganization(data.ticket.organization);
                setOrganizationBranch(data.ticket.organization_branch);
                setOrganizationRollNumber(data.ticket.organization_roll_number);
            }
        }

    }

    const user = useContext(Context);


    useEffect(() => {


        console.log('user', user);

        if (event && event.registered) {
            // fetch the ticket
            fetchTicket();
        }

        if (event && !event.registered && user) {


            console.log('here');
            setFname(user.name.first_name);
            setLname(user.name.last_name);
            setEmailR(user.email);
            setPhone(user.phone);
            setOrganization(user.organization);



        }

    }, [event, user])


    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression for email validation

        return regex.test(email);
    }
    function validatePhone(phoneNumber) {
        // Define the regex pattern for phone number validation
        const pattern = /^\+?(\d{2})?\d{10}$/;

        // Use the pattern to match the phone number
        const match = pattern.test(phoneNumber);

        // If there's a match, the phone number is valid
        return match;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let flag = false;
        if (!lname || lname.length === 0) {
            lnameEmpty(true);
            flag = true;
        } if (!organization || organization.length === 0) {
            setOrganizationEmpty(true);
            flag = true;
        }

        if (!validateEmail(emailR)) {
            setInvalidEmail(true);
            flag = true;
        }
        if (!validatePhone(phone)) {
            console.log("here");
            setInvalidPhone(true);
            flag = true;
        }

        if (flag) {
            return;
        }


        const updatedData = {
            name: {
                first_name: fname,
                last_name: lname
            },
            email: emailR,
            phone: phone,
            organization: organization,
            organization_branch: organizationBranch,
            organization_roll_number: organizationRollNumber
        }
        const token = localStorage.getItem('jwt');
        if (!event.registered) {
            const response = await fetch(`${SERVER_URL}/api/event/${event_id}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token
                },
                body: JSON.stringify(updatedData)
            })
            if (response.ok) {
                const data = await response.json();
                if (data.success) window.location.reload();
            }
        } else {
            const response = await fetch(`${SERVER_URL}/api/event/${event_id}/editregistration`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token
                },
                body: JSON.stringify(updatedData)
            })
            if (response.ok) {
                const data = await response.json();
                if (data.success) window.location.reload();
            }
        }


    }

    return (
        <div className="min-h-screen bg-[#101010] text-gray-300 pt-24">
            {event && event._id && (
                <div className="flex flex-col items-center py-8">
                    <div >
                        <div className='w-[70vw]  card-shadow-black lg:mt-24 my-10 rounded-xl flex lg:flex-row flex-col-reverse justify-between object-cover '>
                            <div className={' w-[40vw] text-white py-5 pl-5 lg:!py-10 lg:!pl-10 !pr-0 lg:p-10 z-10 flex flex-col justify-end'}>
                                <div className='flex flex-col justify-center items-between content-between'>
                                    <h1 className='text-3xl lg:text-5xl font-bold'>{event.event_title}</h1>
                                    <div className="translate-x-[0px] lg:translate-x-[20px] w-fit p-4 lg:p-0 items-center mt-4 lg:my-8 py-1 lg:py-5 shadow-[0_0_5px_-10px_rgb(0,0,0)] text-white bg-gray-700 bg-clip-padding rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-20 flex justify-center">
                                        <div className='flex gap-3 lg:gap-0'>
                                            <div className='text-center flex flex-col gap-2 px-2 lg:px-10 border-r border-slate-600'>
                                                <h1 className='text-xl lg:text-lg font-semibold'>Location</h1>
                                                <p className='text-base lg:text-md'>{event.location}</p>
                                            </div>
                                            <div className='text-center flex flex-col gap-2 px-2 lg:px-10 border-r border-slate-600'>
                                                <h1 className='text-xl lg:text-lg font-semibold'>Date</h1>
                                                <p className='text-base lg:text-md'>{event.date}</p>
                                            </div>
                                            <div className='text-center flex flex-col gap-2 px-2 lg:px-10 border-r border-slate-600'>
                                                <h1 className='text-xl lg:text-lg font-semibold'>Time</h1>
                                                <p className='text-base lg:text-md'>{event.time}</p>
                                            </div>
                                            <div className=' flex flex-col gap-2 items-center px-2 lg:px-10'>
                                                <h1 className='text-xl lg:text-lg font-semibold'>Registrations</h1>
                                                <div className={(event.registrations_open) ? "w-4 aspect-square lg:w-5 lg:h-5 rounded-full bg-green-500" : "w-4 aspect-square lg:w-5 lg:h-5 rounded-full bg-red-500"}></div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <img className='overflow-x-hidden h-[10rem] rounded-t-xl lg:rounded-r-xl lg:w-[50rem] lg:h-[25rem] object-cover z-0 aspect-square' alt="Event Poster" src={event.main_poster} />

                        </div>

                    </div>


                    <div>
                        <h1 className="text-center  text-gray-400  lg:text-4xl md:text-6xl sm:text-6xl font-semibold pt-20 pb-4">
                            Event Description
                        </h1>
                    </div>
                    <div
                        className="m-10 sm:mx-0 prose-h1:font-sans rounded-xl bg-[#101010] card-shadow-black p-10 pt-24 prose prose-stone dark:prose-invert lg:prose-xl prose-img:mx-auto prose-img:rounded-xl prose-a:text-indigo-600 hover:prose-a:text-indigo-400 w-3/4"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                                event.details
                            ),
                        }}
                    ></div>



                    {event.registrations_open ? <>

                        <div>
                            <h1 className="text-center  text-gray-400  lg:text-4xl md:text-6xl sm:text-6xl font-semibold pt-20 pb-4">
                                Registration Form
                            </h1>
                        </div>


                        <div className='m-10 w-3/4 card-shadow-black py-16 rounded-xl'>

                            {user ? <EventRegisterForm
                                event={event}
                                fname={fname}
                                setFname={setFname}
                                lname={lname}
                                setLname={setLname}
                                lnameEmpty={lnameEmpty}
                                setLnameEmpty={setLnameEmpty}
                                phone={phone}
                                setPhone={setPhone}
                                invalidPhone={invalidPhone}
                                setInvalidPhone={setInvalidPhone}
                                emailR={emailR}
                                setEmailR={setEmailR}
                                invalidEmail={invalidEmail}
                                setInvalidEmail={setInvalidEmail}
                                organization={organization}
                                setOrganization={setOrganization}
                                organizationEmpty={organizationEmpty}
                                setOrganizationEmpty={setOrganizationEmpty}
                                organizationBranch={organizationBranch}
                                setOrganizationBranch={setOrganizationBranch}
                                organizationRollNumber={organizationRollNumber}
                                setOrganizationRollNumber={setOrganizationRollNumber}
                                handleSubmit={handleSubmit}
                            /> : <>
                                <div className='flex justify-center'>
                                    <button
                                        type="button"
                                        className=" text-white bg-gradient-to-r   to-pink-500 from-blue-400 hover:to-pink-600 hover:from-blue-500 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg lg:text-base lg:px-5 lg:py-2.5 sm:text-3xl md:text-3xl sm:py-5 md:py-5 text-center inline-flex items-center mr-2 mb-2 gap-x-3  justify-center mt-5 w-1/2 lg:w-1/4"
                                        onClick={() => { window.location.href = '/login' }}
                                    >
                                        Log In
                                    </button>
                                </div>
                            </>}



                        </div>

                    </> : event.event_photos && event.event_photos.length ? <>

                        {/* Event Gallery */}

                        <div>
                            <h1 className="text-center  text-gray-400  lg:text-4xl md:text-6xl sm:text-6xl font-semibold pt-20 pb-4">
                                Memories
                            </h1>
                        </div>
                        <EventGallery images={event.event_photos} />

                    </> : <></>}

                </div>
            )}
        </div>
    );
};

export default EventPage;