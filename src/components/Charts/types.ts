import { Dispatch, SetStateAction } from "react";

export type HoverUpdaterProps = {
  setHoverValue: Dispatch<SetStateAction<number | undefined>>;
  setHoverDate: Dispatch<SetStateAction<string | undefined>>;
  locale: string;
  payload: any;
};

export type ChartData = {
  time: Date;
  value: number;
};

export type PriceChartEntry = {
  time: number;
  open: number;
  close: number;
  high: number;
  low: number;
};

export type ChartEntry = {
  date: number;
  volumeUSD: number;
  liquidityUSD: number;
};

export type TokenData = {
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

export enum ChartView {
  LIQUIDITY,
  VOLUME,
  PRICE,
}
