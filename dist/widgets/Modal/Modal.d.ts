import React from "react";
import { InjectedProps } from "./types";
interface Props extends InjectedProps {
    title: string;
    hideCloseButton?: boolean;
    hideSeparator?: boolean;
    showWalletBack?: boolean;
    onBack?: () => void;
    bodyPadding?: string;
}
declare const Modal: React.FC<Props>;
export default Modal;