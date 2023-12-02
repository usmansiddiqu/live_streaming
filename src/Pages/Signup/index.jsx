import React, { useEffect, useState } from "react";
import "../../App.css";
import logo from "../../Assets/Icons/PixelSportLogo.png";
import NFL from "../../Assets/Icons/nfl1.png";
import NBA from "../../Assets/Icons/nba.png";
import MLB from "../../Assets/Icons/mlb1.png";
import NHL from "../../Assets/Icons/nhl1.png";
import Google from "../../Assets/Icons/google.png";
import { clearLocalStorage } from "../../helper/localstorage";
import { useNavigate } from "react-router";
import ErrorComponent from "../../Components/Common/ErrorComponent";
import { signup } from "../../api/auth.api";
function Signup() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const handleClick = async () => {
    if (!data.name) {
      setError("Name is required!");
    } else if (!data.email) {
      setError("Email is required!");
    } else if (!data.password) {
      setError("Password is required!");
    } else if (!data.confirmPassword) {
      setError("Confirm Password is required!");
    } else if (data.confirmPassword != data.password) {
      setError("Password and confirm password are not equal!");
    } else if (data.confirmPassword.length < 8) {
      setError("Password Should be 8 characters long!");
    } else {
      setError(null);
      const { data: response } = await signup(data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("data", JSON.stringify(response.data.user));
      navigate("/");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("data")) {
      navigate("/");
    } else {
      clearLocalStorage();
    }
  }, []);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="main-page flex flex-row w-[100vw] h-[100vh] bg-white">
        <div className="left-side w-[60%] h-full flex items-center ">
          <div className="overflow-x-hidden overflow-y-auto w-[60%] h-full fixed h-modal md:h-full signup-Bg "></div>
          <div className="relative w-[100%] mx-autoflex flex-col items-center h-[35vh]  my-auto">
            <div className="flex flex-col ">
              <a
                href="#"
                class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
              >
                <img
                  class="mx-auto h-10 w-auto"
                  src={logo}
                  alt="Your Company"
                />
              </a>
              <h1 className="text-white text-5xl font-bold italic w-[20vw]  text-center mx-auto">
                STREAM LIVE SPORTS ONLINE IN 4K
              </h1>
              <div className="icons flex  w-[200px] justify-between items-center mx-auto mt-5">
                <img src={NFL} alt="" className="W-[35px] h-[35px]" />
                <img src={NBA} alt="" className="W-[25px] h-[25px]" />
                <img src={MLB} alt="" className="W-[25px] h-[25px]" />
                <img src={NHL} alt="" className="W-[35px] h-[35px]" />
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="right-side w-[40%]  m-auto ">
          <section class="flex flex-col items-center pt-6">
            <div class="w-full rounded-lg  md:mt-0 sm:max-w-md xl:p-0 ">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div>
                  <h1 className="text-3xl leading-tight tracking-tight text-gray-900">
                    Sign Up
                  </h1>
                  <h1 class="text-lg leading-tight tracking-tight text-gray-900 md:text-2xl ">
                    Create an new account
                  </h1>
                </div>
                <form class="space-y-4 md:space-y-6">
                  {error && <ErrorComponent message={error} />}
                  <div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="bg-[#F3F4F8] h-[7vh] border-none text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Name"
                      required=""
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="email"
                      id="name"
                      class="bg-[#F3F4F8] h-[7vh] border-none text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Email"
                      required=""
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password (At least 8 characters)"
                      class="bg-[#F3F4F8] h-[7vh] border-none text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="password"
                      placeholder="Confirm Password"
                      class="bg-[#F3F4F8] h-[7vh] border-none text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    type="button"
                    class="w-full h-[7vh] rounded-full  text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto"
                    onClick={handleClick}
                  >
                    SIGN UP
                  </button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400 mx-auto text-center">
                    Already Sign Up
                    <a
                      class="font-medium text-blue-600 hover:underline dark:text-blue-500 ml-2"
                      href="/login"
                    >
                      Login
                    </a>
                  </p>
                  <button
                    type="submit"
                    class="w-full h-[7vh] border rounded-full  text-white bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto"
                  >
                    <img src={Google} alt="" className="mx-auto" />
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Signup;
