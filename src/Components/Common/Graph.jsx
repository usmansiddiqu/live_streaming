import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const MyResponsiveBar = () => {
  const barData = [
    {
      id: "june",
      "Basic Service": 7500,
      "Premium Service": 7500,
      "Platinum Service": 7500,
      "Free Service - No Card required ": 7500,
    },
    {
      id: "july",
      "Basic Service": 7500,
      "Premium Service": 7500,
      "Platinum Service": 7500,
      "Free Service - No Card required ": 7500,
    },
    {
      id: "aug",
      "Basic Service": 7500,
      "Premium Service": 7500,
      "Platinum Service": 7500,
      "Free Service - No Card required ": 77500,
    },
    {
      id: "sept",
      "Basic Service": 7500,
      "Premium Service": 7500,
      "Platinum Service": 7500,
      "Free Service - No Card required ": 7500,
    },
    {
      id: "oct",
      "Basic Service": 7500,
      "Premium Service": 7500,
      "Platinum Service": 30000,
      "Free Service - No Card required ": 67500,
    },
  ];

  const tickTheme = {
    textColor: "#eee",
  };

  return (
    <ResponsiveBar
      theme={tickTheme}
      data={barData}
      keys={[
        "Basic Service",
        "Premium Service",
        "Platinum Service",
        "Free Service - No Card required ",
      ]}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.7}
      innerPadding={1}
      groupMode="grouped"
      // minValue={7500}
      // maxValue={212}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={["#FF8ACC", "#5B69BC", "#35B8E0", "#10C469"]}
      defs={[
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "Basic Service",
          },
        },
        {
          match: {
            id: "sandwich",
          },
          id: "line",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: "country",
        legendPosition: "middle",
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 15,
        tickRotation: 0,

        legendPosition: "middle",
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      labelSkipWidth={36}
      labelSkipHeight={36}
      labelTextColor={{
        from: "white",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "top-left",
          direction: "row",
          justify: false,
          translateX: 350,
          translateY: -33,
          itemWidth: 85,
          itemHeight: 33,
          itemsSpacing: 48,
          symbolSize: 20,
          itemDirection: "left-to-right",
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
};

export default MyResponsiveBar;
