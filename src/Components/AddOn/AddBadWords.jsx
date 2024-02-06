import React, { useEffect, useState } from "react";
import Pikaday from "pikaday";
import "pikaday/css/pikaday.css";
import getPlans from "../../api/plan.api";
import { useNavigate, useParams } from "react-router";
import editCoupon from "../../api/updateCoupon";
import getCouponDetails from "../../api/couponDetails";
import addBanWord from "../../api/addBanWord";
function AddBadWords() {
  const params = useParams();
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [error, setError] = useState(null);
  const [data, setData] = useState("");
  const generateRandomString = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    setData({
      ...data,
      code: result,
    });
  };
  const getData = async () => {
    const { data: response } = await getPlans();
    setPlans(response.data);
  };
  const getCouponData = async () => {
    const { data: response } = await getCouponDetails(params.id);
    setData(response.data);
  };
  useEffect(() => {
    // getData();
    // getCouponData();
  }, []);
  const handleChange = (e) => {
    setData(e.target.value);
    // if (e.target.name == "status") {
    //   setData({
    //     ...data,
    //     [e.target.name]: e.target.value == "true",
    //   });
    // } else {
    //   setData({
    //     ...data,
    //     [e.target.name]: e.target.value,
    //   });
    // }
  };
  const handleClick = async () => {
    try {
      const response = await addBanWord({ word: data });
      navigate("/admin/bad_words");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    // if (!data.code) {
    //   setError("Code is required!");
    // } else if (!data.plan) {
    //   setError("Plan is required!");
    // } else if (!data.numberOfUses) {
    //   setError("Number of uses is required!");
    // } else if (!data.expiryDate) {
    //   setError("Expiry date is required!");
    // } else {
    //   await editCoupon(data);
    //   navigate("/admin/coupons");
    // }
  };
  const formatDateForInput = (date) => {
    if (!date) return "";

    const formattedDate = new Date(date);

    return formattedDate.toISOString().split("T")[0];
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
            <div class="mb-5 input-feild w-[72vw] flex">
              <label
                for="code"
                class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
              >
                Bad Word
              </label>
              <input
                type="text"
                id="text"
                name="word"
                class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                placeholder="word"
                value={data.code}
                required
                onChange={handleChange}
              />
            </div>

            <div class="mb-5 input-feild w-[72vw] flex">
              <label
                for="countries"
                class="block mb-2  text-sm font-medium text-white w-[15.5vw]"
              ></label>
              <button
                type="button"
                class="text-white  bg-[#FF0015] text-sm font-bold rounded-md text-sm w-[70px]  sm:w-auto px-3 py-1.5 text-center "
                onClick={handleClick}
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

export default AddBadWords;
