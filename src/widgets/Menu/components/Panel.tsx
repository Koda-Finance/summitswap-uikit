import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import PanelHeader from "./PanelHeader";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "../config";
import { PanelProps, PushedProps } from "../types";
import { Login } from "../../WalletModal/types";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
  account?: string;
  login: Login;
  logout: () => void;
  showConnectButton: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.sidebarBackground};
  width: 0px;
  height: 100vh;
  transition: padding-top 0.2s, width 0.2s;
  border-right: ${({ isPushed }) =>
    isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0};
  z-index: 11;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  ${({ theme }) => theme.mediaQueries.nav} {
    width: ${SIDEBAR_WIDTH_FULL}px;
    overflow: unset;
  }
`;

const BoldV = styled.div`
  position: absolute;
  top: 200px;
  left: 0px;
  width: 238px;
  height: 576px;
  filter: opacity(0.5);
  background: url(data:;base64,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);
  background-size: 100% 100%;
`;

const Omni = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(data:;base64,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MQASAyAxQGIAJAZAYgAkBkgMgMQASAyAxACJAZAYAIkBEisCgMQASAyAxACJAZAYAIkBkBggMQASAyAxABIDJAZAYgAkBkBigMQASAyAxABIDJAYAIkBkBgAiQESAyAxABIDJAZAYgAkBkBigMQASAyAxABIDJAYAIkBkBgAiQESAyAxABIDIDFAYgAkBkBiACQGSAyAxABIDIDEAIkBkBgAiQESAyAxABIDIDFAYgAkBkBiACQGSAyAxABIDIDEAIkBkBgAiQGQGCAxABIDIDEAEgMkBkBiACQGQGKAxABIDIDEAIkBkBgAiQGQGCAxABIDIDEAEgMkBkBiACQGQGKAxABIDIDEAEgMkBgAiQGQGACJARIDIDEAEgMkBkBiACQGQGKAxABIDIDEAEgMkBgAiQGQGACJARIDIDEAEgMgMUBiACQGQGIAJAZIDIDEAEgMgMQAiQGQGACJARIDIDEAEgMgMUBiACQGQGIAJAZIDIDEAEgMgMQAiQGQGACJAZAYIDEAEgMgMQASAyQGQGIAJAZAYoDEAEgMgMQAiQGQGACJAZAYIDEAEgMgMQASAyQGQGIAJAZAYoDEAEgMgMQASAyQGACJAZAYAIkBEgMgMQASAyQGQGIAJAZAYoDEAEgMgMQASAyQGACJAZAYAIkBEgMgMQASAyAxQGIAJAZAYgAkBkgMgMQASAyAxACJAZAYAIkBEgMgMQASAyAxQGIAJAZAYgAkBkgMgMQASAyAxACJAZAYAIkBkBggMQASAyAxABIDJAZAYgAkBkBigMQASAyAxACJAZAYAIkBkBggMQASAyAxABIDJAZAYgAkBkBigMQASAyAxABIDJAYAIkBkBgAiQESAyAxABIDJFYEAIkBkBgAiQESAyAxABIDIDFAYgAkBkBiACQGSAyAxABIDIDEAIkBkBgAiQGQGCAxABIDIDEAEgMkBkBiACQGSAyAxABIDIDEAIkBkBgAiQGQGCAxABIDIDEAEgMkBkBiACQGQGKAxABIDIDEAEgMkBgAiQGQGACJARIDIDEAEgMkBkBiACQGQGKAxABIDIDEAEgMkBgAiQGQGACJARIDIDEAEgMgMUBiACQGQGIAJAZIDIDEAEgMgMQAiQGQGACJARIDIDEAEgMgMUBiACQGQGIAJAZIDIDEAEgMgMQAiQGQGACJAZAYIDEAEgMgMQASAyQGQGIAJAZIDIDEAEgMgMQAiQGQGACJAZAYIDEAEgMgMQASAyQGQGIAJAZAYoDEAEgMgMQASAyQGACJAZAYAIkBEgMgMQASAyQGQGIAJAZAYoDEAEgMgMQASAyQGACJAZAYAIkBEgMgMQASAyAxQGIAJAZAYgAkBkgMgMQASAyAxACJAZAYAIkBEgMgMQASAyAxQGIAJAZAYgAkBkgMgMQASAyAxACJAZAYAIkBkBggMQASAyAxABIDJAZAYgAkBkgMgMQASAyAxACJAZAYAIkBkBggMQASAyAxABIDJAZAYgAkBkBigMQASAyAxABIDJAYAIkBkBgAiQESAyAxABIDJAZAYgAkBkBigMQASAyAxABIDJAYAIkBkBgAiQESAyAxABIDIDFAYgAkBkBiACQGSAyAxABIDIDEAIkBkBgAiQESAyAxABIDIDFAYgAkBkBiACQGSAyAxABIDIDEAIkBkBgAiQGQGCAxABIDIDEAEgMkBkBiACQGSKwIABIDIDEAEgMkBkBiACQGQGKAxABIDIDEAEgMTMD/DwAIMrdag+dv8gAAAABJRU5ErkJggg==);
  background-size: 100% 200%;
  z-index: 2;
`;

const Panel: React.FC<Props> = (props) => {
  const {
    isPushed,
    showMenu,
    account,
    login,
    logout,
    showConnectButton,
  } = props;

  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu}>
      <BoldV />
      <PanelHeader
        account={account}
        login={login}
        logout={logout}
        showConnectButton={showConnectButton}
      />
      <div style={{ position: "relative", height: "100%" }}>
        <PanelBody {...props} />
        <PanelFooter {...props} />
      </div>
      {/* <Omni /> */}
    </StyledPanel>
  );
};

export default Panel;
