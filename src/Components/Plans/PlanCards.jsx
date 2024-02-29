import React, { useEffect, useState } from "react";
import plan from "../../utils/images/plan.png";
import getPlans from "../../api/plan.api";
import { useNavigate } from "react-router-dom";
import availFreePayment from "../../api/availFree";
import createPayment from "../../api/addPayment";
import ErrorComponent from "../Common/ErrorComponent";
function PlanCards() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data: response } = await getPlans();
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const [error, setError] = useState(null);
  const handleClick = async (packageId) => {
    if (!localStorage.getItem("token") || !localStorage.getItem("data")) {
      navigate("/signup");
    } else {
      const result = await createPayment({ package_id: packageId });
      if (result?.data?.error) {
        setError(result?.data?.error);
      } else {
        window.location.href = result.data.data;
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
  return (
    <div className="lg:px-20 md:px-10 sm:px-5 w-[73vw] mx-auto bg-[#0D0620] pt-5 pb-[30px] text-white flex flex-col md:flex-row  gap-8 px-5">
      <div className="flex flex-col w-full ">
        {error && <ErrorComponent message={error} />}
        <h4 className="mb-5 pay-texts">
          NOTE: The service will not auto-renew, if you do not renew manually
          then it will be automatically canceled at the end of the billing
          period.
        </h4>
        <div className="flex pay-cards justify-between items-center flex-wrap">
          {data?.map((payment) => (
            <div key={payment._id} className="flex w-[20rem] mb-4">
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
                      if (payment.name === "Free Service - No Card required") {
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlanCards;
