import React, { useEffect, useState } from "react";
import "../../App.css";
import logo from "../../Assets/Icons/PixelSportLogo.png";
import ErrorComponent from "../../Components/Common/ErrorComponent";
import { Link, useNavigate } from "react-router-dom";
import clearLocalStorage from "../../helper/localstorage";
import loginWithGoogle from "../../api/loginWithGoogle";
import login from "../../api/login";
// import { GoogleLogin } from "react-google-login";
import { GoogleLogin } from "@react-oauth/google";
import { useMediaQuery } from "react-responsive";
const clientSecret =
  "523867614519-9dcc1641isodinb0tgi0cbk0dqn4m3q8.apps.googleusercontent.com";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // const isMobileSCreen = useMediaQuery({ query: "(max-width: 420px)" });
  // const isMobileSCreen2 = useMediaQuery({ query: "(min-width: 912px)" });
  const handleClick = async () => {
    const { data } = await login({ email, password });

    if (data?.error) {
      setError(data?.error);
    } else {
      setError(null);
      console.log(data?.data);
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("data", JSON.stringify(data.data.user));
      navigate("/");
    }
  };
  const onSuccess = async (res) => {
    console.log(res);
    const { data } = await loginWithGoogle({
      name: res.name,
      email: res.email,
      googleId: res.googleId,
      imageUrl: res.imageUrl,
    });

    if (data?.error) {
      console.log(data);
      setError(data?.error);
    } else {
      setError(null);
      console.log(data?.data);
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("data", JSON.stringify(data.data.user));
      navigate("/");
    }
  };
  const onFailure = (res) => {
    console.log(res);
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
  //           console.log("Google API client initialized successfully");
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
  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("data")) {
      navigate("/");
    } else {
      clearLocalStorage();
    }
  }, []);
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
                    placeholder="name@company.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-[#22134E] h-[6vh] border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={(e) => setPassword(e.target.value)}
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
                    href="/enterEmail"
                    class="text-sm font-medium text-white hover:underline dark:text-primary-500"
                  >
                    <Link to="/forget_password">Forgot password?</Link>
                  </a>
                </div>
                <button
                  type="button"
                  class="w-full h-[5vh] text-white bg-[#000bdd] font-medium rounded-md text-sm px-5 py-2.5 text-center"
                  onClick={handleClick}
                >
                  LOGIN
                </button>
                <p class="text-sm font-light text-white font-medium text-center">
                  Don’t have an account yet?
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2"
                  >
                    <Link to="/signup">Sign up</Link>
                  </a>
                </p>
                {/* <button
                  type="submit"
                  class="w-full h-[6vh] bg-red-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Goolge
                </button> */}
                {/* {isMobileSCreen2 && (
                  <GoogleLogin
                    width={"320px"}
                    onSuccess={(credentialResponse) => {
                      const { credential, clientId, select_by } =
                        credentialResponse;
                      const jwtToken = credential.split(".")[1];
                      const decodedToken = atob(jwtToken);
                      const userInformation = JSON.parse(decodedToken);
                      const {
                        name,
                        email,
                        sub: googleId,
                        picture: imageUrl,
                      } = userInformation;
                      onSuccess({ name, email, googleId, imageUrl });
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                )} */}
                <button
                  type="button"
                  class="w-full h-[5vh] text-white bg-[white] font-medium rounded-md text-sm px-5 flex justify-center items-center text-center"
                >
                  <GoogleLogin
                    style={{ border: "none" }}
                    width={"full"}
                    size="medium"
                    onSuccess={(credentialResponse) => {
                      const { credential, clientId, select_by } =
                        credentialResponse;
                      const jwtToken = credential.split(".")[1];
                      const decodedToken = atob(jwtToken);
                      const userInformation = JSON.parse(decodedToken);
                      const {
                        name,
                        email,
                        sub: googleId,
                        picture: imageUrl,
                      } = userInformation;
                      onSuccess({ name, email, googleId, imageUrl });
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </button>
                ;
                {/* <GoogleLogin
                  clientId={clientSecret}
                  buttonText="Login"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={true}
                /> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
