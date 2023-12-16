import React from "react";
import "../../Assets/styles/CardDetailss.scss";
import DetailsIcon from "./DetailsIcon";
import VideoPlayer from "./VideoPlayer";
import ClapprPlayer from "./ClapprPlayer";
import moment from "moment-timezone";
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
function DetailsComponent({ data, url }) {
  const currentTime = moment();
  const eventTime = moment(data?.data?.date).utc();

  const isTimeWithinRange =
    data?.data?.date &&
    currentTime.isBetween(eventTime, eventTime.clone().add(3.5, "hours"));

  return (
    <div className="flex !justify-center">
      {isTimeWithinRange ? (
        <div className="chunchun" id="videoPlayer">
          <ClapprPlayer url={url} />
        </div>
      ) : (
        <div
          className="!w-[80rem] !h-[35rem]  "
          style={{
            background: `linear-gradient(-60deg, #${
              data?.data?.competitors?.filter(
                (comp) => comp.homeAway == "home"
              )[0].color
            } 50%, #${
              data?.data?.competitors?.filter(
                (comp) => comp.homeAway != "home"
              )[0].alternateColor
            } 50%)`,
          }}
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
          ></div>

          <div className="" style={{ marginTop: "25px" }}>
            <DetailsIcon
              iconsData={data?.data?.competitors?.map((comp) => ({
                iconUrl: comp.logo,
                name: comp.name,
              }))}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailsComponent;
