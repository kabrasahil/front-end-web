import React, { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";

const EditProfile = ({ user }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [lnameEmpty, setLnameEmpty] = useState(false);

  const [phone, setPhone] = useState("");
  const [invalidPhone, setInvalidPhone] = useState(false);

  const [emailR, setEmailR] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);

  const [organization, setOrgainization] = useState("");
  const [organizationEmpty, setOrgainizationEmpty] = useState(false);

  useEffect(() => {
    console.log(user);
    if (!user) return;
    setFname(user.firstName);
    setEmailR(user.email);
    setLname(user.lastName);
    setPhone(user.phoneNumber);
    setOrgainization(user.organization);
  }, [user]);

  return (
    <form className="flex flex-col mx-10  gap-y-6" action="#">
      <div className="relative flex lg:gap-x-20 sm:gap-x-10 md:gap-x-10">
        <div className="flex flex-col w-full">
          <label
            for="first-name"
            class="block mb-2 text-md font-medium text-gray-300"
          >
            First Name
          </label>
          <input
            type={"text"}
            id="first-name"
            className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none ml-2 "
            placeholder="First Name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            for="first-name"
            class="block mb-2 text-md font-medium text-gray-300"
          >
            Last Name
          </label>
          <input
            type={"text"}
            className={`block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none ml-2 ${
              lnameEmpty ? "!border-b border-red-600 text-red-500" : ""
            }`}
            placeholder={`Last Name`}
            value={lnameEmpty ? `*This is a required field` : lname}
            onChange={(e) => setLname(e.target.value)}
            onClick={() => {
              setLnameEmpty(false);
            }}
          />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <label for="phone" class="block mb-2 text-md font-medium text-gray-300">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          className={`block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none ml-2 ${
            invalidPhone ? "!border-b border-red-600 text-red-500" : ""
          }`}
          placeholder="Phone Number"
          value={invalidPhone ? "*Invalid Phone Number" : phone}
          onChange={(e) => setPhone(e.target.value)}
          onClick={(e) => setInvalidPhone(false)}
        />
      </div>

      <div className="flex flex-col w-full">
        <label for="email" class="block mb-2 text-md font-medium text-gray-200">
          Email
        </label>
        <input
          id="email"
          type="Email"
          className={`block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none ml-2 ${
            invalidEmail ? "!border-b border-red-600 text-red-500" : ""
          }`}
          placeholder="Email"
          value={invalidEmail ? "*Invalid Email" : emailR}
          onChange={(e) => setEmailR(e.target.value)}
          onClick={(e) => {
            setInvalidEmail(false);
          }}
        />
      </div>
      <div className="flex w-full items-end">
        <div className="flex flex-col w-full">
          <label
            for="password"
            class="block mb-2 text-md font-medium text-gray-300"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            className={`block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none ml-2 `}
            placeholder="password"
            value={"password"}
            disabled={true}
          />
        </div>
        <Link
          to="/dashboard/profile/changepassword"
          className="text-gray-600 w-full text-center underline"
        >
          update password
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <label
          for="organization"
          class="block mb-2 text-md font-medium text-gray-300"
        >
          Organization / College
        </label>
        <input
          id="organization"
          type="text"
          name="organization"
          className={`block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none ml-2 ${
            organizationEmpty ? "!border-b border-red-600 text-red-500" : ""
          }`}
          placeholder="Organization / College"
          value={organizationEmpty ? "*This is a required field" : organization}
          onChange={(e) => setOrgainization(e.target.value)}
          onClick={(e) => setOrgainizationEmpty(false)}
        />
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Update Profile
        </button>
      </div>
    </form>
  );
};

