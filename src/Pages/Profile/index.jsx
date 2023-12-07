import React, { useEffect, useState } from "react";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "../../Assets/styles/Button.scss";
import DashHeader from "../../Components/Dashboard/DashHeader";
import updateUser from "../../api/editUser";

function Profile() {
  const [image, setImage] = useState(null);
  const [user, setUser] = useState(localStorage.getItem("data"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [address, setAddress] = useState("");
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
      const response = await updateUser(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };
  // const getUser = async () => {
  //   try {
  //     const { data: response } = await getSpecificUser(JSON.parse(user)._id);
  //     console.log(response.user);
  //     setName(response.user.name);
  //     setEmail(response.user.email);
  //     setPhone(response.user?.phone);
  //     setImage(url + "\\" + response.user.image.replace("uploads\\", ""));
  //   } catch (error) {
  //     setError(error.response.data.message);
  //   }
  // };
  // useEffect(() => {
  //   console.log("running");
  //   getUser();
  // }, []);
  return (
    <>
      <div className="h-[100vh] bg-[#0D0620]">
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
                            ? image
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
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Profile;
