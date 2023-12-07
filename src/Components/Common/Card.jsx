import React from "react";
import TeamIcons from "./TeamIcons";
import Dashboard from "../../Pages/Dashboard";
import DashHeader from "../Dashboard/DashHeader";
import { useNavigate } from "react-router-dom";

function Card({ data, title }) {
  //icons
  const navigate = useNavigate();
  return (
    <div>
      <DashHeader title={title} />
      <div class=" flex items-center justify-center">
        <div class="container mx-auto">
          <div class="grid card-con grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 p-3 mx-auto gap-4 w-[75vw]">
            <>
              {data.map((item) => (
                <div
                  class="w-[330px] h-[180px] border "
                  onClick={() =>
                    navigate(`/${item.channel.name}/live/${item._id}`)
                  }
                >
                  {console.log(item)}
                  <div
                    className="card-Slider w-[100%] h-[100%]"
                    key={item._id}
                    style={{
                      border: "1px solid white",
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
                    <div className="placeAndTime  border w-[100%] h-[3vh] flex justify-between flex-row p-0 px-2 bg-[black] bg-opacity-40 text-white">
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
