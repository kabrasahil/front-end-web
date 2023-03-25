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
    <>
      <form
        action=""
        className="lg:flex sm:flex md:flex flex-row mb-20  gap-x-10 !items-center sm:justify-center md:justify-center lg:justify-start lg:ml-20 sm:ml-0 md:ml-0"
      >
        <img
          class="sm:w-56 sm:h-56 md:w-56 md:h-56 lg:h-32 lg:w-32 object-cover p-1 rounded-full ring-2 ring-pink-300 "
          src="https://media.istockphoto.com/id/877076656/vector/panda-icon-vector.jpg?s=612x612&w=0&k=20&c=x9bRZQ22kYi5uLjYNwvZjEzR-ClGed8ESc8Cj9_PAdU="
          alt="Bordered avatar"
        ></img>
        <button
          type="button"
          class="text-slate-100 rounded-2xl bg-gradient-to-r from-blue-400 to-pink-400 font-bold rounded-lg sm:text-3xl sm:px-10 sm:py-5 md:text-3xl md:px-10 md:py-5 lg:text-base lg:px-5 lg:py-2.5 text-center h-full rounded-xl !my-auto"
          onClick={(e) => {
            document.getElementById("update-profile-pic").click();
          }}
        >
          Update Profile Picture
        </button>
        <input
          type="file"
          accept="image/*"
          class="hidden"
          id="update-profile-pic"
          onChange={(e) => {
            // submit form
          }}
        />{" "}
      </form>
      <form
        className="flex flex-col lg:mx-10  lg:gap-y-6 sm:mx-20 md:mx-20 sm:gap-y-24 md:gap-y-24"
        action="#"
      >
        <div className="relative flex lg:gap-x-20 sm:gap-x-10 md:gap-x-10">
          <div className="flex flex-col w-full">
            <label
              for="first-name"
              class="block mb-2 lg:text-lg sm:text-3xl md:text-3xl font-medium text-gray-300"
            >
              First Name
            </label>
            <input
              type={"text"}
              id="first-name"
              className="block py-2.5 px-0 w-full lg:text-sm sm:text-3xl md:text-3xl text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none lg:ml-2 sm:ml-6 md:ml-6 sm:mt-4 md:mt-4 "
              placeholder="First Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              for="first-name"
              class="block mb-2 lg:text-lg sm:text-3xl md:text-3xl font-medium text-gray-300"
            >
              Last Name
            </label>
            <input
              type={"text"}
              className={`block py-2.5 px-0 w-full lg:text-sm sm:text-3xl md:text-3xl text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none lg:ml-2 sm:ml-6 md:ml-6 sm:mt-4 md:mt-4 ${
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
          <label
            for="phone"
            class="block mb-2 lg:text-lg sm:text-3xl md:text-3xl font-medium text-gray-300"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className={`block py-2.5 px-0 w-full lg:text-sm sm:text-3xl md:text-3xl text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none lg:ml-2 sm:ml-6 md:ml-6 sm:mt-4 md:mt-4 ${
              invalidPhone ? "!border-b border-red-600 text-red-500" : ""
            }`}
            placeholder="Phone Number"
            value={invalidPhone ? "*Invalid Phone Number" : phone}
            onChange={(e) => setPhone(e.target.value)}
            onClick={(e) => setInvalidPhone(false)}
          />
        </div>

        <div className="flex flex-col w-full">
          <label
            for="email"
            class="block mb-2 lg:text-lg sm:text-3xl md:text-3xl font-medium text-gray-200"
          >
            Email
          </label>
          <input
            id="email"
            type="Email"
            className={`block py-2.5 px-0 w-full lg:text-sm sm:text-3xl md:text-3xl text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none lg:ml-2 sm:ml-6 md:ml-6 sm:mt-4 md:mt-4 ${
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
              class="block mb-2 lg:text-lg sm:text-3xl md:text-3xl font-medium text-gray-300"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              className={`block py-2.5 px-0 w-full lg:text-sm sm:text-3xl md:text-3xl text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none lg:ml-2 sm:ml-6 md:ml-6 sm:mt-4 md:mt-4 `}
              placeholder="password"
              value={"password"}
              disabled={true}
            />
          </div>
          <Link
            to="/dashboard/profile/changepassword"
            className="text-gray-600 w-full text-center  lg:text-base md:text-3xl sm:text-3xl sm:mb-4 md:mb-4 !underline"
          >
            update password
          </Link>
        </div>
        <div className="flex flex-col w-full">
          <label
            for="organization"
            class="block mb-2 lg:text-lg sm:text-3xl md:text-3xl font-medium text-gray-300"
          >
            Organization / College
          </label>
          <input
            id="organization"
            type="text"
            name="organization"
            className={`block py-2.5 px-0 w-full lg:text-sm sm:text-3xl md:text-3xl text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none lg:ml-2 sm:ml-6 md:ml-6 sm:mt-4 md:mt-4 ${
              organizationEmpty ? "!border-b border-red-600 text-red-500" : ""
            }`}
            placeholder="Organization / College"
            value={
              organizationEmpty ? "*This is a required field" : organization
            }
            onChange={(e) => setOrgainization(e.target.value)}
            onClick={(e) => setOrgainizationEmpty(false)}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            class="text-slate-100 rounded-2xl bg-gradient-to-r from-blue-400 to-pink-400 font-bold rounded-lg sm:text-3xl sm:px-10 sm:py-5 md:text-3xl md:px-10 md:py-5 lg:text-base lg:px-5 lg:py-2.5 mb-10 text-center h-full rounded-xl"
          >
            Update Profile
          </button>
        </div>
      </form>
    </>
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
      <div className="flex items-center gap-x-5 w-full  px-20">
        <form
          action=""
          className="p-4 flex flex-col mx-10  lg:gap-y-6  sm:gap-y-24 md:gap-y-24 items-center justify-center"
        >
          <div className="flex flex-col w-full">
            <label
              for="oldpassword"
              class="block mb-2 lg:text-lg sm:text-3xl md:text-3xl font-medium text-gray-300"
            >
              Old Password
            </label>

            <input
              id="oldpassword"
              type={showPassword ? "text" : oldPassWrong ? "text" : "password"}
              className={`block py-2.5 px-0 w-full lg:text-sm sm:text-3xl md:text-3xl text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none lg:ml-2 sm:ml-6 md:ml-6 sm:mt-4 md:mt-4 ${
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
              class="block mb-2 lg:text-lg sm:text-3xl md:text-3xl font-medium text-gray-300"
            >
              New Password
            </label>

            <input
              id="newpassword"
              type={showPassword ? "text" : invalidPass ? "text" : "password"}
              className={`block py-2.5 px-0 w-full lg:text-sm sm:text-3xl md:text-3xl text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none lg:ml-2 sm:ml-6 md:ml-6 sm:mt-4 md:mt-4 ${
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
              class="block mb-2 lg:text-lg sm:text-3xl md:text-3xl font-medium text-gray-300"
            >
              Confirm Password
            </label>

            <input
              id="confirmpassword"
              type={showPassword ? "text" : passDontMatch ? "text" : "password"}
              className={`block py-2.5 px-0 w-full lg:text-sm sm:text-3xl md:text-3xl text-gray-400 bg-transparent  border-b border-stone-800 focus:outline-none lg:ml-2 sm:ml-6 md:ml-6 sm:mt-4 md:mt-4 ${
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
                class="form-checkbox lg:h-5 lg:w-5 sm:h-8 sm:w-8 md:h-8 md:w-8 text-gray-600 transition duration-150 ease-in-out"
                onChange={(e) => {
                  setShowPassword(!showPassword);
                }}
              />
              <span class="lg:ml-2 sm:ml-5 md:ml-5 lg:text-sm sm:text-4xl md:text-4xl font-medium text-gray-700">
                Show Password
              </span>
            </label>
          </div>
          <div className="flex flex-col gap-y-10 text-gray-200 justify-center items-center">
            <h2 class="lg:text-base sm:text-xl md:text-xl font-medium ">
              * Your Password must be at least 8 characters long
            </h2>

            <button
              type="button"
              class="text-slate-100 rounded-2xl bg-gradient-to-r from-blue-400 to-pink-400 font-bold rounded-lg sm:text-3xl sm:px-10 sm:py-5 md:text-3xl md:px-10 md:py-5 lg:text-base lg:px-5 lg:py-2.5 text-center h-full rounded-xl !my-auto"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const DeleteAccount = () => {
  return (
    <div class="rounded-lg mx-20 mt-20 flex flex-col  justify-center items-center">
      <p class="text-gray-200 lg:text-lg sm:text-4xl md:text-4xl sm:leading-loose md:leading-loose mb-4 p-4">
        {" "}
        Before proceeding, please be aware that deleting your account is a
        permanent action that cannot be undone. Are you sure you want to proceed
        with account deletion?
      </p>
      <button
        type="button"
        class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm lg:px-5 lg:py-2.5 sm:px-10 md:py-5 sm:px-10 md:py-5 text-center mr-2 mb-2 ml-6 w-max lg:text-lg md:text-4xl sm:text-4xl lg:my-4 md:my-6 sm:my-6"
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
    <div className="h-full w-full">
      <div className="flex gap-x-16 lg:px-20 lg:pt-10 lg:mb-8 lg:justify-start sm:justify-center md:justify-center sm:items-center md:items-center sm:mb-20 md:mb-20 lg:border-0 sm:border-b-2 md:border-stone-800 md:border-b-2 md:border-stone-800 md:py-6 sm:py-6">
        {links.map((el, i) => {
          return (
            <Link
              to={el.link}
              key={i}
              className={`text-gray-300   font-sans font-bold lg:text-base sm:text-3xl md:text-3xl sm:p-2 md:p-2 ${
                el.active
                  ? "!text-gray-100 lg:border-b sm:border-b-2 md:border-b-2  border-cyan-300"
                  : ""
              }`}
            >
              {el.title}
            </Link>
          );
        })}
      </div>

      <div className="lg:ml-24 lg:!mt-14 lg:!mb-12 sm:my-24 md:my-24 sm:text-center md:text-center lg:text-left">
        <p>
          <span className="text-gray-400 lg:text-xl sm:text-5xl md:text-5xl">
            {user.firstName + " " + user.lastName + " /"}
          </span>
          <span className="text-gray-200 lg:text-3xl sm:text-7xl md:text-7xl ml-4">
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
