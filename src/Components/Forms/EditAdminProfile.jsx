import React, { useState } from "react";

function AdminProfile() {
  const [imageSrc, setImageSrc] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div
      style={{
        background: "black",
        position: "relative",
        // left: "10%",
        width: "100%",
        height: "100%",
        overflowY: "scroll",
      }}
    >
      <div className=" ml-4 mt-20 ">
        <div>
          <div
            className="w-[80vw] edit-con bg-[#1C1C1E]  mx-auto rounded p-5"
            style={{ position: "absolute", left: "17%" }}
          >
            <form class="max-w-sm ">
              <div class="mb-5 input-feild w-[72vw] flex">
                <div
                  for="text"
                  class="block input-feild-label bg-white border w-[200px] h-[200px] flex justify-betweenitems-center  mb-2 text-sm font-medium text-gray-900 text-white"
                >
                  <img
                    src={imageSrc}
                    alt="Uploaded Image"
                    className="w-[170px] h-[170px] rounded-full  mx-auto my-auto "
                  />
                </div>
              </div>
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="email"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Image
                </label>
                <input
                  class="block w-full text-sm text-white border border-0 rounded cursor-pointer bg-white-600 dark:text-white focus:outline-none bg-[#48484A] "
                  id="file_input"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="text"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="text"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  required
                />
              </div>

              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="email"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  required
                />
              </div>
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="text"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Phone
                </label>
                <input
                  type="number"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  required
                />
              </div>
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="password"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  required
                />
              </div>

              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="countries"
                  class="block mb-2 input-feild-label  text-sm font-medium text-gray-900 dark:text-white w-[13.5vw]"
                ></label>
                <button
                  type="submit"
                  class="text-white  bg-[#FF0015] text-sm font-bold rounded-md text-sm w-[70px]  sm:w-auto px-3 py-1.5 text-center "
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
