import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "./../home/assets/igts-white-logo.png";
const LoginCard = () => {
  const [hasAccount, setHasAccount] = useState(true);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [lnameEmpty, setLnameEmpty] = useState(false);

  const [phone, setPhone] = useState("");
  const [invalidPhone, setInvalidPhone] = useState(false);

  const [emailR, setEmailR] = useState("");
  const [emailL, setEmailL] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);

  const [passwordR, setPasswordR] = useState("");
  const [invalidPass, setInvalidPass] = useState(false);

  const [passwordL, setPasswordL] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [passDontMatch, setPassDontMatch] = useState(false);

  const [organization, setOrgainization] = useState("");
  const [organizationEmpty, setOrgainizationEmpty] = useState(false);

  const [termsAndConditions, setTermsAndCondition] = useState(false);
  const [termsAndConditionsUnchecked, setTermsAndConditionUnchecked] =
    useState(false);

  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [privacyPolicyUnchecked, setPrivacyPolicyUnchecked] = useState(false);

  const [signInFailed, setSignInFailed] = useState([false, ""]);
  const [signUpFailed, setSignUpFailed] = useState([false, ""]);
  const variants = {
    small: {
      transition: {
        duration: 1,
      },
    },
    big: {
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div animate={hasAccount ? "small" : "big"} variants={variants}>
      <div
        className="lg:w-[650px] sm:w-[800px] md:w-[800px] bg-stone-900 rounded-lg lg:p-30 sm:p-10 md:p-10  flex flex-col justify-center lg:gap-y-2 sm:gap-y-10 md:gap-y-10"
        style={{
          boxShadow: " 0 0px 40px -1px rgba(0, 0, 0, 0.6)",
        }}
      >
        {/* logo */}

        <div className="flex flex-col gap-y-3 mb-4">
          <h1 className=" mr-auto ml-auto lg:text-3xl sm:text-9xl md:text-9xl sm:px-16  text-center font-extrabold  tracking-tight ">
            <span
              className="text-gray-300 "
              style={{ filter: "drop-shadow(0px 0px 1px #fff)" }}
            >
              Welcome
            </span>
          </h1>
          <p className="flex gap-x-2 text-slate-50 justify-center lg:text-base sm:text-4xl md:text-4xl">
            {hasAccount ? "Don't have an account?" : "Have an account."}
            <div
              className="cursor-pointer !text-blue-700"
              onClick={() => setHasAccount(!hasAccount)}
            >
              {hasAccount ? "Sign up here." : "Sign in here."}
            </div>
          </p>
        </div>
        {hasAccount ? (
          <form
            className="flex flex-col lg:gap-y-3 sm:gap-y-10 sm:gap-y-10"
            action="#"
          >
            <button
              type="button"
              className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg lg:text-base sm:text-3xl md:text-3xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 gap-x-3 w-full justify-center py-5"
            >
              <svg
                className="lg:w-4 lg:h-4 sm:w-8 sm:h-8 md:w-8 md:h-8 mr-2 -ml-1 "
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Sign in with Google
            </button>
            <div>
              <div className="flex items-center w-full justify-center">
                <hr className="w-full border-1 border-gray-600" />
                <p className="text-gray-400 mx-2">or </p>
                <hr className="w-full border-1 border-gray-600" />
              </div>
            </div>

            <div className="relative">
              <input
                type="Email"
                className="bg-stone-800 sm:p-5 md:p-5 text-gray-400  focus:outline focus:outline-gray-600 lg:text-base sm:text-3xl md:text-3xl rounded-lg focus:0 block w-full p-2.5"
                placeholder="Email"
                value={emailL}
                onChange={(e) => {
                  setEmailL(e.target.value);
                }}
              />
            </div>
            <div className="relative">
              <input
                type="password"
                className="bg-stone-800  sm:p-5 md:p-5  text-gray-400  focus:outline focus:outline-gray-600 lg:text-base sm:text-3xl md:text-3xl rounded-lg focus:0 block w-full p-2.5"
                placeholder="Password"
                value={passwordL}
                onChange={(e) => setPasswordL(e.target.value)}
              />
            </div>
            <button
              type="button"
              className=" text-white bg-gradient-to-r font-medium rounded-lg lg:text-base lg:px-5 lg:py-2.5 sm:text-3xl md:text-3xl sm:py-5 md:py-5 text-center inline-flex items-center mr-2 mb-2 gap-x-3 w-full justify-center mt-5 bg-gradient-to-r to-pink-800 from-blue-800 hover:to-pink-900 hover:from-blue-900"
            >
              Sign In
            </button>
            {signInFailed[0] ? (
              <span className="text-sm text-red-600">
                {" "}
                *Sign in failed: {signInFailed[1]}
              </span>
            ) : (
              <></>
            )}
          </form>
        ) : (
          <form
            className="flex flex-col lg:gap-y-3 sm:gap-y-10 md:gap-y-10 sm:gap-x-10 md:gap-x-10"
            action="#"
          >
            <button
              type="button"
              className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg lg:lg:text-base sm:text-3xl md:text-3xl sm:text-3xl md:text-3xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 gap-x-3 w-full justify-center py-5"
            >
              <svg
                className="lg:w-4 lg:h-4 sm:w-8 sm:h-8 md:w-8 md:h-8 mr-2 -ml-1 "
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Sign up with Google
            </button>
            <div>
              <div className="flex items-center w-full justify-center">
                <hr className="w-full border-1 border-gray-600" />
                <p className="text-gray-400 mx-2">or </p>
                <hr className="w-full border-1 border-gray-600" />
              </div>
            </div>

            <div className="relative flex lg:gap-x-3 sm:gap-x-10 md:gap-x-10">
              <input
                type={"text"}
                className="bg-stone-800  sm:p-5 md:p-5 text-gray-400  focus:outline focus:outline-gray-600 lg:text-base sm:text-3xl md:text-3xl rounded-lg focus:0 block w-full p-2.5"
                placeholder="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
              <div className="flex flex-col w-full">
                <input
                  type={"text"}
                  className={`bg-stone-800  sm:p-5 md:p-5 text-gray-400  focus:outline focus:outline-gray-600 lg:text-base sm:text-3xl md:text-3xl rounded-lg focus:0 block w-full p-2.5 ${
                    lnameEmpty
                      ? "outline outline-1 outline-red-600 text-red-500"
                      : ""
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

            <div>
              <input
                type="tel"
                className={`bg-stone-800  sm:p-5 md:p-5 text-gray-400  focus:outline focus:outline-gray-600 lg:text-base sm:text-3xl md:text-3xl rounded-lg focus:0 block w-full p-2.5 ${
                  invalidPhone
                    ? "outline outline-1 outline-red-600 text-red-500"
                    : ""
                }`}
                placeholder="Phone Number"
                value={invalidPhone ? "*Invalid Phone Number" : phone}
                onChange={(e) => setPhone(e.target.value)}
                onClick={(e) => setInvalidPhone(false)}
              />
            </div>

            <div className="relative">
              <input
                type="Email"
                className={`bg-stone-800  sm:p-5 md:p-5 text-gray-400  focus:outline focus:outline-gray-600 lg:text-base sm:text-3xl md:text-3xl rounded-lg focus:0 block w-full p-2.5 ${
                  invalidEmail
                    ? "outline outline-1 outline-red-600 text-red-500"
                    : ""
                }`}
                placeholder="Email"
                value={invalidEmail ? "*Invalid Email" : emailR}
                onChange={(e) => setEmailR(e.target.value)}
                onClick={(e) => {
                  setInvalidEmail(false);
                }}
              />
            </div>
            <div className="relative flex lg:gap-x-3  sm:gap-x-10 md:gap-x-10">
              <input
                type={invalidPass ? "text" : "password"}
                className={`bg-stone-800  sm:p-5 md:p-5 text-gray-400  focus:outline focus:outline-gray-600 lg:text-base sm:text-3xl md:text-3xl rounded-lg focus:0 block w-full p-2.5 ${
                  invalidPass || passDontMatch
                    ? "outline outline-1 outline-red-600 text-red-500"
                    : ""
                }`}
                placeholder="Password"
                value={
                  invalidPass ? "*Enter 8 char long valid password" : passwordR
                }
                onChange={(e) => setPasswordR(e.target.value)}
                onClick={(e) => {
                  setInvalidPass(false);
                }}
              />

              <input
                type={passDontMatch ? "text" : "password"}
                className={`bg-stone-800 text-gray-400  sm:p-5 md:p-5  focus:outline focus:outline-gray-600 lg:text-base sm:text-3xl md:text-3xl rounded-lg focus:0 block w-full p-2.5 ${
                  invalidPass || passDontMatch
                    ? "outline outline-1 outline-red-600 text-red-500"
                    : ""
                }`}
                placeholder="Confirm Password"
                value={
                  passDontMatch ? "*Passwords dont match" : confirmPassword
                }
                onChange={(e) => setConfirmPassword(e.target.value)}
                onClick={(e) => setPassDontMatch(false)}
              />
            </div>
            <div className="relative flex gap-x-3">
              <input
                type="text"
                name="organization"
                className={`bg-stone-800  sm:p-5 md:p-5  text-gray-400  focus:outline focus:outline-gray-600 lg:text-base sm:text-3xl md:text-3xl rounded-lg focus:0 block w-full p-2.5 ${
                  organizationEmpty
                    ? "outline outline-1 outline-red-600 text-red-500"
                    : ""
                }`}
                placeholder="Organization / College"
                value={
                  organizationEmpty ? "*This is a required field" : organization
                }
                onChange={(e) => setOrgainization(e.target.value)}
                onClick={(e) => setOrgainizationEmpty(false)}
              />
            </div>

            <div className="flex flex-col justify-center mx-auto">
              <div className="flex items-center  mt-4">
                <input
                  id="terms-checkbox"
                  type="checkbox"
                  value={termsAndConditions}
                  onChange={(e) => {
                    setTermsAndCondition(e.target.value);
                    setTermsAndConditionUnchecked(false);
                  }}
                  className={`lg:w-4 lg:h-4  sm:w-10 sm:h-10 md:w-10 md:h-10  accent-stone-900 bg-gray-100 border-gray-300 rounded-lg focus:outline-none ${
                    termsAndConditionsUnchecked
                      ? "outline outline-1 outline-red-600"
                      : ""
                  }`}
                />
                <label
                  for="terms-checkbox"
                  className={`ml-2 lg:text-base sm:text-2xl md:text-2xl font-medium text-gray-300 ${
                    termsAndConditionsUnchecked ? "text-red-600" : ""
                  }`}
                >
                  Check the box to agree with our{" "}
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    terms and conditions
                  </a>
                  .
                </label>
              </div>

              <div className="flex items-center  lg:mt-1 sm:mt-5 md:mt-5">
                <input
                  id="privacy-checkbox"
                  type="checkbox"
                  value={privacyPolicy}
                  onChange={(e) => {
                    setPrivacyPolicy(e.target.value);
                    setPrivacyPolicyUnchecked(false);
                  }}
                  className={`lg:w-4 lg:h-4 sm:w-10 sm:h-10 md:w-10 md:h-10 accent-stone-900 bg-gray-100 border-gray-300 rounded-lg focus:outline-none ${
                    privacyPolicyUnchecked
                      ? "outline outline-1 outline-red-600"
                      : ""
                  }`}
                />
                <label
                  for="privacy-checkbox"
                  className={`ml-2  lg:text-base sm:text-2xl md:text-2xl  font-medium text-gray-300 ${
                    privacyPolicyUnchecked ? "text-red-600" : ""
                  }`}
                >
                  Check the box to agree with our{" "}
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    privacy policy
                  </a>
                  .
                </label>
              </div>
            </div>
            <button
              type="button"
              className=" text-white bg-gradient-to-r to-pink-800 from-blue-800 hover:to-pink-900 hover:from-blue-900 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg lg:text-base lg:px-5 lg:py-2.5 sm:text-3xl md:text-3xl sm:py-5 md:py-5 text-center inline-flex items-center mr-2 mb-2 gap-x-3 w-full justify-center mt-5"
            >
              Sign Up
            </button>
            {signUpFailed[0] ? (
              <span className="text-red-600">
                *sign up failed: {signUpFailed[1]}
              </span>
            ) : (
              <></>
            )}
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default LoginCard;
