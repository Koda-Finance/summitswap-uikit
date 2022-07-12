import { Dispatch, SetStateAction } from "react";
export declare type HoverUpdaterProps = {
    setHoverValue: Dispatch<SetStateAction<number | undefined>>;
    setHoverDate: Dispatch<SetStateAction<string | undefined>>;
    locale: string;
    payload: any;
};
export declare type ChartData = {
    time: Date;
    value: number;
};
export declare type PriceChartEntry = {
    time: number;
    open: number;
    close: number;
    high: number;
    low: number;
};
export declare type ChartEntry = {
    date: number;
    volumeUSD: number;
    liquidityUSD: number;
};
export declare type TokenData = {
    exists: boolean;
    name: string;
    symbol: string;
    address: string;
    volumeUSD: number;
    volumeUSDChange: number;
    volumeUSDWeek: number;
    txCount: number;
    liquidityToken: number;
    liquidityUSD: number;
    liquidityUSDChange: number;
    priceUSD: number;
    priceUSDChange: number;
    priceUSDChangeWeek: number;
};
export declare enum ChartView {
    LIQUIDITY = 0,
    VOLUME = 1,
    PRICE = 2
}
