import { ThemeConfig } from "antd/es/config-provider/context";

const controlHeightLG = 48;
const controlHeight = 48;

const token: ThemeConfig["token"] = {
     colorPrimary: "#0EA5E9",
     borderRadius: 8,
     colorLink: "#0EA5E9",
};

const components: ThemeConfig["components"] = {
     Button: {
          controlHeightLG,
          colorText: "#0A4C69",
          fontSize: 16,
          defaultColor: "#0EA5E9",
          defaultBorderColor: "#0EA5E9",
          defaultBg: "rgba(43, 172, 228, 0.10)",
          borderRadius: 16,
          borderRadiusLG: 16,
     },

     Card: {
          paddingLG: 16,
     },

     Drawer: {
          paddingLG: 16,
     },

     Form: {
          labelFontSize: 16,
          controlHeightLG: 8,
          fontWeightStrong: 500,
          itemMarginBottom: 16,
     },

     Input: {
          // padding: 12,
          paddingBlock: 12,
          controlHeightLG,
          colorTextDisabled: "#02053D",
          colorBorder: "#CBD5E1",
          borderRadius: 12,
     },

     DatePicker: {
          controlHeightLG,
          controlHeight,
          borderRadius: 12,
     },

     Layout: {
          bodyBg: "#f8fafc",
          headerBg: "#fff",
          headerPadding: 24,
     },

     Menu: {
          itemColor: "#94A3B8",
          padding: 20,
     },

     Select: {
          controlHeight,
          controlHeightLG,
          padding: 12,
          borderRadius: 12,
          optionActiveBg: "#E7F6FD",
     },

     List: {
          itemPaddingLG: "16px 0",
     },

     Tabs: {
          fontSize: 16,
          padding: 4,
          colorBorderSecondary: "#EBEBEF",
          cardBg: "#fff",
     },

     Checkbox: {
          controlInteractiveSize: 20,
     },

     Radio: {
          radioSize: 20,
          dotSize: 10,
          colorPrimary: "#00E28D",
     },

     Tag: {
          marginXS: 0,
     },

     Skeleton: {
          borderRadiusSM: 8,
     },

     Switch: {
          colorPrimary: "#65C466",
          colorPrimaryHover: "#65C466",
          handleSize: 27,
          trackHeight: 31,
          trackMinWidth: 51,
     },

     Typography: {
          fontSize: 16,
     },

     Segmented: {
          itemSelectedBg: "#0ea5e9",
          itemSelectedColor: "#fff",
     },

     Steps: {
          dotSize: 25,
     },

     Divider: {
          marginLG: 15,
          colorText: "var(--gray)",
          colorSplit: "#CBD5E1",
          lineHeight: 2,
     },

     Pagination: {
          itemActiveBg: "#0EA5E9",
          borderRadius: 50,
     },

     Table: {
          headerBg: "#fff",
          headerSplitColor: "#fff",
          headerColor: "#64748b",
     },
};

export const theme = {
     token,
     components,
};
