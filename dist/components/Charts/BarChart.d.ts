import React, { Dispatch, SetStateAction } from "react";
export declare type LineChartProps = {
    data: any[];
    height?: string;
    chartHeight?: string;
    setHoverValue: Dispatch<SetStateAction<number | undefined>>;
    setHoverDate: Dispatch<SetStateAction<string | undefined>>;
} & React.HTMLAttributes<HTMLDivElement>;
declare const Chart: ({ data, setHoverValue, setHoverDate }: LineChartProps) => JSX.Element;
export default Chart;
