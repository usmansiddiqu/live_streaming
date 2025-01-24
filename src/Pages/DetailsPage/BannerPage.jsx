import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import DetailsComponent from "../../Components/Common/DetailsComponent";
import DetailsDescription from "../../Components/Common/DetailsDescription";
import TeamScore from "../../Components/Common/TeamScore";
import DetailsSlider from "../../Components/Common/BannerSlider";
import getEventById from "../../api/eventById";
import { useParams } from "react-router-dom";
import getSpecificDetails from "../../api/slider.api";
import BannerDetailComponent from "../../Components/Common/BannerDetailComponent";
import BannerDetailsDescription from "../../Components/Common/BannerDetailsDescription";
import axios from "axios";
import getEventsByType from "../../api/getEventsType";
import "./bannar.scss";
function BannerPage() {
  const [url, setUrl] = useState("");
  const params = useParams();
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);

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
    const { data: response } = await getSpecificDetails(params.id);
    setData(response?.data);
    getData1(response?.data?.liveTV.TVName?.slice(0, 3));
    const result = await checkUrl(response?.data?.liveTV?.server1URL);
    if (result) {
      setUrl(response?.data?.liveTV?.server1URL);
    } else {
      setUrl(response?.data?.liveTV?.server2URL);
    }
  };
  const getData1 = async (name) => {
    const { data: response } = await getEventsByType(name);
    setData1(response.events);
  };
  useMemo(() => {
    getData();
  }, [params.id]);
  return (
    <div className="footerBottom">
      <Navbar />
      <BannerDetailComponent data={data} url={url} />
      <BannerDetailsDescription data={data} setUrl={setUrl} />
      {/* <TeamScore /> */}
      <div className="mt-2 flex justify-between flex-col">
        {data1 && data1?.length > 0 && (
          <div
            className="mt-6 w-[61%] bg-[#130A2D] mx-auto h-[17rem] flex flex-col p-3 mb-2 banner-slidess"
            style={{ overflow: "hidden" }}
          >
            <h3 className="text-white font-medium text-2xl">
              You May Also Like
            </h3>
            <div className="w-[100vw] mt-4 ml-9  banner-slide-card mb-5 ">
              {data?.liveTV.TVName?.slice(0, 3) && (
                <DetailsSlider name={data?.liveTV.TVName?.slice(0, 3)} />
              )}
            </div>
          </div>
        )}
        <Footer className="mt-5" />
      </div>
    </div>
  );
}

export default BannerPage;
