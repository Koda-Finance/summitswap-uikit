import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg fill="none" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        d="M5.17241 1.68758L1.75862 5.81258V20.2501C1.75862 20.7971 1.9984 21.3217 2.42521 21.7085C2.85201 22.0953 3.43089 22.3126 4.03448 22.3126H19.9655C20.5691 22.3126 21.148 22.0953 21.5748 21.7085C22.0016 21.3217 22.2414 20.7971 22.2414 20.2501V5.81258L18.8276 1.68758H5.17241Z"
        stroke="#00D5A5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill="none"
        d="M1.75862 5.81258H22.2414"
        stroke="#00D5A5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill="none"
        d="M16.5517 9.93757C16.5517 11.0316 16.0722 12.0808 15.2185 12.8544C14.3649 13.628 13.2072 14.0626 12 14.0626C10.7928 14.0626 9.63507 13.628 8.78147 12.8544C7.92783 12.0808 7.44827 11.0316 7.44827 9.93757"
        stroke="#00D5A5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Icon;
