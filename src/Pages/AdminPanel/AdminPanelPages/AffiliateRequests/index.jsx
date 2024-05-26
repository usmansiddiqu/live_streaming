import React, { useEffect, useState } from "react";
import Cross from "../../../../Assets/Icons/close.png";
import Edit from "../../../../Assets/Icons/editing.png";
import { useNavigate } from "react-router-dom";
import deleteBadWord from "../../../../api/deleteBadWord";
import getBadWord from "../../../../api/getBadWord";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";


function AdminAffiliateRequests() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pending');
      const handleButtonClick = () => {
    navigate('/admin/edit_user_invoice');
  };

   const renderTable = () => {
    if (activeTab === 'pending') {
      return (
       <table class="w-full mt-5 text-sm text-left rtl:text-right text-white">
                <thead class=" w-[78vw] text-xs text-white">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-white text-md"
                      style={{ border: "1px solid #313133" }}
                    >
                      Request Status
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Amount
                    </th>
                         <th
                      scope="col"
                      class="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
              
                      <tr>
                        <td
                          class="px-6 py-4 text-white "
                          style={{ border: "1px solid #313133" }}
                        >
                          <div className="flex">Pending</div>
                        </td>
                        <td
                          class="px-6 py-4 text-white "
                          style={{ border: "1px solid #313133" }}
                        >
                          <div className="flex">
                            $300

                          </div>
                        </td>
                          <td
                          class="px-6 py-4 text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          <div className="flex">
                            <button
                              className=" relative w-[36px] h-[33px] rounded z-10 bg-[#10C469] hover:before:absolute hover:before:bg-black hover:before:content-['Edit'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full  hover:before:mt-[-18px]"
                          onClick={handleButtonClick}
                            >
                              <img
                                src={Edit}
                                alt=""
                                className="w-[16px] h-[16px] m-auto"
                              />
                            </button>
                        
                          </div>
                        </td>
                      </tr>
                </tbody>
              </table>
      );
    } else if (activeTab === 'successful') {
      return (
         <table class="w-full mt-5 text-sm text-left rtl:text-right text-white">
                <thead class=" w-[78vw] text-xs text-white">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-white text-md"
                      style={{ border: "1px solid #313133" }}
                    >
                      Request Status
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Amount
                    </th>
                         <th
                      scope="col"
                      class="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
              
                      <tr>
                        <td
                          class="px-6 py-4 text-white "
                          style={{ border: "1px solid #313133" }}
                        >
                          <div className="flex">Successful</div>
                        </td>
                        <td
                          class="px-6 py-4 text-white "
                          style={{ border: "1px solid #313133" }}
                        >
                          <div className="flex">
                            $300

                          </div>
                        </td>
                          <td
                          class="px-6 py-4 text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          <div className="flex">
                            <button
                          onClick={handleButtonClick}

                              className=" relative w-[36px] h-[33px] rounded z-10 bg-[#10C469] hover:before:absolute hover:before:bg-black hover:before:content-['Edit'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full  hover:before:mt-[-18px]"
                            >
                              <img
                                src={Edit}
                                alt=""
                                className="w-[16px] h-[16px] m-auto"
                              />
                            </button>
                        
                          </div>
                        </td>
                      </tr>
                </tbody>
              </table>
      );
    }
  };




  return (

    <div
      style={{
        background: "black",
        position: "relative",
        // left: "14%",
        width: "100%",
        height: "100%",
        overflowY: "scroll",
      }}
    >

      <div className=" ml-4 mt-20 ">
        <div>
          <div
            className="w-[80vw] box edit-con bg-[#1C1C1E] mx-auto rounded p-5"
            style={{ position: "absolute", left: "16.5%" }}
          >
            <div class="relative overflow-x-auto shadow-md ">
                    <div>
      <div className="flex space-x-4 mb-4">
        <button
        
          className={` ${activeTab === 'pending' ? 'text-red-500 border-b-2 border-red-500' : 'text-white'}`}
          onClick={() => setActiveTab('pending')}
        >
          Pending
        </button>
        <button
          className={` ${activeTab === 'successful' ? 'text-red-500 border-b-2 border-red-500' : 'text-white'}`}
          onClick={() => setActiveTab('successful')}
        >
          Successful
        </button>
      </div>
      <div className="tab-content">
        {renderTable()}
      </div>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAffiliateRequests;
