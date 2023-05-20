import React, { useContext, useEffect, useState } from 'react'

import { v4 as uuidv4 } from 'uuid';
import { saveAs } from 'file-saver';
import { SERVER_URL } from '../config';
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../context/Context';


const ViewParticipants = () => {
    const [users, setUsers] = useState([
        {
            _id: uuidv4(),
            name: { first_name: 'John', last_name: 'Doe' },
            phone: '123-456-7890',
            email: 'john.doe@example.com',
            organization: 'ACME Inc.',
            organization_branch: 'Headquarters',
            organization_roll_number: '12345',
        },
        {
            _id: uuidv4(),
            name: { first_name: 'John', last_name: 'Doe' },
            phone: '123-456-7890',
            email: 'john.doe@example.com',
            organization: 'ACME Inc.',
            organization_branch: 'Headquarters',
            organization_roll_number: '12345',
        },
        {
            _id: uuidv4(),
            name: { first_name: 'John', last_name: 'Doe' },
            phone: '123-456-7890',
            email: 'john.doe@example.com',
            organization: 'ACME Inc.',
        },
        // Add more users here...
    ]);

    const user = useContext(Context);

    const navigate = useNavigate();

    const event_id = useParams().id;

    const fetchRegisteredUsers = async () => {
        const token = localStorage.getItem("jwt");
        const response = await fetch(`${SERVER_URL}/api/event/${event_id}/registeredusers`, {
            method: "GET",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log("users", data);
            if (data.success === true) {
                setUsers(data.registeredUsers);

            } else {
                // navigate("/404");
            }
        }
    }


    useEffect(() => {
        fetchRegisteredUsers()
    }, [])



    const handleDeleteUser = async (id) => {

        // send request to delete the user of the particular id
        const token = localStorage.getItem("jwt");
        const response = await fetch(`${SERVER_URL}/api/event/${event_id}/${id}/deleteregistration`, {
            method: "DELETE",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log("users", data);
            if (data.success === true) {
                fetchRegisteredUsers()
            } else {
                console.log(data.message);
            }
        }

    };

    const handleDownloadCSV = () => {
        const csvContent = [
            'Name,Phone,Email,Organization,Branch,Roll Number',
            ...users.map((user) => {
                const { first_name, last_name } = user.name;
                return `${first_name} ${last_name},${user.phone},${user.email},${user.organization},${user.organization_branch},${user.organization_roll_number}`;
            }),
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
        saveAs(blob, 'registered_users.csv');
    };

    return (
        <div className="bg-stone-900 min-h-screen py-8 px-4 sm:px-6 lg:px-8 pt-24">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-6">Registered Users</h1>
                <div className="flex justify-end mb-6">
                    <button
                        className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded shadow"
                        onClick={handleDownloadCSV}
                    >
                        Download CSV
                    </button>
                </div>
                <div className=" overflow-hidden sm:rounded-lg">
                    <ul>
                        {users.map((user) => {

                            return <li key={user._id} className="border-t card-shadow-black p-2 border-gray-200 m-4 bg-white overflow-hidden">
                                <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">

                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {user.name.first_name} {user.name.last_name}
                                                </div>
                                                <div className="text-sm text-gray-500">{user.email}</div>
                                            </div>
                                        </div>
                                        <div className="ml-2 flex-shrink-0">
                                            <button
                                                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                                                onClick={() => handleDeleteUser(user._id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-gray-200">
                                    <dl>
                                        <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                                                {user.phone}
                                            </dd>
                                        </div>
                                        <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Organization</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                                                {user.organization}
                                            </dd>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Branch</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                                                {user.organization_branch}
                                            </dd>
                                        </div>
                                        <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Roll Number</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                                                {user.organization_roll_number}
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ViewParticipants