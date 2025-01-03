import React, { useEffect, useState } from "react";
import plan from "../../utils/images/plan.png";
import getPlans from "../../api/plan.api";
import { useNavigate, useSearchParams } from "react-router-dom";
import availFreePayment from "../../api/availFree";
import createPayment from "../../api/addPayment";
import ErrorComponent from "../Common/ErrorComponent";
import Card from "../../Assets/Icons/money.png";
import Crypto from "../../Assets/Icons/bitcoin.png";
import policioPayment from "../../api/policioPayment";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ErrorComponent1 from "../Common/ErrorComponent1";
function PlanCards() {
  const [search] = useSearchParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCardSelected, setCardSelected] = useState(false);
  console.log(isCardSelected);
  const getData = async () => {
    setLoading(true);
    const { data: response } = await getPlans();
    setData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    const sorted = [...data].sort((a, b) => a.days - b.days);
    setSortedData(sorted);
  }, [data]);
  useEffect(() => {
    getData();
  }, []);
  const toggleCard = () => {
    setCardSelected((prevState) => !prevState);
  };
  const [error, setError] = useState(
    "NOTE: The service won’t auto-renew. If you don’t renew manually, it will cancel at the end of the billing period. Contact support for any issues."
  );
  const [error2, setError2] = useState("");
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const handleClick = async (packageId) => {
    console.log(packageId);
    if (!localStorage.getItem("token") || !localStorage.getItem("data")) {
      navigate("/signup");
    } else {
      if (isCardSelected) {
        const result = await policioPayment({ packageId: packageId });
        console.log(result);
        if (result?.data?.error) {
          setError(result?.data?.error);
        } else {
          // openInNewTab(result.data?.data?.data?.invoice_url);
          window.location.href = result.data?.data?.data?.invoice_url;
        }
      } else {
        const result = await createPayment({ package_id: packageId });
        if (result?.data?.error) {
          setError(result?.data?.error);
        } else {
          window.location.href = result.data.link;
        }
      }
    }
    // setError("Please contact live support for buying service and renewal");
  };
  const handleFreePayment = async () => {
    if (localStorage.getItem("data")) {
      const { data: response } = await availFreePayment();
      setError(response.message);
    } else {
      navigate("/signup");
    }
  };
  const skeletonProps = {
    baseColor: "#170f2c", // Dark background color
    highlightColor: "#332e47", // Lighter highlight for the animation effect
  };

  useEffect(() => {
    if (search.get("fail") == "none") {
      setError2("Payment Failed Please Try Again");
    }
  }, [search.get("fail")]);

  const [isWidthInRange, setIsWidthInRange] = useState(false);

  useEffect(() => {
    const updateWidthStatus = () => {
      const width = window.innerWidth;
      setIsWidthInRange(width > 1080 && width < 1500);
    };

    // Set the initial value
    updateWidthStatus();

    // Listen for window resize events
    window.addEventListener("resize", updateWidthStatus);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWidthStatus);
    };
  }, []);
  return (
    <div
      className="lg:px-20 md:px-10 sm:px-5 w-[73vw]  mx-auto bg-[#0D0620] pt-5 pb-[30px] text-white flex flex-col md:flex-row  gap-8 px-5"
      style={{ marginLeft: "250px" }}
    >
      <div className="flex flex-col w-full cards-laoder">
        <div className="card-error-fix">
          {error && <ErrorComponent1 message={error} />}
          {error2 && <ErrorComponent message={error2} />}
        </div>
        {/* <h4 className="mb-4 pay-texts">
          NOTE: The service will not auto-renew, if you do not renew manually
          then it will be automatically canceled at the end of the billing
          period.
        </h4> */}
        <div>
          <h4 className="mb-4 pay-texts">Choose Payment Method:</h4>
          <div
            className="mb-4 pay-texts"
            style={{ display: "flex", gap: "20px", alignItems: "center" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <img style={{ width: "45px" }} src={Card} alt="" />
              <h4>Card</h4>
            </div>
            <label className="switch ">
              <input
                type="checkbox"
                checked={isCardSelected}
                onChange={toggleCard}
              />
              <span className="slider round"></span>
            </label>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img style={{ width: "25px" }} src={Crypto} alt="" />
              <h4>Crypto</h4>
            </div>
          </div>
        </div>
        <div
          className={`flex pay-cards justify-between items-center ${
            isWidthInRange ? "" : "flex-wrap"
          }`}
        >
          {loading ? (
            // <div className="flex items-center justify-center relative">
            <div className="w-[100%]">
              <Skeleton
                height={250}
                style={{ width: "100%" }}
                count={1}
                {...skeletonProps}
              />
            </div>
          ) : (
            sortedData.map((payment) => (
              // </div>
              <div
                key={payment._id}
                className={`flex w-[20rem] mb-4 ${
                  isWidthInRange ? "ml-3" : ""
                }`}
              >
                <div
                  className="flex flex-col gap-3 w-full md:w-[20rem] h-64 bg-center rounded-xl pay-cardd"
                  style={{
                    backgroundColor: "#1F1340",
                    backgroundImage: `url(${plan})`,
                  }}
                >
                  <div className="flex justify-start items-start">
                    <div className="bg-gradient-to-r from-[#00C5FF] to-[#0074FF] w-full rounded-tr-xl rounded-tl-xl flex justify-center items-center h-12 ">
                      <div
                        className="mx-auto text-center font-semibold"
                        style={{ fontSize: "17px" }}
                      >
                        {payment.name}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <p className="text-4xl font-bold">
                      <span className="text-xl">$</span>
                      {payment.amount}
                      <span className="text-xl">.00</span>
                    </p>
                    <div
                      className="w-14 rounded-lg bg-blue-500"
                      style={{ paddingTop: "4px", marginTop: "4px" }}
                    />
                    <div>
                      <p className="text-lg mt-3">
                        <span> {payment.days}</span> <span>Day</span> (
                        <span>s</span>)
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        if (
                          payment.name === "Free Service - No Card required"
                        ) {
                          handleFreePayment();
                        } else handleClick(payment._id);
                      }}
                      className="bg-gradient-to-r from-[#00C4FF] to-[#0074FF] hover:bg-gradient-to-l text-white font-normal py-2 px-4 rounded flex flex-row gap-2 justify-center items-center mt-3"
                    >
                      Select Plan
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
          {/* {} */}
        </div>
      </div>
    </div>
  );
}

export default PlanCards;
