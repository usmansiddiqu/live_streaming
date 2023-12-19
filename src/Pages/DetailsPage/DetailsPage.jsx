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
import axios from "axios";
function DetailsPage() {
  const navigate = useNavigate();
  const [url, setUrl] = useState(null);
  const params = useParams();
  const [data, setData] = useState(null);
  const checkUrl = async () => {
    try {
      await axios.get(url, {
        headers: {
          "Content-type": "application/json",
        },
      });
      return true;
    } catch (error) {
      return false;
    }
  };
  const getData = async () => {
    try {
      const { data: response } = await getEventById(params.id);
      setData(response.events);
      const result = await checkUrl(response.events?.channel?.server1URL);
      if (result) {
        setUrl(response.events?.channel?.server1URL);
      } else {
        setUrl(response.events?.channel?.server2URL);
      }
    } catch (error) {}
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
      <DetailsDescription data={data} setUrl={setUrl} />
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
      <div className="mt-6 w-[80rem] bg-[#130A2D] mx-auto pt-3 pb-6 ps-7 flex flex-col p-3 mb-2 ">
        <h3 className="text-white font-medium text-2xl">You May Also Like</h3>
        <div className="w-[110vw] mt-4 ml-9  mb-5 banner-slide-card">
          <DetailsSlider />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailsPage;
