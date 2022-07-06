import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg fill="none" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        d="M13.5429 23.2501C8.14621 23.2501 3.77142 18.2133 3.77142 12.0001C3.77142 5.78689 8.14621 0.750092 13.5429 0.750092C18.9395 0.750092 23.3143 5.78689 23.3143 12.0001C23.3143 18.2133 18.9395 23.2501 13.5429 23.2501Z"
        stroke="#00D5A5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill="none"
        d="M16.1143 8.40008C15.4596 7.8195 14.6428 7.5018 13.8 7.50008C11.6698 7.50008 9.94286 9.51383 9.94286 12.0001C9.94286 14.4863 11.6698 16.5001 13.8 16.5001C14.6681 16.5001 15.4694 16.1648 16.1143 15.6001"
        stroke="#00D5A5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill="none"
        d="M14.0571 0.750092C9.60033 0.750092 0.685699 1.87509 0.685699 12.0001C0.685699 22.1251 9.60033 23.2501 14.0571 23.2501"
        stroke="#00D5A5"
        stroke-width="2"
      />
    </Svg>
  );
};

export default Icon;
