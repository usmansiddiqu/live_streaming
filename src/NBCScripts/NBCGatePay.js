import React, { useEffect } from "react";
import createNBCPayment from "../api/createNBCPayment";
import { useNavigate } from "react-router-dom";
const user = localStorage.getItem("data");

/////////////// its working ////////
const NBCGatePayButton = ({ amount, order_id, packageId }) => {
  const navigate = useNavigate();

  const hellofunction = async () => {
    try {
      const data = await createNBCPayment(
        packageId,
        order_id?.token,
        JSON.parse(user)
      );
      if (data?.status === 200 && data.data.error) {
        // If backend returns redirect info, use it; otherwise default to home
        if (data.data.redirectTo) {
          navigate(data.data.redirectTo);
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      // Handle error response with redirect
      if (error.response?.data?.redirectTo) {
        navigate(error.response.data.redirectTo);
      } else if (error.response?.data?.error) {
        console.error(error.response.data.error);
        navigate("/membership_plan");
      }
    }
  };
  // test https://portal.nbcgate.tech/js/payformdev.js?ID=179 //
 /// live https://portal.nbcgate.com/js/payform.js?ID=23
  useEffect(() => {
    if (!document.getElementById("nbcgatepay")) {
      const script = document.createElement("script");
      script.src = "https://portal.nbcgate.com/js/payform.js?ID=75";
      script.async = true;
      script.id = "nbcgatepay";
      script.onload = () => {
        // Give NBC script some time to render the button
        setTimeout(() => {
          const button = document.querySelector("#nbcgate-pay-button button");
          if (button) button.textContent = "Pay With Credit Card"; // change the label here
        }, 500);
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      id="nbcgate-pay-button"
      nbcgate-order-amount={amount}
      nbcgate-order-id={JSON.stringify(order_id)}
      nbcgate-return-url={"https://pixelsport.tv"} // Default URL if missing
      nbcgate-theme="dark"
      nbcgate-lang="en"
      onClick={hellofunction} // Add onClick handler here
    ></div>
  );
};

export default NBCGatePayButton;
