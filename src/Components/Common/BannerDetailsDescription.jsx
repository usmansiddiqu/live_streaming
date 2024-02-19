import React from "react";
import { useNavigate } from "react-router-dom";
import EYE from "../../Assets/Icons/eye-open.png";

function BannerDetailsDescription({ data, setUrl }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-3 ">
      <div className=" bg-[#190D39] w-[60vw] pt-4 pb-6 ps-3 live-head">
        <div className="">
          <h1 className="text-white text-2xl pb-4">{data?.liveTV?.TVName}</h1>
        </div>
        <div className="flex items-center mb-2">
          <img src={EYE} alt="" className="w-[20px] h-[20px]" />
          <h1 className="text-white ml-2">109.10k</h1>
          <span className="text-white ml-2">Views</span>
        </div>
        <div className="">
          <h1 className="text-white pb-4">NHL</h1>
        </div>
        <div className=" flex justify-between">
          <div className="flex gap-2">
            <button
              class="bg-[#FE8805] hover:bg-[#0973F6] text-white text-sm font-medium py-[7px] px-4 rounded"
              onClick={() => setUrl(data?.liveTV?.server1URL)}
            >
              <div className="flex gap-1">
                <svg
                  fill="#FFFFFF"
                  width="20px"
                  height="20px"
                  viewBox="-2 -3 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin"
                  class="jam jam-screen"
                >
                  <path d="M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm0-2h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm4 16h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z" />
                </svg>
                <label>Home</label>
              </div>
            </button>
            <button
              class="bg-[#FE8805] hover:bg-[#0973F6] text-white text-sm font-medium py-[7px] px-4 rounded"
              onClick={() => setUrl(data?.liveTV?.server2URL)}
            >
              <div className="flex gap-1">
                <svg
                  fill="#FFFFFF"
                  width="20px"
                  height="20px"
                  viewBox="-2 -3 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin"
                  class="jam jam-screen"
                >
                  <path d="M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm0-2h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm4 16h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z" />
                </svg>
                <label>Away</label>
              </div>
            </button>
            {typeof data?.liveTV?.server3URL === "string" &&
            data?.liveTV?.server3URL !== "null" ? (
              <button
                class="bg-[#FE8805] hover:bg-[#0973F6] text-white text-sm font-medium py-[7px] px-4 rounded"
                onClick={() => setUrl(data?.liveTV?.server3URL)}
              >
                <div className="flex gap-1">
                  <svg
                    fill="#FFFFFF"
                    width="20px"
                    height="20px"
                    viewBox="-2 -3 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMin"
                    class="jam jam-screen"
                  >
                    <path d="M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm0-2h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm4 16h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z" />
                  </svg>
                  <label>French</label>
                </div>
              </button>
            ) : (
              <></>
            )}
          </div>
          {/* <button
            class="bg-[#FE8805] hover:bg-[#0973F6] text-white text-sm font-medium py-[7px] px-4 rounded mr-4"
            onClick={() =>
              navigate("/livechat_pdsfsdfsdixel_TV_Sports0987654232")
            }
          >
            <div className="flex gap-1">
              <svg
                fill="#FFFFFF"
                width="20px"
                height="20px"
                viewBox="-2 -3 24 24"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin"
                class="jam jam-screen"
              >
                <path d="M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm0-2h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm4 16h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z" />
              </svg>
              <label>Theater mode</label>
            </div>
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default BannerDetailsDescription;
