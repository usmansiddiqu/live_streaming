import React from "react";
import PlansDash from "../../Components/Plans/PlansDash";
import PlanCards from "../../Components/Plans/PlanCards";
import Coupon from "../../Components/Plans/Coupon";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
function PlansPage() {
  return (
    <div className="bg-[#0D0620]">
      <Nav />
      <PlansDash />
      <PlanCards />
      <Coupon />
      <div className="text-white mx-auto w-[75vw] ">
        <p className="text-lg font-bold">Why Choose Our Subscription?</p>
        <p>
          <span className="font-bold">Unlimited Sports Access:</span>{" "}
          &nbsp;Enjoy unlimited access to NFL, MLB, NHL, NBA, and more exciting
          sports games.
        </p>
        <p>
          <span className="font-bold">No Blackouts:</span> &nbsp;Say goodbye to
          frustrating blackout restrictions and never miss a game again.
        </p>
        <p>
          <span className="font-bold">Instant Activation:</span> &nbsp;Get
          started instantly, and access your favorite sports stream right away.
        </p>
        <p>
          <span className="font-bold">24-Hour Money-Back Guarantee:</span>{" "}
          &nbsp;We're so confident you'll love our service that we offer a
          24-hour money-back guarantee—no questions asked!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default PlansPage;
