import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import Flex from "../../../components/Box/Flex";
import { LogoTextIcon } from "../../..";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const PanelHeader: React.FC<Props> = ({ account, login, logout }) => {
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
        <LogoTextIcon />
      </Flex>
      {false && (
        <Flex justifyContent="center">
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
