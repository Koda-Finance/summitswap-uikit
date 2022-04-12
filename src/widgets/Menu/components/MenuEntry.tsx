import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
  isMobile?: boolean;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean }>`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.sidebarColor};
  transition: color 0.4s;
  flex-grow: 1;
  font-weight: 700;
  font-size: 16px;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding-left: ${({ isMobile }) => isMobile ? '5' : '40'}px;
  // padding: ${({ secondary }) => (secondary ? "0 32px" : "0 16px")};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  background-color: ${({ secondary, theme }) => (secondary ? theme.colors.background : "transparent")};
  color: ${({ isActive, theme }) => isActive ? theme.colors.sidebarActiveColor : theme.colors.sidebarColor};
  // box-shadow: ${({ isActive, theme }) => (isActive ? `inset 4px 0px 0px ${theme.colors.primary}` : "none")};
  border-bottom: 2px solid rgba(13,39,43,.5);

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: ${({ theme }) => theme.colors.sidebarActiveColor};
  }

  &:hover {
    ${LinkLabel} {
      color: ${({ theme }) => theme.colors.sidebarActiveColor};
    }
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed);

export { MenuEntry, LinkLabelMemo as LinkLabel };
