import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import Flex from "../../../components/Box/Flex";
import { LogoTextIcon } from "../../..";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";

const NetworkLogo = styled.img`
  object-fit: cover;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  showConnectButton: boolean;
  networkLogo: string;
}

const PanelHeader: React.FC<Props> = ({
  account,
  login,
  logout,
  showConnectButton,
  networkLogo,
}) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    login,
    logout,
    account
  );
  const accountEllipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null;
  return (
    <StyledContainer>
      <Flex justifyContent="center" padding="10px">
        <a href="/">
          <LogoTextIcon />
        </a>
      </Flex>
      {showConnectButton && (
        <Flex justifyContent="center" style={{ gap: 10 }}>
          {account ? (
            <Button
              scale="sm"
              variant="tertiary"
              onClick={() => {
                onPresentAccountModal();
              }}
            >
              {accountEllipsis}
            </Button>
          ) : (
            <Button scale="xxs" onClick={() => onPresentConnectModal()}>
              CONNECT
            </Button>
          )}
          <NetworkLogo src={networkLogo} alt="Network" />
        </Flex>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin-bottom: 30px;
  padding: 10px;
  z-index: 3;
`;

export default PanelHeader;
