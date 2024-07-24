import React, { useEffect, useState } from "react";
import viewUserRequests from "../../api/viewUserRequests";
import ReactApexChart from "react-apexcharts";
import getGraphStats from "../../api/getGraphStats";
function Table({ userData, variant }) {
  const [activeItem, setActiveItem] = useState(1);
  const [dates, setDates] = useState([]);
  console.log(dates);
  const [userSigned, setUserSigned] = useState([]);
  const [revenueEarned, setRevenueEarned] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState();
  // const [chartData, setChartData] = useState({
  //   series: [
  //     {
  //       name: "revenue",
  //       // data: revenueEarned,
  //       data: [1, 4, 10, 15, 20],
  //     },
  //     {
  //       name: "Users",
  //       // data: [userSigned],
  //       data: [1, 24, 310, 15, 20],
  //     },
  //   ],
  //   options: {
  //     legend: {
  //       show: false,
  //     },
  //     chart: {
  //       type: "area",
  //       height: 220,
  //       toolbar: {
  //         show: false,
  //       },
  //     },
  //     plotOptions: {
  //       area: {
  //         horizontal: true,
  //         fillTo: "origin",
  //         opacity: 0.5,
  //         dataLabels: {
  //           enabled: false,
  //         },
  //       },
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     grid: {
  //       show: true,
  //       borderColor: "#808080",
  //       strokeDashArray: 2,
  //       xaxis: {
  //         lines: {
  //           show: false,
  //         },
  //       },
  //       padding: {
  //         top: 5,
  //         right: 20,
  //       },
  //     },
  //     stroke: {
  //       colors: ["#BA5EEF"],
  //       lineCap: "round",
  //       curve: "smooth",
  //     },

  //     markers: {
  //       size: 0,
  //     },
  //     xaxis: {
  //       categories: [
  //         "2024-06-30",
  //         "2024-06-29",
  //         "2024-06-28",
  //         "2024-06-27",
  //         "2024-06-26",
  //         "2024-06-25",
  //         "2024-06-24",
  //         "2024-06-23",
  //         "2024-06-22",
  //         "2024-06-21",
  //         "2024-06-20",
  //         "2024-06-19",
  //         "2024-06-18",
  //         "2024-06-17",
  //         "2024-06-16",
  //         "2024-06-15",
  //         "2024-06-14",
  //         "2024-06-13",
  //         "2024-06-12",
  //         "2024-06-11",
  //         "2024-06-10",
  //         "2024-06-09",
  //         "2024-06-08",
  //         "2024-06-07",
  //         "2024-06-06",
  //         "2024-06-05",
  //         "2024-06-04",
  //         "2024-06-03",
  //         "2024-06-02",
  //         "2024-06-01",
  //       ],
  //       labels: {
  //         style: {
  //           colors: "#fcfafa",
  //           fontSize: "15px",
  //           fontFamily: "inherit",
  //           fontWeight: 200,
  //         },
  //       },
  //     },
  //     yaxis: {
  //       labels: {
  //         style: {
  //           colors: "#fcfafa",
  //           fontSize: "15px",
  //           fontFamily: "inherit",
  //           fontWeight: 200,
  //         },
  //       },
  //     },
  //     fill: {
  //       type: "gradient",
  //       gradient: {
  //         type: "vertical",
  //         shadeIntensity: 1,
  //         stops: [0, 100],
  //         colorStops: [
  //           {
  //             offset: 0,
  //             color: "#BA5EEF",
  //             opacity: 0.5,
  //           },
  //           {
  //             offset: 100,
  //             color: "#BA5EEF",
  //             opacity: 0.4,
  //           },
  //         ],
  //       },
  //     },
  //     tooltip: {
  //       y: {
  //         formatter: function (val) {
  //           return val;
  //         },
  //       },
  //     },
  //   },
  // });
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
  const getStats = async () => {
    try {
      const response = await getGraphStats();
      let array = response.data.data;
      console.log(array);
      if (array.length) {
        const newDates = [];
        const newUserSigned = [];
        const newRevenueEarned = [];

        for (let i = 0; i < array.length; i++) {
          newDates.push(array[i].date);
          newUserSigned.push(array[i].userSignedUp);
          newRevenueEarned.push(array[i].revenueEarned);
        }
        console.log(newDates);
        console.log(newUserSigned);
        console.log(newRevenueEarned);

        setDates(newDates.reverse());
        setUserSigned(newUserSigned);
        setRevenueEarned(newRevenueEarned);
        setChartData({
          series: [
            {
              name: "revenue",
              data: revenueEarned, // Replace with revenueEarned when ready
            },
            {
              name: "Users",
              data: userSigned, // Replace with userSigned when ready
            },
          ],
          options: {
            legend: {
              show: false,
            },
            chart: {
              type: "area",
              height: 220,
              toolbar: {
                show: false,
              },
            },
            plotOptions: {
              area: {
                horizontal: true,
                fillTo: "origin",
                opacity: 0.5,
                dataLabels: {
                  enabled: false,
                },
              },
            },
            dataLabels: {
              enabled: false,
            },
            grid: {
              show: true,
              borderColor: "#808080",
              strokeDashArray: 2,
              xaxis: {
                lines: {
                  show: false,
                },
              },
              padding: {
                top: 5,
                right: 20,
              },
            },
            stroke: {
              colors: ["#FF7F00", "#007CFF"],
              lineCap: "round",
              curve: "straight",
            },
            markers: {
              size: 0,
            },
            xaxis: {
              categories: newDates.reverse(),

              // categories: [
              //   "2024-06-30",
              //   "2024-06-29",
              //   "2024-06-28",
              //   "2024-06-27",
              //   "2024-06-26",
              //   "2024-06-25",
              //   "2024-06-24",
              //   "2024-06-23",
              //   "2024-06-22",
              //   "2024-06-21",
              //   "2024-06-20",
              //   "2024-06-19",
              //   "2024-06-18",
              //   "2024-06-17",
              //   "2024-06-16",
              //   "2024-06-15",
              //   "2024-06-14",
              //   "2024-06-13",
              //   "2024-06-12",
              //   "2024-06-11",
              //   "2024-06-10",
              //   "2024-06-09",
              //   "2024-06-08",
              //   "2024-06-07",
              //   "2024-06-06",
              //   "2024-06-05",
              //   "2024-06-04",
              //   "2024-06-03",
              //   "2024-06-02",
              //   "2024-06-01",
              // ],
              labels: {
                style: {
                  colors: "#fcfafa",
                  fontSize: "15px",
                  fontFamily: "inherit",
                  fontWeight: 200,
                },
                rotate: -45,
                maxHeight: 100,
              },
              tickAmount: 10,
            },
            yaxis: {
              labels: {
                style: {
                  colors: "#fcfafa",
                  fontSize: "15px",
                  fontFamily: "inherit",
                  fontWeight: 200,
                },
              },
            },
            fill: {
              type: "gradient",
              gradient: {
                type: "vertical",
                shadeIntensity: 1,
                stops: [0, 100],
                colorStops: [
                  {
                    offset: 0,
                    color: "#007CFF",
                    opacity: 0.5,
                  },
                  {
                    offset: 100,
                    color: "#FFFFFF",
                    opacity: 0.4,
                  },
                ],
              },
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return val;
                },
              },
            },
          },
        });
        setIsLoading(false);
      }

      console.log(dates);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStats();
    getUserRequests();
  }, []);
  const [activeTab, setActiveTab] = useState("invoices");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  if (variant === "secondary")
    return (
      <div className="bg-[#0D0620] w-[100%]">
        <div className="bg-[#0D0620] py-1 text-white w-[67%] affiliate-invoice-table mx-auto">
          <div className="tabs flex mb-4">
            {/* <button
              onClick={() => handleTabChange("invoices")}
              className={`  ${
                activeTab === "invoices" ? "text-red-500" : "text-white"
              }`}
            >
              Invoices
            </button> */}

            {isLoading ? (
              <></>
            ) : (
              <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="area"
                height={420}
                width={1025}
              />
            )}
            {/* <button 
            onClick={() => handleTabChange('graph')} 
            className={`ml-4 ${activeTab === 'graph' ? 'text-red-500' : 'text-white'}`}
          >
            Graph
          </button> */}
          </div>
          {activeTab === "invoices" ? (
            <div className="overflow-x-auto">
              <table
                className="w-full text-sm text-left rtl:text-right text-white"
                style={{ overflow: "scroll" }}
              >
                <thead className="w-[78vw] text-xs text-white">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 dark:text-white text-md"
                      style={{ border: "1px solid #313133" }}
                    >
                      No.
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invoice &&
                    invoice.map((item, index) => (
                      <tr key={index}>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium whitespace-nowrap text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {index + 1}
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium whitespace-nowrap text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          ${item?.totalAmount}
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium whitespace-nowrap text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {item.status}
                        </th>
                      </tr>
                    ))}
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
                      className="flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-[#464648] bg-[#313133] hover:bg-[#FF0015] text-white"
                    >
                      Previous
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight border border-[#464648] bg-[#313133] hover:bg-[#FF0015] text-white"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          ) : (
            <div className="text-white">GRAPH</div>
          )}
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
