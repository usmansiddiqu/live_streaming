import React, { useEffect, useState } from "react";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "../../Assets/styles/Button.scss";
import DashHeader from "../../Components/Dashboard/DashHeader";
import updateUser from "../../api/editUser";
import { toast, ToastContainer } from "react-toastify";
import getDetails from "../../api/authGetDetails";
import updateAccount from "../../api/editAccountInfo";
import cancelSub from "../../api/cancelSub";
import { useNavigate } from "react-router-dom";
import clearLocalStorage from "../../helper/localstorage";

function Profile() {
  const navigate = useNavigate();
  const [popUpBox, setPopUpBox] = useState(false);
  const [popUpBoxValue, setPopUpBoxValue] = useState(false);
  
  const [user, setUser] = useState(localStorage.getItem("data"));
  const [data, setData] = useState(JSON?.parse(localStorage?.getItem("data")));

  const [name, setName] = useState(data?.name);
  const [email, setEmail] = useState(data?.email);
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(data?.phone);
  const [error, setError] = useState("");
  const [address, setAddress] = useState(data?.address);
  const [image, setImage] = useState(data?.image ? data.image : null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(file);
      // const reader = new FileReader();
      // reader.onloadend = () => {
      //   setImageSrc(reader.result);
      // };
      // reader.readAsDataURL(file);
    }
  };

  const handleCancelSubscription = async () =>{
    try { 
      const result = await cancelSub(data?._id);
      if(result?.data?.hasError){
        toast.error(result?.data?.message);
      }
      toast.success(result?.data?.message);
    } catch (error) {
      setError("error");
    }
  }
  const handleDeleteAccount = async() =>{
    try {
      const result = await updateAccount(data?._id);
      if(result?.data?.hasError){
        toast.error(result?.data?.message);
      }
      toast.success(result?.data?.message);
      clearLocalStorage();
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      navigate("/")
    } catch (error) {
      setError("error");
    }
  }

  const handlePopupdata = (val) =>{
    setPopUpBox(true)
    setPopUpBoxValue(val)
  }

  const handlePopupBoxCall = (val) =>{
    if(val){
       if(popUpBoxValue === "Cancel Subscription"){
        handleCancelSubscription()
       }
       if(popUpBoxValue === "Delete Account"){
        handleDeleteAccount()
       }
    }
    else{
      setPopUpBox(false)
    }
  }

  const handleSave = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userId", JSON.parse(user)._id);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append("image", image);
    try {
      await updateUser(formData);
      if (localStorage.getItem("token")) {
        const { data: response } = await getDetails();
        localStorage.setItem("data", JSON.stringify(response?.user));
        window.dispatchEvent(new Event("profile"));
        toast.success("Profile Updated");
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  // const getUser = async () => {
  //   try {
  //     const { data: response } = await getSpecificUser(JSON.parse(user)._id);
  //     setName(response.user.name);
  //     setEmail(response.user.email);
  //     setPhone(response.user?.phone);
  //     setImage(url + "\\" + response.user.image.replace("uploads\\", ""));
  //   } catch (error) {
  //     setError(error.response.data.message);
  //   }
  // };
  // useEffect(() => {
  //   getUser();
  // }, []);
  const isGoogleImageUrl = (url) => {
    const googleImageUrlRegex =
      /^https:\/\/lh3\.googleusercontent\.com\/.+=[sS]\d+(-c)?$/;
    return googleImageUrlRegex.test(url);
  };
  return (
    <div className="relative">
      <div className="h-[100vh] bg-[#0D0620]">
        <ToastContainer />
        <Nav />
        <DashHeader title="Edit Profile" SubTitle="Edit Profile" />
        <div className="w-[100vw] h-[auto] bg-[#0D0620] flex items-center ">
          <div className="py-8 lg:py-10 px-6 mx-auto max-w-screen-md sm:w-[100vw] mt-10  my-auto bg-[#130A2D] rounded-lg">
            <form class="w-full mx-auto">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-white text-sm font-bold mb-2"
                    for="grid-first-name"
                  >
                    Name
                  </label>
                  <input
                    class="appearance-none bg-[#22134E] text-white h-[7vh] block w-full text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                    id="grid-first-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-white text-sm   font-bold mb-2"
                    for="grid-last-name"
                  >
                    Email
                  </label>
                  <input
                    class="appearance-none bg-[#22134E] h-[7vh]  text-white block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                    id="grid-last-name"
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-white text-sm  font-bold mb-2"
                    for="grid-first-name"
                  >
                    Password
                  </label>
                  <input
                    class="appearance-none bg-[#22134E] h-[7vh]  text-white block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                    id="grid-first-name"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-white text-sm font-bold mb-2"
                    for="grid-last-name"
                  >
                    Phone
                  </label>
                  <input
                    class="appearance-none bg-[#22134E] h-[7vh]  text-white block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                    id="grid-last-name"
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="flex flex-wrap ">
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-white text-sm  font-bold mb-2"
                    for="grid-last-name"
                  >
                    Address
                  </label>
                </div>

                <textarea
                  id="message"
                  rows="6"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  class="appearance-none bg-[#22134E]  text-white h-[10vh] block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                ></textarea>
              </div>
              <div className="flex justify-between w-full items-end upload-ip">
                <div class="flex flex-wrap w-full">
                  <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-white text-sm  font-bold mb-2"
                      for="grid-last-name"
                    >
                      Profile Image
                    </label>
                    <div class="flex upload-img ">
                      <div
                        class="file-upload-wrapper  rounded text-sm text-gray-50 "
                        data-text="Choose File.."
                      >
                        <input
                          name="file-upload-field"
                          type="file"
                          class="file-upload-field appearance-none items-center py-2 bg-[#22134E] block w-full h-[50px] text-gray-700 border rounded leading-tight focus:outline-none"
                          value=""
                          onChange={handleFileChange}
                        />
                      </div>

                      <img
                        src={
                          typeof image === "string"
                            ? isGoogleImageUrl(image)
                              ? image
                              : null
                            : image instanceof File
                            ? URL.createObjectURL(image)
                            : null
                        }
                        alt=""
                        className="w-[50px] h-[50px] rounded-full  ml-3"
                      />
                    </div>
                  </div>
                </div>
                <button
                  class="bg-gradient-to-r from-[#00C4FF] h-[40px] w-[110px] to-[#0074FF] hover:bg-gradient-to-l text-white font-norma rounded flex flex-row gap-2  justify-center items-center "
                  onClick={(e) => {
                    handleSave(e);
                  }}
                >
                  Update
                </button>
              </div>
            </form>
            <div class="flex flex-col md:flex-row gap-4 mt-5">
            <button
                  class="bg-gradient-to-r from-[#00C4FF] h-[40px] px-3 to-[#0074FF] hover:bg-gradient-to-l text-white font-norma rounded flex flex-row gap-2  justify-center items-center "
                  onClick={() => {
                    handlePopupdata("Cancel Subscription");
                  }}
                >
                  Cancel Subscription
                </button>
                <button
                  class="bg-gradient-to-r from-[#00C4FF] h-[40px] px-3 to-[#0074FF] hover:bg-gradient-to-l text-white font-norma rounded flex flex-row gap-2  justify-center items-center "
                  onClick={() => {
                    handlePopupdata("Delete Account");
                  }}
                >
                  Delete Account
                </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {popUpBox && <div className="w-screen h-[105vh] bg-gray-700 bg-opacity-85 flex justify-center items-center absolute left-0 top-0 z-[100] p-3">
        <div className="w-1/2 md:w-1/4 h-1/3 md:h-1/4 bg-[#0D0620] flex flex-col justify-center items-center gap-5 rounded-xl">
          <p className="text-base md:text-2xl font-semibold text-white text-center">Are you sure you want to {popUpBoxValue}</p>
          <div className="flex flex-col md:flex-row gap-5">
            <button
            onClick={()=>handlePopupBoxCall(true)}
            class="bg-gradient-to-r from-[#00C4FF] h-[40px] px-3 to-[#0074FF] hover:bg-gradient-to-l text-white font-norma rounded flex flex-row gap-2  justify-center items-center "
            >Yes</button>
            <button
              onClick={()=>handlePopupBoxCall(false)}
              class="bg-gradient-to-r from-[#00C4FF] h-[40px] px-3 to-[#0074FF] hover:bg-gradient-to-l text-white font-norma rounded flex flex-row gap-2  justify-center items-center "
            >No</button>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default Profile;
