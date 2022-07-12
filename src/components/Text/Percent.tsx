import React from "react";
import Text from "./Text";
import { PercentProps } from "./types";

const Percent: React.FC<PercentProps> = ({ value, ...rest }) => {
  if (!value || Number.isNaN(value)) {
    return <Text {...rest}>-</Text>;
  }

  const isNegative = value < 0;

  return (
    <Text {...rest} color={isNegative ? "failure" : "success"}>
      {isNegative ? "↓" : "↑"}
      {Math.abs(value).toFixed(2)}%
    </Text>
  );
};

export default Percent;
