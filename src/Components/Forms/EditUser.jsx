import React, { useEffect, useState } from "react";
import Pikaday from "pikaday";
import "pikaday/css/pikaday.css";
import updateUser from "../../api/editUser";
import getPackagesAdmin from "../../api/getPackagesAdmin";
import getSpecificUser from "../../api/specificUser";
import cancelSub from "../../api/cancelSub";
import ErrorComponent from "../Common/ErrorComponent";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function EditUser() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [packages, setPackages] = useState([]);
  const [packageId, setPackageId] = useState("");
  // const [subscriptionPlan,setEmail]=useState("")
  const [status, setStatus] = useState("active");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      // const reader = new FileReader();
      // reader.onloadend = () => {
      //   setLogo(reader.result);
      // };
      // reader.readAsDataURL(file);
    }
  };
  const handleClearExpiry = async () => {
    try {
      await cancelSub(id);
      setExpireDate("");
    } catch (error) {
      // setError(error?.response?.data?.message);
    }
  };
  const handleSave = async (e) => {
    try {
      e && e.preventDefault();
      const formData = new FormData();
      formData.append("userId", id);
      formData.append("name", name);
      formData.append("password", password);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("address", address);
      // Only send expiryDate if it's a valid date string
      if (expireDate && expireDate.trim() !== "") {
        formData.append("expiryDate", expireDate);
      }
      if (packageId) {
        formData.append("packageId", packageId);
      }
      formData.append("status", status);
      formData.append("image", image);
      const { data: response } = await updateUser(formData);
      navigate("/admin/users");
    } catch (error) {
      // setError(error.response.data.message);
    }
  };
  const getChannelById = async () => {
    try {
      const { data: response } = await getSpecificUser(id);
      setName(response.data.name);
      setEmail(response.data.email);
      setPhone(response.data?.phone);
      setAddress(response.data?.address);
      setExpireDate(response.data?.expiryDate);
      setStatus(response.data?.status);
      if (response.data?.packageId) {
        setPackageId(response.data.packageId);
      }
    } catch (error) {
      // setError(error.response.data.message);
    }
  };
  const getAdminPackages = async () => {
    try {
      const { data } = await getPackagesAdmin();
      setPackages(data?.data || []);
    } catch (e) {}
  };
  useEffect(() => {
    getChannelById();
    getAdminPackages();
  }, []);

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
          {error && <ErrorComponent message={error} />}
          <form class="max-w-sm ">
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
                value={name}
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
                Email
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
                Password
              </label>
              <input
                type="password"
                id="password"
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
                for="email"
                class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-white"
              >
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                class=" border-0 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                required
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div class="mb-5 input-feild w-[72vw] flex">
              <label
                for="message"
                class="block input-feild-label  mb-2 text-sm font-medium w-[17vw]  text-white"
              >
                Address
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full border border-0 text-sm text-white dark:placeholder-white focus:ring-0 focus:border-0 rounded bg-[#48484A]"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              ></textarea>
            </div>
            <div class="mb-5 input-feild w-[72vw] flex">
              <label
                for="email"
                class="block input-feild-label  mb-2 text-sm font-medium w-[17vw]  text-white"
              >
                Image
              </label>
              <input
                class="block w-full text-sm text-white border border-0 rounded cursor-pointer bg-white-600 dark:text-white focus:outline-none bg-[#48484A] "
                id="file_input"
                type="file"
                value={image.filename}
                onChange={handleFileChange}
              />
            </div>
            <div className="mb-5 input-feild w-[72vw] flex">
              <label
                htmlFor="expiry_date"
                className="block input-feild-label mb-2 text-sm font-medium  w-[17vw] text-white"
              >
                Expiry Date*
              </label>
              <input
                type="date"
                id="expiry_date"
                className="border-0 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                required
                value={
                  expireDate
                    ? (() => {
                        // Format date without timezone conversion
                        // If it's already a date string (YYYY-MM-DD), use it directly
                        if (
                          typeof expireDate === "string" &&
                          /^\d{4}-\d{2}-\d{2}$/.test(expireDate)
                        ) {
                          return expireDate;
                        }
                        // Otherwise, parse and format in UTC to avoid timezone shifts
                        const date = new Date(expireDate);
                        const year = date.getUTCFullYear();
                        const month = String(date.getUTCMonth() + 1).padStart(
                          2,
                          "0"
                        );
                        const day = String(date.getUTCDate()).padStart(2, "0");
                        return `${year}-${month}-${day}`;
                      })()
                    : ""
                }
                onChange={(e) => {
                  setExpireDate(e.target.value);
                }}
              />
            </div>
            <div class="mb-5 input-feild w-[72vw] flex  ">
              <label
                for="subscription_plan"
                class="block mb-2 input-feild-label  text-sm font-medium text-white w-[17vw]"
              >
                Subscription Plan
              </label>
              <select
                id="subscription_plan"
                class=" border-0 text-sm rounded focus:ring-0 bg-[#48484A] block w-full p-2.5 font-bold text-white"
                value={packageId}
                onChange={(e) => setPackageId(e.target.value)}
              >
                <option value="">Select package</option>
                {packages?.map((p) => (
                  <option key={p?._id} value={p?._id}>
                    {p?.name} ({p?.days} days)
                  </option>
                ))}
              </select>
            </div>
            {/* <div class="mb-5 input-feild w-[72vw] flex  ">
              <label
                for="countries"
                class="block mb-2 input-feild-label  text-sm font-medium text-gray-900 dark:text-white w-[17vw]"
              >
                Subscription Plan
              </label>
              <select
                id="countries"
                class=" border-0 text-gray-900 text-sm rounded focus:ring-0 bg-[#48484A] block w-full p-2.5 font-bold text-white"
              >
                <option>Active</option>
              </select>
            </div> */}
            <div class="mb-5 input-feild w-[72vw] flex  ">
              <label
                for="countries"
                class="block mb-2 input-feild-label  text-sm font-medium text-white w-[17vw]"
              >
                Status
              </label>
              <select
                id="countries"
                class=" border-0 text-sm rounded focus:ring-0 bg-[#48484A] block w-full p-2.5 font-bold text-white"
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              >
                <option value={"active"}>Active</option>
                <option value={"inactive"}>Inactive</option>
              </select>
            </div>
            <div class="mb-5 input-feild w-[72vw] flex">
              <label
                for="countries"
                class="block mb-2  text-sm font-medium text-white w-[15.5vw] "
              ></label>
              <button
                type="button"
                class="text-white  bg-[#FF0015] text-sm font-bold rounded-md text-sm w-[70px]  sm:w-auto px-3 py-1.5 text-center "
                onClick={(e) => {
                  handleSave(e);
                }}
              >
                Save
              </button>
              <button
                type="button"
                class="ml-3 text-white bg-[#444548] text-sm font-bold rounded-md text-sm w-[110px] sm:w-auto px-3 py-1.5 text-center "
                onClick={handleClearExpiry}
              >
                Clear expiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
