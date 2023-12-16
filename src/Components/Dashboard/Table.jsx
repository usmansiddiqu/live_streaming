import React from "react";

function Table({ userData }) {
  return (
    <div className="xl:px-40 lg:px-36 md:px-28 sm:px-16 px-12 bg-[#0D0620] py-1 text-white  w-[83%]  mx-auto mb-10">
      <p className="text-xl lg:text-2xl md:text-xl sm:text-lg pb-2">
        User History
      </p>
      <div className="bg-[#130A2D] overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 lg:text-base md:text-sm sm:text-xs text-xs text-white border-r-2 border-[#221846]">
                Plan
              </th>
              <th className="px-4 py-2 lg:text-base md:text-sm sm:text-xs text-xs text-white border-r-2 border-[#221846]">
                Amount{" "}
              </th>
              <th className="px-4 py-2 lg:text-base md:text-sm sm:text-xs text-xs text-white border-r-2 border-[#221846]">
                Payment Gateway{" "}
              </th>
              <th className="px-4 py-2 lg:text-base md:text-sm sm:text-xs text-xs text-white border-r-2 border-[#221846]">
                Payment ID{" "}
              </th>
              <th className="px-4 py-2 lg:text-base md:text-sm sm:text-xs text-xs text-white border-r-2 border-[#221846]">
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
    // <div className="xl:px-40 bg-[#0D0620] py-1 text-white ">
    //   <p className="text-2xl pb-2">User History</p>
    //   <div class="bg-[#130A2D] ">
    //     <table class="table-auto w-full">
    //       <thead>
    //         <tr>
    //           <th class="px-4 py-2 text-white border-r-2 border-[#221846]">
    //             Plan
    //           </th>
    //           <th class="px-4 py-2 text-white border-r-2 border-[#221846]">
    //             Amount{" "}
    //           </th>
    //           <th class="px-4 py-2 text-white border-r-2 border-[#221846]">
    //             Payment Gateway{" "}
    //           </th>
    //           <th class="px-4 py-2 text-white border-r-2 border-[#221846]">
    //             Payment ID{" "}
    //           </th>
    //           <th class="px-4 py-2 text-white border-r-2 border-[#221846]">
    //             Payment Date
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody></tbody>
    //     </table>
    //   </div>
    // </div>
  );
}

export default Table;
