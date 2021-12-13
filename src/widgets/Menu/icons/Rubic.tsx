import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <path d="M27.0492 7.96817L13.3685 0L0.0283832 7.82485L0 23.5892L13.4536 31.5574L27.0492 23.7612V7.96817ZM13.3969 2.40765L23.5013 8.31212L13.4536 14.2166L3.34922 8.31212L13.3969 2.40765ZM12.2332 28.2899L2.07197 22.414V10.6624L12.2048 16.5669V28.2899H12.2332ZM14.8444 16.7389L24.9772 10.8344V22.5574L14.8444 28.4905V16.7389Z" />
    </Svg>
  );
};

export default Icon;
