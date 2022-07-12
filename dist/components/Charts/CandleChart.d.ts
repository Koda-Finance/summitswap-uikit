import React, { Dispatch, SetStateAction } from "react";
export declare type LineChartProps = {
    data: any[];
    setValue?: Dispatch<SetStateAction<number | undefined>>;
    setLabel?: Dispatch<SetStateAction<string | undefined>>;
} & React.HTMLAttributes<HTMLDivElement>;
declare const CandleChart: ({ data, setValue, setLabel, ...rest }: LineChartProps) => JSX.Element;
export default CandleChart;
