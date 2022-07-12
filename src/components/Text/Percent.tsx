import React, { useMemo } from "react";
import Text from "./Text";
import { PercentProps } from "./types";

const Percent: React.FC<PercentProps> = ({ value, ...rest }) => {
  if (!value || Number.isNaN(value)) {
    return <Text {...rest}>-</Text>;
  }

  const isNegative = useMemo(() => value < 0, [value]);

  return (
    <Text {...rest} color={isNegative ? "failure" : "success"}>
      {isNegative ? "↓" : "↑"}
      {Math.abs(value).toFixed(2)}%
    </Text>
  );
};

export default Percent;
