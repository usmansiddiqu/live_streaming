import React, { useEffect, useState } from "react";
import "../../App.css";
import logo from "../../Assets/Icons/PixelSportLogo.png";
import ErrorComponent from "../../Components/Common/ErrorComponent";
import { Link, useNavigate } from "react-router-dom";
import codeverification from "../../api/auth.api";
function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState();
  const [error, setError] = useState(null);
  const handleClick = async () => {
    const { data } = await codeverification({ email, password, code });

    if (data?.error) {
      setError(data?.error);
    } else {
      setError(null);
      navigate("/login");
    }
  };

  // const start = () => {
  //   window.gapi.load("client", () => {
  //     window.gapi.client
  //       .init({
  //         clientId: clientSecret,
  //         scope: "",
  //       })
  //       .then(
  //         () => {
  //           // Initialization successful, you can now use gapi.client
  //         },
  //         (error) => {
  //           // Initialization failed, handle the error
  //           console.error("Error initializing Google API client", error);
  //         }
  //       );
  //   });
  // };
  // const start = () => {
  //   gapi.client.init({
  //     clientId: clientSecret,
  //     scope: "",
  //   });
  // };
  // useEffect(() => {
  //   const loadGoogleApi = () => {
  //     if (window.gapi) {
  //       window.gapi.load("client", start);
  //     } else {
  //       // Handle the case where window.gapi is not available
  //       console.error("Google API client library not loaded");
  //     }
  //   };

  //   // Load the Google API client library when the component mounts
  //   loadGoogleApi();
  // }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 justify-center items-center login-Bg mx-auto"></div>
      <section>
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 relative ">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img class="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
          </a>
          <div class="w-full bg-white rounded-2xl md:mt-0 sm:max-w-md xl:p-0 bg-[#0D0820] bg-opacity-75 ">
            <div
              class="p-6 space-y-4 md:space-y-6 sm:p-8 bg-[#0D0820] rounded-2xl "
              style={{ boxShadow: "0px 1px 15px 1px rgba(255,255,255,0.5)" }}
            >
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login
              </h1>
              <form class="space-y-4 md:space-y-6">
                {error && <ErrorComponent message={error} />}
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-[#22134E] h-[6vh] border border-[#22134E] text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-[#22134E] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="text"
                    id="text"
                    class="bg-[#22134E] h-[6vh] border border-[#22134E] text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-[#22134E] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Verification Code"
                    required
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Your New Password"
                    class="bg-[#22134E] h-[6vh] border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  class="w-full h-[6vh] text-white bg-[#000bdd] font-medium rounded-md text-sm px-5 py-2.5 text-center"
                  onClick={handleClick}
                >
                  Confirm
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForgetPassword;
