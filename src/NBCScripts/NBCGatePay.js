import React, { useEffect } from "react";
import createNBCPayment from "../api/createNBCPayment";
import { useNavigate } from "react-router-dom";
const user = localStorage.getItem("data");

// import { useNavigate } from "react-router-dom";
// const user = localStorage.getItem("data");

// const PaymentButton = ({ amount, orderId, returnURL }) => {
//   useEffect(() => {
//     // Check if the script is already loaded
//     if (!document.getElementById("nbcgatepay")) {
//       const script = document.createElement("script");
//       script.src = "https://portal.nbcgate.com/js/payform.js?ID=179";
//       script.async = true;
//       script.id = "nbcgatepay";
//       script.onload = () => {
//         if (window.nbcgate) {
//           window.nbcgate(); // Initialize NBCGate once script is loaded
//         }
//       };
//       document.body.appendChild(script);
//     } else {
//       // If script is already loaded, just initialize NBCGate
//       if (window.nbcgate) {
//         window.nbcgate();
//       }
//     }
//   }, []);

//   return (
//     <div
//       id="nbcgate-pay-button"
//       nbcgate-order-amount={amount}
//       nbcgate-order-id={orderId}
//       nbcgate-return-url={returnURL}
//       nbcgate-theme="dark"
//       nbcgate-lang="en"
//     ></div>
//   );
// };

// export default PaymentButton;
// const NBCGatePayButton = ({ amount, orderId, returnUrl }) => {
//   const hellofunction = () => {
//     debugger;
//   };
//   useEffect(() => {
//     if (!document.getElementById("nbcgatepay")) {
//       const script = document.createElement("script");
//       script.src = "https://portal.nbcgate.tech/js/payformdev.js?ID=179";
//       script.async = true;
//       script.id = "nbcgatepay";
//       document.body.appendChild(script);
//     }
//     hellofunction();
//   }, []);

//   return (
//     <div
//       id="nbcgate-pay-button"
//       nbcgate-order-amount={amount}
//       nbcgate-order-id={orderId}
//       nbcgate-return-url={returnUrl || "https://pixelsport.tv"} // Default URL if missing
//       nbcgate-theme="dark"
//       nbcgate-lang="en"
//     ></div>
//   );
// };

// const PaymentButton = ({ amount, orderId, returnUrl, buttonId }) => {
//   // This will run the function before navigating to the payment page
//   const handlePaymentProcess = async () => {
//     try {
//       // Step 1: Run your custom logic, such as creating a payment
//       console.log(
//         `Creating payment for order ${orderId} with amount ${amount}`
//       );
//       await createPayment();

//       // Step 2: Once custom logic is done, navigate to the payment gateway
//       navigateToPayment();
//     } catch (error) {
//       console.error("Error in payment process:", error);
//     }
//   };

//   const createPayment = async () => {
//     // Add your API call logic here
//     console.log(`Payment created for order ${orderId}`);
//     // Example API call:
//     // await fetch('/api/payments', {
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify({ orderId, amount })
//     // });
//   };

//   const navigateToPayment = () => {
//     // Ensure the button is found
//     const nbcgateButton = document.getElementById(buttonId);
//     if (nbcgateButton) {
//       console.log("Navigating to payment gateway...");
//       // Adding a delay before triggering the click to allow the button to fully initialize
//       setTimeout(() => {
//         nbcgateButton.click();
//       }, 500); // Delay of 500ms to ensure initialization
//     } else {
//       console.error("NBCGate button not found");
//     }
//   };

//   useEffect(() => {
//     // Dynamically load the NBCGate script if it's not already present
//     if (!document.getElementById("nbcgatepay")) {
//       const script = document.createElement("script");
//       script.src = "https://portal.nbcgate.tech/js/payformdev.js?ID=179";
//       script.async = true;
//       script.id = "nbcgatepay";
//       document.body.appendChild(script);
//     }
//   }, []);

//   return (
//     <div>
//       {/* Button for triggering the payment process */}
//       <button
//         onClick={handlePaymentProcess}
//         className="bg-gradient-to-r from-[#00C4FF] to-[#0074FF] hover:bg-gradient-to-l text-white font-normal py-2 px-4 rounded flex flex-row gap-2 justify-center items-center mt-3"
//       >
//         Pay with NBCGate
//       </button>

//       {/* NBCGate Button - Hidden initially */}
//       <div
//         id={buttonId}
//         nbcgate-order-amount={amount}
//         nbcgate-order-id={orderId}
//         nbcgate-return-url={returnUrl || "https://pixelsport.tv"}
//         nbcgate-theme="dark"
//         nbcgate-lang="en"
//         style={{ display: "none" }} // Button hidden until triggered
//       ></div>
//     </div>
//   );
// };

// const NBCGatePayButton = ({ amount, orderId, returnUrl }) => {
//   useEffect(() => {
//     // Load the script if it doesn't exist
//     if (!document.getElementById("nbcgatepay")) {
//       const script = document.createElement("script");
//       script.src = "https://portal.nbcgate.tech/js/payformdev.js?ID=179";
//       script.async = true;
//       script.id = "nbcgatepay";
//       document.body.appendChild(script);

//       // Wait for script to load then initialize payment
//       script.onload = initializePayment;
//     } else {
//       // If script already exists, just initialize
//       initializePayment();
//     }

//     function initializePayment() {
//       // Check if NBCGate has an initialization function
//       if (
//         window.NBCGate &&
//         typeof window.NBCGate.initPayButton === "function"
//       ) {
//         window.NBCGate.initPayButton();
//       } else if (
//         window.NBCGatePayInit &&
//         typeof window.NBCGatePayInit === "function"
//       ) {
//         window.NBCGatePayInit();
//       } else {
//         console.error("NBCGate payment initialization function not found");
//       }
//     }
//   }, []);

//   return (
//     <div
//       id="nbcgate-pay-button"
//       nbcgate-order-amount={amount}
//       nbcgate-order-id={orderId}
//       nbcgate-return-url={returnUrl || "https://pixelsport.tv"}
//       nbcgate-theme="dark"
//       nbcgate-lang="en"
//     ></div>
//   );
// };

/////////////// its working ////////
const NBCGatePayButton = ({
  amount,
  orderId = Math.floor(10000 + Math.random() * 90000),
  packageId,
}) => {
  const navigate = useNavigate();

  const hellofunction = async () => {
    if (!localStorage.getItem("token") || !localStorage.getItem("data")) {
      navigate("/signup");
    } else {
      const data = await createNBCPayment(packageId, orderId, JSON.parse(user));
      if (data?.status === 200 && data.data.error) {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    if (!document.getElementById("nbcgatepay")) {
      const script = document.createElement("script");
      script.src = "https://portal.nbcgate.tech/js/payformdev.js?ID=179";
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
      nbcgate-order-id={orderId}
      nbcgate-return-url={"https://pixelsport.tv"} // Default URL if missing
      nbcgate-theme="dark"
      nbcgate-lang="en"
      onClick={hellofunction} // Add onClick handler here
    ></div>
  );
};

export default NBCGatePayButton;
