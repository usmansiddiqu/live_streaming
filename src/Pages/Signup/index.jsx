import React, { useEffect, useState } from "react";
import "../../App.css";
import logo from "../../Assets/Icons/PixelSportLogo.png";
import NFL from "../../Assets/Icons/nfl1.png";
import NBA from "../../Assets/Icons/nba.png";
import MLB from "../../Assets/Icons/mlb1.png";
import NHL from "../../Assets/Icons/nhl1.png";
import Google from "../../Assets/Icons/google.png";
import clearLocalStorage from "../../helper/localstorage";
import { useNavigate } from "react-router";
import ErrorComponent from "../../Components/Common/ErrorComponent";
import signup from "../../api/signup";
import { useSearchParams, useParams } from "react-router-dom";
function Signup() {
  const [search] = useSearchParams();
  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    let results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  // Get 'id' parameter from URL
  let id = getParameterByName("id");
  const setAffiliateData = () => {
    try {
      if (id) {
        let affiliateData = {
          id: id,
          date: Date.now(),
        };
        console.log(affiliateData);
        localStorage.setItem("affiliateData", JSON.stringify(affiliateData));
      }
      console.log(localStorage.getItem("affiliateData"));
      if (localStorage.getItem("affiliateData")) {
        let data = localStorage.getItem("affiliateData");
        console.log(data);
        let parsedData = JSON.parse(data);
        console.log(parsedData);
        const savedTimestamp = parseInt(parsedData.date, 10);
        const currentTimestamp = Date.now();
        const differenceInMilliseconds = currentTimestamp - savedTimestamp;
        console.log(differenceInMilliseconds);
        const differenceInDays =
          differenceInMilliseconds / (1000 * 60 * 60 * 24);
        if (differenceInDays > 7) {
          id = parsedData.id;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // let id = search.get("id");
  // console.log(localStorage.getItem("affiliateData"));
  // const items = { ...localStorage };
  // console.log(items);
  // console.log(id);

  // if (id) {
  //   let affiliateData = {
  //     id: id,
  //     date: Date.now(),
  //   };
  //   console.log(affiliateData);
  //   localStorage.setItem("affiliateData", JSON.stringify(affiliateData));
  // }
  // if (localStorage.getItem("affiliateData")) {
  //   let data = localStorage.getItem("affiliateData");
  //   let parsedData = JSON.parse(data);
  //   console.log(parsedData);
  //   const savedTimestamp = parseInt(parsedData.date, 10);
  //   const currentTimestamp = Date.now();
  //   const differenceInMilliseconds = currentTimestamp - savedTimestamp;
  //   console.log(differenceInMilliseconds);
  //   const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

  //   if (differenceInDays > 7) {
  //     id = parsedData.id;
  //   }
  // }

  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    affiliateId: id ? id : "",
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
      try {
        const { data: response } = await signup(data);
        if (response?.error) {
          setError(response?.error);
          return;
        }
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("data", JSON.stringify(response.data.user));
        window.dispatchEvent(new Event("token"));
        // navigate("/verifyemail");
        navigate("/");
      } catch (error) {
        console.log(error);
      }
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
  useEffect(() => {
    setAffiliateData();
    if (search.get("access") == "none") {
      setError(
        "Access denied! you need to signup or login to watch this match live"
      );
    }
  }, [search.get("access")]);
  return (
    <>
      <div className="main-page flex flex-row w-[100vw] h-[100vh] bg-white">
        <div className="left-side w-[60%] h-full flex items-center relative">
          <div className="overflow-x-hidden absolute overflow-y-auto w-[60%] h-full fixed h-modal md:h-full signup-Bg "></div>
          <div className="relative w-[100%] mx-autoflex flex-col items-center h-[35vh] signup  my-auto">
            <div className="flex flex-col sign-text">
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
              <h1 className="text-white text-5xl font-bold italic w-[20vw] banner-sign-text  text-center mx-auto">
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
        <div className="right-side w-[40%]  m-auto bg-white">
          <section class="flex flex-col items-center ">
            <div class="w-full rounded-lg  md:mt-0 sm:max-w-md xl:p-0">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8 ">
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
                      class="bg-[#F3F4F8] h-[7vh] border-none text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                      class="bg-[#F3F4F8] h-[7vh] border-none text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                      class="bg-[#F3F4F8] h-[7vh] border-none text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                      class="bg-[#F3F4F8] h-[7vh] border-none text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
