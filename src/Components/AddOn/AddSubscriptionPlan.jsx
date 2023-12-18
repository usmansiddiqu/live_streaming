import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import updateCategory from "../../api/editCategory";
import getCategoryDetail from "../../api/categoryDetails";
import { toast } from "react-toastify";
import createPackage from "../../api/createPackage";
function AddSubscriptionPlan() {
  const navigate = useNavigate();
  // const params = useParams();
  // const [data, setData] = useState(null);
  // const getData = async () => {
  //   const { data: response } = await getCategoryDetail(params.id);
  //   setData(response.category);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  // const handleClick = async () => {
  //   await updateCategory({
  //     ...data,
  //     categoryId: params.id,
  //   });
  //   navigate("/admin/Tv_category");
  // };
  const [data, setData] = useState({
    name: "",
    days: "",
    amount: "",
    status: true,
  });

  const handleClick = async () => {
    try {
      await createPackage(data);
      navigate("/admin/subscription_plan");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
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
                for="name"
                class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
              >
                Plan Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                required
                onChange={handleOnChange}
              />
            </div>
            <div class="mb-5 input-feild w-[72vw] flex">
              <label
                for="Duration"
                class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
              >
                Duration (days*)
              </label>
              <input
                type="number"
                id="number"
                name="days"
                class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                required
                onChange={handleOnChange}
              />
            </div>
            <div class="mb-5 input-feild w-[72vw] flex">
              <label
                for="name"
                class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
              >
                Price*
              </label>
              <input
                type="number"
                id="name"
                name="amount"
                class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                required
                onChange={handleOnChange}
              />
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
                onChange={handleOnChange}
                name="status"
              >
                <option value={true}>Active</option>
                <option value={false}>Inactive</option>
              </select>
            </div>
            <div class="mb-5 input-feild w-[72vw] flex">
              <label
                for="countries"
                class="block mb-2  text-sm font-medium text-gray-900 dark:text-white w-[15.5vw]"
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

export default AddSubscriptionPlan;
