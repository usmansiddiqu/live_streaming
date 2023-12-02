import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SaveIcon from "../../Assets/Icons/diskette.png";

function AddChannel() {
  const [imageSrc, setImageSrc] = useState(null);
  const [text, setText] = useState("");

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

  const handleChange = (value) => {
    setText(value);
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
      <div className=" mt-20 mx-auto my-auto">
        <div
          className="w-[80vw] edit-con bg-[#1C1C1E] mx-auto rounded p-5"
          style={{ position: "absolute", left: "17%" }}
        >
          <div className="flex justify-between mx-auto Edit-container">
            <div className=" w-[48%] left">
              <h1 className="text-lg font-bold text-white mb-5">
                Live TV Info
              </h1>
              <form class="max-w-sm ">
                <div class="mb-5 w-[37vw] input-feild flex items-center">
                  <label
                    for="email"
                    class="input-feild-label block mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white "
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
                <div class="mb-9 input-feild w-[37vw] flex flex-col ">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                  >
                    Description
                  </label>
                  <ReactQuill
                    value={text}
                    onChange={handleChange}
                    theme="snow"
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      height: "30vh",
                      border: "none",
                    }}
                    modules={{
                      toolbar: [
                        ["bold", "italic", "underline", "strike"],
                        ["blockquote", "code-block"],

                        [{ header: 1 }, { header: 2 }],
                        [{ list: "ordered" }, { list: "bullet" }],
                        [{ script: "sub" }, { script: "super" }],
                        [{ indent: "-1" }, { indent: "+1" }],
                        [{ direction: "rtl" }],

                        [{ size: ["small", false, "large", "huge"] }],
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],

                        [{ color: [] }, { background: [] }],
                        [{ font: [] }],
                        [{ align: [] }],

                        ["clean"],
                      ],
                    }}
                  />
                </div>
                <div class="mb-5 input-feild mt-[90px] w-[37vw] flex items-center ">
                  <label
                    for="countries"
                    class="block mb-2 input-feild-label text-sm font-medium text-gray-900 dark:text-white w-[17vw]"
                  >
                    TV Access
                  </label>
                  <select
                    id="countries"
                    class=" border-0 text-gray-900 text-sm rounded focus:ring-0 bg-[#313133] block w-full p-2.5 font-bold text-white"
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <div class="mb-5 input-feild w-[37vw] flex items-center ">
                  <label
                    for="countries"
                    class="block mb-2 input-feild-label text-sm font-medium text-gray-900 dark:text-white w-[17vw]"
                  >
                    TV Category*
                  </label>
                  <div className="bg-[#313133]  rounded">
                    <button
                      id="dropdownActionButton"
                      data-dropdown-toggle="dropdownAction"
                      class="inline-flex items-center input-feild-drop w-[25.7vw] bg-[#313133] justify-between text-white border-0 font-medium rounded-lg text-sm px-3 py-2.5 "
                      type="button"
                    >
                      <span class="sr-only">Select category</span>
                      Select category
                      <svg
                        class="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    <div
                      id="dropdownAction"
                      class="z-10 hidden bg-white w-[25.6vw] top-0 shadow w-44 dark:divide-gray-600"
                    >
                      <ul
                        class="text-sm text-black"
                        aria-labelledby="dropdownActionButton"
                      >
                        <li className="p-2">
                          <input
                            type="text"
                            id="table-search-users"
                            class=" ps-5 text-sm w-full  text-[#6C757D] text-xs border "
                            placeholder="Search by title"
                          />
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 text-[#6C757D] bg-[#ddd]  dark:hover:bg-[#FF0015] dark:hover:text-white"
                          >
                            Filter by category
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2  dark:hover:bg-[#FF0015] dark:hover:text-white"
                          >
                            MLB
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2  dark:hover:bg-[#FF0015] dark:hover:text-white"
                          >
                            NBA
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2  dark:hover:bg-[#FF0015] dark:hover:text-white"
                          >
                            NFL
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2  dark:hover:bg-[#FF0015] dark:hover:text-white"
                          >
                            NHL
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="mb-5 input-feild w-[37vw] flex items-center ">
                  <label
                    for="countries"
                    class="block mb-2 input-feild-label text-sm font-medium text-gray-900 dark:text-white w-[17vw]"
                  >
                    Stream Type
                  </label>
                  <select
                    id="countries"
                    class="border-0 text-gray-900 text-sm rounded focus:ring-0 bg-[#313133] block w-full p-2.5 font-bold text-white"
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </form>
            </div>
            <div className=" w-[48%] right flex flex-col h-full">
              <div>
                <h1 className="text-lg font-bold text-white mb-5">
                  Thumb & URL
                </h1>
                <div class="mb-5 w-[37vw] input-feild flex items-center ">
                  <label
                    for="countries"
                    class="block mb-2 input-feild-label text-sm font-medium text-gray-900 dark:text-white w-[17vw]"
                  >
                    Status
                  </label>
                  <select
                    id="countries"
                    class="border-0 text-gray-900 text-sm rounded focus:ring-0 bg-[#313133] block w-full p-2.5 font-bold text-white"
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <div class="mb-5 input-feild  w-[37vw] flex items-center">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white "
                  >
                    Server 1 URL*
                  </label>
                  <input
                    type="email"
                    id="email"
                    class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#313133]"
                    value="https://main.fhdsports.live:443/hdstreamlive/hdembed/141.m3u8"
                    required
                  />
                </div>
                <div class="mb-5 input-feild w-[37vw] flex items-center">
                  <label
                    for="email"
                    class="block mb-2 input-feild-label text-sm font-medium w-[17vw] text-gray-900 text-white "
                  >
                    Server 2 URL*
                  </label>
                  <input
                    type="email"
                    id="email"
                    class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#313133]"
                    value="https://main.fhdsports.live:443/hdstreamlive/hdembed/150.m3u8"
                    required
                  />
                </div>
                <div class="mb-5 input-feild w-[37vw] flex items-center">
                  <label
                    for="email"
                    class="block mb-2 input-feild-label text-sm font-medium w-[17vw] text-gray-900 text-white "
                  >
                    Server 3 URL*
                  </label>
                  <div className="flex flex-col w-full">
                    <input
                      type="email"
                      id="email"
                      class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#313133]"
                      required
                    />
                    <p className="mt-4 text-[#98A6AD] text-xs	">
                      Supported M3U8 URL
                    </p>
                  </div>
                </div>
                <div class="mb-5 input-feild w-[37vw] ">
                  <div className="flex flex-col w-full">
                    <div className="flex input-feild  items-center">
                      <label
                        for="email"
                        class="block mb-2 input-feild-label text-sm font-medium w-[17vw] text-gray-900 text-white "
                      >
                        TV Logo*
                      </label>
                      <div class="flex upload-img w-full">
                        <div
                          class="file-upload-wrapper2  rounded text-sm text-gray-50 "
                          data-text="Choose File.."
                        >
                          <input
                            type="file"
                            class=" appearance-none items-center py-2 block upload-input w-full text-gray-700 border rounded  focus:outline-none "
                            onChange={handleFileChange}
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <div class="mb-5 input-feild-image w-[37vw] flex items-center justify-evenly">
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium w-[16.5vw] text-gray-900 text-white "
                      ></label>
                      <div className="w-full  upload-img-frame ">
                        <p className="mt-4 text-[#98A6AD] mb-3 text-xs	">
                          (Recommended resolution : 800x450)
                        </p>
                        <img
                          src={imageSrc}
                          alt="Uploaded Image"
                          className="w-[200px] h-[116px] border-[6px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mb-5  input-feild w-[37vw] flex items-center justify-end">
                <button
                  type="submit"
                  class="text-white save-btn  bg-[#FF0015] text-sm font-bold rounded-md text-sm w-[70px]  px-3 py-1.5 flex justify-around items-center text-center "
                >
                  <img
                    src={SaveIcon}
                    alt=""
                    className="w-[12px] h-[14px] mr-1"
                  />
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddChannel;
