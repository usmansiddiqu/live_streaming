import React from "react";
import TeamIcons from "./TeamIcons";
import Dashboard from "../../Pages/Dashboard";
import DashHeader from "../Dashboard/DashHeader";

function Card({ data }) {
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
  return (
    <div>
      <DashHeader title="title" />
      <div class=" flex items-center justify-center">
        <div class="container mx-auto mx-auto">
          <div class="grid card-con grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 p-3 mx-auto gap-4 w-[75vw]">
            <>
              {data.map((item) => (
                <div class="w-[330px] h-[180px] border ">
                  <div className="card-Slider w-[100%] h-[100%]" key={item._id}>
                    <div className="placeAndTime  border w-[100%] h-[3vh] flex justify-between flex-row p-0 px-2 bg-[black] bg-opacity-40">
                      <p>{item.data.location}</p>
                      <p> {item.data.date.split("T")[0]}</p>
                    </div>

                    <div className="container px-6 py-10">
                      <TeamIcons
                        iconsData={item.data.competitors.map((comp) => ({
                          iconUrl: comp.logo,
                          name: comp.name,
                        }))}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
