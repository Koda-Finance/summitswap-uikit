interface Window {
  ethereum?: {
    isMetaMask?: true;
    isOpera?: true;
    isCoinbaseWallet?: true;
    isTrust?: true;
    providers?: any[];
    request?: (...args: any[]) => Promise<void>;
    on?: (...args: any[]) => void;
    removeListener?: (...args: any[]) => void;
  };
  web3?: any;
  BinanceChain?: BinanceChain;
}

interface BinanceChain {
  send: unknown;
  enable: () => Promise<string[]>;
  on?: (method: string, listener: (...args: any[]) => void) => void;
  removeListener?: (method: string, listener: (...args: any[]) => void) => void;
}
