import React from 'react';
import { Login } from "../../WalletModal/types";
interface Props {
    account?: string;
    login: Login;
    logout: () => void;
}
declare const PanelHeader: React.FC<Props>;
export default PanelHeader;
