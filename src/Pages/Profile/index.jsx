import React from "react";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "../../Assets/styles/Button.css";
import Image from "../../Assets/Icons/person.png";
function Profile() {
  return (
    <>
      <div className="h-[100vh] bg-[#0D0620]">
        <Nav />
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
                    class="appearance-none bg-[#22134E] h-[7vh] block w-full text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                    id="grid-first-name"
                    type="text"
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
                    class="appearance-none bg-[#22134E] h-[7vh] block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                    id="grid-last-name"
                    type="text"
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
                    class="appearance-none bg-[#22134E] h-[7vh] block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                    id="grid-first-name"
                    type="text"
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
                    class="appearance-none bg-[#22134E] h-[7vh] block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                    id="grid-last-name"
                    type="text"
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
                  class="appearance-none bg-[#22134E] h-[10vh] block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
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
                        />
                      </div>

                      <img
                        src={Image}
                        alt=""
                        className="w-[50px] h-[50px] rounded-full  ml-3"
                      />
                    </div>
                  </div>
                </div>
                <button class="bg-gradient-to-r from-[#00C4FF] h-[40px] w-[110px] to-[#0074FF] hover:bg-gradient-to-l text-white font-norma rounded flex flex-row gap-2  justify-center items-center ">
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
