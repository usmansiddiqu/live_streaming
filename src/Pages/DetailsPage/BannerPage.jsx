import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import DetailsComponent from "../../Components/Common/DetailsComponent";
import DetailsDescription from "../../Components/Common/DetailsDescription";
import TeamScore from "../../Components/Common/TeamScore";
import DetailsSlider from "../../Components/Common/BannerSlider";
import getEventById from "../../api/eventById";
import { useParams } from "react-router-dom";
import getSpecificDetails from "../../api/slider.api";
import BannerDetailComponent from "../../Components/Common/BannerDetailComponent";
import BannerDetailsDescription from "../../Components/Common/BannerDetailsDescription";
function BannerPage() {
  const [url, setUrl] = useState("");
  const params = useParams();
  const [data, setData] = useState(null);
  const getData = async () => {
    const { data: response } = await getSpecificDetails(params.id);
    setData(response?.data);
    setUrl(data?.liveTV?.server1URL);
  };
  useEffect(() => {
    getData();
  }, [params.id]);

  console.log(data);

  return (
    <div>
      <Navbar />
      <BannerDetailComponent data={data} url={url} />
      <BannerDetailsDescription data={data} setUrl={setUrl} />
      {/* <TeamScore /> */}
      <div className="mt-6 w-[68%] bg-[#130A2D] mx-auto h-[28vh] flex flex-col p-3 px-10 mb-2">
        <h3 className="text-white font-medium text-2xl">You May Also Like</h3>
        <div className="w-[32vw] mt-4  mx-auto">
          <DetailsSlider />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BannerPage;
