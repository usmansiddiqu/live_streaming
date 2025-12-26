import React, { useEffect } from "react";
import Nav from "../../Components/Navbar";
import Home from "../Home";
import Footer from "../../Components/Footer";
import verifyPayments from "../../api/payment.api";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import getDetails from "../../api/authGetDetails";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import moment from "moment";

function MainScreen() {
  const token = useSelector((state) => state.auth.token); // Access token
  const user = useSelector((state) => state.auth.user); // Access user info
  const navigate = useNavigate();

  const [search] = useSearchParams();
  const getData = async () => {
    const { data: response } = await verifyPayments(search.get("token"));
    if (response.message == "Token Verified!") {
      toast.success("Payment Successful");
      getUser();
    }
  };
  const getUser = async () => {
    if (localStorage.getItem("token")) {
      const { data: response } = await getDetails();
      localStorage.setItem("data", JSON.stringify(response?.user));
      return response?.user;
    }
    return null;
  };
  
  // Check subscription status when arriving from email renewal link
  const checkSubscriptionFromEmail = async () => {
    if (search.get("renew") === "true") {
      const userData = await getUser();
      if (userData?.expiryDate) {
        const daysUntilExpiry = moment(userData.expiryDate).diff(moment(), "days");
        // If subscription expires in more than 1 day, redirect to dashboard subscription page
        if (daysUntilExpiry > 1) {
          navigate("/dashboard");
          return;
        }
        // If subscription expires in <= 1 day or expired, allow renewal - redirect to plans page
        navigate("/membership_plan");
      } else {
        // No subscription, redirect to plans page
        navigate("/membership_plan");
      }
    }
  };

  useEffect(() => {
    if (search.get("token")) {
      // getData();
      getUser();
    }
    if (search.get("renew") === "true") {
      checkSubscriptionFromEmail();
    }
  }, [search]);
  return (
    <>
      <div className="forMobScreen">
        <Helmet>
          <title>PixelSports TV - Watch NFL, NHL, NBA in 4k</title>
          <meta
            name="description"
            content="Watch NFL, NHL, MLB, NBA, and more live sports on PixelSport TV. Stream in HD, catch every goal, touchdown, and match moment"
          />
        </Helmet>
        <ToastContainer limit={1} />
        <Nav />
        <Home />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default MainScreen;
