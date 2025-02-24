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
import TheaterMode from "../../Components/TheaterMode";
import TrialTimer from "./TrialTimer";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setTrialTag } from "../../api/slice/auth.slice";

function DetailsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [url, setUrl] = useState(null);
  const containerRef = useRef(null);
  const [isLive, setIsLive] = useState(false);
  const params = useParams();
  const [data, setData] = useState(null);
  const [theaterMode, setTheaterMode] = useState(false);
  // const [showTrialTag, setShowTrialTag] = useState(false);
  const timeoutRef = useRef(null);
  const isLivee = useRef(false);

  const toggleTheaterMode = () => {
    setTheaterMode((prevMode) => !prevMode);
  };
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
      const eventTimeUTC = moment(response.events?.date).utc();
      const currentTimeLocal = moment();
      const type = response.events?.channel?.TVCategory?.name;
      const showEnded = currentTimeLocal.isAfter(
        eventTimeUTC
          .clone()
          .add(
            type == "NBA"
              ? 2.6
              : type == "NHL"
              ? 3.5
              : type == "MLB"
              ? 3.5
              : 3.5,
            "hours"
          )
      );
      isLivee.current = showEnded;
      setIsLive(showEnded);
      scrollToTop();
      setData(response.events);

      const result = await checkUrl(response.events?.channel?.server2URL);
      if (result) {
        setUrl(response.events?.channel?.server2URL);
      } else {
        setUrl(response.events?.channel?.server1URL);
      }
      if (response.events.channel.TVAccess == "paid") {
        await canViewPage();
      } else {
        await canView();
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
  const visited = localStorage.getItem("visited");

  const goToPlansPage = () => {
    if (isLivee?.current) {
      navigate("/membership_plan");
    }
    if (visited == "true") {
      navigate("/membership_plan");
    } else {
      timeoutRef.current = setTimeout(() => {
        dispatch(setTrialTag(false));
        localStorage.setItem("visited", "true");
        navigate("/membership_plan");
      }, 60000);
    }
  };
  const canViewPage = async () => {
    try {
      const result = await canView();
      if (result.data.flag) {
        localStorage.removeItem("visited");
        dispatch(setTrialTag(false));
      }
      if (localStorage.getItem("data")) {
        if (!result.data.flag) {
          dispatch(setTrialTag(true));
          goToPlansPage();
        }
      } else {
        dispatch(setTrialTag(true));
        goToPlansPage();
      }
    } catch (error) {
      dispatch(setTrialTag(true));
      goToPlansPage();
    }
  };
  useEffect(() => {
    // canViewPage();
    return () => {
      if (timeoutRef.current) {
        dispatch(setTrialTag(false));
        clearTimeout(timeoutRef.current);
        console.log("Timeout cleared");
      }
    };
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
      {" "}
      <Navbar />
      <div className="flex justify-between flex-col">
        <div>
          {theaterMode ? (
            <div>
              <TheaterMode
                data={data}
                setUrl={setUrl}
                url={url}
                setTheaterMode={setTheaterMode}
              />
            </div>
          ) : (
            <div>
              {url ? <DetailsComponent data={data} url={url} /> : <></>}
              <DetailsDescription
                data={data}
                setUrl={setUrl}
                toggleTheaterMode={toggleTheaterMode}
              />
              <TeamScore
                teamA={{
                  name: data?.competitors1_name,
                  score: data?.competitors1_score,
                }}
                teamB={{
                  name: data?.competitors2_name,
                  score: data?.competitors2_score,
                }}
              />
              <div
                className="mt-6 w-[60vw] live-head h-[17rem] bg-[#130A2D] mx-auto pt-3 pb-6 ps-7 flex flex-col p-3 mb-4 "
                style={{ overflow: "hidden" }}
              >
                <h3 className="text-white font-medium text-2xl">
                  You May Also Like
                </h3>
                <div className="w-[110rem] mt-4 mb-5 banner-slide-card">
                  <DetailsSlider />
                </div>
              </div>
            </div>
          )}
        </div>
        {theaterMode ? <div></div> : <Footer />}
      </div>
    </div>
  );
}

export default DetailsPage;
