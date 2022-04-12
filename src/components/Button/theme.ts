import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    borderRadius: '33px',
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "25px",
    fontSize: "16px",
    padding: "15px 23px",
  },
  [scales.XXS]: {
    height: "20px",
    fontSize: "14.4px",
    padding: "15px 23px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    background: "linear-gradient(#00d4a4, #008668)",
    boxShadow: "0px 0px 15px 1px grey",
    color: "white",
  },
  [variants.SECONDARY]: {
    background: "menuItemActiveBackground",
    color: "white"
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primary",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "white",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
  },
  [variants.AWESOME]: {
    backgroundColor: "menuItemActiveBackground",
    color: "sidebarColor",
    boxShadow: "none",
  },
};
