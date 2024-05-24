import { Box, Container } from "@/components";
import { StyledHeader } from "./style";
import { useState, useEffect } from "react";
import { Button, Drawer, Dropdown, MenuProps, Space } from "antd";
import styled from "styled-components";
import { media } from "@/style";
import { useRouter } from "next/navigation";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { DownOutlined } from "@ant-design/icons";

export const Header = () => {
     const [user, setUser] = useState(null);
     const [open, setOpen] = useState(false);
     const router = useRouter();

     useEffect(() => {
          const storedUser = localStorage.getItem("user");
          if (storedUser) {
               setUser(JSON.parse(storedUser));
          }
     }, []);

     const showDrawer = () => {
          setOpen(true);
     };

     const onClose = () => {
          setOpen(false);
     };

     const handleLogout = () => {
          localStorage.removeItem("user");
          window.location.reload();
     };

     const items: MenuProps["items"] = [
          {
               key: "1",
               label: <a onClick={handleLogout}>Tizimdan chiqish</a>,
          },
     ];

     return (
          <>
               <StyledHeader>
                    <Box
                         as={Container}
                         $justify="space-between"
                         style={{ width: "100%" }}>
                         <StyledHam>
                              <HiOutlineBars3CenterLeft
                                   onClick={showDrawer}
                                   fontSize={25}
                              />
                         </StyledHam>
                         <div><img src="/IMG_20240524_095832_673.png" width="40" height="40"/></div>

                         <MenuItems style={{ display: "flex", gap: "50px" }}>
                              <p
                                   style={{ cursor: "pointer" }}
                                   onClick={() => router.push("/")}>
                                   Asosiy
                              </p>
                              <p style={{ cursor: "pointer" }}>Biz haqimizda</p>
                         </MenuItems>
                         {user ? (
                              <Dropdown menu={{ items }}>
                                   <a>
                                        <Space>
                                             Buyurtmalarim
                                             <DownOutlined />
                                        </Space>
                                   </a>
                              </Dropdown>
                         ) : (
                              <div
                                   style={{ cursor: "pointer" }}
                                   onClick={() => router.push("/login")}>
                                   Login
                              </div>
                         )}
                    </Box>
               </StyledHeader>
               <Drawer
                    placement="left"
                    title="Menu"
                    closable={false}
                    onClose={onClose}
                    open={open}>
                    <p>Home</p>
                    <p>Home</p>
               </Drawer>
          </>
     );
};

const StyledHam = styled.div`
     display: none !important;

     ${media.xs`
    display:block !important;
    `}
`;

const MenuItems = styled.div`
     ${media.xs`
    display:none !important;
    `}
`;