const ChangePassword = () => {
  const [oldPass, setOldPass] = useState("");
  const [oldPassWrong, setOldPassWrong] = useState(false);

  const [newPass, setNewPass] = useState("");
  const [invalidPass, setInvalidPass] = useState(false);

  const [confirmPass, setConfirmPass] = useState("");
  const [passDontMatch, setPassDontMatch] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="flex gap-x-5 w-full  mx-20 mt-20">
        <form action="" className="p-4 w-1/2 flex flex-col  gap-y-6">
          <div className="flex flex-col w-full">
            <label
              for="oldpassword"
              class="block mb-2 text-md font-medium text-gray-300"
            >
              Old Password
            </label>

            <input
              id="oldpassword"
              type={showPassword ? "text" : oldPassWrong ? "text" : "password"}
              className={`block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none ml-2 ${
                oldPassWrong ? "!border-b border-red-600 text-red-500" : ""
              }`}
              placeholder="***********"
              value={
                oldPassWrong ? "*Old Password entered was invalid" : oldPass
              }
              onChange={(e) => {
                setOldPass(e.target.value);
              }}
              onClick={() => setOldPass(false)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              for="newpassword"
              class="block mb-2 text-md font-medium text-gray-300"
            >
              New Password
            </label>

            <input
              id="newpassword"
              type={showPassword ? "text" : invalidPass ? "text" : "password"}
              className={`block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none ml-2 ${
                invalidPass ? "!border-b border-red-600 text-red-500" : ""
              }`}
              placeholder="***********"
              value={invalidPass ? "*Invalid Password was entered" : newPass}
              onChange={(e) => {
                setNewPass(e.target.value);
              }}
              onClick={(e) => {
                setInvalidPass(false);
              }}
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              for="confirmpassword"
              class="block mb-2 text-md font-medium text-gray-300"
            >
              Confirm Password
            </label>

            <input
              id="confirmpassword"
              type={showPassword ? "text" : passDontMatch ? "text" : "password"}
              className={`block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none ml-2 ${
                passDontMatch ? "!border-b border-red-600 text-red-500" : ""
              }`}
              placeholder="***********"
              value={passDontMatch ? "*Passwords Don't Match" : confirmPass}
              onChange={(e) => {
                setConfirmPass(e.target.value);
              }}
              onClick={(e) => {
                setPassDontMatch(false);
              }}
            />
          </div>

          <div className="flex  justify-center">
            <label class="flex items-center">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-gray-600 transition duration-150 ease-in-out"
                onChange={(e) => {
                  setShowPassword(!showPassword);
                }}
              />
              <span class="ml-2 text-sm font-medium text-gray-700">
                Show Password
              </span>
            </label>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-max"
            >
              Update Password
            </button>
          </div>
        </form>
        <div class="p-4 text-gray-300 rounded-md">
          <h2 class="text-lg font-medium mb-2">Password Rules:</h2>
          <ul class="list-disc ml-4">
            <li>Must be at least 8 characters long</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const DeleteAccount = () => {
  return (
    <div class="rounded-lg mx-20 mt-20 flex flex-col  justify-center">
      <p class="text-gray-200 text-lg mb-4 p-4">
        {" "}
        Before proceeding, please be aware that deleting your account is a
        permanent action that cannot be undone. Are you sure you want to proceed
        with account deletion?
      </p>
      <button
        type="button"
        class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-6 w-max"
      >
        Delete Account
      </button>
    </div>
  );
};

const MyProfile = () => {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "555-1234",
    email: "johndoe@example.com",
    organizationName: "Acme Corporation",
  });

  const [links, setLinks] = useState([
    {
      title: "Edit Profile",
      link: "/dashboard/profile/edit",
      active: false,
      component: <EditProfile user={user} />,
    },
    {
      title: "Password",
      link: "/dashboard/profile/changepassword",
      active: false,
      component: <ChangePassword />,
    },
    {
      title: "Delete",
      link: "/dashboard/profile/delete",
      active: false,
      component: <DeleteAccount />,
    },
  ]);

  const currentPath = useLocation().pathname;
  let toRender = <EditProfile user={user} />;

  const newLinks = links;

  if (
    currentPath === "/dashboard/profile" ||
    currentPath === "/dashboard/profile/"
  ) {
    toRender = <Navigate to="/dashboard/profile/edit" />;
  }

  newLinks.forEach((el, i) => {
    if (el.link == currentPath) {
      toRender = el.component;
      el.active = true;
    } else el.active = false;
  });

  useEffect(() => {
    console.log(typeof links);
    setLinks(newLinks);
  }, []);

  return (
    <div className="h-full">
      <div className="flex gap-x-16 lg:px-20 lg:pt-10 lg:mb-8">
        {links.map((el, i) => {
          return (
            <Link
              to={el.link}
              key={i}
              className={`text-gray-300   font-sans font-bold ${
                el.active ? "!text-gray-100 border-b border-cyan-300" : ""
              }`}
            >
              {el.title}
            </Link>
          );
        })}
      </div>

      <div className="ml-24 mt-14 mb-12">
        <p>
          <span className="text-gray-400 text-xl">
            {user.firstName + " " + user.lastName + " /"}
          </span>
          <span className="text-gray-200 text-3xl ml-4">
            {links.find((x) => x.link == currentPath)
              ? links.find((x) => x.link == currentPath).title
              : ""}
          </span>
        </p>
      </div>

      <div>{toRender}</div>
    </div>
  );
};

export default MyProfile;
