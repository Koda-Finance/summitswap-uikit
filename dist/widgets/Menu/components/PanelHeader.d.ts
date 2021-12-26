import React from "react";
import { Login } from "../../WalletModal/types";
interface Props {
    account?: string;
    login: Login;
    logout: () => void;
    showConnect: boolean;
}
declare const PanelHeader: React.FC<Props>;
export default PanelHeader;
