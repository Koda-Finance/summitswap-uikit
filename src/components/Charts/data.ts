import { ChartEntry, PriceChartEntry, TokenData } from "./types";

export const priceData: PriceChartEntry[] = [
  {
    time: Math.floor(+new Date("2018-10-19") / 1000),
    open: 180.34,
    high: 180.99,
    low: 178.57,
    close: 179.85,
  },
  {
    time: Math.floor(+new Date("2018-10-22") / 1000),
    open: 180.82,
    high: 181.4,
    low: 177.56,
    close: 178.75,
  },
  {
    time: Math.floor(+new Date("2018-10-23") / 1000),
    open: 175.77,
    high: 179.49,
    low: 175.44,
    close: 178.53,
  },
  {
    time: Math.floor(+new Date("2018-10-24") / 1000),
    open: 178.58,
    high: 182.37,
    low: 176.31,
    close: 176.97,
  },
  {
    time: Math.floor(+new Date("2018-10-25") / 1000),
    open: 177.52,
    high: 180.5,
    low: 176.83,
    close: 179.07,
  },
  {
    time: Math.floor(+new Date("2018-10-26") / 1000),
    open: 176.88,
    high: 177.34,
    low: 170.91,
    close: 172.23,
  },
  {
    time: Math.floor(+new Date("2018-10-29") / 1000),
    open: 173.74,
    high: 175.99,
    low: 170.95,
    close: 173.2,
  },
  {
    time: Math.floor(+new Date("2018-10-30") / 1000),
    open: 173.16,
    high: 176.43,
    low: 172.64,
    close: 176.24,
  },
  {
    time: Math.floor(+new Date("2018-10-31") / 1000),
    open: 177.98,
    high: 178.85,
    low: 175.59,
    close: 175.88,
  },
  {
    time: Math.floor(+new Date("2018-11-01") / 1000),
    open: 176.84,
    high: 180.86,
    low: 175.9,
    close: 180.46,
  },
  {
    time: Math.floor(+new Date("2018-11-02") / 1000),
    open: 182.47,
    high: 183.01,
    low: 177.39,
    close: 179.93,
  },
  {
    time: Math.floor(+new Date("2018-11-05") / 1000),
    open: 181.02,
    high: 182.41,
    low: 179.3,
    close: 182.19,
  },
  {
    time: Math.floor(+new Date("2018-11-06") / 1000),
    open: 181.93,
    high: 182.65,
    low: 180.05,
    close: 182.01,
  },
  {
    time: Math.floor(+new Date("2018-11-07") / 1000),
    open: 183.79,
    high: 187.68,
    low: 182.06,
    close: 187.23,
  },
  {
    time: Math.floor(+new Date("2018-11-08") / 1000),
    open: 187.13,
    high: 188.69,
    low: 185.72,
    close: 188.0,
  },
  {
    time: Math.floor(+new Date("2018-11-09") / 1000),
    open: 188.32,
    high: 188.48,
    low: 184.96,
    close: 185.99,
  },
  {
    time: Math.floor(+new Date("2018-11-12") / 1000),
    open: 185.23,
    high: 186.95,
    low: 179.02,
    close: 179.43,
  },
  {
    time: Math.floor(+new Date("2018-11-13") / 1000),
    open: 177.3,
    high: 181.62,
    low: 172.85,
    close: 179.0,
  },
  {
    time: Math.floor(+new Date("2018-11-14") / 1000),
    open: 182.61,
    high: 182.9,
    low: 179.15,
    close: 179.9,
  },
  {
    time: Math.floor(+new Date("2018-11-15") / 1000),
    open: 179.01,
    high: 179.67,
    low: 173.61,
    close: 177.36,
  },
  {
    time: Math.floor(+new Date("2018-11-16") / 1000),
    open: 173.99,
    high: 177.6,
    low: 173.51,
    close: 177.02,
  },
  {
    time: Math.floor(+new Date("2018-11-19") / 1000),
    open: 176.71,
    high: 178.88,
    low: 172.3,
    close: 173.59,
  },
  {
    time: Math.floor(+new Date("2018-11-20") / 1000),
    open: 169.25,
    high: 172.0,
    low: 167.0,
    close: 169.05,
  },
  {
    time: Math.floor(+new Date("2018-11-21") / 1000),
    open: 170.0,
    high: 170.93,
    low: 169.15,
    close: 169.3,
  },
  {
    time: Math.floor(+new Date("2018-11-23") / 1000),
    open: 169.39,
    high: 170.33,
    low: 168.47,
    close: 168.85,
  },
  {
    time: Math.floor(+new Date("2018-11-26") / 1000),
    open: 170.2,
    high: 172.39,
    low: 168.87,
    close: 169.82,
  },
  {
    time: Math.floor(+new Date("2018-11-27") / 1000),
    open: 169.11,
    high: 173.38,
    low: 168.82,
    close: 173.22,
  },
  {
    time: Math.floor(+new Date("2018-11-28") / 1000),
    open: 172.91,
    high: 177.65,
    low: 170.62,
    close: 177.43,
  },
  {
    time: Math.floor(+new Date("2018-11-29") / 1000),
    open: 176.8,
    high: 177.27,
    low: 174.92,
    close: 175.66,
  },
  {
    time: Math.floor(+new Date("2018-11-30") / 1000),
    open: 175.75,
    high: 180.37,
    low: 175.11,
    close: 180.32,
  },
  {
    time: Math.floor(+new Date("2018-12-03") / 1000),
    open: 183.29,
    high: 183.5,
    low: 179.35,
    close: 181.74,
  },
  {
    time: Math.floor(+new Date("2018-12-04") / 1000),
    open: 181.06,
    high: 182.23,
    low: 174.55,
    close: 175.3,
  },
  {
    time: Math.floor(+new Date("2018-12-06") / 1000),
    open: 173.5,
    high: 176.04,
    low: 170.46,
    close: 175.96,
  },
  {
    time: Math.floor(+new Date("2018-12-07") / 1000),
    open: 175.35,
    high: 178.36,
    low: 172.24,
    close: 172.79,
  },
  {
    time: Math.floor(+new Date("2018-12-10") / 1000),
    open: 173.39,
    high: 173.99,
    low: 167.73,
    close: 171.69,
  },
  {
    time: Math.floor(+new Date("2018-12-11") / 1000),
    open: 174.3,
    high: 175.6,
    low: 171.24,
    close: 172.21,
  },
  {
    time: Math.floor(+new Date("2018-12-12") / 1000),
    open: 173.75,
    high: 176.87,
    low: 172.81,
    close: 174.21,
  },
  {
    time: Math.floor(+new Date("2018-12-13") / 1000),
    open: 174.31,
    high: 174.91,
    low: 172.07,
    close: 173.87,
  },
  {
    time: Math.floor(+new Date("2018-12-14") / 1000),
    open: 172.98,
    high: 175.14,
    low: 171.95,
    close: 172.29,
  },
  {
    time: Math.floor(+new Date("2018-12-17") / 1000),
    open: 171.51,
    high: 171.99,
    low: 166.93,
    close: 167.97,
  },
  {
    time: Math.floor(+new Date("2018-12-18") / 1000),
    open: 168.9,
    high: 171.95,
    low: 168.5,
    close: 170.04,
  },
  {
    time: Math.floor(+new Date("2018-12-19") / 1000),
    open: 170.92,
    high: 174.95,
    low: 166.77,
    close: 167.56,
  },
  {
    time: Math.floor(+new Date("2018-12-20") / 1000),
    open: 166.28,
    high: 167.31,
    low: 162.23,
    close: 164.16,
  },
  {
    time: Math.floor(+new Date("2018-12-21") / 1000),
    open: 162.81,
    high: 167.96,
    low: 160.17,
    close: 160.48,
  },
  {
    time: Math.floor(+new Date("2018-12-24") / 1000),
    open: 160.16,
    high: 161.4,
    low: 158.09,
    close: 158.14,
  },
  {
    time: Math.floor(+new Date("2018-12-26") / 1000),
    open: 159.46,
    high: 168.28,
    low: 159.44,
    close: 168.28,
  },
  {
    time: Math.floor(+new Date("2018-12-27") / 1000),
    open: 166.44,
    high: 170.46,
    low: 163.36,
    close: 170.32,
  },
  {
    time: Math.floor(+new Date("2018-12-28") / 1000),
    open: 171.22,
    high: 173.12,
    low: 168.6,
    close: 170.22,
  },
  {
    time: Math.floor(+new Date("2018-12-31") / 1000),
    open: 171.47,
    high: 173.24,
    low: 170.65,
    close: 171.82,
  },
  {
    time: Math.floor(+new Date("2019-01-02") / 1000),
    open: 169.71,
    high: 173.18,
    low: 169.05,
    close: 172.41,
  },
  {
    time: Math.floor(+new Date("2019-01-03") / 1000),
    open: 171.84,
    high: 171.84,
    low: 168.21,
    close: 168.61,
  },
  {
    time: Math.floor(+new Date("2019-01-04") / 1000),
    open: 170.18,
    high: 174.74,
    low: 169.52,
    close: 173.62,
  },
  {
    time: Math.floor(+new Date("2019-01-07") / 1000),
    open: 173.83,
    high: 178.18,
    low: 173.83,
    close: 177.04,
  },
  {
    time: Math.floor(+new Date("2019-01-08") / 1000),
    open: 178.57,
    high: 179.59,
    low: 175.61,
    close: 177.89,
  },
  {
    time: Math.floor(+new Date("2019-01-09") / 1000),
    open: 177.87,
    high: 181.27,
    low: 177.1,
    close: 179.73,
  },
  {
    time: Math.floor(+new Date("2019-01-10") / 1000),
    open: 178.03,
    high: 179.24,
    low: 176.34,
    close: 179.06,
  },
  {
    time: Math.floor(+new Date("2019-01-11") / 1000),
    open: 177.93,
    high: 180.26,
    low: 177.12,
    close: 179.41,
  },
  {
    time: Math.floor(+new Date("2019-01-14") / 1000),
    open: 177.59,
    high: 179.23,
    low: 176.9,
    close: 178.81,
  },
  {
    time: Math.floor(+new Date("2019-01-15") / 1000),
    open: 176.08,
    high: 177.82,
    low: 175.2,
    close: 176.47,
  },
  {
    time: Math.floor(+new Date("2019-01-16") / 1000),
    open: 177.09,
    high: 177.93,
    low: 175.86,
    close: 177.04,
  },
  {
    time: Math.floor(+new Date("2019-01-17") / 1000),
    open: 174.01,
    high: 175.46,
    low: 172.0,
    close: 174.87,
  },
  {
    time: Math.floor(+new Date("2019-01-18") / 1000),
    open: 176.98,
    high: 180.04,
    low: 176.18,
    close: 179.58,
  },
  {
    time: Math.floor(+new Date("2019-01-22") / 1000),
    open: 177.49,
    high: 178.6,
    low: 175.36,
    close: 177.11,
  },
  {
    time: Math.floor(+new Date("2019-01-23") / 1000),
    open: 176.59,
    high: 178.06,
    low: 174.53,
    close: 176.89,
  },
  {
    time: Math.floor(+new Date("2019-01-24") / 1000),
    open: 177.0,
    high: 177.53,
    low: 175.3,
    close: 177.29,
  },
  {
    time: Math.floor(+new Date("2019-01-25") / 1000),
    open: 179.78,
    high: 180.87,
    low: 178.61,
    close: 180.4,
  },
  {
    time: Math.floor(+new Date("2019-01-28") / 1000),
    open: 178.97,
    high: 179.99,
    low: 177.41,
    close: 179.83,
  },
  {
    time: Math.floor(+new Date("2019-01-29") / 1000),
    open: 178.96,
    high: 180.15,
    low: 178.09,
    close: 179.69,
  },
  {
    time: Math.floor(+new Date("2019-01-30") / 1000),
    open: 180.47,
    high: 184.2,
    low: 179.78,
    close: 182.18,
  },
  {
    time: Math.floor(+new Date("2019-01-31") / 1000),
    open: 181.5,
    high: 184.67,
    low: 181.06,
    close: 183.53,
  },
  {
    time: Math.floor(+new Date("2019-02-01") / 1000),
    open: 184.03,
    high: 185.15,
    low: 182.83,
    close: 184.37,
  },
  {
    time: Math.floor(+new Date("2019-02-04") / 1000),
    open: 184.3,
    high: 186.43,
    low: 183.84,
    close: 186.43,
  },
  {
    time: Math.floor(+new Date("2019-02-05") / 1000),
    open: 186.89,
    high: 186.99,
    low: 184.69,
    close: 186.39,
  },
  {
    time: Math.floor(+new Date("2019-02-06") / 1000),
    open: 186.69,
    high: 186.69,
    low: 184.06,
    close: 184.72,
  },
  {
    time: Math.floor(+new Date("2019-02-07") / 1000),
    open: 183.74,
    high: 184.92,
    low: 182.45,
    close: 184.07,
  },
  {
    time: Math.floor(+new Date("2019-02-08") / 1000),
    open: 183.05,
    high: 184.58,
    low: 182.72,
    close: 184.54,
  },
  {
    time: Math.floor(+new Date("2019-02-11") / 1000),
    open: 185.0,
    high: 185.42,
    low: 182.75,
    close: 182.92,
  },
  {
    time: Math.floor(+new Date("2019-02-12") / 1000),
    open: 183.84,
    high: 186.4,
    low: 183.52,
    close: 185.52,
  },
  {
    time: Math.floor(+new Date("2019-02-13") / 1000),
    open: 186.3,
    high: 188.68,
    low: 185.92,
    close: 188.41,
  },
  {
    time: Math.floor(+new Date("2019-02-14") / 1000),
    open: 187.5,
    high: 188.93,
    low: 186.0,
    close: 187.71,
  },
  {
    time: Math.floor(+new Date("2019-02-15") / 1000),
    open: 189.87,
    high: 192.62,
    low: 189.05,
    close: 192.39,
  },
  {
    time: Math.floor(+new Date("2019-02-19") / 1000),
    open: 191.71,
    high: 193.19,
    low: 191.28,
    close: 192.33,
  },
  {
    time: Math.floor(+new Date("2019-02-20") / 1000),
    open: 192.39,
    high: 192.4,
    low: 191.11,
    close: 191.85,
  },
  {
    time: Math.floor(+new Date("2019-02-21") / 1000),
    open: 191.85,
    high: 192.37,
    low: 190.61,
    close: 191.82,
  },
  {
    time: Math.floor(+new Date("2019-02-22") / 1000),
    open: 191.69,
    high: 192.54,
    low: 191.62,
    close: 192.39,
  },
  {
    time: Math.floor(+new Date("2019-02-25") / 1000),
    open: 192.75,
    high: 193.42,
    low: 189.96,
    close: 189.98,
  },
  {
    time: Math.floor(+new Date("2019-02-26") / 1000),
    open: 185.59,
    high: 188.47,
    low: 182.8,
    close: 188.3,
  },
  {
    time: Math.floor(+new Date("2019-02-27") / 1000),
    open: 187.9,
    high: 188.5,
    low: 183.21,
    close: 183.67,
  },
  {
    time: Math.floor(+new Date("2019-02-28") / 1000),
    open: 183.6,
    high: 185.19,
    low: 183.11,
    close: 185.14,
  },
  {
    time: Math.floor(+new Date("2019-03-01") / 1000),
    open: 185.82,
    high: 186.56,
    low: 182.86,
    close: 185.17,
  },
  {
    time: Math.floor(+new Date("2019-03-04") / 1000),
    open: 186.2,
    high: 186.24,
    low: 182.1,
    close: 183.81,
  },
  {
    time: Math.floor(+new Date("2019-03-05") / 1000),
    open: 184.24,
    high: 185.12,
    low: 183.25,
    close: 184.0,
  },
  {
    time: Math.floor(+new Date("2019-03-06") / 1000),
    open: 184.53,
    high: 184.97,
    low: 183.84,
    close: 184.45,
  },
  {
    time: Math.floor(+new Date("2019-03-07") / 1000),
    open: 184.39,
    high: 184.62,
    low: 181.58,
    close: 182.51,
  },
  {
    time: Math.floor(+new Date("2019-03-08") / 1000),
    open: 181.49,
    high: 181.91,
    low: 179.52,
    close: 181.23,
  },
  {
    time: Math.floor(+new Date("2019-03-11") / 1000),
    open: 182.0,
    high: 183.2,
    low: 181.2,
    close: 182.44,
  },
  {
    time: Math.floor(+new Date("2019-03-12") / 1000),
    open: 183.43,
    high: 184.27,
    low: 182.33,
    close: 184.0,
  },
  {
    time: Math.floor(+new Date("2019-03-13") / 1000),
    open: 183.24,
    high: 183.78,
    low: 181.08,
    close: 181.14,
  },
  {
    time: Math.floor(+new Date("2019-03-14") / 1000),
    open: 181.28,
    high: 181.74,
    low: 180.5,
    close: 181.61,
  },
  {
    time: Math.floor(+new Date("2019-03-15") / 1000),
    open: 182.3,
    high: 182.49,
    low: 179.57,
    close: 182.23,
  },
  {
    time: Math.floor(+new Date("2019-03-18") / 1000),
    open: 182.53,
    high: 183.48,
    low: 182.33,
    close: 183.42,
  },
  {
    time: Math.floor(+new Date("2019-03-19") / 1000),
    open: 184.19,
    high: 185.82,
    low: 183.48,
    close: 184.13,
  },
  {
    time: Math.floor(+new Date("2019-03-20") / 1000),
    open: 184.3,
    high: 187.12,
    low: 183.43,
    close: 186.1,
  },
  {
    time: Math.floor(+new Date("2019-03-21") / 1000),
    open: 185.5,
    high: 190.0,
    low: 185.5,
    close: 189.97,
  },
  {
    time: Math.floor(+new Date("2019-03-22") / 1000),
    open: 189.31,
    high: 192.05,
    low: 188.67,
    close: 188.75,
  },
  {
    time: Math.floor(+new Date("2019-03-25") / 1000),
    open: 188.75,
    high: 191.71,
    low: 188.51,
    close: 189.68,
  },
  {
    time: Math.floor(+new Date("2019-03-26") / 1000),
    open: 190.69,
    high: 192.19,
    low: 188.74,
    close: 189.34,
  },
  {
    time: Math.floor(+new Date("2019-03-27") / 1000),
    open: 189.65,
    high: 191.61,
    low: 188.39,
    close: 189.25,
  },
  {
    time: Math.floor(+new Date("2019-03-28") / 1000),
    open: 189.91,
    high: 191.4,
    low: 189.16,
    close: 190.06,
  },
  {
    time: Math.floor(+new Date("2019-03-29") / 1000),
    open: 190.85,
    high: 192.04,
    low: 190.14,
    close: 191.89,
  },
  {
    time: Math.floor(+new Date("2019-04-01") / 1000),
    open: 192.99,
    high: 195.9,
    low: 192.85,
    close: 195.64,
  },
  {
    time: Math.floor(+new Date("2019-04-02") / 1000),
    open: 195.5,
    high: 195.5,
    low: 194.01,
    close: 194.31,
  },
  {
    time: Math.floor(+new Date("2019-04-03") / 1000),
    open: 194.98,
    high: 198.78,
    low: 194.11,
    close: 198.61,
  },
  {
    time: Math.floor(+new Date("2019-04-04") / 1000),
    open: 199.0,
    high: 200.49,
    low: 198.02,
    close: 200.45,
  },
  {
    time: Math.floor(+new Date("2019-04-05") / 1000),
    open: 200.86,
    high: 203.13,
    low: 200.61,
    close: 202.06,
  },
  {
    time: Math.floor(+new Date("2019-04-08") / 1000),
    open: 201.37,
    high: 203.79,
    low: 201.24,
    close: 203.55,
  },
  {
    time: Math.floor(+new Date("2019-04-09") / 1000),
    open: 202.26,
    high: 202.71,
    low: 200.46,
    close: 200.9,
  },
  {
    time: Math.floor(+new Date("2019-04-10") / 1000),
    open: 201.26,
    high: 201.6,
    low: 198.02,
    close: 199.43,
  },
  {
    time: Math.floor(+new Date("2019-04-11") / 1000),
    open: 199.9,
    high: 201.5,
    low: 199.03,
    close: 201.48,
  },
  {
    time: Math.floor(+new Date("2019-04-12") / 1000),
    open: 202.13,
    high: 204.26,
    low: 202.13,
    close: 203.85,
  },
  {
    time: Math.floor(+new Date("2019-04-15") / 1000),
    open: 204.16,
    high: 205.14,
    low: 203.4,
    close: 204.86,
  },
  {
    time: Math.floor(+new Date("2019-04-16") / 1000),
    open: 205.25,
    high: 205.99,
    low: 204.29,
    close: 204.47,
  },
  {
    time: Math.floor(+new Date("2019-04-17") / 1000),
    open: 205.34,
    high: 206.84,
    low: 205.32,
    close: 206.55,
  },
  {
    time: Math.floor(+new Date("2019-04-18") / 1000),
    open: 206.02,
    high: 207.78,
    low: 205.1,
    close: 205.66,
  },
  {
    time: Math.floor(+new Date("2019-04-22") / 1000),
    open: 204.11,
    high: 206.25,
    low: 204.0,
    close: 204.78,
  },
  {
    time: Math.floor(+new Date("2019-04-23") / 1000),
    open: 205.14,
    high: 207.33,
    low: 203.43,
    close: 206.05,
  },
  {
    time: Math.floor(+new Date("2019-04-24") / 1000),
    open: 206.16,
    high: 208.29,
    low: 205.54,
    close: 206.72,
  },
  {
    time: Math.floor(+new Date("2019-04-25") / 1000),
    open: 206.01,
    high: 207.72,
    low: 205.06,
    close: 206.5,
  },
  {
    time: Math.floor(+new Date("2019-04-26") / 1000),
    open: 205.88,
    high: 206.14,
    low: 203.34,
    close: 203.61,
  },
  {
    time: Math.floor(+new Date("2019-04-29") / 1000),
    open: 203.31,
    high: 203.8,
    low: 200.34,
    close: 202.16,
  },
  {
    time: Math.floor(+new Date("2019-04-30") / 1000),
    open: 201.55,
    high: 203.75,
    low: 200.79,
    close: 203.7,
  },
  {
    time: Math.floor(+new Date("2019-05-01") / 1000),
    open: 203.2,
    high: 203.52,
    low: 198.66,
    close: 198.8,
  },
  {
    time: Math.floor(+new Date("2019-05-02") / 1000),
    open: 199.3,
    high: 201.06,
    low: 198.8,
    close: 201.01,
  },
  {
    time: Math.floor(+new Date("2019-05-03") / 1000),
    open: 202.0,
    high: 202.31,
    low: 200.32,
    close: 200.56,
  },
  {
    time: Math.floor(+new Date("2019-05-06") / 1000),
    open: 198.74,
    high: 199.93,
    low: 198.31,
    close: 199.63,
  },
  {
    time: Math.floor(+new Date("2019-05-07") / 1000),
    open: 196.75,
    high: 197.65,
    low: 192.96,
    close: 194.77,
  },
  {
    time: Math.floor(+new Date("2019-05-08") / 1000),
    open: 194.49,
    high: 196.61,
    low: 193.68,
    close: 195.17,
  },
  {
    time: Math.floor(+new Date("2019-05-09") / 1000),
    open: 193.31,
    high: 195.08,
    low: 191.59,
    close: 194.58,
  },
  {
    time: Math.floor(+new Date("2019-05-10") / 1000),
    open: 193.21,
    high: 195.49,
    low: 190.01,
    close: 194.58,
  },
  {
    time: Math.floor(+new Date("2019-05-13") / 1000),
    open: 191.0,
    high: 191.66,
    low: 189.14,
    close: 190.34,
  },
  {
    time: Math.floor(+new Date("2019-05-14") / 1000),
    open: 190.5,
    high: 192.76,
    low: 190.01,
    close: 191.62,
  },
  {
    time: Math.floor(+new Date("2019-05-15") / 1000),
    open: 190.81,
    high: 192.81,
    low: 190.27,
    close: 191.76,
  },
  {
    time: Math.floor(+new Date("2019-05-16") / 1000),
    open: 192.47,
    high: 194.96,
    low: 192.2,
    close: 192.38,
  },
  {
    time: Math.floor(+new Date("2019-05-17") / 1000),
    open: 190.86,
    high: 194.5,
    low: 190.75,
    close: 192.58,
  },
  {
    time: Math.floor(+new Date("2019-05-20") / 1000),
    open: 191.13,
    high: 192.86,
    low: 190.61,
    close: 190.95,
  },
  {
    time: Math.floor(+new Date("2019-05-21") / 1000),
    open: 187.13,
    high: 192.52,
    low: 186.34,
    close: 191.45,
  },
  {
    time: Math.floor(+new Date("2019-05-22") / 1000),
    open: 190.49,
    high: 192.22,
    low: 188.05,
    close: 188.91,
  },
  {
    time: Math.floor(+new Date("2019-05-23") / 1000),
    open: 188.45,
    high: 192.54,
    low: 186.27,
    close: 192.0,
  },
  {
    time: Math.floor(+new Date("2019-05-24") / 1000),
    open: 192.54,
    high: 193.86,
    low: 190.41,
    close: 193.59,
  },
];

