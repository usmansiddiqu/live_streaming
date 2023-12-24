import React, { useEffect, useRef, useState } from "react";
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
import canView from "../../api/canView";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

function DetailsPage() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [url, setUrl] = useState(null);
  const containerRef = useRef(null);
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
      scrollToTop();
      setData(response.events);

      const result = await checkUrl(response.events?.channel?.server1URL);
      if (result) {
        setUrl(response.events?.channel?.server1URL);
      } else {
        setUrl(response.events?.channel?.server2URL);
      }
      if (response.events.channel.TVAccess == "paid") {
        await canViewPage();
      }
    } catch (error) {}
  };
  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  };
  useEffect(() => {
    getData();
    scrollToTop();
  }, [params.id]);

  const canViewPage = async () => {
    try {
      const result = await canView();
      if (localStorage.getItem("data")) {
        if (!result.data.flag) {
          navigate("/membership_plan");
        }
      } else {
        navigate("/membership_plan");
      }
    } catch (error) {
      navigate("/membership_plan");
    }
  };
  useEffect(() => {
    // canViewPage();
  }, []);

  return (
    <div
      ref={containerRef}
      className="App"
      style={{
        height: "100vh",
        overflowX: "hidden !important",
        overflowY: "auto",
      }}
      // style={{ height: "100vh" }}
    >
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
      <div
        className="mt-6 w-[80rem] h-[17rem] bg-[#130A2D] mx-auto pt-3 pb-6 ps-7 flex flex-col p-3 mb-2 "
        style={{ overflow: "hidden" }}
      >
        <h3 className="text-white font-medium text-2xl">You May Also Like</h3>
        <div className="w-[110rem] mt-4 mb-5 banner-slide-card">
          <DetailsSlider />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailsPage;
