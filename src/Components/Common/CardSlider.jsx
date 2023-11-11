import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../../Assets/styles/CardSlider.css";
import TeamIcons from "./TeamIcons";

function CardSlider() {
  //data
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
          {dummyData.map((item) => (
            <SplideSlide
              options={{ ...splideOptions, width: 200 }}
              className="cardSlider"
              key={item.id}
              style={{ width: "24PX", height: "25PX" }}
            >
              <div
                className="placeAndTime"
                style={{
                  width: "92%",
                  height: "3vh",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  margin: "auto",
                }}
              >
                <p>{item.Stadium}</p>
                <p>{item.Date}</p>
              </div>

              <div className="container" style={{ marginTop: "25px" }}>
                <TeamIcons iconsData={dummyIcons} />
              </div>
            </SplideSlide>
          ))}
        </>
      </Splide>
    </div>
  );
}

export default CardSlider;
