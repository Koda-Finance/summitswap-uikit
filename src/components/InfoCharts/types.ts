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
