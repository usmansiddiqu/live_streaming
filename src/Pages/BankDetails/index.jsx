import React, { useEffect, useState } from "react";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "../../Assets/styles/Button.scss";
import DashHeader from "../../Components/Dashboard/DashHeader";
import updateUser from "../../api/editUser";
import { toast, ToastContainer } from "react-toastify";
import getDetails from "../../api/authGetDetails";

function BankDetails() {
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
    <>
      <div className="h-[100vh] bg-[#0D0620]">
        <ToastContainer />
        <Nav />
        <DashHeader title="Bank Details" subtitle="Bank Details" />
        <div className="w-[100vw] h-[auto] bg-[#0D0620] flex items-center ">
          <div className="py-8 lg:py-10 px-6 mx-auto max-w-screen-md sm:w-[100vw] mt-10  my-auto bg-[#130A2D] rounded-lg">
            <form class="w-full mx-auto">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-white text-sm font-bold mb-2"
                    for="grid-first-name"
                  >
                    Acc. Number
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
                    Beneficiary Name
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
                    Bank Swift
                  </label>
                  <input
                    class="appearance-none bg-[#22134E] h-[7vh]  text-white block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                    id="grid-first-name"
                    type="text"
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
                    IBAN
                  </label>
                  <input
                    class="appearance-none bg-[#22134E] h-[7vh]  text-white block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                    id="grid-last-name"
                    type="text"
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
                    Bank Address
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
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default BankDetails;
