"use client";

// import { useLocale } from "next-intl";
import { PropsWithChildren } from "react";
import { MessageInstance } from "antd/es/message/interface";
import { ConfigProvider, message as antMessage } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { theme } from "@/style";

let message: MessageInstance;

export const Antd = ({ children }: PropsWithChildren) => {
     //      const locale = useLocale();
     const [messageApi, messageContextHolder] = antMessage.useMessage();

     message = messageApi;

     return (
          <ConfigProvider csp={{ nonce: "lets-trip" }} theme={{ ...theme }}>
               <AntdRegistry>
                    {messageContextHolder}
                    {children}
               </AntdRegistry>
          </ConfigProvider>
     );
};

export { message };
