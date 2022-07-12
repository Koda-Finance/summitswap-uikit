import React from "react";
import { ChartEntry, PriceChartEntry, TokenData } from "./types";
interface ChartCardProps {
    variant: "pool" | "token";
    chartData: ChartEntry[];
    tokenData?: TokenData;
    tokenPriceData?: PriceChartEntry[];
}
declare const ChartCard: React.FC<ChartCardProps>;
export default ChartCard;
