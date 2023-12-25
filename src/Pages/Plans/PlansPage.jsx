import React, { useEffect, useState } from "react";
import PlansDash from "../../Components/Plans/PlansDash";
import PlanCards from "../../Components/Plans/PlanCards";
import Coupon from "../../Components/Plans/Coupon";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import verifyPayments from "../../api/payment.api";
import { ToastContainer, toast } from "react-toastify";
import getDetails from "../../api/authGetDetails";
function PlansPage() {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const getData = async () => {
    const { data: response } = await verifyPayments(search.get("token"));
    if (response.message == "Token Verified!") {
      getUser();
      navigate("/");
    } else {
      toast.error("Payment Failed");
    }
  };
  const getUser = async () => {
    if (localStorage.getItem("token")) {
      const { data: response } = await getDetails();
      localStorage.setItem("data", JSON.stringify(response?.user));
    }
  };
  useEffect(() => {
    if (search.get("token")) {
      getData();
    }
  }, []);
  return (
    <div className="bg-[#0D0620]">
      <ToastContainer limit={1} />
      <Nav />
      <PlansDash />
      <PlanCards />
      <Coupon />
      <div className="text-white mx-auto w-[70vw] mb-3 plan-page-text">
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
