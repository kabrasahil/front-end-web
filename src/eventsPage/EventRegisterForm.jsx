import React from 'react';

const EventRegisterForm = ({
    event,
    fname,
    setFname,
    lname,
    setLname,
    lnameEmpty,
    setLnameEmpty,
    phone,
    setPhone,
    invalidPhone,
    setInvalidPhone,
    emailR,
    setEmailR,
    invalidEmail,
    setInvalidEmail,
    organization,
    setOrganization,
    organizationEmpty,
    setOrganizationEmpty,
    organizationBranch,
    setOrganizationBranch,
    organizationRollNumber,
    setOrganizationRollNumber,
    handleSubmit,
}) => {
    return (
        <form
            className="flex flex-col lg:mx-10  lg:gap-y-6 sm:mx-20 md:mx-20 sm:gap-y-24 md:gap-y-24"
            action="#"
        >
            <div className="relative flex lg:gap-x-20 sm:gap-x-10 md:gap-x-10">
                <div className="flex flex-col w-full">
                    <label
                        htmlFor="first-name"
                        className="block mb-2 lg:text-lg sm:text-3xl md:text-3xl font-medium text-gray-300"
                    >
                        First Name
                    </label>
                    <input
                        type="text"
                        id="first-name"
                        className="block py-2.5 px-0 w-full lg:text-sm sm:text-3xl md:text-3xl text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none lg:ml-2 sm:ml-6 md:ml-6 sm:mt-4 md:mt-4"
                        placeholder="First Name"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label
                        htmlFor="last-name"
                        className="block mb-2 lg:text-lg sm:text-3xl md:text-3xl font-medium text-gray-300"
                    >
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="last-name"
                        className={`block py-2.5 px-0 w-full lg:text-sm sm:text-3xl md:text-3xl text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none lg:ml-2 sm:ml-6 md:ml-6 sm:mt-4 md:mt-4 ${lnameEmpty ? '!border-b border-red-600 text-red-500' : ''
                            }`}
                        placeholder="Last Name"
                        value={lnameEmpty ? '*This is a required field' : lname}
                        onChange={(e) => setLname(e.target.value)}
                        onClick={(e) => {
                            if (lnameEmpty) {
                                setLname('');
                            }
                            setLnameEmpty(false);
                        }}
                    />
                </div>
            </div>

            <div className="flex flex-col w-full">
                <label
                    htmlFor="phone"
                    className="block mb-2 lg:text-lg sm:text-3xl md:text-3xl font-medium text-gray-300"
                >
                    Phone Number
                </label>
                <input
                    id="phone"
                    type="tel"
                    className={`block py-2.5 px-0 w-full lg:text-sm sm:text-3xl md:text-3xl text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none lg:ml-2 sm:ml-6 md:ml-6 sm:mt-4 md:mt-4 ${invalidPhone ? '!border-b border-red-600 text-red-500' : ''
                        }`}
                    placeholder="Phone Number"
                    value={invalidPhone ? '*Invalid Phone Number' : phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onClick={(e) => {
                        if (invalidPhone) setPhone('');
                        setInvalidPhone(false);
                    }}
                />
            </div>

            <div className="flex flex-col w-full">
                <label
                    htmlFor="email"
                    className="block mb-2 lg:text-lg sm:text-3xl md:text-3xl font-medium text-gray-200"
                >
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    className={`block py-2.5 px-0 w-full lg:text-sm sm:text-3xl md:text-3xl text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none lg:ml-2 sm:ml-6 md:ml-6 sm:mt-4 md:mt-4 ${invalidEmail ? '!border-b border-red-600 text-red-500' : ''
                        }`}
                    placeholder="Email"
                    value={invalidEmail ? '*Invalid Email' : emailR}
                    onChange={(e) => setEmailR(e.target.value)}
                    onClick={(e) => {
                        if (invalidEmail) setEmailR('');
                        setInvalidEmail(false);
                    }}
                />
            </div>

            <div className="flex flex-col w-full">
                <label
                    htmlFor="organization"
                    className="block mb-2 lg:text-lg sm:text-3xl md:text-3xl font-medium text-gray-300"
                >
                    Organization / College
                </label>
                <input
                    id="organization"
                    type="text"
                    name="organization"
                    className={`block py-2.5 px-0 w-full lg:text-sm sm:text-3xl md:text-3xl text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none lg:ml-2 sm:ml-6 md:ml-6 sm:mt-4 md:mt-4 ${organizationEmpty ? '!border-b border-red-600 text-red-500' : ''
                        }`}
                    placeholder="Organization / College"
                    value={organizationEmpty ? '*This is a required field' : organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    onClick={(e) => {
                        if (organizationEmpty) setOrganization('');
                        setOrganizationEmpty(false);
                    }}
                />
            </div>

            <div className="flex flex-col w-full">
                <label
                    htmlFor="organization-branch"
                    className="block mb-2 lg:text-lg sm:text-3xl md:text-3xl font-medium text-gray-300"
                >
                    Organization / College Course
                </label>
                <input
                    id="organization-branch"
                    type="text"
                    name="organization-branch"
                    className={`block py-2.5 px-0 w-full lg:text-sm sm:text-3xl md:text-3xl text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none lg:ml-2 sm:ml-6 md:ml-6 sm:mt-4 md:mt-4 ${organizationEmpty ? '!border-b border-red-600 text-red-500' : ''
                        }`}
                    placeholder="Branch"
                    value={organizationBranch}
                    onChange={(e) => setOrganizationBranch(e.target.value)}
                />
            </div>

            <div className="flex flex-col w-full">
                <label
                    htmlFor="organization-rollNumber"
                    className="block mb-2 lg:text-lg sm:text-3xl md:text-3xl font-medium text-gray-300"
                >
                    Organization / College Roll Number
                </label>
                <input
                    id="organization-rollNumber"
                    type="text"
                    name="organization-rollNumber"
                    className={`block py-2.5 px-0 w-full lg:text-sm sm:text-3xl md:text-3xl text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none lg:ml-2 sm:ml-6 md:ml-6 sm:mt-4 md:mt-4 ${organizationEmpty ? '!border-b border-red-600 text-red-500' : ''
                        }`}
                    placeholder="Roll Number"
                    value={organizationRollNumber}
                    onChange={(e) => setOrganizationRollNumber(e.target.value)}
                />
            </div>

            <div className="flex justify-end">
                <button
                    type="button"
                    className="text-slate-100 rounded-2xl bg-gradient-to-r from-blue-400 to-pink-400 font-bold rounded-lg sm:text-3xl sm:px-10 sm:py-5 md:text-3xl md:px-10 md:py-5 lg:text-base lg:px-5 lg:py-2.5 mb-10 text-center h-full rounded-xl"
                    onClick={handleSubmit}
                >
                    {!event.registered ? 'Register' : 'Save Edits'}
                </button>
            </div>
        </form>
    );
}

export default EventRegisterForm;
