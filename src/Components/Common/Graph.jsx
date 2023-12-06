// import React from "react";
// import { ResponsiveBar } from "@nivo/bar";

// const MyResponsiveBar = ({
//   keys,
//   barData,
//   barYTickValues,
//   leftAxis,

//   barColors,
// }) => {
//   const tickTheme = {
//     textColor: "#fff",
//   };
//   const barLegend = keys.map((key, index) => {
//     return (
//       <div key={index} className="legend-item">
//         <div
//           className="bar-marker marker"
//           style={{
//             backgroundColor: barColors[index],
//           }}
//         />
//         <div className="legend-item-name">{key}</div>
//       </div>
//     );
//   });

//   return (
//     // <ResponsiveBar
//     //   theme={tickTheme}
//     //   data={barData}
//     //   keys={[
//     //     "Basic Service",
//     //     "Premium Service",
//     //     "Platinum Service",
//     //     "Free Service - No Card required ",
//     //   ]}
//     //   margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
//     //   padding={0.7}
//     //   innerPadding={1}
//     //   groupMode="grouped"
//     //   // minValue={7500}
//     //   // maxValue={212}
//     //   valueScale={{ type: "linear" }}
//     //   indexScale={{ type: "band", round: true }}
//     //   colors={["#FF8ACC", "#5B69BC", "#35B8E0", "#10C469"]}
//     //   defs={[
//     //     {
//     //       id: "lines",
//     //       type: "patternLines",
//     //       background: "inherit",
//     //       color: "#35B8E0",
//     //       rotation: -45,
//     //       lineWidth: 6,
//     //       spacing: 10,
//     //     },
//     //   ]}
//     //   fill={[
//     //     {
//     //       match: {
//     //         id: "Basic Service",
//     //       },
//     //     },
//     //     {
//     //       match: {
//     //         id: "sandwich",
//     //       },
//     //       id: "line",
//     //     },
//     //   ]}
//     //   borderColor={{
//     //     from: "color",
//     //     modifiers: [["darker", 1.6]],
//     //   }}
//     //   axisTop={null}
//     //   axisRight={null}
//     //   axisBottom={{
//     //     tickSize: 5,
//     //     tickPadding: 5,
//     //     tickRotation: 0,
//     //     // legend: "country",
//     //     legendPosition: "middle",
//     //     legendOffset: 32,
//     //     truncateTickAt: 0,
//     //   }}
//     //   axisLeft={{
//     //     tickSize: 5,
//     //     tickPadding: 15,
//     //     tickRotation: 0,

//     //     legendPosition: "middle",
//     //     legendOffset: -40,
//     //     truncateTickAt: 0,
//     //   }}
//     //   labelSkipWidth={36}
//     //   labelSkipHeight={36}
//     //   labelsTextColor={{ from: "color", modifiers: [] }}
//     //   legends={[
//     //     {
//     //       dataFrom: "keys",
//     //       anchor: "top-left",
//     //       direction: "row",
//     //       justify: false,
//     //       translateX: 350,
//     //       translateY: -33,
//     //       itemWidth: 85,
//     //       itemHeight: 33,
//     //       itemsSpacing: 48,
//     //       symbolSize: 20,
//     //       symbolShape: "circle",
//     //       itemDirection: "left-to-right",
//     //     },
//     //   ]}
//     //   role="application"
//     //   barAriaLabel={(e) =>
//     //     e.id + ": " + e.formattedValue + " in country: " + e.indexValue
//     //   }
//     // />

//     <div className="bar">
//       <ResponsiveBar
//         theme={tickTheme}
//         data={barData}
//         keys={keys}
//         indexBy="id"
//         margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
//         padding={0.3}
//         groupMode="grouped"
//         colors={barColors}
//         enableLabel={false}
//         borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
//         axisTop={null}
//         axisRight={null}
//         axisBottom={{
//           tickSize: 0,
//           tickPadding: 5,
//           tickRotation: 0,
//           legend: "",
//           legendPosition: "middle",
//           legendOffset: 32,
//         }}
//         axisLeft={{
//           tickSize: 0,
//           tickPadding: 3,
//           tickRotation: 0,
//           legend: leftAxis,
//           legendPosition: "middle",
//           legendOffset: -40,
//           tickValues: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200],
//         }}
//         yScale={{ type: "linear", min: barYTickValues[0], max: "auto" }}
//         labelSkipWidth={12}
//         labelSkipHeight={12}
//         labelTextColor={'{ from: "color", modifiers: [["darker", 1.6]] }'}
//         animate={true}
//         motionStiffness={90}
//         motionDamping={15}
//         enableGridY={false}
//         enableGridX={false}
//         isInteractive={true}
//       />
//     </div>
//   );
// };

// export default MyResponsiveBar;
