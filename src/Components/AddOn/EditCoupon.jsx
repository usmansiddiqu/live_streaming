import React, { useEffect, useState } from "react";
import Pikaday from "pikaday";
import "pikaday/css/pikaday.css";
import { getPlans } from "../../api/plan.api";
import { useNavigate, useParams } from "react-router";
import {
  createCoupon,
  editCoupon,
  getCouponDetails,
} from "../../api/coupon.api";

function EditCoupons() {
  const params = useParams();
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
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
    getData();
    getCouponData();
  }, []);
  const handleChange = (e) => {
    if (e.target.name == "status") {
      setData({
        ...data,
        [e.target.name]: e.target.value == "true",
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleClick = async () => {
    if (!data.code) {
      setError("Code is required!");
    } else if (!data.plan) {
      setError("Plan is required!");
    } else if (!data.numberOfUses) {
      setError("Number of uses is required!");
    } else if (!data.expiryDate) {
      setError("Expiry date is required!");
    } else {
      await editCoupon(data);
      navigate("/admin/coupons");
    }
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
                Coupon Code*
              </label>
              <input
                type="text"
                id="text"
                name="code"
                class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                placeholder="Code"
                value={data.code}
                required
                onChange={handleChange}
              />
            </div>
            <div class="mb-5 input-feild-image w-[60vw]  flex items-center justify-evenly">
              <label class="block mb-2 text-sm font-medium w-[17.5vw] text-gray-900 text-white "></label>
              <div className="w-full">
                <button
                  type="button"
                  className="w-[80px] h-[4vh] bg-[#0EAC5C] font-medium rounded-md flex items-center justify-center"
                  onClick={() => generateRandomString(10)}
                >
                  <span className="text-white text-sm dark:text-white">
                    Generate
                  </span>
                </button>
              </div>
            </div>

            <div class=" input-feild w-[72vw] flex  mb-5">
              <label
                for="countries"
                class="block mb-2 input-feild-label  text-sm font-medium text-gray-900 dark:text-white w-[17vw]"
              >
                Plan*
              </label>
              <select
                name="plan"
                class=" border-0 text-gray-900 text-sm rounded focus:ring-0 bg-[#48484A] block w-full p-2.5 font-bold text-white"
                onChange={handleChange}
                defaultValue={data.plan}
              >
                {plans.map((plan) => (
                  <option selected={plan._id == data.plan} value={plan._id}>
                    {plan.name}
                  </option>
                ))}
              </select>
            </div>

            <div class="mb-5 input-feild w-[72vw] flex">
              <label
                for="text"
                class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
              >
                Number of Users Allow*
              </label>
              <input
                type="number"
                name="numberOfUses"
                id="text"
                class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                placeholder="0"
                value={data.numberOfUses}
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-5 input-feild w-[72vw] flex">
              <label
                htmlFor="expiry_date"
                className="block input-feild-label mb-2 text-sm font-medium  w-[17vw] text-gray-900 text-white"
              >
                Expiry Date*
              </label>
              <input
                name="expiryDate"
                type="date"
                className="border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                required
                value={formatDateForInput(data.expiryDate)}
                onChange={handleChange}
              />
            </div>
            <div class="mb-5 input-feild w-[72vw] flex  ">
              <label
                for="status"
                class="block mb-2 input-feild-label  text-sm font-medium text-gray-900 dark:text-white w-[17vw]"
              >
                Status
              </label>
              <select
                id="status"
                name="status"
                class=" border-0 text-gray-900 text-sm rounded focus:ring-0 bg-[#48484A] block w-full p-2.5 font-bold text-white"
                onChange={handleChange}
              >
                <option value={true}>Active</option>
                <option value={false}>Inactive</option>
              </select>
            </div>
            <div class="mb-5 input-feild w-[72vw] flex">
              <label
                for="countries"
                class="block mb-2 input-feild-label  text-sm font-medium text-gray-900 dark:text-white w-[13.5vw]"
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

export default EditCoupons;
