import React, { useEffect, useState } from "react";
import "../../App.css";
import logo from "../../Assets/Icons/PixelSportLogo.png";
import ErrorComponent from "../../Components/Common/ErrorComponent";
import { Link, useNavigate } from "react-router-dom";
import sendVerificationCode from "../../api/sendVerification";
import { ToastContainer, toast } from "react-toastify";

function EnterEmail() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const sendEmail = async () => {
    try {
      const response = await sendVerificationCode({ email });
      toast.success("Code Sent");
      navigate("/forgetPassword");
    } catch (error) {
      setError(error.response.data.message);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {}, []);
  return (
    <div className="max-w-2xl mx-auto">
      <ToastContainer limit={1} />

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
                Enter Email
              </h1>
              <form class="space-y-4 md:space-y-6">
                {error && <ErrorComponent message={error} />}
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-[#22134E] h-[6vh] border border-[#22134E] text-white sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-[#22134E] dark:placeholder-white-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  class="w-full h-[6vh] text-white bg-[#000bdd] font-medium rounded-md text-sm px-5 py-2.5 text-center"
                  onClick={() => {
                    sendEmail();
                  }}
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

export default EnterEmail;
