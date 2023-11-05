import React from "react";

function Table() {
  return (
    <div className="px-40 bg-[#0D0620] py-1 text-white ">
      <p className="text-2xl pb-2">User History</p>
      <div class="bg-[#130A2D] ">
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th class="px-4 py-2 text-white border-r-2 border-[#221846]">
                Plan
              </th>
              <th class="px-4 py-2 text-white border-r-2 border-[#221846]">
                Amount{" "}
              </th>
              <th class="px-4 py-2 text-white border-r-2 border-[#221846]">
                Payment Gateway{" "}
              </th>
              <th class="px-4 py-2 text-white border-r-2 border-[#221846]">
                Payment ID{" "}
              </th>
              <th class="px-4 py-2 text-white border-r-2 border-[#221846]">
                Payment Date
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
