import React from "react";
import Button from "../../components/Button/Button";
import Flex from "../../components/Box/Flex";
import Text from "../../components/Text/Text";
import { connectorLocalStorageKey, walletConnectConfig, walletLocalStorageKey } from "./config";
import { Login, Config } from "./types";
import { isDesktop } from "react-device-detect";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <Flex
      width="100%"
      height='40px'
      borderBottom='1px solid #0d1b24'
      onClick={() => {
        // TW point to WC on desktop
        if (title === "TrustWallet" && walletConnectConfig && isDesktop) {
          login(walletConnectConfig.connectorId);
          localStorage?.setItem(walletLocalStorageKey, walletConnectConfig.title);
          localStorage?.setItem(connectorLocalStorageKey, walletConnectConfig.connectorId);
          onDismiss();
          return;
        }
        if (!window.ethereum && walletConfig.redirectUrl) {
          window.open(walletConfig.redirectUrl, "_blank", "noopener noreferrer");
        } else {
          login(walletConfig.connectorId);
          localStorage?.setItem(walletLocalStorageKey, walletConfig.title);
          localStorage?.setItem(connectorLocalStorageKey, walletConfig.connectorId);
          onDismiss();
        }
      }}
      justifyContent="space-between"
      alignItems='center'
      mb={mb}
      style={{ cursor: 'pointer' }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Text fontSize='16px' fontWeight='600' color="sidebarColor" mr="16px">
        {title}
      </Text>
      <Icon width="32px" />
    </Flex>
  );
};

export default WalletCard;
