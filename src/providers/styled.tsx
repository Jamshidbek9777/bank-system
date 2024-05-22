"use client";

import { useServerInsertedHTML } from "next/navigation";
import { PropsWithChildren, useState } from "react";
import {
     ServerStyleSheet,
     StyleSheetManager,
     ThemeProvider,
} from "styled-components";
import { GlobalStyles } from "../style/global";

export const StyledComponentsRegistry = ({ children }: PropsWithChildren) => {
     const [styledComponentsStyleSheet] = useState(
          () => new ServerStyleSheet()
     );

     useServerInsertedHTML(() => {
          const styles = styledComponentsStyleSheet.getStyleElement();
          styledComponentsStyleSheet.instance.clearTag();
          return styles;
     });

     if (typeof window !== "undefined") return children;

     return (
          <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
               <GlobalStyles />
               <ThemeProvider theme={{}}>{children}</ThemeProvider>
          </StyleSheetManager>
     );
};
