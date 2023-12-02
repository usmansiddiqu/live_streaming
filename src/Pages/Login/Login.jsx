import React, { useState } from "react";
import "../../App.css";
import logo from "../../Assets/Icons/PixelSportLogo.png";
import { Link } from "react-router-dom";
import ErrorComponent from "../../Components/Common/ErrorComponent";

function Login() {
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
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-[#22134E] h-[6vh] border border-[#22134E] text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-[#22134E] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-[#22134E] h-[6vh] border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="text-sm font-medium text-white "
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="text-sm font-medium text-white hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  class="w-full h-[6vh] text-white bg-[#000bdd] font-medium rounded-md text-sm px-5 py-2.5 text-center"
                >
                  LOGIN
                </button>

                <p class="text-sm font-light text-white font-medium text-center">
                  Don’t have an account yet?
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2"
                  >
                    <Link to="/SIGNUP">Sign up</Link>
                  </a>
                </p>
                <button
                  type="submit"
                  class="w-full h-[6vh] bg-red-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Goolge
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
