import { random } from "lodash";
import React, { useMemo, useState } from "react";
import Box from "../Box/Box";
import BarChartComponent from "./BarChart";
import CandleChartComponent from "./CandleChart";
import LineChartComponent from "./LineChart";
import { ChartData } from "./types";
import { fromUnixTime } from "date-fns";
import { Text } from "../Text";
import getLocale from "../../util/getLocale";
import { priceData } from "./data";

export default {
  title: "Components/Info Charts",
  component: BarChartComponent,
  argTypes: {},
};

export const BarChart: React.FC = () => {
  const minValue = 10;
  const maxValue = 100;
  const endTimestamp = Math.floor(Date.now() / 1000);
  const startTimestamp = endTimestamp - 60 * 60 * 24 * 7;

  const locale = getLocale();
  const endTime = fromUnixTime(endTimestamp).toLocaleString(locale, {
    year: "numeric",
    day: "numeric",
    month: "short",
  });
  
  const chartData: ChartData[] = useMemo(() => {
    return [...Array(10)].map(() => {
      return {
        time: fromUnixTime(random(startTimestamp, endTimestamp, false)),
        value: random(minValue, maxValue, true),
      };
    })
  }, []);

  const [volumeHover, setVolumeHover] = useState<number | undefined>();
  const [volumeDateHover, setVolumeDateHover] = useState<string | undefined>();

  return (
    <Box height="250px">
      <Text>Date: {volumeDateHover ?? endTime}</Text>
      <BarChartComponent
        data={chartData}
        setHoverValue={setVolumeHover}
        setHoverDate={setVolumeDateHover}
      />
      {volumeHover && (
        <Text>Volume: {volumeHover}</Text>
      )}
    </Box>
  );
};

export const LineChart: React.FC = () => {
  const minValue = 10;
  const maxValue = 100;
  const endTimestamp = Math.floor(Date.now() / 1000);
  const startTimestamp = endTimestamp - 60 * 60 * 24 * 7;

  const locale = getLocale();
  const endTime = fromUnixTime(endTimestamp).toLocaleString(locale, {
    year: "numeric",
    day: "numeric",
    month: "short",
  });
  
  const chartData: ChartData[] = useMemo(() => {
    return [...Array(18)].map(() => {
      return {
        time: fromUnixTime(random(startTimestamp, endTimestamp, false)),
        value: random(minValue, maxValue, true),
      };
    })
  }, []);

  const [volumeHover, setVolumeHover] = useState<number | undefined>();
  const [volumeDateHover, setVolumeDateHover] = useState<string | undefined>();

  return (
    <Box height="250px">
      <Text>Date: {volumeDateHover ?? endTime}</Text>
      <LineChartComponent
        data={chartData}
        setHoverValue={setVolumeHover}
        setHoverDate={setVolumeDateHover}
      />
      {volumeHover && (
        <Text>Volume: {volumeHover}</Text>
      )}
    </Box>
  )
}

export const CandleChart: React.FC = () => {
  const endTime = fromUnixTime(priceData[priceData.length - 1].time).toLocaleString();

  const [value, setValue] = useState<number | undefined>();
  const [label, setLabel] = useState<string | undefined>();

  return (
    <Box height="250px">
      <Text>Label: {label ?? endTime}</Text>
      <CandleChartComponent
        data={priceData}
        setValue={setValue}
        setLabel={setLabel}
      />
      {value && (
        <Text>Value: {value}</Text>
      )}
    </Box>
  )
}