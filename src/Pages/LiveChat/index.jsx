import React, { useEffect, useState } from "react";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Card from "../../Components/Common/Card";
import getEvents from "../../api/getEvents";
// import TestingChat from "../../Components/TheaterMode";
import TheaterMode from "../../Components/TheaterMode";

function LiveChat() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data: response } = await getEvents();
    setData(
      response.events.filter((card) => card.channel.TVCategory.name == "MLB")
    );
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div
        style={{
          minHeight: "100vh",
          overflow: "hidden !important",
        }}
      >
        <Nav />
        <TheaterMode />
      </div>
      <Footer />
    </div>
  );
}

export default LiveChat;
