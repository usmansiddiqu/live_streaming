import React, { useState } from "react";

function EditSlider() {
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
        position: "absolute",
        // left: "10%",
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        margin: "auto",
      }}
    >
      <div className=" mt-20 ">
        <div
          className="w-[80vw] edit-con bg-[#1C1C1E]  rounded p-5"
          style={{ position: "absolute", left: "17%" }}
        >
          <form class="max-w-sm ">
            <div class="mb-5 w-[60vw] input-feild flex items-center">
              <label
                for="email"
                class="input-feild-label block mb-2 text-sm font-medium w-[25vw] text-gray-900 text-white "
              >
                Category Name
              </label>
              <input
                type="email"
                id="email"
                class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#313133]"
                placeholder="MLB"
                value="MLB"
                required
              />
            </div>
            <div class="mb-5 input-feild w-[60vw]  ">
              <div className="flex flex-col w-full">
                <div className="flex input-feild  items-center">
                  <label
                    for="email"
                    class="block mb-2 input-feild-label text-sm font-medium w-[24vw] text-gray-900 text-white "
                  >
                    TV Logo*
                  </label>
                  <div class="flex upload-img  ">
                    <div
                      class="file-upload-wrapper2 file-upload-wrapper3 file-upload-wrapper3 rounded text-sm text-gray-50 "
                      data-text="Choose File.."
                    >
                      <input
                        type="file"
                        class=" appearance-none items-center py-2 block upload-input  text-gray-700  rounded focus:outline-none "
                        onChange={handleFileChange}
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-5 input-feild-image w-[60vw]  flex items-center justify-evenly">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium w-[24vw] text-gray-900 text-white "
                  ></label>
                  <div className="w-full  upload-img-frame ">
                    <p className="mt-4 text-[#98A6AD] mb-3 text-xs	">
                      (Recommended resolution : 1100x450)
                    </p>
                    <img
                      src={imageSrc}
                      alt="Uploaded Image"
                      className="w-[400px] h-[169px] border-[6px]"
                    />
                  </div>
                </div>
                <div class="mb-5 input-feild  w-[60vw] flex  ">
                  <label
                    for="countries"
                    class="block mb-2 input-feild-label  text-sm font-medium text-gray-900 dark:text-white w-[25vw]"
                  >
                    Post Type
                  </label>
                  <select
                    id="countries"
                    class=" border-0 text-gray-900 text-sm rounded focus:ring-0 bg-[#48484A] block w-full p-2.5 font-bold text-white"
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <div class="mb-5 input-feild  w-[60vw] flex  ">
                  <label
                    for="countries"
                    class="block mb-2 input-feild-label  text-sm font-medium text-gray-900 dark:text-white w-[25vw]"
                  >
                    Live TV
                  </label>
                  <select
                    id="countries"
                    class=" border-0 text-gray-900 text-sm rounded focus:ring-0 bg-[#48484A] block w-full p-2.5 font-bold text-white"
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <div class=" w-[60vw]  input-feild  flex mb-5">
                  <label
                    for="countries"
                    class="block mb-2 input-feild-label   text-sm font-medium text-gray-900 dark:text-white w-[17.5vw]"
                  >
                    Live TV
                  </label>
                  <div className="w-[43vw]  flex">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 border border-gray-300 "
                        required
                      />
                    </div>
                    <label
                      for="remember"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Home
                    </label>
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 border border-gray-300 ml-2 "
                        required
                      />
                    </div>
                    <label
                      for="remember"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Live Tv
                    </label>
                  </div>
                </div>

                <div class="mb-5 input-feild  w-[60vw] flex  ">
                  <label
                    for="countries"
                    class="block mb-2 input-feild-label  text-sm font-medium text-gray-900 dark:text-white w-[25vw]"
                  >
                    Status
                  </label>
                  <select
                    id="countries"
                    class=" border-0 text-gray-900 text-sm rounded focus:ring-0 bg-[#48484A] block w-full p-2.5 font-bold text-white"
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <div class="mb-5 input-feild w-[72vw] flex">
                  <label
                    for="countries"
                    class="block mb-2 input-feild-label  text-sm font-medium text-gray-900 dark:text-white w-[17.5vw]"
                  ></label>
                  <button
                    type="submit"
                    class="text-white  bg-[#FF0015] text-sm font-bold rounded-md text-sm w-[70px]  sm:w-auto px-3 py-1.5 text-center "
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditSlider;
