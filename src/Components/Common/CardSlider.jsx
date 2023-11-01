import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../../Assets/styles/CardSlider.css";

function CardSlider() {
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
  const splideOptions = {
    type: "slide",
    perPage: 5,
    perMove: 4,
    pagination: false,
    gap: 20,
    drag: true,
  };
  return (
    <div
      className="CardSlider"
      style={{
        border: "1px solid",
        marginTop: "300px",
        width: "100vw",
        height: "25vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Splide
        options={splideOptions}
        style={{
          width: "80%",
          border: "1px solid",
          margin: "auto",
        }}
      >
        <>
          {dummyData.map((item) => (
            <SplideSlide
              className="cardSlider"
              key={item.id}
              style={{ width: "250px", height: "200px", border: "1px solid" }}
            >
              <div
                className="placeAndTime"
                style={{
                  width: "100%",
                  border: "1px solid",
                  height: "5vh",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <p>{item.Stadium}</p>
                <p>{item.Date}</p>
              </div>
              <div className="container"></div>
              <h1>{item.title}</h1>
              <p>{item.title}</p>
            </SplideSlide>
          ))}
        </>
      </Splide>
    </div>
  );
}

export default CardSlider;
