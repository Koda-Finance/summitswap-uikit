import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
  setIsConnectButtonShown: Dispatch<SetStateAction<boolean>>;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  overflow: auto;
  // flex: 2;
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
  &::-webkit-scrollbar-track {
    box-shadow: none;
  }
`;

const PanelBody: React.FC<Props> = ({
  isPushed,
  pushNav,
  isMobile,
  links,
  setIsConnectButtonShown,
}) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = (isConnectButtonShown: boolean) => {
    setIsConnectButtonShown(isConnectButtonShown);
    isMobile ? () => pushNav(false) : undefined;
  };

  return (
    <Container>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const isConnectButtonShown = entry.isConnectButtonShown == undefined ? true : entry.isConnectButtonShown;
        const calloutClass = entry.calloutClass
          ? entry.calloutClass
          : undefined;

        if (entry.items) {
          const itemsMatchIndex = entry.items.findIndex(
            (item) => item.href === location.pathname
          );
          const initialOpenState =
            entry.initialOpenState === true
              ? entry.initialOpenState
              : itemsMatchIndex >= 0;

          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              initialOpenState={initialOpenState}
              className={calloutClass}
              isActive={entry.items.some(
                (item) => item.href === location.pathname
              )}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntry
                    key={item.href}
                    secondary
                    isActive={item.href === location.pathname}
                    onClick={() => handleClick(isConnectButtonShown)}
                  >
                    <MenuLink href={item.href}>{item.label}</MenuLink>
                  </MenuEntry>
                ))}
            </Accordion>
          );
        }
        return (
          <MenuEntry
            key={entry.label}
            isActive={entry.href === location.pathname}
            className={calloutClass}
          >
            <MenuLink
              href={entry.href}
              onClick={() => handleClick(isConnectButtonShown)}
            >
              {iconElement}
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;