export const chartEntries: ChartEntry[] = [
  {
      date: 1643932800,
      volumeUSD: 35319.60384382669,
      liquidityUSD: 32721.042614475704
  },
  {
      date: 1644019200,
      volumeUSD: 8593.317354338913,
      liquidityUSD: 62197.00488909963
  },
  {
      date: 1644105600,
      volumeUSD: 3862.0039254542726,
      liquidityUSD: 59744.57347351148
  },
  {
      date: 1644192000,
      volumeUSD: 1472.2499395093218,
      liquidityUSD: 61908.319384998635
  },
  {
      date: 1644278400,
      volumeUSD: 5411.205526093143,
      liquidityUSD: 56735.60351594099
  },
  {
      date: 1644364800,
      volumeUSD: 2588.740183856612,
      liquidityUSD: 57733.62013909417
  },
  {
      date: 1644451200,
      volumeUSD: 6156.0969721546635,
      liquidityUSD: 54411.552556413226
  },
  {
      date: 1644537600,
      volumeUSD: 4207.049520192094,
      liquidityUSD: 52280.43541024054
  },
  {
      date: 1644624000,
      volumeUSD: 7611.488095906222,
      liquidityUSD: 51820.342313500376
  },
  {
      date: 1644710400,
      volumeUSD: 7094.800280285726,
      liquidityUSD: 51002.4641360147
  },
  {
      date: 1644796800,
      volumeUSD: 5002.018921477,
      liquidityUSD: 50881.09079566449
  },
  {
      date: 1644883200,
      volumeUSD: 1767.9348076345825,
      liquidityUSD: 53058.740707601435
  },
  {
      date: 1644969600,
      volumeUSD: 359.1895926616573,
      liquidityUSD: 53702.65126842002
  },
  {
      date: 1645056000,
      volumeUSD: 3076.7287701186738,
      liquidityUSD: 49664.14918818826
  },
  {
      date: 1645142400,
      volumeUSD: 819.0057585001881,
      liquidityUSD: 50021.9735578447
  },
  {
      date: 1645228800,
      volumeUSD: 2713.0233365915333,
      liquidityUSD: 50316.93062360838
  },
  {
      date: 1645315200,
      volumeUSD: 11609.331136745684,
      liquidityUSD: 47045.0530526421
  },
  {
      date: 1645401600,
      volumeUSD: 16913.67289681208,
      liquidityUSD: 48604.364403017076
  },
  {
      date: 1645488000,
      volumeUSD: 2740.2436969794862,
      liquidityUSD: 51118.57805818632
  },
  {
      date: 1645574400,
      volumeUSD: 3223.716967789074,
      liquidityUSD: 49245.86693093267
  },
  {
      date: 1645660800,
      volumeUSD: 2017.2482520700353,
      liquidityUSD: 47364.88499188054
  },
  {
      date: 1645747200,
      volumeUSD: 12177.155880783457,
      liquidityUSD: 52824.65041043875
  },
  {
      date: 1645833600,
      volumeUSD: 4519.431053637914,
      liquidityUSD: 52873.37553325064
  },
  {
      date: 1645920000,
      volumeUSD: 648.122581312353,
      liquidityUSD: 51794.642869923606
  },
  {
      date: 1646006400,
      volumeUSD: 524.9162590402408,
      liquidityUSD: 55808.487156878065
  },
  {
      date: 1646092800,
      volumeUSD: 1992.27442798817,
      liquidityUSD: 57662.31636722627
  },
  {
      date: 1646179200,
      volumeUSD: 9884.756434526005,
      liquidityUSD: 54458.92885874379
  },
  {
      date: 1646265600,
      volumeUSD: 173.6674804539408,
      liquidityUSD: 53580.38838034423
  },
  {
      date: 1646352000,
      volumeUSD: 1097.7910790051305,
      liquidityUSD: 49763.18582697791
  },
  {
      date: 1646438400,
      volumeUSD: 5964.63721180933,
      liquidityUSD: 54408.03085384762
  },
  {
      date: 1646524800,
      volumeUSD: 2022.8345818735406,
      liquidityUSD: 53415.02797931273
  },
  {
      date: 1646611200,
      volumeUSD: 1964.7584296161288,
      liquidityUSD: 50701.86956381879
  },
  {
      date: 1646697600,
      volumeUSD: 413.92464900544314,
      liquidityUSD: 52434.515909835995
  },
  {
      date: 1646784000,
      volumeUSD: 394.7472296036659,
      liquidityUSD: 54021.82184748905
  },
  {
      date: 1646870400,
      volumeUSD: 871.878002793795,
      liquidityUSD: 50704.79088860705
  },
  {
      date: 1646956800,
      volumeUSD: 880.1075916880568,
      liquidityUSD: 50245.362873548875
  },
  {
      date: 1647043200,
      volumeUSD: 1179.2612483332587,
      liquidityUSD: 50005.75744449264
  },
  {
      date: 1647129600,
      volumeUSD: 2549.676380068414,
      liquidityUSD: 49223.40422158387
  },
  {
      date: 1647216000,
      volumeUSD: 3217.483972464603,
      liquidityUSD: 48868.045752533784
  },
  {
      date: 1647302400,
      volumeUSD: 3332.8449844659604,
      liquidityUSD: 47536.625618549835
  },
  {
      date: 1647388800,
      volumeUSD: 801.9579966613233,
      liquidityUSD: 49039.29847679772
  },
  {
      date: 1647475200,
      volumeUSD: 2251.616213263948,
      liquidityUSD: 49851.49107325708
  },
  {
      date: 1647561600,
      volumeUSD: 1386.6729458261898,
      liquidityUSD: 50777.13536155452
  },
  {
      date: 1647648000,
      volumeUSD: 1711.5091620398134,
      liquidityUSD: 51168.2984720151
  },
  {
      date: 1647734400,
      volumeUSD: 854.2329394851257,
      liquidityUSD: 50888.035363324
  },
  {
      date: 1647820800,
      volumeUSD: 2304.2716155904227,
      liquidityUSD: 49451.56329408606
  },
  {
      date: 1647907200,
      volumeUSD: 0,
      liquidityUSD: 49451.56329408606
  },
  {
      date: 1647993600,
      volumeUSD: 4511.873214147045,
      liquidityUSD: 47917.2099554077
  },
  {
      date: 1648080000,
      volumeUSD: 341.09291120195286,
      liquidityUSD: 49459.85791477851
  },
  {
      date: 1648166400,
      volumeUSD: 1311.4786567817011,
      liquidityUSD: 48575.29443625449
  },
  {
      date: 1648252800,
      volumeUSD: 923.2267714348362,
      liquidityUSD: 50285.647241819104
  },
  {
      date: 1648339200,
      volumeUSD: 3139.358038015473,
      liquidityUSD: 50151.39991846625
  },
  {
      date: 1648425600,
      volumeUSD: 719.2121254857982,
      liquidityUSD: 52576.18743936246
  },
  {
      date: 1648512000,
      volumeUSD: 721.0152959121168,
      liquidityUSD: 52549.57122688963
  },
  {
      date: 1648598400,
      volumeUSD: 4189.534399353291,
      liquidityUSD: 56090.88710164838
  },
  {
      date: 1648684800,
      volumeUSD: 270605.19730853004,
      liquidityUSD: 51848.96714821662
  },
  {
      date: 1648771200,
      volumeUSD: 99500.67469991768,
      liquidityUSD: 55072.01479630518
  },
  {
      date: 1648857600,
      volumeUSD: 22768.737426068106,
      liquidityUSD: 55069.29720853622
  },
  {
      date: 1648944000,
      volumeUSD: 9696.02947715032,
      liquidityUSD: 55839.3792974262
  },
  {
      date: 1649030400,
      volumeUSD: 39539.13851619503,
      liquidityUSD: 61398.94170330855
  },
  {
      date: 1649116800,
      volumeUSD: 5450.497691842779,
      liquidityUSD: 60158.51964466619
  },
  {
      date: 1649203200,
      volumeUSD: 2566.3496608888227,
      liquidityUSD: 55185.84465987949
  },
  {
      date: 1649289600,
      volumeUSD: 10362.314536560312,
      liquidityUSD: 57869.50127310725
  },
  {
      date: 1649376000,
      volumeUSD: 9575.575271224547,
      liquidityUSD: 56861.750148936684
  },
  {
      date: 1649462400,
      volumeUSD: 1923.6912318460897,
      liquidityUSD: 55339.10597737779
  },
  {
      date: 1649548800,
      volumeUSD: 776.8944708233333,
      liquidityUSD: 56770.481337709054
  },
  {
      date: 1649635200,
      volumeUSD: 7624.288771015283,
      liquidityUSD: 50389.828995119016
  },
  {
      date: 1649721600,
      volumeUSD: 1141.9119748038947,
      liquidityUSD: 51742.00328499203
  },
  {
      date: 1649808000,
      volumeUSD: 3108.984724164071,
      liquidityUSD: 53238.84819627045
  },
  {
      date: 1649894400,
      volumeUSD: 1738.1031236002268,
      liquidityUSD: 51141.112157683805
  },
  {
      date: 1649980800,
      volumeUSD: 3494.4952793712323,
      liquidityUSD: 51899.797804769456
  },
  {
      date: 1650067200,
      volumeUSD: 10296.908193621124,
      liquidityUSD: 54948.107154394784
  },
  {
      date: 1650153600,
      volumeUSD: 9502.957206758541,
      liquidityUSD: 53704.03036352041
  },
  {
      date: 1650240000,
      volumeUSD: 6662.290724887628,
      liquidityUSD: 54727.19925268321
  },
  {
      date: 1650326400,
      volumeUSD: 7374.851840202545,
      liquidityUSD: 57123.310194903665
  },
  {
      date: 1650412800,
      volumeUSD: 42611.97093162032,
      liquidityUSD: 57218.364646176764
  },
  {
      date: 1650499200,
      volumeUSD: 17242.904835940717,
      liquidityUSD: 57798.73785785988
  },
  {
      date: 1650585600,
      volumeUSD: 42180.88514440022,
      liquidityUSD: 60892.649867560474
  },
  {
      date: 1650672000,
      volumeUSD: 40906.416868791144,
      liquidityUSD: 60026.46537518885
  },
  {
      date: 1650758400,
      volumeUSD: 14276.268088740362,
      liquidityUSD: 63284.03966550881
  },
  {
      date: 1650844800,
      volumeUSD: 63233.7909439727,
      liquidityUSD: 65267.60126721809
  },
  {
      date: 1650931200,
      volumeUSD: 38180.11411722172,
      liquidityUSD: 65622.79617967107
  },
  {
      date: 1651017600,
      volumeUSD: 44100.588110861136,
      liquidityUSD: 65639.950391885
  },
  {
      date: 1651104000,
      volumeUSD: 89369.97623408612,
      liquidityUSD: 69182.92983738844
  },
  {
      date: 1651190400,
      volumeUSD: 54973.89891654904,
      liquidityUSD: 70150.86309977333
  },
  {
      date: 1651276800,
      volumeUSD: 69962.21875587205,
      liquidityUSD: 72439.76621818428
  },
  {
      date: 1651363200,
      volumeUSD: 10002.844850240239,
      liquidityUSD: 71684.40084128622
  },
  {
      date: 1651449600,
      volumeUSD: 16822.720271703514,
      liquidityUSD: 72478.91385815956
  },
  {
      date: 1651536000,
      volumeUSD: 41263.009361075405,
      liquidityUSD: 71128.95663387685
  },
  {
      date: 1651622400,
      volumeUSD: 16960.39151123613,
      liquidityUSD: 74646.53285096967
  },
  {
      date: 1651708800,
      volumeUSD: 30510.692699745163,
      liquidityUSD: 67735.27043894283
  },
  {
      date: 1651795200,
      volumeUSD: 20529.043167317457,
      liquidityUSD: 68128.4983924226
  },
  {
      date: 1651881600,
      volumeUSD: 7033.57244163697,
      liquidityUSD: 68240.90604260085
  },
  {
      date: 1651968000,
      volumeUSD: 13417.073226191324,
      liquidityUSD: 63409.252894052086
  },
  {
      date: 1652054400,
      volumeUSD: 24490.659227905977,
      liquidityUSD: 56792.23479711743
  },
  {
      date: 1652140800,
      volumeUSD: 33389.81004708926,
      liquidityUSD: 54214.49888151399
  },
  {
      date: 1652227200,
      volumeUSD: 21810.92544800512,
      liquidityUSD: 49441.48115617742
  },
  {
      date: 1652313600,
      volumeUSD: 35160.98052569817,
      liquidityUSD: 47516.850393556684
  },
  {
      date: 1652400000,
      volumeUSD: 8154.517357882257,
      liquidityUSD: 53787.111032249864
  },
  {
      date: 1652486400,
      volumeUSD: 4063.3826366163453,
      liquidityUSD: 52626.564170047655
  },
  {
      date: 1652572800,
      volumeUSD: 44504.434512859516,
      liquidityUSD: 56926.311462099795
  },
  {
      date: 1652659200,
      volumeUSD: 4287.7131843332645,
      liquidityUSD: 55653.931408269775
  },
  {
      date: 1652745600,
      volumeUSD: 2201.7617655287927,
      liquidityUSD: 56904.583453697385
  },
  {
      date: 1652832000,
      volumeUSD: 4397.269205026376,
      liquidityUSD: 53697.869074461116
  },
  {
      date: 1652918400,
      volumeUSD: 6800.4866731262855,
      liquidityUSD: 56666.21425532276
  },
  {
      date: 1653004800,
      volumeUSD: 5457.5702735036975,
      liquidityUSD: 54898.64775693313
  },
  {
      date: 1653091200,
      volumeUSD: 579.421348953479,
      liquidityUSD: 56594.20976804742
  },
  {
      date: 1653177600,
      volumeUSD: 3128.4261582211498,
      liquidityUSD: 57210.22114127416
  },
  {
      date: 1653264000,
      volumeUSD: 7340.883691402734,
      liquidityUSD: 60305.933548491965
  },
  {
      date: 1653350400,
      volumeUSD: 30531.689514591224,
      liquidityUSD: 62718.935107770085
  },
  {
      date: 1653436800,
      volumeUSD: 20884.52332362037,
      liquidityUSD: 63751.33320814842
  },
  {
      date: 1653523200,
      volumeUSD: 28459.818431148327,
      liquidityUSD: 62345.35805075064
  },
  {
      date: 1653609600,
      volumeUSD: 2649.361892920195,
      liquidityUSD: 59579.80598022448
  },
  {
      date: 1653696000,
      volumeUSD: 16467.13127086398,
      liquidityUSD: 60391.40906593482
  },
  {
      date: 1653782400,
      volumeUSD: 20823.648295952153,
      liquidityUSD: 59997.85292924834
  },
  {
      date: 1653868800,
      volumeUSD: 38893.64620844269,
      liquidityUSD: 65154.82316376834
  },
  {
      date: 1653955200,
      volumeUSD: 8238.903493834467,
      liquidityUSD: 64123.44157170949
  },
  {
      date: 1654041600,
      volumeUSD: 5073.290965493752,
      liquidityUSD: 59405.74396040737
  },
  {
      date: 1654128000,
      volumeUSD: 4549.307447254134,
      liquidityUSD: 59961.371804176146
  },
  {
      date: 1654214400,
      volumeUSD: 9789.870818062822,
      liquidityUSD: 60630.24474658294
  },
  {
      date: 1654300800,
      volumeUSD: 5444.323025816529,
      liquidityUSD: 59140.4020394511
  },
  {
      date: 1654387200,
      volumeUSD: 9405.19190006477,
      liquidityUSD: 58160.2187800258
  },
  {
      date: 1654473600,
      volumeUSD: 25016.426241212583,
      liquidityUSD: 58027.49808689525
  },
  {
      date: 1654560000,
      volumeUSD: 15032.314170083968,
      liquidityUSD: 56698.9030610691
  },
  {
      date: 1654646400,
      volumeUSD: 24440.164634037137,
      liquidityUSD: 56885.302351576334
  },
  {
      date: 1654732800,
      volumeUSD: 3160.348070280138,
      liquidityUSD: 55561.47176096124
  },
  {
      date: 1654819200,
      volumeUSD: 6955.115735460836,
      liquidityUSD: 54757.76314628735
  },
  {
      date: 1654905600,
      volumeUSD: 7909.942835449116,
      liquidityUSD: 51838.80402661397
  },
  {
      date: 1654992000,
      volumeUSD: 7562.708068213663,
      liquidityUSD: 48296.83360633982
  },
  {
      date: 1655078400,
      volumeUSD: 35121.468783763245,
      liquidityUSD: 37433.30165406727
  },
  {
      date: 1655164800,
      volumeUSD: 4868.93781959677,
      liquidityUSD: 26563.85961967915
  },
  {
      date: 1655251200,
      volumeUSD: 6153.104600173987,
      liquidityUSD: 26272.071166381775
  },
  {
      date: 1655337600,
      volumeUSD: 44719.822714478374,
      liquidityUSD: 27344.16911327335
  },
  {
      date: 1655424000,
      volumeUSD: 12638.75069617245,
      liquidityUSD: 27874.645875118098
  },
  {
      date: 1655510400,
      volumeUSD: 818.4914867559519,
      liquidityUSD: 25440.659705251368
  },
  {
      date: 1655596800,
      volumeUSD: 5676.220046937002,
      liquidityUSD: 27341.20833889056
  },
  {
      date: 1655683200,
      volumeUSD: 4247.689425795993,
      liquidityUSD: 27698.420596107237
  },
  {
      date: 1655769600,
      volumeUSD: 3621.1672978240185,
      liquidityUSD: 28027.156942351612
  },
  {
      date: 1655856000,
      volumeUSD: 1809.180642369604,
      liquidityUSD: 27366.38966276165
  },
  {
      date: 1655942400,
      volumeUSD: 1577.9556858878193,
      liquidityUSD: 28865.706027701894
  },
  {
      date: 1656028800,
      volumeUSD: 4317.088004406237,
      liquidityUSD: 30371.66461060482
  },
  {
      date: 1656115200,
      volumeUSD: 3741.1349060222387,
      liquidityUSD: 29734.641694154772
  },
  {
      date: 1656201600,
      volumeUSD: 14.132990381562037,
      liquidityUSD: 30131.356118612883
  },
  {
      date: 1656288000,
      volumeUSD: 4257.042201143526,
      liquidityUSD: 30207.001910874773
  },
  {
      date: 1656374400,
      volumeUSD: 1879.4086139890492,
      liquidityUSD: 28888.631172292546
  },
  {
      date: 1656460800,
      volumeUSD: 1259.1801371319348,
      liquidityUSD: 27629.977504664424
  },
  {
      date: 1656547200,
      volumeUSD: 7222.91601331225,
      liquidityUSD: 26218.066761508846
  },
  {
      date: 1656633600,
      volumeUSD: 1436.2670820881872,
      liquidityUSD: 26921.89319069487
  },
  {
      date: 1656720000,
      volumeUSD: 2349.143003965723,
      liquidityUSD: 26853.9201090777
  },
  {
      date: 1656806400,
      volumeUSD: 21653.3151150476,
      liquidityUSD: 26712.788378592228
  },
  {
      date: 1656892800,
      volumeUSD: 5116.382068964734,
      liquidityUSD: 26823.413534609525
  },
  {
      date: 1656979200,
      volumeUSD: 9598.451788429416,
      liquidityUSD: 26585.083154724947
  },
  {
      date: 1657065600,
      volumeUSD: 4223.922489673452,
      liquidityUSD: 26742.924092517533
  },
  {
      date: 1657152000,
      volumeUSD: 5010.990813856762,
      liquidityUSD: 27343.374618469326
  },
  {
      date: 1657238400,
      volumeUSD: 3446.226443434209,
      liquidityUSD: 27182.546135898276
  },
  {
      date: 1657324800,
      volumeUSD: 152.44543229240597,
      liquidityUSD: 27282.08556588388
  },
  {
      date: 1657411200,
      volumeUSD: 3613.1708491177856,
      liquidityUSD: 26252.073819415917
  },
  {
      date: 1657497600,
      volumeUSD: 4037.30073131917,
      liquidityUSD: 24984.324550060217
  },
  {
      date: 1657584000,
      volumeUSD: 2024.018249637899,
      liquidityUSD: 24986.63681410585
  }
];

