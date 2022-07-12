import React, { Dispatch, SetStateAction } from "react";
export declare type LineChartProps = {
    data: any[];
    setHoverValue: Dispatch<SetStateAction<number | undefined>>;
    setHoverDate: Dispatch<SetStateAction<string | undefined>>;
} & React.HTMLAttributes<HTMLDivElement>;
/**
 * Note: remember that it needs to be mounted inside the container with fixed height
 */
declare const LineChart: ({ data, setHoverValue, setHoverDate }: LineChartProps) => JSX.Element;
export default LineChart;
