import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import Flex from "../../components/Box/Flex";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { InjectedProps } from "./types";

interface Props extends InjectedProps {
  title: string;
  hideCloseButton?: boolean;
  hideSeparator?: boolean;
  showWalletBack?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
}

const StyledModal = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.sidebarBackground};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  // border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 20px;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: 360px;
    max-width: 100%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  padding: 18px 30px;
`;

const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

const Separator = styled.div`
  display: flex;
  justify-content: center;
  >div {
    width: calc(100% - 60px);
    height: 1px;
    background: #0d1b24;
  }
`

const WalletBack = styled.div`
  pointer-events: none;
  width: 157px;
  height: 181px;
  opacity: .1;
  position: absolute;
  top: 20px;
  right: 0px;
  background-size: 100% 100%;
  background-image: url(data:;base64,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);
`

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  showWalletBack = false,
  hideCloseButton = false,
  hideSeparator = false,
  bodyPadding = "30px",
}) => (
  <StyledModal>
    {showWalletBack && <WalletBack /> }
    <ModalHeader>
      <ModalTitle>
        {onBack && (
          <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
            <ArrowBackIcon color="sidebarColor" />
          </IconButton>
        )}
        <Heading color='sidebarColor' fontSize='26px' fontWeight='800'>{title}</Heading>
      </ModalTitle>
      {!hideCloseButton && (
        <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog" style={{ justifyContent: 'flex-end' }}>
          <CloseIcon color='sidebarColor' width='24px' height='24px' cursor='pointer'/>
        </IconButton>
      )}
    </ModalHeader>
    {!hideSeparator &&
      <Separator>
        <div></div>
      </Separator>
    }
    <Flex flexDirection="column" p={bodyPadding}>
      {children}
    </Flex>
  </StyledModal>
);

export default Modal;