export const tokenPriceData: PriceChartEntry[] = [
  {
      time: 1656993600,
      open: 233.05261776393235,
      close: 232.64044613683566,
      high: 232.64044613683566,
      low: 233.05261776393235
  },
  {
      time: 1656997200,
      open: 232.64044613683566,
      close: 234.64401953202693,
      high: 234.64401953202693,
      low: 232.64044613683566
  },
  {
      time: 1657000800,
      open: 234.64401953202693,
      close: 233.9386729732597,
      high: 233.9386729732597,
      low: 234.64401953202693
  },
  {
      time: 1657004400,
      open: 233.9386729732597,
      close: 231.46553089227913,
      high: 231.46553089227913,
      low: 233.9386729732597
  },
  {
      time: 1657008000,
      open: 231.46553089227913,
      close: 229.56151233042087,
      high: 229.56151233042087,
      low: 231.46553089227913
  },
  {
      time: 1657011600,
      open: 229.56151233042087,
      close: 228.1427909738159,
      high: 228.1427909738159,
      low: 229.56151233042087
  },
  {
      time: 1657015200,
      open: 228.1427909738159,
      close: 228.2112614310012,
      high: 228.2112614310012,
      low: 228.1427909738159
  },
  {
      time: 1657018800,
      open: 228.2112614310012,
      close: 226.21822127019158,
      high: 226.21822127019158,
      low: 228.2112614310012
  },
  {
      time: 1657022400,
      open: 226.21822127019158,
      close: 223.61663534974335,
      high: 223.61663534974335,
      low: 226.21822127019158
  },
  {
      time: 1657026000,
      open: 223.61663534974335,
      close: 224.446953579755,
      high: 224.446953579755,
      low: 223.61663534974335
  },
  {
      time: 1657029600,
      open: 224.446953579755,
      close: 223.85566928208434,
      high: 223.85566928208434,
      low: 224.446953579755
  },
  {
      time: 1657033200,
      open: 223.85566928208434,
      close: 224.4812133138941,
      high: 224.4812133138941,
      low: 223.85566928208434
  },
  {
      time: 1657036800,
      open: 224.4812133138941,
      close: 224.520699538309,
      high: 224.520699538309,
      low: 224.4812133138941
  },
  {
      time: 1657040400,
      open: 224.520699538309,
      close: 225.42746610752917,
      high: 225.42746610752917,
      low: 224.520699538309
  },
  {
      time: 1657044000,
      open: 225.42746610752917,
      close: 229.08281988544138,
      high: 229.08281988544138,
      low: 225.42746610752917
  },
  {
      time: 1657047600,
      open: 229.08281988544138,
      close: 231.97311833193973,
      high: 231.97311833193973,
      low: 229.08281988544138
  },
  {
      time: 1657051200,
      open: 231.97311833193973,
      close: 232.09676318412454,
      high: 232.09676318412454,
      low: 231.97311833193973
  },
  {
      time: 1657054800,
      open: 232.09676318412454,
      close: 232.1524872882354,
      high: 232.1524872882354,
      low: 232.09676318412454
  },
  {
      time: 1657058400,
      open: 232.1524872882354,
      close: 232.64847954410254,
      high: 232.64847954410254,
      low: 232.1524872882354
  },
  {
      time: 1657062000,
      open: 232.64847954410254,
      close: 230.95717289268484,
      high: 230.95717289268484,
      low: 232.64847954410254
  },
  {
      time: 1657065600,
      open: 230.95717289268484,
      close: 233.410677044996,
      high: 233.410677044996,
      low: 230.95717289268484
  },
  {
      time: 1657069200,
      open: 233.410677044996,
      close: 229.55188366220244,
      high: 229.55188366220244,
      low: 233.410677044996
  },
  {
      time: 1657072800,
      open: 229.55188366220244,
      close: 229.63062358676726,
      high: 229.63062358676726,
      low: 229.55188366220244
  },
  {
      time: 1657076400,
      open: 229.63062358676726,
      close: 232.97745714338745,
      high: 232.97745714338745,
      low: 229.63062358676726
  },
  {
      time: 1657080000,
      open: 232.97745714338745,
      close: 233.63497004907222,
      high: 233.63497004907222,
      low: 232.97745714338745
  },
  {
      time: 1657083600,
      open: 233.63497004907222,
      close: 232.81226795643238,
      high: 232.81226795643238,
      low: 233.63497004907222
  },
  {
      time: 1657087200,
      open: 232.81226795643238,
      close: 233.88786252476314,
      high: 233.88786252476314,
      low: 232.81226795643238
  },
  {
      time: 1657090800,
      open: 233.88786252476314,
      close: 234.63340818162573,
      high: 234.63340818162573,
      low: 233.88786252476314
  },
  {
      time: 1657094400,
      open: 234.63340818162573,
      close: 234.646533985691,
      high: 234.646533985691,
      low: 234.63340818162573
  },
  {
      time: 1657098000,
      open: 234.646533985691,
      close: 236.89397785103648,
      high: 236.89397785103648,
      low: 234.646533985691
  },
  {
      time: 1657101600,
      open: 236.89397785103648,
      close: 236.9120001188988,
      high: 236.9120001188988,
      low: 236.89397785103648
  },
  {
      time: 1657105200,
      open: 236.9120001188988,
      close: 235.64386618818529,
      high: 235.64386618818529,
      low: 236.9120001188988
  },
  {
      time: 1657108800,
      open: 235.64386618818529,
      close: 236.87282646621964,
      high: 236.87282646621964,
      low: 235.64386618818529
  },
  {
      time: 1657112400,
      open: 236.87282646621964,
      close: 237.77069058933773,
      high: 237.77069058933773,
      low: 236.87282646621964
  },
  {
      time: 1657116000,
      open: 237.77069058933773,
      close: 236.34261380674923,
      high: 236.34261380674923,
      low: 237.77069058933773
  },
  {
      time: 1657119600,
      open: 236.34261380674923,
      close: 235.93121169695263,
      high: 235.93121169695263,
      low: 236.34261380674923
  },
  {
      time: 1657123200,
      open: 235.93121169695263,
      close: 238.09948150959724,
      high: 238.09948150959724,
      low: 235.93121169695263
  },
  {
      time: 1657126800,
      open: 238.09948150959724,
      close: 237.67096782410806,
      high: 237.67096782410806,
      low: 238.09948150959724
  },
  {
      time: 1657130400,
      open: 237.67096782410806,
      close: 238.35491399771695,
      high: 238.35491399771695,
      low: 237.67096782410806
  },
  {
      time: 1657134000,
      open: 238.35491399771695,
      close: 237.2608535418639,
      high: 237.2608535418639,
      low: 238.35491399771695
  },
  {
      time: 1657137600,
      open: 237.2608535418639,
      close: 237.7948931527115,
      high: 237.7948931527115,
      low: 237.2608535418639
  },
  {
      time: 1657141200,
      open: 237.7948931527115,
      close: 238.6234297404988,
      high: 238.6234297404988,
      low: 237.7948931527115
  },
  {
      time: 1657144800,
      open: 238.6234297404988,
      close: 239.07542653880515,
      high: 239.07542653880515,
      low: 238.6234297404988
  },
  {
      time: 1657148400,
      open: 239.07542653880515,
      close: 237.96960342562647,
      high: 237.96960342562647,
      low: 239.07542653880515
  },
  {
      time: 1657152000,
      open: 237.96960342562647,
      close: 237.89851815112695,
      high: 237.89851815112695,
      low: 237.96960342562647
  },
  {
      time: 1657155600,
      open: 237.89851815112695,
      close: 237.87035629301474,
      high: 237.87035629301474,
      low: 237.89851815112695
  },
  {
      time: 1657159200,
      open: 237.87035629301474,
      close: 236.62183938010966,
      high: 236.62183938010966,
      low: 237.87035629301474
  },
  {
      time: 1657162800,
      open: 236.62183938010966,
      close: 236.44976537001872,
      high: 236.44976537001872,
      low: 236.62183938010966
  },
  {
      time: 1657166400,
      open: 236.44976537001872,
      close: 236.0598845352669,
      high: 236.0598845352669,
      low: 236.44976537001872
  },
  {
      time: 1657170000,
      open: 236.0598845352669,
      close: 235.9661536845623,
      high: 235.9661536845623,
      low: 236.0598845352669
  },
  {
      time: 1657173600,
      open: 235.9661536845623,
      close: 236.2686535629307,
      high: 236.2686535629307,
      low: 235.9661536845623
  },
  {
      time: 1657177200,
      open: 236.2686535629307,
      close: 236.51405396940146,
      high: 236.51405396940146,
      low: 236.2686535629307
  },
  {
      time: 1657180800,
      open: 236.51405396940146,
      close: 237.99865203083465,
      high: 237.99865203083465,
      low: 236.51405396940146
  },
  {
      time: 1657184400,
      open: 237.99865203083465,
      close: 237.28976862741672,
      high: 237.28976862741672,
      low: 237.99865203083465
  },
  {
      time: 1657188000,
      open: 237.28976862741672,
      close: 236.80267858104196,
      high: 236.80267858104196,
      low: 237.28976862741672
  },
  {
      time: 1657191600,
      open: 236.80267858104196,
      close: 236.87870787658642,
      high: 236.87870787658642,
      low: 236.80267858104196
  },
  {
      time: 1657195200,
      open: 236.87870787658642,
      close: 235.63497383308146,
      high: 235.63497383308146,
      low: 236.87870787658642
  },
  {
      time: 1657198800,
      open: 235.63497383308146,
      close: 237.19104293225828,
      high: 237.19104293225828,
      low: 235.63497383308146
  },
  {
      time: 1657202400,
      open: 237.19104293225828,
      close: 241.70673780645788,
      high: 241.70673780645788,
      low: 237.19104293225828
  },
  {
      time: 1657206000,
      open: 241.70673780645788,
      close: 240.62458451458514,
      high: 240.62458451458514,
      low: 241.70673780645788
  },
  {
      time: 1657209600,
      open: 240.62458451458514,
      close: 241.00360690581948,
      high: 241.00360690581948,
      low: 240.62458451458514
  },
  {
      time: 1657213200,
      open: 241.00360690581948,
      close: 239.82165532089726,
      high: 239.82165532089726,
      low: 241.00360690581948
  },
  {
      time: 1657216800,
      open: 239.82165532089726,
      close: 242.0325988237939,
      high: 242.0325988237939,
      low: 239.82165532089726
  },
  {
      time: 1657220400,
      open: 242.0325988237939,
      close: 242.078656230555,
      high: 242.078656230555,
      low: 242.0325988237939
  },
  {
      time: 1657224000,
      open: 242.078656230555,
      close: 241.74460327171994,
      high: 241.74460327171994,
      low: 242.078656230555
  },
  {
      time: 1657227600,
      open: 241.74460327171994,
      close: 241.97454441095,
      high: 241.97454441095,
      low: 241.74460327171994
  },
  {
      time: 1657231200,
      open: 241.97454441095,
      close: 240.82525194765913,
      high: 240.82525194765913,
      low: 241.97454441095
  },
  {
      time: 1657234800,
      open: 240.82525194765913,
      close: 241.16536950484772,
      high: 241.16536950484772,
      low: 240.82525194765913
  },
  {
      time: 1657238400,
      open: 241.16536950484772,
      close: 241.64779646606965,
      high: 241.64779646606965,
      low: 241.16536950484772
  },
  {
      time: 1657242000,
      open: 241.64779646606965,
      close: 243.55126061172334,
      high: 243.55126061172334,
      low: 241.64779646606965
  },
  {
      time: 1657245600,
      open: 243.55126061172334,
      close: 242.63418864981463,
      high: 242.63418864981463,
      low: 243.55126061172334
  },
  {
      time: 1657249200,
      open: 242.63418864981463,
      close: 244.44079081850322,
      high: 244.44079081850322,
      low: 242.63418864981463
  },
  {
      time: 1657252800,
      open: 244.44079081850322,
      close: 243.35630005159928,
      high: 243.35630005159928,
      low: 244.44079081850322
  },
  {
      time: 1657256400,
      open: 243.35630005159928,
      close: 241.05270133331032,
      high: 241.05270133331032,
      low: 243.35630005159928
  },
  {
      time: 1657260000,
      open: 241.05270133331032,
      close: 240.67657015160114,
      high: 240.67657015160114,
      low: 241.05270133331032
  },
  {
      time: 1657263600,
      open: 240.67657015160114,
      close: 241.45049514228572,
      high: 241.45049514228572,
      low: 240.67657015160114
  },
  {
      time: 1657267200,
      open: 241.45049514228572,
      close: 237.52947492081728,
      high: 237.52947492081728,
      low: 241.45049514228572
  },
  {
      time: 1657270800,
      open: 237.52947492081728,
      close: 237.8051772583288,
      high: 237.8051772583288,
      low: 237.52947492081728
  },
  {
      time: 1657274400,
      open: 237.8051772583288,
      close: 238.865504317062,
      high: 238.865504317062,
      low: 237.8051772583288
  },
  {
      time: 1657278000,
      open: 238.865504317062,
      close: 239.52711729874937,
      high: 239.52711729874937,
      low: 238.865504317062
  },
  {
      time: 1657281600,
      open: 239.52711729874937,
      close: 237.59092432395877,
      high: 237.59092432395877,
      low: 239.52711729874937
  },
  {
      time: 1657285200,
      open: 237.59092432395877,
      close: 238.23474267588952,
      high: 238.23474267588952,
      low: 237.59092432395877
  },
  {
      time: 1657288800,
      open: 238.23474267588952,
      close: 241.31049729611135,
      high: 241.31049729611135,
      low: 238.23474267588952
  },
  {
      time: 1657292400,
      open: 241.31049729611135,
      close: 241.92833770177964,
      high: 241.92833770177964,
      low: 241.31049729611135
  },
  {
      time: 1657296000,
      open: 241.92833770177964,
      close: 239.67281509584572,
      high: 239.67281509584572,
      low: 241.92833770177964
  },
  {
      time: 1657299600,
      open: 239.67281509584572,
      close: 240.6140269451169,
      high: 240.6140269451169,
      low: 239.67281509584572
  },
  {
      time: 1657303200,
      open: 240.6140269451169,
      close: 241.32638389707955,
      high: 241.32638389707955,
      low: 240.6140269451169
  },
  {
      time: 1657306800,
      open: 241.32638389707955,
      close: 241.93289733193023,
      high: 241.93289733193023,
      low: 241.32638389707955
  },
  {
      time: 1657310400,
      open: 241.93289733193023,
      close: 242.6619064336845,
      high: 242.6619064336845,
      low: 241.93289733193023
  },
  {
      time: 1657314000,
      open: 242.6619064336845,
      close: 242.04146774407798,
      high: 242.04146774407798,
      low: 242.6619064336845
  },
  {
      time: 1657317600,
      open: 242.04146774407798,
      close: 241.8417491469372,
      high: 241.8417491469372,
      low: 242.04146774407798
  },
  {
      time: 1657321200,
      open: 241.8417491469372,
      close: 241.2264000023845,
      high: 241.2264000023845,
      low: 241.8417491469372
  },
  {
      time: 1657324800,
      open: 241.2264000023845,
      close: 241.35832644653757,
      high: 241.35832644653757,
      low: 241.2264000023845
  },
  {
      time: 1657328400,
      open: 241.35832644653757,
      close: 241.1372678849197,
      high: 241.1372678849197,
      low: 241.35832644653757
  },
  {
      time: 1657332000,
      open: 241.1372678849197,
      close: 241.83759977449424,
      high: 241.83759977449424,
      low: 241.1372678849197
  },
  {
      time: 1657335600,
      open: 241.83759977449424,
      close: 241.73000324730975,
      high: 241.73000324730975,
      low: 241.83759977449424
  },
  {
      time: 1657339200,
      open: 241.73000324730975,
      close: 242.92879087316,
      high: 242.92879087316,
      low: 241.73000324730975
  },
  {
      time: 1657342800,
      open: 242.92879087316,
      close: 242.2468124256653,
      high: 242.2468124256653,
      low: 242.92879087316
  },
  {
      time: 1657346400,
      open: 242.2468124256653,
      close: 242.94628841180932,
      high: 242.94628841180932,
      low: 242.2468124256653
  },
  {
      time: 1657350000,
      open: 242.94628841180932,
      close: 243.89735346008075,
      high: 243.89735346008075,
      low: 242.94628841180932
  },
  {
      time: 1657353600,
      open: 243.89735346008075,
      close: 244.23597506771085,
      high: 244.23597506771085,
      low: 243.89735346008075
  },
  {
      time: 1657357200,
      open: 244.23597506771085,
      close: 243.6976073185984,
      high: 243.6976073185984,
      low: 244.23597506771085
  },
  {
      time: 1657360800,
      open: 243.6976073185984,
      close: 244.00201704097103,
      high: 244.00201704097103,
      low: 243.6976073185984
  },
  {
      time: 1657364400,
      open: 244.00201704097103,
      close: 241.658062295778,
      high: 241.658062295778,
      low: 244.00201704097103
  },
  {
      time: 1657368000,
      open: 241.658062295778,
      close: 241.86882868142465,
      high: 241.86882868142465,
      low: 241.658062295778
  },
  {
      time: 1657371600,
      open: 241.86882868142465,
      close: 242.62116848143484,
      high: 242.62116848143484,
      low: 241.86882868142465
  },
  {
      time: 1657375200,
      open: 242.62116848143484,
      close: 242.41099798729772,
      high: 242.41099798729772,
      low: 242.62116848143484
  },
  {
      time: 1657378800,
      open: 242.41099798729772,
      close: 241.92832164559067,
      high: 241.92832164559067,
      low: 242.41099798729772
  },
  {
      time: 1657382400,
      open: 241.92832164559067,
      close: 242.83160942959384,
      high: 242.83160942959384,
      low: 241.92832164559067
  },
  {
      time: 1657386000,
      open: 242.83160942959384,
      close: 243.82122691223907,
      high: 243.82122691223907,
      low: 242.83160942959384
  },
  {
      time: 1657389600,
      open: 243.82122691223907,
      close: 243.69430731475424,
      high: 243.69430731475424,
      low: 243.82122691223907
  },
  {
      time: 1657393200,
      open: 243.69430731475424,
      close: 242.48428099413013,
      high: 242.48428099413013,
      low: 243.69430731475424
  },
  {
      time: 1657396800,
      open: 242.48428099413013,
      close: 242.8319065255445,
      high: 242.8319065255445,
      low: 242.48428099413013
  },
  {
      time: 1657400400,
      open: 242.8319065255445,
      close: 243.22313983493527,
      high: 243.22313983493527,
      low: 242.8319065255445
  },
  {
      time: 1657404000,
      open: 243.22313983493527,
      close: 242.89883948044226,
      high: 242.89883948044226,
      low: 243.22313983493527
  },
  {
      time: 1657407600,
      open: 242.89883948044226,
      close: 242.9397615437137,
      high: 242.9397615437137,
      low: 242.89883948044226
  },
  {
      time: 1657411200,
      open: 242.9397615437137,
      close: 240.55435738897958,
      high: 240.55435738897958,
      low: 242.9397615437137
  },
  {
      time: 1657414800,
      open: 240.55435738897958,
      close: 241.54850293317256,
      high: 241.54850293317256,
      low: 240.55435738897958
  },
  {
      time: 1657418400,
      open: 241.54850293317256,
      close: 236.23156987464108,
      high: 236.23156987464108,
      low: 241.54850293317256
  },
  {
      time: 1657422000,
      open: 236.23156987464108,
      close: 235.21272928363052,
      high: 235.21272928363052,
      low: 236.23156987464108
  },
  {
      time: 1657425600,
      open: 235.21272928363052,
      close: 236.40040441230394,
      high: 236.40040441230394,
      low: 235.21272928363052
  },
  {
      time: 1657429200,
      open: 236.40040441230394,
      close: 237.04600513323243,
      high: 237.04600513323243,
      low: 236.40040441230394
  },
  {
      time: 1657432800,
      open: 237.04600513323243,
      close: 236.72621524016324,
      high: 236.72621524016324,
      low: 237.04600513323243
  },
  {
      time: 1657436400,
      open: 236.72621524016324,
      close: 236.7160304579169,
      high: 236.7160304579169,
      low: 236.72621524016324
  },
  {
      time: 1657440000,
      open: 236.7160304579169,
      close: 236.52298657094465,
      high: 236.52298657094465,
      low: 236.7160304579169
  },
  {
      time: 1657443600,
      open: 236.52298657094465,
      close: 236.46642564073093,
      high: 236.46642564073093,
      low: 236.52298657094465
  },
  {
      time: 1657447200,
      open: 236.46642564073093,
      close: 236.2697591085071,
      high: 236.2697591085071,
      low: 236.46642564073093
  },
  {
      time: 1657450800,
      open: 236.2697591085071,
      close: 235.8633884725393,
      high: 235.8633884725393,
      low: 236.2697591085071
  },
  {
      time: 1657454400,
      open: 235.8633884725393,
      close: 236.18042221127615,
      high: 236.18042221127615,
      low: 235.8633884725393
  },
  {
      time: 1657458000,
      open: 236.18042221127615,
      close: 233.68776354307366,
      high: 233.68776354307366,
      low: 236.18042221127615
  },
  {
      time: 1657461600,
      open: 233.68776354307366,
      close: 232.41531269677412,
      high: 232.41531269677412,
      low: 233.68776354307366
  },
  {
      time: 1657465200,
      open: 232.41531269677412,
      close: 232.30620519797114,
      high: 232.30620519797114,
      low: 232.41531269677412
  },
  {
      time: 1657468800,
      open: 232.30620519797114,
      close: 233.90181668668407,
      high: 233.90181668668407,
      low: 232.30620519797114
  },
  {
      time: 1657472400,
      open: 233.90181668668407,
      close: 233.73488676829555,
      high: 233.73488676829555,
      low: 233.90181668668407
  },
  {
      time: 1657476000,
      open: 233.73488676829555,
      close: 232.9050251331327,
      high: 232.9050251331327,
      low: 233.73488676829555
  },
  {
      time: 1657479600,
      open: 232.9050251331327,
      close: 233.54376881507554,
      high: 233.54376881507554,
      low: 232.9050251331327
  },
  {
      time: 1657483200,
      open: 233.54376881507554,
      close: 234.54405317280242,
      high: 234.54405317280242,
      low: 233.54376881507554
  },
  {
      time: 1657486800,
      open: 234.54405317280242,
      close: 233.87125731765312,
      high: 233.87125731765312,
      low: 234.54405317280242
  },
  {
      time: 1657490400,
      open: 233.87125731765312,
      close: 233.58162719766113,
      high: 233.58162719766113,
      low: 233.87125731765312
  },
  {
      time: 1657494000,
      open: 233.58162719766113,
      close: 234.21205726610953,
      high: 234.21205726610953,
      low: 233.58162719766113
  },
  {
      time: 1657497600,
      open: 234.21205726610953,
      close: 234.0513550939518,
      high: 234.0513550939518,
      low: 234.21205726610953
  },
  {
      time: 1657501200,
      open: 234.0513550939518,
      close: 232.5877103271855,
      high: 232.5877103271855,
      low: 234.0513550939518
  },
  {
      time: 1657504800,
      open: 232.5877103271855,
      close: 230.41178026268796,
      high: 230.41178026268796,
      low: 232.5877103271855
  },
  {
      time: 1657508400,
      open: 230.41178026268796,
      close: 231.16212582032207,
      high: 231.16212582032207,
      low: 230.41178026268796
  },
  {
      time: 1657512000,
      open: 231.16212582032207,
      close: 231.29126419079816,
      high: 231.29126419079816,
      low: 231.16212582032207
  },
  {
      time: 1657515600,
      open: 231.29126419079816,
      close: 230.40673185806568,
      high: 230.40673185806568,
      low: 231.29126419079816
  },
  {
      time: 1657519200,
      open: 230.40673185806568,
      close: 228.47937813723442,
      high: 228.47937813723442,
      low: 230.40673185806568
  },
  {
      time: 1657522800,
      open: 228.47937813723442,
      close: 229.11212175465215,
      high: 229.11212175465215,
      low: 228.47937813723442
  },
  {
      time: 1657526400,
      open: 229.11212175465215,
      close: 230.376996622775,
      high: 230.376996622775,
      low: 229.11212175465215
  },
  {
      time: 1657530000,
      open: 230.376996622775,
      close: 231.57878821957013,
      high: 231.57878821957013,
      low: 230.376996622775
  },
  {
      time: 1657533600,
      open: 231.57878821957013,
      close: 232.878856792279,
      high: 232.878856792279,
      low: 231.57878821957013
  },
  {
      time: 1657537200,
      open: 232.878856792279,
      close: 231.19749461976065,
      high: 231.19749461976065,
      low: 232.878856792279
  },
  {
      time: 1657540800,
      open: 231.19749461976065,
      close: 232.47199545420062,
      high: 232.47199545420062,
      low: 231.19749461976065
  },
  {
      time: 1657544400,
      open: 232.47199545420062,
      close: 229.94301190501767,
      high: 229.94301190501767,
      low: 232.47199545420062
  },
  {
      time: 1657548000,
      open: 229.94301190501767,
      close: 230.82020347581502,
      high: 230.82020347581502,
      low: 229.94301190501767
  },
  {
      time: 1657551600,
      open: 230.82020347581502,
      close: 231.03264206353305,
      high: 231.03264206353305,
      low: 230.82020347581502
  },
  {
      time: 1657555200,
      open: 231.03264206353305,
      close: 231.25328150015622,
      high: 231.25328150015622,
      low: 231.03264206353305
  },
  {
      time: 1657558800,
      open: 231.25328150015622,
      close: 232.54859937229264,
      high: 232.54859937229264,
      low: 231.25328150015622
  },
  {
      time: 1657562400,
      open: 232.54859937229264,
      close: 232.25712519314072,
      high: 232.25712519314072,
      low: 232.54859937229264
  },
  {
      time: 1657566000,
      open: 232.25712519314072,
      close: 231.5446125588613,
      high: 231.5446125588613,
      low: 232.25712519314072
  },
  {
      time: 1657569600,
      open: 231.5446125588613,
      close: 230.45760664609583,
      high: 230.45760664609583,
      low: 231.5446125588613
  },
  {
      time: 1657573200,
      open: 230.45760664609583,
      close: 227.48963595845268,
      high: 227.48963595845268,
      low: 230.45760664609583
  },
  {
      time: 1657576800,
      open: 227.48963595845268,
      close: 225.43864124521392,
      high: 225.43864124521392,
      low: 227.48963595845268
  },
  {
      time: 1657580400,
      open: 225.43864124521392,
      close: 224.23830454622015,
      high: 224.23830454622015,
      low: 225.43864124521392
  },
  {
      time: 1657584000,
      open: 224.23830454622015,
      close: 225.03536615865218,
      high: 225.03536615865218,
      low: 224.23830454622015
  },
  {
      time: 1657587600,
      open: 225.03536615865218,
      close: 224.37681362636334,
      high: 224.37681362636334,
      low: 225.03536615865218
  },
  {
      time: 1657591200,
      open: 224.37681362636334,
      close: 224.96476196825867,
      high: 224.96476196825867,
      low: 224.37681362636334
  },
  {
      time: 1657594800,
      open: 224.96476196825867,
      close: 224.63173795983477,
      high: 224.63173795983477,
      low: 224.96476196825867
  },
  {
      time: 1657599983.43,
      open: 224.63173795983477,
      close: 224.61083484219353,
      high: 224.61083484219353,
      low: 224.63173795983477
  }
];

export const tokenData: TokenData = {
  address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
  exists: true,
  liquidityToken: 111.42769231655895,
  liquidityUSD: 25027.86699576138,
  liquidityUSDChange: -3.5857606347562667,
  name: "Wrapped BNB",
  priceUSD: 224.61083484219353,
  priceUSDChange: -2.8746629133876134,
  priceUSDChangeWeek: -3.2881935813323686,
  symbol: "WBNB",
  txCount: 13,
  volumeUSD: 6080.632637119386,
  volumeUSDChange: 67.83305395679365,
  volumeUSDWeek: 29619.161739890464,
};