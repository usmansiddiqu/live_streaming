import React from "react";
import "../../Assets/styles/CardDetailss.scss";
import DetailsIcon from "./DetailsIcon";
import VideoPlayer from "./VideoPlayer";
import ClapprPlayer from "./ClapprPlayer";
import moment from "moment-timezone";
import { useParams } from "react-router-dom";

function DetailsComponent({ data, url }) {
  const { type } = useParams();
  const currentTime = moment();
  const eventTime = moment(data?.data?.date).utc();

  const isTimeWithinRange =
    data?.data?.date &&
    currentTime.isBetween(
      eventTime.clone().subtract(15, "minutes"),
      eventTime
        .clone()
        .add(
          type == "NBA"
            ? 2.6
            : type == "NHL"
            ? 2.3
            : type == "MLB"
            ? 3.6
            : 3.22,
          "hours"
        )
    );

  return (
    <div className="flex !justify-center mt-2">
      {isTimeWithinRange ? (
        <div className="embed-responsive embed-responsive-16by9">
          <div className="chunchun">
            <ClapprPlayer url={url} />
          </div>
        </div>
      ) : (
        <div
          className="w-[80rem] h-[35rem]   deatil-container mt-2"
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
