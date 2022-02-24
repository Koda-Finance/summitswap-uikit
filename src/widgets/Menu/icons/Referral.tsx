import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
    	<image xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACbklEQVRIibXVSaiOYRQH8N/9zDNRLG6EmxIJKfMCxYKMGxYsiKIkobiiZFgIKUTGTLEQioWQhSFDLpmKiNQl88ztItfieb68Xu93fRb+9S7ec85z/md8npKamhr/E3VL7uwvxq4LZqAHWuAHXuA0tqOq0MHcXxyX4SbuYhQ+4GqUNcRifMHWghnU4nwZluIIhuB1AbvBOITp6IOKYgh2Ywq6404tQcA5tEW5kN1wnMors0pUHp23zHA+D7dwPkaexCpMw0l0KERQhpXoi/cpXQXW4Cge4SwWpGx2YofQfFDi9r6kwQE0wtjUwU2YgHYJWS9cQ0/cSNm/xUwcTGaQw0ZM9idGC+kncV0YgPIM+72Yk3eax5hI8DHjQA5vMuSf0DRDvgcdkUtn0DzDGCoxMUM+GCcy5BXCMvbIYS7eYR1Khcm5JzEJWILZaJ2QzUErbMggqMFXtK2LS1gkNG2cMClN/D5FJ7ENV9AZ7bE+nimEOqjO4SI2x1Q/YJfQi3fRsBlmYRIeRNln4f5Zi5EZztugPh4ke/AYWxL/g4R5f4XlWI0RUfdaKOd77Ec1DqNx1A+PAVQmCSrwDcPi/zmcEaahNVakonyD8cLGD40BHYu66fHsH5tcKtS6Hp5gIZ5mlCCNC0JPqiLhIHE/0gTzo/ONwl78C7rhudDLtXiWRQD9hcelF17+A0FDTI0kC/PCLIJKdBVKdVkYt2IwULibfsu80It2N0ZUD9+FG3SEMLJ5lArL9yLqyjAg7ai2F60avdFP2PIDkSz//jaK/8eFZf2U5aQ2gjwuJSLrFCOvwn2/lrEQcsUQJPEwfsWiwU/awI84+iwB5AAAAABJRU5ErkJggg==" width="24" height="24" />
    </Svg>
  );
};

export default Icon;
