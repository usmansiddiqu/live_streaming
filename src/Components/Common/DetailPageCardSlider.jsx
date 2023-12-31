import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../../Assets/styles/CardDetailss.scss";
import { useNavigate, useParams } from "react-router-dom";
import getEventsByType from "../../api/getEventsType";
import TeamIconsDetailPage from "./TeamIconsDetailPage";
import Carousel from "react-bootstrap/Carousel";
import Ended from "./Ended";
import Slider from "react-slick";

function DetailPageCardSlider() {
    const params = useParams();
    const [data, setData] = useState(null);
    const getData = async () => {
      const { data: response } = await getEventsByType(params.type);
      setData(response.events);
    };
    useEffect(() => {
      window.scrollTo(0, 0);
      getData();
    }, []);
    const navigate = useNavigate();
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: auto,
        slidesToScroll: 1
      };
        return (
          <div className="border">
            <Slider {...settings}>
            {data?.map((item) => (
              <div  className={`card-slider1 border flex flex-col items-center cursor-pointer rounded-lg`}
              key={item.id} onClick={() => {
                navigate(
                  `/${item?.channel?.TVCategory?.name}/live/${item._id}`
                );
              }}
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
              }}>
                   <div
               className="container"
               style={{ marginTop: "25px" }}
               onClick={() => {
                 navigate(
                   `/${item?.channel?.TVCategory?.name}/live/${item._id}`
                 );
               }}
             >
               <TeamIconsDetailPage
                 iconsData={item?.data?.competitors?.map((comp) => ({
                   iconUrl: comp.logo,
                   name: comp.name,
                 }))}
                 title={item?.data?.shortName}
               />
               <div className="detail-live-end">
                 <Ended
                   show={
                     new Date(item?.data?.date) <
                     new Date().setHours(new Date().getHours() + 4)
                   }
                 />
               </div>
             </div>
              </div>
            
                  ))}
            </Slider>
          </div>
        );
    
}

export default DetailPageCardSlider;
