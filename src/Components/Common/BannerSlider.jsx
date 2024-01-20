import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../../Assets/styles/CardDetailss.scss";
import { useNavigate, useParams } from "react-router-dom";
import getEventsByType from "../../api/getEventsType";
import TeamIconsDetailPage from "./TeamIconsDetailPage";
import Ended from "./Ended";

function BannerDetailSlider({ name }) {
  const params = useParams();
  const [data, setData] = useState(null);
  const getData = async () => {
    const { data: response } = await getEventsByType(name);
    setData(response.events);
  };

  useEffect(() => {
    getData();
  }, []);

  const splideOptions = {
    perPage: 1,
    perMove: 1,
    pagination: false,
    gap: 20,
    drag: true,
  };
  const navigate = useNavigate();
  return (
    <div
      className="CardSlider  "
      style={{
        width: "70%",
        height: "AUTO",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Splide options={{ ...splideOptions, width: 1200 }}>
        <>
          {data?.map((item) => (
            <SplideSlide
              options={{ ...splideOptions, width: 150 }}
              onClick={() => {
                navigate(
                  `/${item?.channel?.TVCategory?.name}/live/${item._id}`
                );
              }}
              className="card-slider1 flex flex-col  cursor-pointer rounded-lg "
              key={item.id}
              style={{
                border: "1px solid white",
                width: "100%;",
                height: "100vh",
                background: `linear-gradient(-60deg, #${
                  item.data.competitors.filter(
                    (comp) => comp.homeAway == "home"
                  )[0].color === "ffffff"
                    ? "808080"
                    : item.data.competitors.filter(
                        (comp) => comp.homeAway == "home"
                      )[0].color
                } 50%, #${
                  item.data.competitors.filter(
                    (comp) => comp.homeAway == "home"
                  )[0].alternateColor === "ffffff"
                    ? "808080"
                    : item.data.competitors.filter(
                        (comp) => comp.homeAway == "home"
                      )[0].alternateColor
                } 50%)`,
              }}
            >
              {/* 
              <div
                className="placeAndTime border w-[100%] h-[3vh] flex justify-between flex-row  bg-[black] bg-opacity-40"
                style={{
                  padding: "0 10px",
                }}
              >
                <p className="text-white text-sm">{item.data.location}</p>
                <p className="text-white text-sm">
                  {item.data.date.split("T")[0]}
                </p>
              </div> */}

              <div
                className="container relative"
                style={{ marginTop: "25px" }}
                onClick={() => {
                  navigate(
                    `/${item?.channel?.TVCategory?.name}/live/${item._id}`
                  );
                }}
              >
                <TeamIconsDetailPage
                  iconsData={item?.data?.competitors?.map((comp) => ({
                    iconUrl: comp.logo,
                    name: comp.name,
                  }))}
                  title={item?.data?.shortName}
                />
                <div className="detail-live-end">
                  <Ended show={new Date(item?.data?.date)} type={params.type} />
                </div>
              </div>
            </SplideSlide>
          ))}
        </>
      </Splide>
    </div>
  );
}

export default BannerDetailSlider;
