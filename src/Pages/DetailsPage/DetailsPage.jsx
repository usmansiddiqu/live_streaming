import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import DetailsComponent from "../../Components/Common/DetailsComponent";
import DetailsDescription from "../../Components/Common/DetailsDescription";
import TeamScore from "../../Components/Common/TeamScore";
import DetailsSlider from "../../Components/Common/DetailsSlider";
function DetailsPage() {
  return (
    <div>
      <Navbar />
      <DetailsComponent />
      <DetailsDescription />
      <TeamScore />
      <DetailsSlider />
      <Footer />
    </div>
  );
}

export default DetailsPage;
