import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import getChannel from "../../api/retrieveChannel";
import createEvent from "../../api/createEvent";

function CreateAssignTv() {
  const [liveTv, setLiveTv] = useState([]);
  const [selectedLiveTv, setSelectedLiveTv] = useState("6589a012796be500687b1eb8");
  const [eventName, setEventName] = useState("");
  const [shortName, setShortName] = useState("")
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date());
  const [competitor1Name, setCompetitor1Name] = useState("");
  const [competitor1DisplayName, setCompetitor1DisplayName] = useState("");
  const [competitor1Color, setCompetitor1Color] = useState("#33FF57");
  const [competitor1AlternateColor, setCompetitor1AlternateColor] = useState("#3357FF");
  const [competitor1Logo, setCompetitor1Logo] = useState(null);
  const [competitor1Score, setCompetitor1Score] = useState("");
  const [competitor2Name, setCompetitor2Name] = useState("");
  const [competitor2DisplayName, setCompetitor2DisplayName] = useState("");
  const [competitor2Color, setCompetitor2Color] = useState("#F0F033");
  const [competitor2AlternateColor, setCompetitor2AlternateColor] = useState("#007EA7")
  const [competitor2Logo, setCompetitor2Logo] = useState(null);
  const [competitor2Score, setCompetitor2Score] = useState("")

  const getData = async () => {
    // const { data: response } = await getEventById(params.id);
    // setData(response.events);
    const { data: liveTvs } = await getChannel();
    setLiveTv(liveTvs?.liveTVs);
  };

  useEffect(() => {
    getData();
  }, []);
 
  const editEvent = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("channel_id", selectedLiveTv);
    formData.append("match_name", eventName);
    formData.append("shortName", shortName);
    formData.append("location", location);
    formData.append("date", date);
    formData.append("competitors1_name", competitor1Name);
    formData.append("competitors2_name", competitor2Name);
    formData.append("competitors1_homeAway", "home");
    formData.append("competitors2_homeAway", "away");
    formData.append("competitors1_displayName", competitor1DisplayName);
    formData.append("competitors2_displayName", competitor2DisplayName);
    formData.append("competitors1_alternateColor", competitor1AlternateColor?.slice(1));
    formData.append("competitors2_alternateColor", competitor2AlternateColor?.slice(1));
    formData.append("competitors1_color", competitor1Color?.slice(1));
    formData.append("competitors2_color", competitor2Color?.slice(1));
    formData.append("competitors1_score", competitor1Score);
    formData.append("competitors2_score", competitor2Score);
  
    // Append images
    if (competitor1Logo) formData.append("competitors1_logo", competitor1Logo);
    if (competitor2Logo) formData.append("competitors2_logo", competitor2Logo);
  
    if(!selectedLiveTv) {
       alert("Please select channel")
    }
    try {
      const response = await createEvent(formData);
      if(response?.data?.success) {
        alert("Game created successfully")
      }
    } catch (error) {
      console.log(error)
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
        {/* {data && ( */}
          <div
            className="w-[80vw] edit-con bg-[#1C1C1E]  rounded p-5"
            style={{ position: "absolute", left: "17%" }}
          >
            <form class="max-w-sm" onSubmit={editEvent}>
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
                  required
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
                  required
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
                  placeholder=""
                  required
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
                  required
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
                  required
                  value={selectedLiveTv}
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
                  value={competitor2Score}
                  onChange={(e) => setCompetitor2Score(e.target.value)}
                />
              </div>
              <div class="mb-5 input-feild w-[72vw] flex">
                <label
                  for="countries"
                  class="block mb-2  text-sm font-medium text-white w-[15.5vw]"
                ></label>
                <button
                  type="submit"
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
