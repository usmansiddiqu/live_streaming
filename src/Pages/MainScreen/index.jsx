import React, { useEffect } from "react";
import Nav from "../../Components/Navbar";
import Home from "../Home";
import Footer from "../../Components/Footer";
import verifyPayments from "../../api/payment.api";
import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import getDetails from "../../api/authGetDetails";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

function MainScreen() {
  const token = useSelector((state) => state.auth.token); // Access token
  const user = useSelector((state) => state.auth.user); // Access user info

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
    }
  };
  useEffect(() => {
    if (search.get("token")) {
      // getData();
      getUser();
    }
  }, []);
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
