import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../../Assets/styles/CardDetailss.scss";
import { useNavigate, useParams } from "react-router-dom";
import getEventsByType from "../../api/getEventsType";
import TeamIconsDetailPage from "./TeamIconsDetailPage";
import Ended from "./Ended";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function DetailsSlider() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const { data: response } = await getEventsByType(params.type);
    setData(response.events);
    setLoading(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  const splideOptions = {
    perPage: 1,
    perMove: 1,
    pagination: false,
    gap: 20,
    drag: true,
    // type: "loop",
  };
  const skeletonProps = {
    baseColor: "#170f2c", // Dark background color
    highlightColor: "#332e47", // Lighter highlight for the animation effect
  };
  const navigate = useNavigate();
  return (
    <div
      className="deatils-carddd w-[80rem] "
      style={{
        height: "AUTO",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Splide options={{ ...splideOptions, width: 1200 }}>
        {loading ? (
          <Skeleton height={200} width={1200} count={1} {...skeletonProps} />
        ) : (
          <>
            {data
              ?.sort((a, b) => {
                const eventTimeA = moment(a.date).utc();
                const eventTimeB = moment(b.date).utc();
                const currentTimeLocal = moment();

                const isLiveA = currentTimeLocal.isBetween(
                  eventTimeA,
                  eventTimeA
                    .clone()
                    .add(
                      params.type == "NBA"
                        ? 2.6
                        : params.type == "NHL"
                        ? 3
                        : params.type == "MLB"
                        ? 3
                        : 3.5,
                      "hours"
                    )
                );
                const isLiveB = currentTimeLocal.isBetween(
                  eventTimeB,
                  eventTimeB
                    .clone()
                    .add(
                      params.type == "NBA"
                        ? 2.6
                        : params.type == "NHL"
                        ? 3
                        : params.type == "MLB"
                        ? 3
                        : 3.5,
                      "hours"
                    )
                );

                // The following comparison will bring live events to the front
                if (isLiveA && !isLiveB) {
                  return 0;
                } else if (!isLiveA && isLiveB) {
                  return -1;
                } else {
                  return 1;
                }
              })
              .reverse()
              ?.map((item) => (
                <SplideSlide
                  options={{ ...splideOptions, width: 150 }}
                  onClick={() => {
                    navigate(
                      `/${item?.channel?.TVCategory?.name}/live/${item._id}`
                    );
                  }}
                  className={`card-slider1 flex flex-col items-center cursor-pointer rounded-lg`}
                  key={item.id}
                  style={{
                    border: "1px solid white",
                    width: "100%;",
                    height: "100vh",
                    background: `linear-gradient(-60deg, #${
                      item.competitors1_color === "ffffff"
                        ? "808080"
                        : item.competitors1_color
                    } 50%, #${
                      item.competitors1_alternateColor === "ffffff"
                        ? "808080"
                        : item.competitors1_alternateColor
                    } 50%)`,
                  }}
                >
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
                      iconsData={[
                        {
                          iconUrl: item.competitors1_logo,
                          name: item.competitors1_displayName,
                        },
                        {
                          iconUrl: item.competitors2_logo,
                          name: item.competitors2_displayName,
                        },
                      ]}
                      title={item.shortName}
                    />
                    <div className="detail-live-end">
                      <Ended show={new Date(item?.date)} type={params.type} />
                    </div>
                  </div>
                </SplideSlide>
              ))}
          </>
        )}
      </Splide>
    </div>
  );
}

export default DetailsSlider;
// import React, { useEffect, useState } from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
// import "../../Assets/styles/CardDetailss.scss";
// import { useNavigate, useParams } from "react-router-dom";
// import getEventsByType from "../../api/getEventsType";
// import TeamIconsDetailPage from "./TeamIconsDetailPage";
// import Ended from "./Ended";
// import moment from "moment";

// function DetailsSlider() {
//   const params = useParams();
//   const [data, setData] = useState(null);
//   const getData = async () => {
//     const { data: response } = await getEventsByType(params.type);
//     setData(response.events);
//   };
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     getData();
//   }, []);

//   const splideOptions = {
//     perPage: 1,
//     perMove: 1,
//     pagination: false,
//     gap: 20,
//     drag: true,
//   };
//   const navigate = useNavigate();
//   return (
//     <div
//       className="deatils-carddd w-[80rem]"
//       style={{
//         height: "AUTO",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <Splide options={{ ...splideOptions, width: 1200 }}>
//         <>
//           {data
//             ?.sort((a, b) => {
//               const eventTimeA = moment(a.date).utc();
//               const eventTimeB = moment(b.date).utc();
//               const currentTimeLocal = moment();

//               const isLiveA = currentTimeLocal.isBetween(
//                 eventTimeA,
//                 eventTimeA
//                   .clone()
//                   .add(
//                     params.type === "NBA"
//                       ? 2.6
//                       : params.type === "NHL"
//                       ? 3
//                       : params.type === "MLB"
//                       ? 3
//                       : 3.5,
//                     "hours"
//                   )
//               );
//               const isLiveB = currentTimeLocal.isBetween(
//                 eventTimeB,
//                 eventTimeB
//                   .clone()
//                   .add(
//                     params.type === "NBA"
//                       ? 2.6
//                       : params.type === "NHL"
//                       ? 3
//                       : params.type === "MLB"
//                       ? 3
//                       : 3.5,
//                     "hours"
//                   )
//               );

//               // The following comparison will bring live events to the front
//               if (isLiveA && !isLiveB) {
//                 return 0;
//               } else if (!isLiveA && isLiveB) {
//                 return -1;
//               } else {
//                 return 1;
//               }
//             })
//             .reverse()
//             ?.map((item) => (
//               <SplideSlide
//                 options={{ ...splideOptions, width: 150 }}
//                 onClick={() => {
//                   navigate(
//                     `/${item?.channel?.TVCategory?.name}/live/${item._id}`
//                   );
//                 }}
//                 className={`card-slider1 flex flex-col items-center cursor-pointer rounded-lg`}
//                 key={item.id}
//                 style={{
//                   border: "1px solid white",
//                   width: "100%;",
//                   height: "100vh",
//                   background: `linear-gradient(-60deg, #${
//                     item.competitors1_color === "ffffff"
//                       ? "808080"
//                       : item.competitors1_color
//                   } 50%, #${
//                     item.competitors1_alternateColor === "ffffff"
//                       ? "808080"
//                       : item.competitors1_alternateColor
//                   } 50%)`,
//                 }}
//               >
//                 <div className="placeAndTime border w-[100%] h-[auto] p-1 flex justify-between flex-row bg-[black] bg-opacity-40">
//                   <p className="text-white text-sm">{item.location}</p>
//                   <p className="text-white text-sm">
//                     {item.date &&
//                       moment
//                         .utc(item.date)
//                         .utcOffset("-0500")
//                         .format("MM/DD/YYYY hh:mm:ss A")}
//                   </p>
//                 </div>

//                 <div
//                   className="container relative"
//                   style={{ marginTop: "25px" }}
//                   onClick={() => {
//                     navigate(
//                       `/${item?.channel?.TVCategory?.name}/live/${item._id}`
//                     );
//                   }}
//                 >
//                   <TeamIconsDetailPage
//                     iconsData={[
//                       {
//                         iconUrl: item.competitors1_logo,
//                         name: item.competitors1_displayName,
//                       },
//                       {
//                         iconUrl: item.competitors2_logo,
//                         name: item.competitors2_displayName,
//                       },
//                     ]}
//                     title={item.shortName}
//                   />
//                   <div className="detail-live-end">
//                     <Ended show={new Date(item?.date)} type={params.type} />
//                   </div>
//                 </div>
//               </SplideSlide>
//             ))}
//         </>
//       </Splide>
//     </div>
//   );
// }

// export default DetailsSlider;
