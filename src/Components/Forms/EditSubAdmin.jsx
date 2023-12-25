import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getSpecificUser from "../../api/specificUser";
import { useNavigate } from "react-router-dom";
import editSubAdmin from "../../api/updateSubadmin";

import ErrorComponent from "../Common/ErrorComponent";
function EditSubAdmin() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [adminType, setAdminType] = useState("");
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("active");

  const navigate = useNavigate();

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
  const getUser = async () => {
    try {
      const { data: response } = await getSpecificUser(id);
      setName(response.user.name);
      setEmail(response.user.email);
      setPhone(response.user?.phone);
      setAdminType(response.user.userType);
      setStatus(response.user?.status);
      // setImage()
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  const setData = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("name", name);
      formData.append("password", password);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("status", status);
      formData.append("adminType", adminType);
      formData.append("image", image);
      const { data: response } = await editSubAdmin(formData);
      navigate("/admin/sub_admin");
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    // <div
    //   style={{
    //     background: "black",
    //     position: "absolute",
    //     // left: "10%",
    //     width: "100%",
    //     height: "100%",
    //     overflowX: "hidden",
    //     margin: "auto",
    //   }}
    // >
    //   <div className=" mt-20 ">
    //     <div
    //       className="w-[80vw] edit-con bg-[#1C1C1E]  rounded p-5"
    //       style={{ position: "absolute", left: "17%" }}
    //     >
    //       {error && <ErrorComponent message={error} />}
    //       <form class="max-w-sm ">
    //         <div class="mb-5 input-feild w-[72vw] flex">
    //           <label
    //             for="text"
    //             class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
    //           >
    //             Name*
    //           </label>
    //           <input
    //             type="text"
    //             id="text"
    //             class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
    //             placeholder="name"
    //             value={name}
    //             onChange={(e) => {
    //               setName(e.target.value);
    //             }}
    //             required
    //           />
    //         </div>
    //         <div class="mb-5 input-feild w-[72vw] flex">
    //           <label
    //             for="email"
    //             class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
    //           >
    //             Email*
    //           </label>
    //           <input
    //             type="email"
    //             id="email"
    //             class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
    //             required
    //             value={email}
    //             onChange={(e) => {
    //               setEmail(e.target.value);
    //             }}
    //           />
    //         </div>
    //         <div class="mb-5 input-feild w-[72vw] flex">
    //           <label
    //             for="password"
    //             class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
    //           >
    //             Password*
    //           </label>
    //           <input
    //             type="Password"
    //             id="Password"
    //             class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
    //             required
    //             value={password}
    //             onChange={(e) => {
    //               setPassword(e.target.value);
    //             }}
    //           />
    //         </div>
    //         <div class="mb-5 input-feild w-[72vw] flex">
    //           <label
    //             for="phone"
    //             class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
    //           >
    //             Phone
    //           </label>
    //           <input
    //             type="phone"
    //             id="phone"
    //             class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
    //             required
    //             value={phone}
    //             onChange={(e) => {
    //               setPhone(e.target.value);
    //             }}
    //           />
    //         </div>
    //         <div class="mb-5 input-feild w-[72vw] flex">
    //           <label
    //             for="file"
    //             class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
    //           >
    //             Image
    //           </label>
    //           <input
    //             class="block w-full text-sm text-white border border-0 rounded cursor-pointer bg-white-600 dark:text-white focus:outline-none bg-[#48484A] "
    //             onChange={handleFileChange}
    //             id="file_input"
    //             type="file"
    //             value={image.filename}
    //           />
    //         </div>
    //         <div class="mb-5 input-feild-image w-[60vw]  flex items-center justify-evenly">
    //           <label class="block mb-2 text-sm font-medium w-[17.5vw] text-gray-900 text-white "></label>
    //           <div className="w-full  upload-img-frame ">
    //             <img
    //               src={image}
    //               alt="Uploaded Image"
    //               className="w-[270px] h-[250px] border-[6px]"
    //             />
    //           </div>
    //         </div>
    //         <div class=" input-feild w-[72vw] flex  ">
    //           <label
    //             for="countries"
    //             class="block mb-2 input-feild-label  text-sm font-medium text-gray-900 dark:text-white w-[17vw]"
    //           >
    //             Admin Type
    //           </label>
    //           <select
    //             id="countries"
    //             class=" border-0 text-gray-900 text-sm rounded focus:ring-0 bg-[#48484A] block w-full p-2.5 font-bold text-white"
    //             onChange={(e)=>{
    //               setAdminType(e.target.value)
    //             }}
    //           >
    //             <option>Active</option>
    //           </select>
    //         </div>
    //         <div class="mb-5 input-feild-image w-[60vw]  flex items-center justify-evenly">
    //           <label
    //             for="email"
    //             class="block mb-2 text-sm font-medium w-[17.5vw] text-gray-900 text-white "
    //           ></label>
    //           <div className="w-full  upload-img-frame ">
    //             <p className="mt-4 text-[#98A6AD] mb-3 	">
    //               <span className="text-md">Permission for Master Admin</span>
    //               <br />

    //               <span className="text-sm"> (All Permission)</span>
    //             </p>
    //           </div>
    //         </div>
    //         <div class="mb-5 input-feild w-[72vw] flex  ">
    //           <label
    //             for="countries"
    //             class="block mb-2 input-feild-label  text-sm font-medium text-gray-900 dark:text-white w-[17vw]"
    //           >
    //             TV Channel
    //           </label>
    //           <select
    //             id="countries"
    //             class=" border-0 text-gray-900 text-sm rounded focus:ring-0 bg-[#48484A] block w-full p-2.5 font-bold text-white"
    //           >
    //             <option>Active</option>
    //           </select>
    //         </div>
    //         <div class="mb-5 input-feild w-[72vw] flex">
    //           <label
    //             for="countries"
    //             class="block mb-2 input-feild-label  text-sm font-medium text-gray-900 dark:text-white w-[13.5vw]"
    //           ></label>
    //           <button
    //             type="submit"
    //             class="text-white  bg-[#FF0015] text-sm font-bold rounded-md text-sm w-[70px]  sm:w-auto px-3 py-1.5 text-center "
    //           >
    //             Save
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
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
          {error && <ErrorComponent message={error} />}
          <form class="max-w-sm ">
            <div class="mb-5 input-feild w-[72vw] flex">
              <label
                for="text"
                class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
              >
                Name*
              </label>
              <input
                type="text"
                id="text"
                class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                placeholder="Name"
                value={name}
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div class="mb-5 input-feild w-[72vw] flex">
              <label
                for="email"
                class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div class="mb-5 input-feild w-[72vw] flex">
              <label
                for="password"
                class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
              >
                Password*
              </label>
              <input
                type="Password"
                id="Password"
                class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div class="mb-5 input-feild w-[72vw] flex">
              <label
                for="phone"
                class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
              >
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                required
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div class="mb-5 input-feild w-[72vw] flex">
              <label
                for="file"
                class="block input-feild-label  mb-2 text-sm font-medium w-[17vw]text-white"
              >
                Image
              </label>
              <input
                class="block w-full text-sm text-white border border-0 rounded cursor-pointer text-white focus:outline-none bg-[#48484A] "
                onChange={handleFileChange}
                id="file_input"
                type="file"
                value={image?.filename}
              />
            </div>

            <div class=" input-feild w-[72vw] flex  ">
              <label
                for="countries"
                class="block mb-2 input-feild-label  text-sm font-medium text-white w-[17vw]"
              >
                Admin Type
              </label>
              <select
                id="countries"
                class=" border-0 text-gray-900 text-sm rounded focus:ring-0 bg-[#48484A] block w-full p-2.5 font-bold text-white"
                onChange={(e) => {
                  setAdminType(e.target.value);
                }}
                value={adminType}
              >
                <option value={"admin"}>Admin</option>
                <option value={"subadmin"}>Sub Admin</option>
              </select>
            </div>

            <div class="mb-5 input-feild w-[72vw] flex  ">
              <label
                for="countries"
                class="block mb-2 input-feild-label  text-sm font-medium text-white w-[17vw]"
              >
                Status
              </label>
              <select
                id="countries"
                class=" border-0 text-gray-900 text-sm rounded focus:ring-0 bg-[#48484A] block w-full p-2.5 font-bold text-white"
                onChange={(e) => {
                  setStatus(e.target.value);
                  // console.log(status);
                }}
              >
                <option value={"active"}>Active</option>
                <option value={"inactive"}>Inactive</option>
              </select>
            </div>
            <div class="mb-5 input-feild w-[72vw] flex">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-[15.5vw]"
              ></label>
              <button
                type="submit"
                class="text-white  bg-[#FF0015] text-sm font-bold rounded-md text-sm w-[70px]  sm:w-auto px-3 py-1.5 text-center "
                onClick={(e) => {
                  setData(e);
                }}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditSubAdmin;
