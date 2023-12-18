import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SaveIcon from "../../Assets/Icons/diskette.png";
import getAllCategories from "../../api/getCategory";
import addChannelToDB from "../../api/channelDB";
import ErrorComponent from "../Common/ErrorComponent";
import { useNavigate } from "react-router-dom";

function AddChannel() {
  const [TVName, setTvName] = useState("");
  const [description, setDescription] = useState("");
  const [TVAccess, setTVAccess] = useState("free");
  const [TVCategory, setTVCategory] = useState("");
  const [streamType, setStreamType] = useState("");
  const [status, setStatus] = useState("");
  const [server1URL, setServer1URL] = useState("");
  const [server2URL, setServer2URL] = useState("");
  const [server3URL, setServer3URL] = useState("");
  const [logo, setLogo] = useState(null);
  const [text, setText] = useState("");
  const [categoriesObj, setCategoriesObj] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLogo(file);
      // const reader = new FileReader();
      // reader.onloadend = () => {
      //   setLogo(reader.result);
      // };
      // reader.readAsDataURL(file);
    }
  };
  const getCategoriess = async () => {
    const { data: response } = await getAllCategories();
    setCategoriesObj(response.categories);
  };
  useEffect(() => {
    getCategoriess();
  }, []);
  const createTVChannel = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(TVAccess);
    formData.append("TVName", TVName);
    formData.append("description", description);
    formData.append("TVAccess", TVAccess);
    formData.append("TVCategory", TVCategory);
    formData.append("streamType", streamType);
    formData.append("status", status);
    formData.append("server1URL", server1URL);
    formData.append("server2URL", server2URL);
    formData.append("server3URL", server3URL);
    formData.append("logo", logo);
    try {
      const { data: response } = await addChannelToDB(formData);
      console.log(response);
      navigate("/admin/live_tv");
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  // const extractText = (html) => {
  //   const doc = new DOMParser().parseFromString(html, "text/html");
  //   return doc.body.textContent || "";
  // };
  const handleChange = (value) => {
    setDescription(value);
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
      <div className="  mx-auto  mt-20">
        <div
          className="w-[80vw] edit-con bg-[#1C1C1E] mx-auto rounded p-5"
          style={{ position: "absolute", left: "17%" }}
        >
          {error && <ErrorComponent message={error} />}
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
                    TV Name*
                  </label>
                  <input
                    type="email"
                    id="email"
                    class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#313133]"
                    value={TVName}
                    onChange={(e) => {
                      setTvName(e.target.value);
                    }}
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
                    value={description}
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
                    style={{ color: "white" }}
                    for="countries"
                    class="block mb-2 input-feild-label text-sm font-medium text-white w-[17vw]"
                  >
                    TV Access
                  </label>
                  <select
                    id="countries"
                    class=" border-0  text-sm rounded focus:ring-0 bg-[#313133] block w-full p-2.5 font-bold text-white"
                    onChange={(e) => {
                      setTVAccess(e.target.value);
                    }}
                  >
                    <option value={"paid"}>Paid</option>
                    <option value={"free"}>Free</option>
                  </select>
                </div>
                <div class="mb-5 input-feild w-[37vw] flex items-center ">
                  <label
                    for="countries"
                    class="block mb-2 input-feild-label text-sm font-medium text-white w-[17vw]"
                  >
                    Category
                  </label>
                  <select
                    id="countries"
                    class="border-0 text-gray-900 text-sm rounded focus:ring-0 bg-[#313133] block w-full p-2.5 font-bold text-white"
                    onChange={(e) => {
                      setTVCategory(e.target.value);
                    }}
                  >
                    {categoriesObj &&
                      categoriesObj?.map((cat) => {
                        return (
                          <option value={cat._id}>{cat.name}</option>
                          // <li>
                          //   <a
                          //     href="#"
                          //     class="block px-4 py-2  dark:hover:bg-[#FF0015] dark:hover:text-white"
                          //   >
                          //     {cat.name}
                          //   </a>
                          // </li>
                        );
                      })}
                  </select>
                </div>

                {/* <div class="mb-5 input-feild w-[37vw] flex items-center ">
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
                        <label
                          for="countries"
                          class="block mb-2 input-feild-label text-sm font-medium text-gray-900 dark:text-white w-[17vw]"
                        >
                          Stream Type
                        </label>
                        <select
                          id="countries"
                          class="border-0 text-gray-900 text-sm rounded focus:ring-0 bg-[#313133] block w-full p-2.5 font-bold text-white"
                          onChange={(e) => {
                            setStreamType(e.target.value);
                          }}
                        >
                          {categoriesObj &&
                            categoriesObj?.map((cat) => {
                              return (
                                <option value={"active"}>Active</option>
                                // <li>
                                //   <a
                                //     href="#"
                                //     class="block px-4 py-2  dark:hover:bg-[#FF0015] dark:hover:text-white"
                                //   >
                                //     {cat.name}
                                //   </a>
                                // </li>
                              );
                            })}
                        </select>
                      </ul>
                    </div>
                  </div>
                </div> */}
                <div class="mb-5 input-feild w-[37vw] flex items-center text-white">
                  <label
                    for="countries"
                    class="block mb-2 input-feild-label text-sm font-medium text-white w-[17vw]"
                  >
                    Stream Type
                  </label>
                  <select
                    id="countries"
                    class="border-0 text-gray-900 text-sm rounded focus:ring-0 bg-[#313133] block w-full p-2.5 font-bold text-white"
                    onChange={(e) => {
                      setStreamType(e.target.value);
                    }}
                  >
                    <option value={"hls"}>hls/M3U8/HTTP</option>
                    <option value={"mpeg-dash"}>mpeg-dash</option>
                    <option value={"embedcode"}>embedcode</option>
                    <option value={"youtube"}>youtube</option>
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
                    class="block mb-2 input-feild-label text-sm font-medium text-white w-[17vw]"
                  >
                    Status
                  </label>
                  <select
                    id="countries"
                    class="border-0 text-gray-900 text-sm rounded focus:ring-0 bg-[#313133] block w-full p-2.5 font-bold text-white"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  >
                    <option value={"active"}>Active</option>
                    <option value={"inactive"}>Inactive</option>
                  </select>
                </div>
                <div class="mb-5 input-feild  w-[37vw] flex items-center">
                  <label
                    for="email"
                    class="block mb-2 input-feild-label text-sm font-medium w-[17vw] text-gray-900 text-white  "
                  >
                    Server 1 URL*
                  </label>
                  <input
                    type="email"
                    id="email"
                    class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#313133]"
                    value={server1URL}
                    required
                    onChange={(e) => {
                      setServer1URL(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-5 input-feild w-[37vw] flex items-center">
                  <label
                    for="email"
                    class="block mb-2 input-feild-label text-sm font-medium w-[17vw] text-gray-900 text-white "
                  >
                    Server 2 URL
                  </label>
                  <input
                    type="email"
                    id="email"
                    class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#313133]"
                    value={server2URL}
                    required
                    onChange={(e) => {
                      setServer2URL(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-5 input-feild w-[37vw] flex items-center">
                  <label
                    for="email"
                    class="block mb-2 input-feild-label text-sm font-medium w-[17vw] text-gray-900 text-white "
                  >
                    Server 3 URL
                  </label>
                  <div className="flex flex-col w-full">
                    <input
                      type="email"
                      id="email"
                      class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#313133]"
                      required
                      value={server3URL}
                      onChange={(e) => {
                        setServer3URL(e.target.value);
                      }}
                    />
                    <p className="mt-4 text-[#98A6AD] text-xs	">
                      Supported M3U8 URL
                    </p>
                  </div>
                </div>
                <div class="mb-5 input-feild w-[10vw] ">
                  <div className="flex flex-col w-full">
                    <div className="flex input-feild  items-center ">
                      <label
                        for="email"
                        class="block mb-2  text-sm font-medium w-[16vw] tv-logo text-gray-900 text-white  "
                      >
                        TV Logo*
                      </label>
                      <div class="flex upload-img w-full">
                        <div
                          class="file-upload-wrapper2  rounded text-sm text-gray-50  "
                          data-text="Choose File.."
                        >
                          <input
                            type="file"
                            class=" appearance-none items-center py-2 block upload-input w-full text-white  rounded  focus:outline-none "
                            onChange={handleFileChange}
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <div class="mb-5 input-feild-image w-[37vw] flex items-center justify-evenly">
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium w-[20.5vw] text-gray-900 text-white "
                      ></label>
                      <div className="w-full  upload-img-frame ">
                        <p className="mt-4 text-[#98A6AD] mb-3 text-xs	">
                          (Recommended resolution : 800x450)
                        </p>
                        <img
                          src={
                            typeof logo === "string"
                              ? logo
                              : logo instanceof File
                              ? URL.createObjectURL(logo)
                              : null
                          }
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
                  onClick={(e) => {
                    createTVChannel(e);
                  }}
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
