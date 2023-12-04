import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import DetailsComponent from "../../Components/Common/DetailsComponent";
import DetailsDescription from "../../Components/Common/DetailsDescription";
import TeamScore from "../../Components/Common/TeamScore";
import DetailsSlider from "../../Components/Common/DetailsSlider";
import { getEventById } from "../../api/event.api";
import { useParams } from "react-router-dom";
function DetailsPage() {
  const [url, setUrl] = useState("");
  const params = useParams();
  const [data, setData] = useState(null);
  const getData = async () => {
    const { data: response } = await getEventById(params.id);
    setData(response.events);
    setUrl(data?.channel?.server1URL);
  };
  useEffect(() => {
    getData();
  }, [params.id]);

  console.log(data);

  return (
    <div>
      <Navbar />
      <DetailsComponent data={data} url={url} />
      <DetailsDescription data={data} setUrl={setUrl} />
      {/* <TeamScore /> */}
      <DetailsSlider />
      <Footer />
    </div>
  );
}

export default DetailsPage;
