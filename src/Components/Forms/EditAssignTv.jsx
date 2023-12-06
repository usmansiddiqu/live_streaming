import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { editEventById, getEventById } from "../../api/event.api";
import { getChannel } from "../../api/tvChannel.api";

function EditAssignTv() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [liveTv, setLiveTv] = useState([]);
  const [selectedLiveTv, setSelectedLiveTv] = useState(null);
  const params = useParams();
  const getData = async () => {
    const { data: response } = await getEventById(params.id);
    setData(response.events);
    const { data: liveTvs } = await getChannel();
    setLiveTv(liveTvs?.liveTVs);
  };
  useEffect(() => {
    getData();
  }, []);
  const editEvent = async () => {
    try {
      await editEventById(params.id, { liveTv: selectedLiveTv });
      navigate("/admin/assign_live_tv");
    } catch (error) {}
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
        {data && (
          <div
            className="w-[80vw] edit-con bg-[#1C1C1E]  rounded p-5"
            style={{ position: "absolute", left: "17%" }}
          >
            <form class="max-w-sm ">
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="email"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Event Name
                </label>
                <input
                  id="email"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  placeholder="MLB"
                  value={data?.data?.name}
                />
              </div>
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="email"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Event Date
                </label>
                <input
                  id="email"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  placeholder="MLB"
                  value={data?.data?.date}
                />
              </div>
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="email"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Event Type
                </label>
                <input
                  id="email"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  value={data?.channel?.TVCategory?.name}
                />
              </div>
              <div class="mb-5 input-feild w-[72vw] flex  ">
                <label
                  for="countries"
                  class="block mb-2 input-feild-label  text-sm font-medium text-gray-900 dark:text-white w-[17vw]"
                >
                  TV Channel
                </label>
                <select
                  id="countries"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 bg-[#48484A] block w-full p-2.5 font-bold text-white"
                  onChange={(e) => setSelectedLiveTv(e.target.value)}
                >
                  {liveTv.map((tv) => (
                    <option
                      value={tv?._id}
                      selected={data?.channel._id == tv?._id}
                    >
                      {tv?.TVName}
                    </option>
                  ))}
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
                  onClick={editEvent}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditAssignTv;
