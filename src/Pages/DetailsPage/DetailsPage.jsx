import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import DetailsComponent from "../../Components/Common/DetailsComponent";
import DetailsDescription from "../../Components/Common/DetailsDescription";
import TeamScore from "../../Components/Common/TeamScore";
import DetailsSlider from "../../Components/Common/DetailsSlider";
import { getEventById } from "../../api/event.api";
import { useParams, useNavigate } from "react-router-dom";
function DetailsPage() {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const params = useParams();
  const [data, setData] = useState(null);
  const getData = async () => {
    const { data: response } = await getEventById(params.id);
    setData(response.events);
    setUrl(data?.channel?.server1URL);
  };
  useEffect(() => {
    getData();
  }, [params.id]);

  useEffect(() => {
    if (localStorage.getItem("data")) {
      const data = localStorage.getItem("data");
      if (!(data.expiryDate && new Date(data.expiryDate) > new Date())) {
        navigate("/membership_plan");
      }
    } else {
      navigate("/membership_plan");
    }
  }, []);
  console.log(data);

  return (
    <div>
      <Navbar />
      <DetailsComponent data={data} url={url} />
      <DetailsDescription data={data} setUrl={setUrl} />
      {/* <TeamScore /> */}
      <div className="mt-6 w-[68%] bg-[#130A2D] mx-auto h-[28vh] flex flex-col p-3 px-10">
        <h3 className="text-white font-medium text-2xl">You May Also Like</h3>
        <div
          className="flex justify-start w-[15vw]"
          style={{ alignItems: "self-start", justifyContent: "start" }}
        >
          <DetailsSlider />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailsPage;
