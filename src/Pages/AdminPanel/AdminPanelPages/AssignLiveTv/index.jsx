import React, { useEffect, useState } from "react";
import Cross from "../../../../Assets/Icons/close.png";
import Edit from "../../../../Assets/Icons/editing.png";
import { useNavigate } from "react-router-dom";
import { deleteEventById, getEvents } from "../../../../api/event.api";
import { ToastContainer, toast } from "react-toastify";
function AssignLiveTv() {
  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(`/admin/assign_live_tv/assign_tv_edit/${id}`);
  };
  const [data, setData] = useState(null);
  const getData = async () => {
    const { data: response } = await getEvents();
    setData(response.events);
  };
  const deleteEvent = async (id) => {
    try {
      await deleteEventById(id);
      toast.success("Event Deleted");
      getData();
    } catch (error) {
      toast.error("Unable to delete");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ToastContainer limit={1} />
      <div
        style={{
          background: "black",
          position: "relative",
          // left: "10%",
          width: "100%",
          height: "100%",
          overflowY: "scroll",
        }}
      >
        <div className=" ml-4 mt-20 ">
          <div
            className="w-[80vw] edit-con bg-[#1C1C1E] mx-auto rounded p-5"
            style={{ position: "absolute", left: "14%" }}
          >
            <div class="relative overflow-x-auto shadow-md">
              <table class="w-full mt-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class=" w-[78vw] text-xs text-gray-700  dark:text-gray-400">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white text-md"
                      style={{ border: "1px solid #313133" }}
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      TV Channel
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
                  {data?.map((event) => (
                    <tr>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                        style={{ border: "1px solid #313133" }}
                      >
                        {event?.data?.name}
                      </th>
                      <td
                        class="px-6 py-4 dark:text-white"
                        style={{ border: "1px solid #313133" }}
                      >
                        <div className=" rounded text-sm">
                          {event?.data?.date}
                        </div>
                      </td>
                      <td
                        class="px-6 py-4 dark:text-white"
                        style={{ border: "1px solid #313133" }}
                      >
                        {event?.channel.TVCategory.name}
                      </td>
                      <td
                        class="px-6 py-4 dark:text-white"
                        style={{ border: "1px solid #313133" }}
                      >
                        {event?.channel.TVName}
                      </td>
                      <td
                        class="px-6 py-4 dark:text-white"
                        style={{ border: "1px solid #313133" }}
                      >
                        <div className="flex">
                          <button
                            className=" relative w-[36px] h-[33px] rounded z-10 bg-[#10C469] hover:before:absolute hover:before:bg-black hover:before:content-['Edit'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full  hover:before:mt-[-18px]"
                            onClick={() => handleButtonClick(event._id)}
                          >
                            <img
                              src={Edit}
                              alt=""
                              className="w-[16px] h-[16px] m-auto"
                            />
                          </button>
                          <button
                            onClick={() => deleteEvent(event._id)}
                            className="ml-3 w-[36px] h-[33px] rounded relative z-10 bg-[#FF5B5B] hover:before:absolute hover:before:bg-black hover:before:content-['Remove'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full hover:before:mt-[-18px]"
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
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignLiveTv;
