import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import editEventById from "../../api/editEvent";
import getEventById from "../../api/eventById";
import getChannel from "../../api/retrieveChannel";
import createEvent from "../../api/createEvent";

function CreateAssignTv() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [liveTv, setLiveTv] = useState([]);
  const [selectedLiveTv, setSelectedLiveTv] = useState("");
  const [eventName, setEventName] = useState("");
  const [shortName, setShortName] = useState("")
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date());
  const [competitor1Name, setCompetitor1Name] = useState("");
  const [competitor1DisplayName, setCompetitor1DisplayName] = useState("");
  const [competitor1Color, setCompetitor1Color] = useState("");
  const [competitor1AlternateColor, setCompetitor1AlternateColor] = useState("");
  const [competitor1Logo, setCompetitor1Logo] = useState(null);
  const [competitor1Score, setCompetitor1Score] = useState("");
  const [competitor2Name, setCompetitor2Name] = useState("");
  const [competitor2DisplayName, setCompetitor2DisplayName] = useState("");
  const [competitor2Color, setCompetitor2Color] = useState("");
  const [competitor2AlternateColor, setCompetitor2AlternateColor] = useState("")
  const [competitor2Logo, setCompetitor2Logo] = useState(null);
  const [competitor2Score, setCompetitor2Score] = useState("")
  const params = useParams();
  const formData = new FormData()

  const getData = async () => {
    // const { data: response } = await getEventById(params.id);
    // setData(response.events);
    const { data: liveTvs } = await getChannel();
    setLiveTv(liveTvs?.liveTVs);
  };

  useEffect(() => {
    getData();
  }, []);
  // console.log("===sss", competitor1Logo)
  const editEvent = async () => {
     const payload = {
      channel_id: selectedLiveTv,
      match_name: eventName,
      shortName: shortName,
      location,
      date,
      competitors1_name: competitor1Name,
      competitors2_name: competitor2Name,
      competitors1_homeAway: "home",
      competitors2_homeAway: "away",
      competitors1_displayName: competitor1DisplayName,
      competitors2_displayName: competitor2DisplayName,
      competitors1_alternateColor: competitor1AlternateColor?.slice(1),
      competitors2_alternateColor: competitor2AlternateColor?.slice(1),
      competitors1_color: competitor1Color?.slice(1),
      competitors2_color: competitor2Color?.slice(1),
      competitors1_logo: "https://a.espncdn.com/i/teamlogos/nhl/500/scoreboard/mtl.png",
      competitors2_logo: "https://a.espncdn.com/i/teamlogos/nhl/500/scoreboard/tb.png",
      competitors1_score: competitor1Score,
      competitors2_score: competitor2Score
    }
    
    try {
      await createEvent(payload);
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
        {/* {data && ( */}
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
                  placeholder=""
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                />
              </div>
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="email"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Short name
                </label>
                <input
                  id="email"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  placeholder=""
                  value={shortName}
                  onChange={(e) => setShortName(e.target.value)}
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
                  type="date"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  placeholder="MLB"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="email"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Location
                </label>
                <input
                  id="email"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div class="mb-5 input-feild w-[72vw] flex  ">
                <label
                  for="countries"
                  class="block mb-2 input-feild-label  text-sm font-medium text-white w-[17vw]"
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
                      // selected={selectedLiveTv}
                    >
                      {tv?.TVName}
                    </option>
                  ))}
                </select>
              </div>
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="email"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Competitor1 name
                </label>
                <input
                  id="email"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  value={competitor1Name}
                  onChange={(e) => setCompetitor1Name(e.target.value)}
                />
              </div>
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="email"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Competitor1 display name
                </label>
                <input
                  id="email"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  value={competitor1DisplayName}
                  onChange={(e) => setCompetitor1DisplayName(e.target.value)}
                />
              </div>
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="email"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Competitor1 color
                </label>
                <input
                  id="email"
                  type="color"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  value={competitor1Color}
                  onChange={(e) => setCompetitor1Color(e.target.value)}
                />
              </div>
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="email"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Competitor1 alternate color
                </label>
                <input
                  id="email"
                  type="color"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  value={competitor1AlternateColor}
                  onChange={(e) => setCompetitor1AlternateColor(e.target.value)}
                />
              </div>
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="email"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Competitor1 logo
                </label>
                <input
                  id="email"
                  type="file"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  // value={competitor1Logo}
                  onChange={(e) => setCompetitor1Logo(e.target.files[0])}
                />
              </div>
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="email"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Competitor1 score
                </label>
                <input
                  id="email"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  value={competitor1Score}
                  onChange={(e) => setCompetitor1Score(e.target.value)}
                />
              </div>
             
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="email"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Competitor2 name
                </label>
                <input
                  id="email"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  value={competitor2Name}
                  onChange={(e) => setCompetitor2Name(e.target.value)}
                />
              </div>
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="email"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Competitor2 display name
                </label>
                <input
                  id="email"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  value={competitor2DisplayName}
                  onChange={(e) => setCompetitor2DisplayName(e.target.value)}
                />
              </div>
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="email"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Competitor2 color
                </label>
                <input
                  id="email"
                  type="color"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  value={competitor2Color}
                  onChange={(e) => setCompetitor2Color(e.target.value)}
                />
              </div>
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="email"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Competitor2 alternate color
                </label>
                <input
                  id="email"
                  type="color"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  value={competitor2AlternateColor}
                  onChange={(e) => setCompetitor2AlternateColor(e.target.value)}
                />
              </div>
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="email"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Competitor2 logo
                </label>
                <input
                  id="email"
                  type="file"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  // value={competitor2Logo}
                  onChange={(e) => setCompetitor2Logo(e.target.files[0])}
                />
              </div>
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="email"
                  class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
                >
                  Competitor2 score
                </label>
                <input
                  id="email"
                  class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                  value={competitor2Score}
                  onChange={(e) => setCompetitor2Score(e.target.value)}
                />
              </div>
              <div class="mb-5 input-feild w-[72vw] flex ">
                <label
                  for="countries"
                  class="block mb-2  text-sm font-medium text-white w-[15.5vw]"
                ></label>
                <button
                  type="button"
                  class="text-white  bg-[#FF0015] text-sm font-bold rounded-md text-sm w-[70px]  sm:w-auto px-3 py-1.5 text-center "
                  // onClick={editEvent}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default CreateAssignTv;
