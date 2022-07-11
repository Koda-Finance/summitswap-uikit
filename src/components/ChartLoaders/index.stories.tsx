import React from "react";
import Box from "../Box/Box";
import BarChartLoaderSVGComponent from "./BarChartLoaderSVG";
import CandleChartLoaderSVGComponent from "./CandleChartLoaderSVG";
import LineChartLoaderSVGComponent from "./LineChartLoaderSVG";

export default {
  title: "Components/Chart Loaders",
  component: BarChartLoaderSVGComponent,
  argTypes: {},
};

export const BarChartLoader: React.FC = () => {
  return (
    <>
      <Box mb="32px">
        <BarChartLoaderSVGComponent width={600} color="white" />
      </Box>
    </>
  );
};

export const CandleChartLoaderSVG: React.FC = () => {
  return (
    <>
      <Box mb="32px">
        <CandleChartLoaderSVGComponent width={600} />
      </Box>
    </>
  );
};

export const LineChartLoaderSVG: React.FC = () => {
  return (
    <>
      <Box mb="32px">
        <LineChartLoaderSVGComponent width={600} />
      </Box>
    </>
  );
};