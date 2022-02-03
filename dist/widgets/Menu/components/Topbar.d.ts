import React from "react";
import { NavProps, PushedProps } from "../types";
interface Props extends NavProps, PushedProps {
    open: any;
    setOpen: any;
    account?: string;
    showMenu?: any;
    isMobile: boolean;
}
declare const Topbar: React.FC<Props>;
export default Topbar;
