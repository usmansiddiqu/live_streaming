import React, { useState } from "react";
import createCategory from "../../api/addCategory";
import { useNavigate } from "react-router";
import ErrorComponent from "../Common/ErrorComponent";

function AddTvCategory() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [data, setData] = useState({ name: "", status: "active" });
  const handleClick = async () => {
    try {
      const { data: response } = await createCategory(data);
      navigate("/admin/Tv_category");
    } catch (error) {
      setError(error.response.data.message);
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
          {error && <ErrorComponent message={error} />}
          <form class="max-w-sm  ">
            <div class="mb-5 input-feild w-[72vw] flex">
              <label
                for="name"
                class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-white"
              >
                Category Name
              </label>
              <input
                type="name"
                id="name"
                class=" border-0  text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                required
                onChange={(e) =>
                  setData({
                    ...data,
                    name: e.target.value,
                  })
                }
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
                onChange={(e) =>
                  setData({
                    ...data,
                    status: e.target.value,
                  })
                }
              >
                <option value={"active"}>Active</option>
                <option value={"inactive"}>Inactive</option>
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

export default AddTvCategory;
