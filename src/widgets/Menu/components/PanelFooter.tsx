import React from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../config";
import { BasicPanelProps, PushedProps } from "../types";
import CashState from "./CashState";
import { FacebookIcon, DiscordIcon, InstagramIcon, TelegramIcon, TwitterIcon } from "../icons";

interface Props extends BasicPanelProps, PushedProps { }

const Container = styled.div`
  position: absolute;
  bottom: 40px;
  z-index: 3;
  flex: 1.3;
  padding: 35px 10px 0 30px;
  background-color: transparent;
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
`;

const SocialEntry = styled.div`
  margin-top: 5px;
  padding-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  >svg {
    cursor: pointer;
    width: 20px; height: 20px;
    fill: ${({ theme }) => theme.colors.sidebarColor}
  }
  >svg+svg {
    margin-left: 5px;
  }
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd
}) => {
  // if (!isPushed) {
  //   return (
  //     <Container>
  //       <IconButton variant="text" onClick={() => pushNav(true)}>
  //         <CogIcon />
  //       </IconButton>
  //     </Container>
  //   );
  // }

  return (
    <Container>
      {/* <SocialEntry>
        <CakePrice cakePriceUsd={cakePriceUsd} />
        <SocialLinks />
      </SocialEntry> */}
      <SettingsEntry>
        <CashState />
      </SettingsEntry>
      <SocialEntry>
        <DiscordIcon />
        <TelegramIcon />
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </SocialEntry>
    </Container>
  );
};

export default PanelFooter;
