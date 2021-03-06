import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.sidebarColor};
`;

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (
  <Modal
    title="Connect to a wallet"
    bodyPadding="0 30px 30px 30px"
    hideSeparator
    showWalletBack
    onDismiss={onDismiss}
  >
    {config.map((entry, index) => (
      !window.ethereum && entry.redirectUrl ? (
        <a key={entry.title} href={entry.redirectUrl} target="_blank" rel="noopener noreferrer">
          <WalletCard
            login={login}
            walletConfig={entry}
            onDismiss={onDismiss}
            mb={index < config.length - 1 ? "8px" : "0"}
          />
        </a>
      ) : (
        <WalletCard
          key={entry.title}
          login={login}
          walletConfig={entry}
          onDismiss={onDismiss}
          mb={index < config.length - 1 ? "8px" : "0"}
        />
      )
    ))}
    <HelpLink href="https://t.me/kodakingofdogaltschat" external>
      <HelpIcon color="sidebarColor" fontSize="16px" mr="6px" />
      Need help connecting? Contact us
    </HelpLink>
  </Modal>
);

export default ConnectModal;
