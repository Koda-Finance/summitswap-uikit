import React, { Dispatch, SetStateAction } from "react";
import { PanelProps, PushedProps } from "../types";
import { Login } from "../../WalletModal/types";
interface Props extends PanelProps, PushedProps {
    showMenu: boolean;
    isMobile: boolean;
    account?: string;
    login: Login;
    logout: () => void;
    setShowConnect: Dispatch<SetStateAction<boolean>>;
    showConnect: boolean;
}
declare const Panel: React.FC<Props>;
export default Panel;
