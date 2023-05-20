import React, {useContext, useState} from 'react';
import {Context} from '../context/Context';
import {SERVER_URL} from '../config';

const ManageUsers = () => {
  const user = useContext(Context);
  const [searchResult, setSearchResult] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const [role, setRole] = useState(searchResult ? searchResult.role : null);
  const [checkedSoc, setCheckedSoc] = useState(false);

  const handleRoleChange = async event => {
    const token = localStorage.getItem('jwt');
    const response = await fetch(`${SERVER_URL}/api/admin/updaterole`, {
      method: 'PUT',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: searchResult._id,
        new_role: event.target.value,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        setRole(event.target.value);

        handleSearch();
      }
    }
  };

  const toggleSocMem = async (event) => {
    setCheckedSoc(!event.target.checked)
    const token = localStorage.getItem('jwt');
    console.log(event.target.checked)
    const response = await fetch(`${SERVER_URL}/api/admin/updatesocmem`, {
      method: 'PUT',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: searchResult._id,
        society_member: !event.target.checked,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        // setRole(event.target.value);
        handleSearch();
      }
    }
  };

  // const toggleSocMem=(event)=>{
  //   setCheckedSoc(prev=>(
  //     !prev
  //   ))
  //   handleSocMem(event)
  // }

  const handleSearch = async () => {
    const encodedQuery = encodeURIComponent(searchQuery); // encode the query parameter
    const token = localStorage.getItem('jwt');
    const response = await fetch(`${SERVER_URL}/api/admin/searchuser?search=${encodedQuery}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        setSearchResult(data.user);
        setCheckedSoc(searchResult.society_member)
        setRole(data.user.role);
      }
    }
  };

  return (
    <div className="m-10 h-full w-full">
      <div className="text-left sm:my-24 md:my-24 lg:mb-12 lg:ml-24 lg:mt-14">
        <p>
          <span className="text-xl text-gray-400 md:text-2xl lg:text-xl">
            {user ? user.name.first_name + ' ' + user.name.last_name + ' /' : ''}
          </span>
          <span className="ml-4 text-3xl text-gray-200 md:text-5xl 2xl:text-3xl">Manage Users</span>
        </p>
      </div>
      <div className="mx-5 my-5 flex items-center rounded-xl bg-stone-800 px-3 py-1 pr-0 lg:w-1/3">
        <button className="cursor-pointer bg-transparent" onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass" style={{color: '#94a3b8'}} />
        </button>
        <input
          placeholder="Enter Email Id"
          className="text flex-1 rounded-xl bg-stone-800 px-4 py-1 text-slate-100 focus:outline-none focus:outline-0 lg:w-1/3"
          value={searchQuery}
          onChange={e => {
            setSearchQuery(e.target.value);
          }}
        />
      </div>

      <div className="mx-5 my-5 text-gray-100">
        {searchResult ? (
          <div className="flex flex-col items-center rounded-lg bg-gray-800 p-6">
            {searchResult.pfp_url && (
              <img
                src={searchResult.pfp_url}
                alt="profile"
                className="mb-4 h-24 w-24 rounded-full border-4 border-pink-500"
              />
            )}
            <h2 className="mb-2 text-center text-2xl font-bold text-white">
              {`${searchResult.name.first_name} ${searchResult.name.last_name}`}
            </h2>
            <div className="flex w-full flex-col items-center">
              <label htmlFor="email" className="mb-1 text-lg text-pink-500">
                Email:
              </label>
              <p id="email" className="mb-4 text-center text-lg">
                {searchResult.email}
              </p>
            </div>
            {searchResult.phone && (
              <div className="flex w-full flex-col items-center">
                <label htmlFor="phone" className="mb-1 text-lg text-pink-500">
                  Phone:
                </label>
                <p id="phone" className="mb-4 text-center text-lg">
                  {searchResult.phone}
                </p>
              </div>
            )}

            {searchResult.organization && <div className="flex w-full flex-col items-center">
              <label htmlFor="organization" className="mb-1 text-lg text-pink-500">
                Organization:
              </label>
              <p id="organization" className="mb-4 text-center text-lg">
                {searchResult.organization}
              </p>
            </div>}
            <div className="flex w-full flex-col items-center">
              <label htmlFor="organization" className="mb-1 text-lg text-pink-500">
                Society Member:
              </label>
              <p id="organization" className="mb-4 text-center text-lg">
                {/* {searchResult.society_member ? 'true' : 'false'} */}
                <label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value={checkedSoc} checked={checkedSoc} class="sr-only peer" onClick={toggleSocMem} />
  <div class="w-11 h-6 peer-checked:bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 after:translate-x-full peer-checked:after:translate-x-0 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 bg-blue-600"></div>
</label>
              </p>
            </div>
            <div className="w-full">
              <label htmlFor="role" className="mb-1 text-lg text-pink-500">
                Role:
              </label>
              
              <div className="relative">
                <select
                  id="role"
                  name="role"
                  value={role}
                  onChange={handleRoleChange}
                  className="w-full appearance-none rounded border border-pink-500 bg-gray-700 px-3 py-2 text-pink-500 focus:border-pink-700 focus:bg-gray-600 focus:outline-none">
                  <option value="REGULAR">Regular</option>
                  <option value="ADMIN">Admin</option>
                  <option value="EDITOR">Editor</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-pink-500">
                  <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10 12L4 6h12l-6 6z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
