import React, { Dispatch, SetStateAction } from "react";
import { PanelProps, PushedProps } from "../types";
interface Props extends PanelProps, PushedProps {
    isMobile: boolean;
    setIsConnectButtonShown: Dispatch<SetStateAction<boolean>>;
}
declare const PanelBody: React.FC<Props>;
export default PanelBody;
