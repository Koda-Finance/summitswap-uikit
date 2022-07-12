export declare const getFirstThreeNonZeroDecimals: (value: number) => string;
export declare type formatAmountNotation = "compact" | "standard";
/**
 * This function is used to format token prices, liquidity, amount of tokens in TX, and in general any numbers on info section
 * @param amount - amount to be formatted
 * @param notation - whether to show 1M or 1,000,000
 * @param displayThreshold - threshold below which it will return simply <displayThreshold instead of actual value, e.g. if 0.001 -> returns <0.001 for 0.0005
 * @param tokenPrecision - set to true when you want precision to be 3 decimals for values < 1 and 2 decimals for values > 1
 * @param isInteger - if true the values will contain decimal part only if the amount is > 1000
 * @returns formatted string ready to be displayed
 */
export declare const formatAmount: (amount: number | undefined, options?: {
    notation?: "compact" | "standard" | undefined;
    displayThreshold?: number | undefined;
    tokenPrecision?: boolean | undefined;
    isInteger?: boolean | undefined;
} | undefined) => string;
