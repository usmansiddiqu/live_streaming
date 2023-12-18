import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import DetailsComponent from "../../Components/Common/DetailsComponent";
import DetailsDescription from "../../Components/Common/DetailsDescription";
import TeamScore from "../../Components/Common/TeamScore";
import DetailsSlider from "../../Components/Common/DetailsSlider";
import getEventById from "../../api/eventById";
import { useParams, useNavigate } from "react-router-dom";
import BannerDetailSlider from "../../Components/Common/BannerSlider";
function DetailsPage() {
  const navigate = useNavigate();
  const [url, setUrl] = useState(null);
  const params = useParams();
  const [data, setData] = useState(null);
  const getData = async () => {
    const { data: response } = await getEventById(params.id);
    setData(response.events);
    setUrl(response.events?.channel?.server2URL);
  };
  useEffect(() => {
    getData();
  }, [params.id]);

  useEffect(() => {
    if (localStorage.getItem("data")) {
      const data = JSON.parse(localStorage.getItem("data"));
      if (!(data.expiryDate && new Date(data.expiryDate) > new Date())) {
        navigate("/membership_plan");
      }
    } else {
      navigate("/membership_plan");
    }
  }, []);

  return (
    <div>
      <Navbar />
      {url ? <DetailsComponent data={data} url={url} /> : <></>}
      {console.log(123, data)}
      <DetailsDescription data={data} setUrl={setUrl} />
<<<<<<< Updated upstream
      <TeamScore />
      <div className="mt-6 w-[79rem] bg-[#190D39]  mx-auto  h-[17rem] flex flex-col p-3 mb-2 banner-slidess rounded-lg">
        <h3 className="text-white font-medium text-2xl">You May Also Like</h3>
        <div className="w-[110rem] mt-4 ml-9  mb-5 banner-slide-card">
=======
      <TeamScore
        teamA={{
          name: data?.data?.competitors[0]?.name,
          score: data?.data?.competitors[0]?.score,
        }}
        teamB={{
          name: data?.data?.competitors[1]?.name,
          score: data?.data?.competitors[1]?.score,
        }}
      />
      <div className="mt-6 w-[61%] bg-[#130A2D] mx-auto  h-[28vh] flex flex-col p-3 mb-2 banner-slidess">
        <h3 className="text-white font-medium text-2xl">You May Also Like</h3>
        <div className="w-[110vw] mt-4 ml-9  mb-5 banner-slide-card">
>>>>>>> Stashed changes
          <DetailsSlider />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailsPage;
