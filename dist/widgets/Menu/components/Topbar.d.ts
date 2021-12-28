import React from 'react';
import { Login } from "../../WalletModal/types";
import { PanelProps, PushedProps } from "../types";
interface Props extends PanelProps, PushedProps {
    open: any;
    setOpen: any;
    account?: string;
    login: Login;
    logout: () => void;
    showMenu?: any;
    isMobile: boolean;
}
declare const Topbar: React.FC<Props>;
export default Topbar;
