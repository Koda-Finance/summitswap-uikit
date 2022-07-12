import React from "react";
interface TabProps {
    isActive?: boolean;
    onClick?: () => void;
}
export declare const TabToggle: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, TabProps, never>;
interface TabToggleGroupProps {
    children: React.ReactElement[];
}
export declare const TabToggleGroup: React.FC<TabToggleGroupProps>;
export {};
