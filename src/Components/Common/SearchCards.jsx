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
  console.log(data);

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
            <Splide options={{ ...splideOptions, width: 1400 }}>
              <>
                {data?.map((item) => (
                  <SplideSlide
                    onClick={() =>
                      navigate(
                        `/${item?.channel?.TVCategory?.name}/live/${item._id}`
                      )
                    }
                    options={{ ...splideOptions, width: 150 }}
                    className="cardSlider flex flex-col items-center relative cursor-pointer bg-contain  bg-center "
                    style={{
                      width: "100%;",
                      height: "100vh",
                      overflow: "hidden",
                      backgroundSize: "100%",
                      background: item.channel?.TVLogo
                        ? `url(${url}/${item.channel.TVLogo.replace(
                            "uploads\\",
                            ""
                          )})`
                        : `url(${background})`,
                    }}
                  >
                    <div
                      className="w-[258px] search-card-bar  h-[3vh] bg-gradient-to-r from-[#00C4FF] to-[#0074FF] absolute rounded-b-xl text-center flex justify-center items-center  "
                      style={{ bottom: "0%" }}
                    >
                      <span className=" text-white font-medium">
                        {item?.shortName}
                      </span>
                    </div>
                  </SplideSlide>
                ))}
              </>
            </Splide>
          </div>
        </>
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
                {data?.map((item) => (
                  <SplideSlide
                    onClick={() =>
                      navigate(
                        `/${item?.channel?.TVCategory?.name}/live/${item._id}`
                      )
                    }
                    options={{ ...splideOptions, width: 150 }}
                    className="cardSlider flex flex-col items-center relative cursor-pointer bg-contain  bg-center "
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
                    }}
                  >
                    {console.log(item)}
                    <div
                      className="w-[258px] search-card-bar  h-[3vh] bg-gradient-to-r from-[#00C4FF] to-[#0074FF] absolute rounded-b-xl text-center flex justify-center items-center  "
                      style={{ bottom: "0%" }}
                    >
                      <span className=" text-white font-medium">
                        {item?.shortName}
                      </span>
                    </div>
                  </SplideSlide>
                ))}
              </>
            </Splide>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchCards;
