import React from "react";
import Button from "../../components/Button/Button";
import Flex from "../../components/Box/Flex";
import Text from "../../components/Text/Text";
import { connectorLocalStorageKey } from "./config";
import { Login, Config } from "./types";

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
        if (window.ethereum && walletConfig.redirectUrl) return;
        login(walletConfig.connectorId);
        window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
        onDismiss();
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
