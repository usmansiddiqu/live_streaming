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
import { ImCross } from "react-icons/im";
import "react-loading-skeleton/dist/skeleton.css";
import ErrorComponent1 from "../Common/ErrorComponent1";
import { useMediaQuery } from "react-responsive";



const StepProgress = ({ currentStep }) => {
  const steps = ["Plan", "Account", "Payment", "Stream"];

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex items-center justify-between w-full max-w-3xl  p-3 sm:p-4 rounded-lg">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center flex-1 relative">
            <span
              className={`mb-2 text-xs sm:text-sm font-semibold ${
                currentStep === index + 1 ? "text-white" : "text-gray-400"
              }`}
            >
              {step}
            </span>
            <div
              className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border-2 z-10 ${
                currentStep === index + 1
                  ? "bg-white text-black border-white"
                  : "text-gray-400 border-gray-600"
              }`}
            >
              {index + 1}
            </div>
            {index !== steps.length - 1 && (
              <div className="absolute top-[72%] left-[68%] sm:right-[-32%] md:right-[-32%] right-[-32%] -translate-y-1/2 h-0.5 bg-gray-600"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};



function PlanCards() {
  const [search] = useSearchParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCardSelected, setCardSelected] = useState(false);
  const [monthlyInfoModal, setMonthlyInfoModal] = useState(false)
  const [quarterlyInfoModal, setQuarterlyInfoModal] = useState(false)
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const isDekstop = useMediaQuery({ query: "(min-width: 1001px)" });
  const [yearlyInfoModal, setYearlyInfoModal] = useState(false)
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
    "The service won’t auto-renew. If you don’t renew manually, it will cancel at the end of the billing period. Contact support for any issues."
  );
  const [error1, setError1] = useState("");
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
          setError1(result?.data?.error);
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

  const handleLearnMoreView = (i) => {
    if(i === 0) {
      setMonthlyInfoModal(true)
    } else if(i === 1) {
      setQuarterlyInfoModal(true)
    } else {
      setYearlyInfoModal(true)
    }
  }

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
    <>
      <div className=" w-full  bg-[#0D0620] pt-4 text-white">
        {error && <ErrorComponent1 message={error1} />}
      </div>
      {/* <div className="lg:px-20 md:px-10 sm:px-5  mx-auto bg-[#0D0620] pt-3 pb-[30px] text-white flex flex-col md:flex-row  gap-8 px-5">
        <StepProgress currentStep={1} />
      </div> */}
      <div className="lg:px-20 md:px-10 sm:px-5  mx-auto bg-[#0D0620] pt-3 pb-[30px] text-white md:flex-row  gap-8 px-5">
        <div className="flex flex-col justify-center w-full cards-laoder">
          <div className="card-error-fix w-full">
            {error2 && <ErrorComponent message={error2} />}
          </div>
          {/* <h4 className="mb-4 pay-texts">
          NOTE: The service will not auto-renew, if you do not renew manually
          then it will be automatically canceled at the end of the billing
          period.
        </h4> */}
          <div className="w-full">
            <StepProgress currentStep={1} />
          </div>
          <div className="">
            {/* <h4 className="mb-4 font-bold pay-texts">Choose Plan:</h4> */}
            {/* <div
              className="mb-4 pay-texts"
              style={{ display: "flex", gap: "20px", alignItems: "center" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "3px" }}
              >
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img style={{ width: "25px" }} src={Crypto} alt="" />
                <h4>Crypto</h4>
              </div>
            </div> */}
          </div>
          <div
            className={`flex flex-column items-center ${
              isWidthInRange ? "" : "flex-wrap"
            }`}
          >
            <div>
              <h4 className="mb-4 font-bold pay-texts">Choose Plan:</h4>
            </div>
            <div style={{ display: "flex", gap: "25px", flexWrap: "wrap" }}>
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
                sortedData.map((payment, i) => (
                  // </div>
                  <div
                    key={payment._id}
                    className={`flex w-[20rem] mb-4 small-screen ${
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
                            {i === 0
                              ? "Monthly Plan"
                              : i === 1
                              ? "Quarterly Plan"
                              : "Half-Year Plan"}
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
                        <div
                          className="cursor-pointer mt-2"
                          onClick={() => handleLearnMoreView(i)}
                        >
                          Learn more
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            {isDekstop && (
              <div>{error && <ErrorComponent1 message={error} />}</div>
            )}
          </div>
          {isTabletOrMobile && (
            <div>{error && <ErrorComponent1 message={error} />}</div>
          )}
        </div>
      </div>
      {/* <div className="sm:px-5 md:px-40 lg:px-60 text-white flex justify-center items-center w-full mb-5">
            {error && <ErrorComponent1 message={error} />}
          </div> */}
      {monthlyInfoModal && (
        <div className="w-screen h-screen bg-gray-700 bg-opacity-85 flex justify-center items-center fixed left-0 top-0 z-[100] p-3 overflow-auto">
          <div className="max-w-2xl w-full bg-[#130A2D] p-6 rounded-xl shadow-lg relative">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-white flex items-center justify-between">
                <span>
                  Monthly Plan -{" "}
                  <span className="text-white">$15 for 30 Days</span>
                </span>
              </h2>
              <button
                className="ml-3 p-2 bg-white rounded-full text-blue-600 hover:bg-gray-200"
                onClick={() => setMonthlyInfoModal(false)}
              >
                <ImCross size={20} />
              </button>
            </div>
            <p className="mt-2 text-white">
              Get full access to all live games and premium features for{" "}
              <span className="font-semibold">30 days!</span> With the Basic
              Plan, you can enjoy:
            </p>

            <ul className="mt-4 space-y-3 text-white">
              <li>
                <span className="font-bold text-blue-600">NHL:</span> Stream all{" "}
                <span className="font-semibold">
                  1,312 regular-season games
                </span>
                , including the{" "}
                <span className="font-bold">Stanley Cup Playoffs</span> and the
                exciting{" "}
                <span className="font-semibold">4 Nations Face-Off</span>{" "}
                tournament.
              </li>
              <li>
                <span className="font-bold text-blue-600">NFL:</span> Watch all{" "}
                <span className="font-semibold">272 regular-season games</span>,
                plus the <span className="font-bold">playoffs</span> and the{" "}
                <span className="font-bold">Super Bowl</span>.
              </li>
              <li>
                <span className="font-bold text-blue-600">MLB:</span> Catch all{" "}
                <span className="font-semibold">
                  2,430 regular-season games
                </span>
                , including the <span className="font-bold">World Series</span>.
              </li>
              <li>
                <span className="font-bold text-blue-600">NBA:</span> Enjoy all{" "}
                <span className="font-semibold">
                  1,230 regular-season games
                </span>
                , plus the <span className="font-bold">NBA Playoffs</span> and{" "}
                <span className="font-bold">Finals</span>.
              </li>
            </ul>

            <p className="mt-4 text-white">
              This plan is perfect for fans who want short-term access to all
              the action across{" "}
              <span className="font-bold text-blue-600">
                NHL, NFL, MLB, and NBA
              </span>
              .
            </p>
          </div>
        </div>
      )}
      {quarterlyInfoModal && (
        <div className="w-screen h-[105vh] bg-gray-700 bg-opacity-85 flex justify-center items-center fixed left-0 top-0 z-[100] p-3  overflow-auto">
          <div className="max-w-2xl w-full bg-[#130A2D] p-6 rounded-xl shadow-lg relative">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-white flex items-center justify-between">
                <span>
                  Quarterly Plan -{" "}
                  <span className="text-white">$35 for 90 Days</span>
                </span>
              </h2>
              <button
                className="ml-3 p-2 bg-white rounded-full text-blue-600 hover:bg-gray-200"
                onClick={() => setQuarterlyInfoModal(false)}
              >
                <ImCross size={20} />
              </button>
            </div>
            <p className="mt-2 text-white">
              Experience uninterrupted sports streaming for{" "}
              <span className="font-semibold">90 days!</span> with the Quarterly
              Plan, This plan includes:
            </p>

            <ul className="mt-4 space-y-3 text-white">
              <li>
                <span className="font-bold text-blue-600">NHL:</span> Access to
                all{" "}
                <span className="font-semibold">
                  1,312 regular-season games, the Stanley Cup Playoffs, and the
                  4 Nations Face-Off
                </span>
              </li>
              <li>
                <span className="font-bold text-blue-600">NFL:</span> Stream all{" "}
                <span className="font-semibold">
                  272 regular-season games, playoffs, and the Super Bowl
                </span>
                .
              </li>
              <li>
                <span className="font-bold text-blue-600">MLB:</span> Watch all{" "}
                <span className="font-semibold">
                  2,430 regular-season games and the World Series
                </span>
                .
              </li>
              <li>
                <span className="font-bold text-blue-600">NBA:</span> Enjoy all{" "}
                <span className="font-semibold">
                  1,230 regular-season games
                </span>
                , plus the <span className="font-bold">NBA Playoffs</span> and{" "}
                <span className="font-bold">Finals</span>.
              </li>
            </ul>

            <p className="mt-4 text-white">
              Ideal for fans who want extended access to all four major sports
              leagues without missing a single game.
            </p>
          </div>
        </div>
      )}
      {yearlyInfoModal && (
        <div className="w-screen h-[105vh] bg-gray-700 bg-opacity-85 flex justify-center items-center fixed left-0 top-0 z-[100] p-3  overflow-auto">
          <div className="max-w-2xl w-full bg-[#130A2D] p-6 rounded-xl shadow-lg relative">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-white flex items-center justify-between">
                <span>
                  Half-Year Plan -{" "}
                  <span className="text-white">$180 for 180 Days</span>
                </span>
              </h2>
              <button
                className="ml-3 p-2 bg-white rounded-full text-blue-600 hover:bg-gray-200"
                onClick={() => setYearlyInfoModal(false)}
              >
                <ImCross size={20} />
              </button>
            </div>
            <p className="mt-2 text-white">
              Go all-in with the Platinum Plan and enjoy{" "}
              <span className="font-semibold">6 months!</span> of unlimited
              sports streaming. This plan offers:
            </p>
            <ul className="mt-4 space-y-3 text-white">
              <li>
                <span className="font-bold text-blue-600">NHL:</span>Full Access
                to all{" "}
                <span className="font-semibold">
                  1,312 regular-season games, the Stanley Cup Playoffs, and the
                  4 Nations Face-Off
                </span>
              </li>
              <li>
                <span className="font-bold text-blue-600">NFL:</span> Stream all{" "}
                <span className="font-semibold">
                  272 regular-season games, playoffs, and the Super Bowl
                </span>
                .
              </li>
              <li>
                <span className="font-bold text-blue-600">MLB:</span> Watch all{" "}
                <span className="font-semibold">
                  2,430 regular-season games and the World Series
                </span>
                .
              </li>
              <li>
                <span className="font-bold text-blue-600">NBA:</span> Enjoy all{" "}
                <span className="font-semibold">
                  1,230 regular-season games
                </span>
                , plus the <span className="font-bold">NBA Playoffs</span> and{" "}
                <span className="font-bold">Finals</span>.
              </li>
            </ul>

            <p className="mt-4 text-white">
              Perfect for die-hard sports fans who want the best value and
              long-term access to all the action.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default PlanCards;
