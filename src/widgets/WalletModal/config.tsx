import Metamask from "./icons/Metamask";
import MathWallet from "./icons/MathWallet";
import TokenPocket from "./icons/TokenPocket";
import TrustWallet from "./icons/TrustWallet";
import WalletConnect from "./icons/WalletConnect";
import BinanceChain from "./icons/BinanceChain";
import SafePalWallet from "./icons/SafePalWallet";
import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
    redirectUrl: `https://metamask.app.link/dapp/${window.location.href.replace(/^https?:\/\//, "")}`,
  },
  {
    title: "TrustWallet",
    icon: TrustWallet,
    connectorId: ConnectorNames.Injected,
    redirectUrl: `https://link.trustwallet.com/open_url?coin_id=20000714&url=https://summitswap.finance/`
  },
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: ConnectorNames.Injected,
    redirectUrl: `https://mathwallet.org/`,
  },
  {
    title: "TokenPocket",
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
    redirectUrl: `https://www.tokenpocket.pro/`,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
  },
  {
    title: "Binance Chain Wallet",
    icon: BinanceChain,
    connectorId: ConnectorNames.BSC,
  },
  {
    title: "SafePal Wallet",
    icon: SafePalWallet,
    connectorId: ConnectorNames.WalletConnect,
  },
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";
export const walletLocalStorageKey = "wallet";

export const walletConnectConfig = connectors.find((c) => c.title === "WalletConnect");
