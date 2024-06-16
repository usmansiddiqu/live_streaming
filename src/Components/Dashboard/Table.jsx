import React, { useEffect, useState } from "react";
import viewUserRequests from "../../api/viewUserRequests";
function Table({ userData, variant }) {
  const [activeItem, setActiveItem] = useState(1);
  const [invoice, setInvoice] = useState([]);
  const getUserRequests = async () => {
    try {
      const response = await viewUserRequests();
      console.log(response);
      setInvoice(response.data.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserRequests();
  }, []);

  if (variant === "secondary")
    return (
      <div className="bg-[#0D0620] w-[100%]">
        <div className="bg-[#0D0620] py-1 text-white  w-[67%] affiliate-invoice-table  mx-auto">
          <p className="text-xl lg:text-2xl md:text-xl sm:text-lg pb-2">
            Invoices
          </p>
          <div className=" overflow-x-auto">
            <table
              class="w-full text-sm  text-left rtl:text-right text-white"
              style={{ overflow: "scroll" }}
            >
              <thead class=" w-[78vw] text-xs text-white">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 dark:text-white text-md"
                    style={{ border: "1px solid #313133" }}
                  >
                    No.
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 dark:text-white"
                    style={{ border: "1px solid #313133" }}
                  >
                    Amount
                  </th>

                  <th
                    scope="col"
                    class="px-6 py-3 dark:text-white"
                    style={{ border: "1px solid #313133" }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {invoice &&
                  invoice.map((item, index) => {
                    return (
                      <tr>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {index + 1}
                        </th>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          ${item?.totalAmount}
                        </th>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {item.status}
                        </th>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <nav
              className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
              aria-label="Table navigation"
            >
              <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                  <a
                    href="#"
                    className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-[#464648] bg-[#313133] hover:bg-[#FF0015] text-white ${
                      activeItem === 0 ? "bg-gray-700 bg-[#FF0015]" : ""
                    }`}
                    // onClick={() => handlePreviousClick()}
                  >
                    Previous
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className={`flex items-center justify-center px-3 h-8 leading-tight border border-[#464648] bg-[#313133] hover:bg-[#FF0015]  text-white ${
                      activeItem === 3 ? "bg-gray-700 bg-[#FF0015]" : ""
                    }`}
                    // onClick={() => handleNextClick()}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  else {
    return (
      <div className="bg-[#0D0620] py-1 text-white  w-[67%] history-div  mx-auto mb-10">
        <p className="text-xl lg:text-2xl md:text-xl sm:text-lg pb-2">
          User History
        </p>
        <div className="bg-[#130A2D] overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 lg:text-base md:text-sm sm:text-xs text-center text-xs text-white border-r-2 border-[#221846]">
                  Plan
                </th>
                <th className="px-4 py-2 lg:text-base md:text-sm sm:text-xs text-center text-xs text-white border-r-2 border-[#221846]">
                  Amount{" "}
                </th>
                <th className="px-4 py-2 lg:text-base md:text-sm sm:text-xs text-center text-xs text-white border-r-2 border-[#221846]">
                  Payment Gateway{" "}
                </th>
                <th className="px-4 py-2 lg:text-base md:text-sm sm:text-xs text-center text-xs text-white border-r-2 border-[#221846]">
                  Payment ID{" "}
                </th>
                <th className="px-4 py-2 lg:text-base md:text-sm sm:text-xs text-center text-xs text-white border-r-2 border-[#221846]">
                  Payment Date
                </th>
              </tr>
            </thead>
            <tbody>
              {userData?.map((data) => (
                <tr>
                  <td className="px-4 py-2 lg:text-base md:text-sm sm:text-xs text-center text-xs text-white border-2 border-[#221846]">
                    {data?.packageId.name}
                  </td>
                  <td className="px-4 py-2 lg:text-base md:text-sm sm:text-xs text-center text-xs text-white border-2 border-[#221846]">
                    $ {data?.packageId.amount}
                  </td>
                  <td className="px-4 py-2 lg:text-base md:text-sm sm:text-xs text-center text-xs text-white border-2 border-[#221846]">
                    PayCEC{" "}
                  </td>
                  <td className="px-4 py-2 lg:text-base md:text-sm sm:text-xs text-center text-xs text-white border-2 border-[#221846]">
                    {data?.token}{" "}
                  </td>
                  <td className="px-4 py-2 lg:text-base md:text-sm sm:text-xs text-center text-xs text-white border-2 border-[#221846]">
                    {data?.createdAt.split("T")[0]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
