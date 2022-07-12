import React from "react";
import { Box } from "../Box";
import PercentComponent from "./Percent";
import TextComponent from "./Text";

export default {
  title: "Components/Text",
  component: TextComponent,
  argTypes: {
    bold: {
      name: "bold",
      table: {
        type: { summary: "bool", detail: "Bold the text" },
        defaultValue: { summary: false },
      },
      control: {
        type: null,
      },
    },
    fontSize: {
      name: "fontSize",
      table: {
        type: { summary: "string", detail: "Fontsize in px or em" },
        defaultValue: { summary: "16px" },
      },
      control: {
        type: null,
      },
    },
    color: {
      name: "color",
      table: {
        type: {
          summary: "string",
          detail: "Color from the theme, or CSS color",
        },
        defaultValue: { summary: "theme.colors.text" },
      },
      control: {
        type: null,
      },
    },
  },
};

export const Text: React.FC = () => {
  return (
    <div>
      <TextComponent>Default</TextComponent>
      <TextComponent bold>Bold text</TextComponent>
      <TextComponent small>Small text</TextComponent>
      <TextComponent fontSize="24px">Custom fontsize</TextComponent>
      <TextComponent color="red">Custom color</TextComponent>
      <TextComponent color="primary">Custom color from theme</TextComponent>
      <TextComponent color="secondary" textTransform="uppercase">
        with text transform
      </TextComponent>
      <TextComponent textAlign="center">center</TextComponent>
    </div>
  );
};

export const Percent: React.FC = () => {
  return (
    <div>
      <Box display="flex">
        <TextComponent mr={20}>8.23 Percent:</TextComponent>
        <PercentComponent value={8.23} />
      </Box>
      <Box display="flex">
        <TextComponent mr={20}>0.00 Percent:</TextComponent>
        <PercentComponent value={0.0} />
      </Box>
      <Box display="flex">
        <TextComponent mr={20}>-8.12 Percent:</TextComponent>
        <PercentComponent value={-8.12} />
      </Box>
    </div>
  );
};
