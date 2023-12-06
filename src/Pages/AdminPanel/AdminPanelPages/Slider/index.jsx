import React, { useEffect, useState } from "react";
import tvchannel from "../../../../Assets/Images/nba poster.webp";
import { useNavigate } from "react-router-dom";
import Cross from "../../../../Assets/Icons/close.png";
import Edit from "../../../../Assets/Icons/editing.png";
import { getSliders, deleteSlider } from "../../../../api/slider.api";
import ErrorComponent from "../../../../Components/Common/ErrorComponent";
import { url } from "../../../../helper/url";
function AdminSlider() {
  const navigate = useNavigate();
  const [slider, setSlider] = useState([]);
  const [error, setError] = useState("");

  const handleButtonClick = (sldr) => {
    navigate(`/admin/slider/edit_slider/${sldr._id}`);
  };
  const handleCreateButtonClick = () => {
    navigate("/admin/slider/add_slider");
  };
  const getAllSliders = async () => {
    try {
      const { data: response } = await getSliders();
      setSlider(response.data);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  const handleDelete = async (slider) => {
    try {
      const { data: response } = await deleteSlider(slider._id);
      getAllSliders();
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  useEffect(() => {
    getAllSliders();
  }, []);

  return (
    <div
      style={{
        background: "black",
        position: "relative",
        // left: "14%",
        width: "100%",
        height: "100%",
        overflowY: "scroll",
      }}
    >
      <div className=" ml-4 mt-20 ">
        <div
          className="w-[80vw] edit-con bg-[#1C1C1E] mx-auto rounded p-5"
          style={{ position: "absolute", left: "17%" }}
        >
          {error && <ErrorComponent message={error} />}
          <div class="relative overflow-x-auto shadow-md">
            <div class="relative mt-1">
              <div class=" flex items-center  ">
                <button
                  className="w-[120px] h-[4vh] bg-[#0EAC5C] font-medium rounded-md "
                  onClick={handleCreateButtonClick}
                >
                  <span className="text-white text-sm dark:text-white">
                    + Add Slider
                  </span>
                </button>
              </div>
            </div>
            <table class="w-full mt-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class=" w-[78vw] text-xs text-gray-700  dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 dark:text-white text-md"
                    style={{ border: "1px solid #313133" }}
                  >
                    Slider Title
                  </th>

                  <th
                    scope="col"
                    class="px-6 py-3 dark:text-white"
                    style={{ border: "1px solid #313133" }}
                  >
                    Slider Image
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 dark:text-white"
                    style={{ border: "1px solid #313133" }}
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 dark:text-white"
                    style={{ border: "1px solid #313133" }}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {slider &&
                  slider.map((sldr) => {
                    return (
                      <tr>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {sldr.title}
                        </th>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          <img
                            src={
                              url + "\\" + sldr.image.replace("uploads\\", "")
                            }
                            alt=""
                            className="w-[150px] h-[84px]"
                          />
                        </th>
                        <td
                          class="px-6 py-4 dark:text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {sldr.status ? (
                            <div className=" bg-[#0EAC5C] w-[60px] text-center rounded text-sm">
                              Active
                            </div>
                          ) : (
                            <div className=" bg-red-500 p-1 w-[60px] text-center rounded text-sm">
                              Inactive
                            </div>
                          )}
                        </td>
                        <td
                          class="px-6 py-4 dark:text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          <div className="flex">
                            <button
                              className=" relative w-[36px] h-[33px] rounded z-10 bg-[#10C469] hover:before:absolute hover:before:bg-black hover:before:content-['Edit'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full  hover:before:mt-[-18px]"
                              onClick={() => {
                                handleButtonClick(sldr);
                              }}
                            >
                              <img
                                src={Edit}
                                alt=""
                                className="w-[16px] h-[16px] m-auto"
                              />
                            </button>
                            <button
                              className="ml-3 w-[36px] h-[33px] rounded relative z-10 bg-[#FF5B5B] hover:before:absolute hover:before:bg-black hover:before:content-['Remove'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full hover:before:mt-[-18px]"
                              onClick={() => {
                                handleDelete(sldr);
                              }}
                            >
                              <img
                                src={Cross}
                                alt=""
                                className="w-[10px] h-[10px] m-auto"
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSlider;
