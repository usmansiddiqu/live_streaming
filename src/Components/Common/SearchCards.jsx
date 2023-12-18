import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../../Assets/styles/CardSlider.scss";
import TeamIcons from "./TeamIcons";
import { useNavigate } from "react-router-dom";
import Ended from "./Ended";
import { useMediaQuery } from "react-responsive";
import { url } from "../../helper/url";
import background from "../../Assets/Images/login-signup-bg-img.jpg";
import avatar from "../../Assets/Icons/close.png";

const SearchCards = ({ data }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const isDekstop = useMediaQuery({ query: "(min-width: 1001px)" });
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }
  const splideOptions = {
    perPage: 1,
    perMove: 1,
    pagination: false,
    gap: 20,
    drag: true,
  };
  const navigate = useNavigate();
  return (
    <>
      {isDekstop && (
     <>

        <div
        className="Cardslider "
        style={{
          width: "73%",
          height: "AUTO",
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          marginTop: "25px",
        }}
      >
        {console.log(data)}
        <Splide options={{ ...splideOptions, width: 1400 }}>
          <>
            {data?.map((item) => (
              <SplideSlide
                options={{ ...splideOptions, width: 150 }}
                className="cardSlider flex flex-col items-center relative cursor-pointer bg-contain bg-center searcCard"
                        style={{
                          width: "100%;",
                          height: "100vh",
                          overflow: "hidden",
                          background: item.channel?.TVLogo
                            ? `url(${url}/${item.channel.TVLogo.replace(
                                "uploads\\",
                                ""
                              )})`
                            : `url(${background})`,
                        }}>
                 <div
                    className="w-[258px] search-card-bar  h-[3vh] bg-gradient-to-r from-[#00C4FF] to-[#0074FF] absolute rounded-b-xl text-center flex justify-center items-center py-1.5 "
                    style={{ bottom: "0%" }}
                  >
                    <span className="py-auto text-white font-medium">
                      {item?.data?.shortName}
                    </span>
                  </div>
              </SplideSlide>
            ))}
          </>
        </Splide>
      </div></>
      )}
      {isTabletOrMobile && (
        <div
          className="Cardslider"
          style={{
            width: "73%",
            height: "AUTO",
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <div className=" ml-1">
            <Splide options={{ ...splideOptions, width: 1400 }}>
              <>
                <div
                  className="seacrh-card-box  rounded-lg "
                  style={{ overflow: "hidden" }}
                >
                  <SplideSlide
                    className="cardSlider flex flex-col items-center relative cursor-pointer bg-cover bg-center searcCard"
                    style={{
                      width: "100%;",
                      height: "100vh",
                      overflow: "hidden",
                    }}
                  ></SplideSlide>
                </div>
                <div
                  className="w-[258px] search-card-bar h-[0] bg-gradient-to-r from-[#00C4FF] to-[#0074FF] absolute rounded-b-xl text-center flex justify-center items-center py-1.5 "
                  style={{ bottom: "0%" }}
                >
                  <span className="py-auto text-white font-medium">kokok </span>
                </div>
              </>
            </Splide>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchCards;
