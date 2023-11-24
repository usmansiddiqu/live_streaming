import React from "react";

function TeamScore() {
  return (
    <div className="flex justify-center">
      <div className="w-[80rem] ">
        {/* <div className="h-12 bg-gradient-to-r from-[#00C3FF] to-[#0075FF] w-32 rounded-t-lg ms-4 flex justify-center items-center text-white font-semibold">
          Description
        </div> */}
        <div className="bg-[#190D39] rounded-lg mt-10">
          <div className=" p-10 overflow-x-auto">
            <table className="bg-[#212529] min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 lg:text-base md:text-sm sm:text-xs text-xs text-white border-2 border-[#373B3E]">
                    Name
                  </th>
                  <th className="px-4 py-2 lg:text-base md:text-sm sm:text-xs text-xs text-white border-2 border-[#373B3E]">
                    Name
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="px-4 py-2 text-center lg:text-base md:text-sm sm:text-xs text-xs text-white border-2 border-[#373B3E]">
                    10
                  </td>
                  <td className="px-4 py-2 text-center  lg:text-base md:text-sm sm:text-xs text-xs text-white border-2 border-[#373B3E]">
                    10
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamScore;
