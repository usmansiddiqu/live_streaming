import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../../Assets/styles/CardSlider.scss";
import TeamIcons from "./TeamIcons";
import { useNavigate, useParams } from "react-router-dom";
import { getEventsByType } from "../../api/event.api";

function DetailsSlider() {
  const dummyData = [
    {
      id: 1,
      title: "Slide 1",
      Stadium: "Sad1",
      Date: "12-10-2023",
    },
    {
      id: 2,
      title: "Slide 2",
      Stadium: "Sad1",
      Date: "12-10-2023",
    },
    {
      id: 3,
      title: "Slide 3",
      Stadium: "Sad1",
      Date: "14-09-2023",
    },
    {
      id: 4,
      title: "Slide 4",
      Stadium: "Sad1",
      Date: "11-04-2023",
    },
    {
      id: 5,
      title: "Slide 5",
      Stadium: "Sad1",
      Date: "12-10-2023",
    },
    {
      id: 6,
      title: "Slide 6",
      Stadium: "Sad1",
      Date: "20-02-2023",
    },
    {
      id: 7,
      title: "Slide 7",
      Stadium: "Sad1",
      Date: "18-05-2023",
    },
    {
      id: 8,
      title: "Slide 8",
      Stadium: "Sad1",
      Date: "15-10-2023",
    },
    {
      id: 9,
      title: "Slide 9",
      Stadium: "Sad1",
      Date: "23-11-2023",
    },
  ];
  const params = useParams();
  const [data, setData] = useState(null);
  const getData = async () => {
    const { data: response } = await getEventsByType(params.type);
    setData(response.events);
  };
  useEffect(() => {
    getData();
  }, []);
  //icons
  const dummyIcons = [
    {
      iconUrl: "https://cdn-icons-png.flaticon.com/128/1039/1039386.png",
      name: "Icon 1",
    },
    {
      iconUrl: "https://cdn-icons-png.flaticon.com/128/1201/1201923.png",
      name: "Icon 2",
    },
  ];
  const splideOptions = {
    perPage: 5,
    perMove: 5,
    pagination: false,
    gap: 20,
    drag: true,
    type: "loop",
  };
  const navigate = useNavigate();
  return (
    <div
      className="CardSlider"
      style={{
        width: "100%",
        height: "AUTO",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "25px",
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
              className={`cardSlider flex flex-col items-center cursor-pointer`}
              key={item.id}
              style={{
                border: "1px solid white",
                width: "100%;",
                height: "100vh",
                background: `linear-gradient(-60deg, #${
                  item.data.competitors.filter(
                    (comp) => comp.homeAway == "home"
                  )[0].color
                } 50%, #${
                  item.data.competitors.filter(
                    (comp) => comp.homeAway != "home"
                  )[0].alternateColor
                } 50%)`,
              }}
            >
              {/* {console.log(item)}
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
                className="container"
                style={{ marginTop: "25px" }}
                onClick={() => {
                  navigate(
                    `/${item?.channel?.TVCategory?.name}/live/${item._id}`
                  );
                }}
              >
                <TeamIcons
                  iconsData={item?.data?.competitors?.map((comp) => ({
                    iconUrl: comp.logo,
                    name: comp.name,
                  }))}
                />
              </div>
            </SplideSlide>
          ))}
        </>
      </Splide>
    </div>
  );
}

export default DetailsSlider;
