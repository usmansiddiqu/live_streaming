import React, { useEffect, useState } from "react";
import Pikaday from "pikaday";
import "pikaday/css/pikaday.css";
import updateUser from "../../api/editUser";
import getSpecificUser from "../../api/specificUser";
import ErrorComponent from "../Common/ErrorComponent";
import { useParams, useNavigate } from "react-router-dom";
import bankDetails from "../../api/getBankDetails";
import verifyPayment from "../../api/verifyPayment";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditUserInvoice() {
  const { transactionId, userId } = useParams();
  const navigate = useNavigate();
  const [accNo, setAccNo] = useState("");
  const [beneficiary, setBeneficiary] = useState("");
  const [bankSwift, setBankSwift] = useState("");
  const [iban, setIban] = useState("");
  const [bankAddress, setBankAddress] = useState("");
  const [detailId, setDetailId] = useState();
  console.log(detailId);

  const getUserBankDetails = async () => {
    try {
      const response = await bankDetails(userId);

      if (response?.data?.bankDetails?.length) {
        setAccNo(response?.data?.bankDetails[0]?.accountNo);
        setBeneficiary(response?.data?.bankDetails[0]?.beneficiary);
        setBankSwift(response?.data?.bankDetails[0]?.bankSwift);
        setIban(response?.data?.bankDetails[0]?.iban);
        setBankAddress(response?.data?.bankDetails[0]?.bankAddress);
        setDetailId(response?.data?.bankDetails[0]?._id);
      }
      console.log(response?.data?.bankDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserBankDetails();
  }, []);

  const handleSave = async (e) => {
    try {
      e.preventDefault();
      const response = await verifyPayment(transactionId);
      console.log(response);
      toast.success("Successfully Verified");
    } catch (error) {
      toast.error("Verification failed");
      console.log(error);
    }
  };

  const handleCancel = () => {
    navigate(`/admin/affiliate_requests`);
  };

  return (
    <div
      style={{
        background: "black",
        position: "absolute",
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        margin: "auto",
      }}
    >
      <ToastContainer />
      <div className="mt-20">
        <div
          className="w-[80vw] edit-con bg-[#1C1C1E] rounded p-5"
          style={{ position: "absolute", left: "17%" }}
        >
          <form className="max-w-sm">
            <div className="mb-5 input-feild w-[72vw] flex">
              <label
                htmlFor="text"
                className="block input-feild-label mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
              >
                Acc Number
              </label>
              <input
                type="text"
                id="text"
                className="border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                required
                value={accNo}
              />
            </div>
            <div className="mb-5 input-feild w-[72vw] flex">
              <label
                htmlFor="text"
                className="block input-feild-label mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
              >
                Beneficiary Name
              </label>
              <input
                type="text"
                id="text"
                className="border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                required
                value={beneficiary}
              />
            </div>
            <div className="mb-5 input-feild w-[72vw] flex">
              <label
                htmlFor="text"
                className="block input-feild-label mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
              >
                Bank Swift
              </label>
              <input
                type="text"
                id="text"
                className="border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                required
                value={bankSwift}
              />
            </div>
            <div className="mb-5 input-feild w-[72vw] flex">
              <label
                htmlFor="email"
                className="block input-feild-label mb-2 text-sm font-medium w-[17vw] text-white"
              >
                IBAN
              </label>
              <input
                type="text"
                id="text"
                className="border-0 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                required
                value={iban}
              />
            </div>
            <div className="mb-5 input-feild w-[72vw] flex">
              <label
                htmlFor="message"
                className="block input-feild-label mb-2 text-sm font-medium w-[17vw] text-white"
              >
                Bank Address
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full border border-0 text-sm text-white dark:placeholder-white focus:ring-0 focus:border-0 rounded bg-[#48484A]"
                value={bankAddress}
              ></textarea>
            </div>
            <div className="mb-5 input-feild w-[72vw] flex">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-white w-[15.5vw]"
              ></label>
              <button
                type="submit"
                className="text-white bg-[#FF0015] text-sm font-bold rounded-md w-[70px] sm:w-auto px-3 py-1.5 text-center"
                onClick={(e) => {
                  handleSave(e);
                }}
              >
                Aprrove Payment
              </button>
              <button
                className="text-white bg-[#48484A] text-sm font-bold rounded-md w-[70px] sm:w-auto px-3 py-1.5 text-center ml-5"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUserInvoice;
