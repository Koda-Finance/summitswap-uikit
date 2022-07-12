import React, { useState } from "react";
import { Box } from "../Box";
import { ChartView } from "../Charts/types";
import { Text } from "../Text";
import {
  TabToggle as TabToggleComponent,
  TabToggleGroup as TabToggleGroupComponent
} from "./TabToggle";

export default {
  title: "Components/Tab",
  component: TabToggleComponent,
  argTypes: {},
};

export const TabToggle: React.FC = () => {
  const [view, setView] = useState(ChartView.VOLUME);
  return (
    <Box width="500px">
      <TabToggleGroupComponent>
        <TabToggleComponent
          isActive={view === ChartView.VOLUME}
          onClick={() => setView(ChartView.VOLUME)}
        >
          <Text
            color={view === ChartView.VOLUME ? "primary" : "white"}
            bold={view === ChartView.VOLUME}
          >
            Volume
          </Text>
        </TabToggleComponent>
        <TabToggleComponent
          isActive={view === ChartView.LIQUIDITY}
          onClick={() => setView(ChartView.LIQUIDITY)}
        >
          <Text
            color={view === ChartView.LIQUIDITY ? "primary" : "white"}
            bold={view === ChartView.LIQUIDITY}
          >
            Liquidity
          </Text>
        </TabToggleComponent>
        <TabToggleComponent
          isActive={view === ChartView.PRICE}
          onClick={() => setView(ChartView.PRICE)}
        >
          <Text
            color={view === ChartView.PRICE ? "primary" : "white"}
            bold={view === ChartView.PRICE}
          >
            Price
          </Text>
        </TabToggleComponent>
      </TabToggleGroupComponent>
      <br />
      <Box px="24px">
        {view === ChartView.LIQUIDITY ? (
          <Text>Liquidity Description</Text>
        ) : view === ChartView.VOLUME ? (
          <Text>Volume Description</Text>
        ) : view === ChartView.PRICE ? (
          <Text>Price Description</Text>
        ) : null}
      </Box>
    </Box>
  );
};
