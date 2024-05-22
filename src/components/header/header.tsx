import { Box, Container } from "@/components";
import { StyledHeader } from "./style";
import { useState } from "react";
import { Button, Drawer } from "antd";
import styled from "styled-components";
import { media } from "@/style";
import { useRouter } from "next/navigation";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

export const Header = () => {
     const [open, setOpen] = useState(false);
     const showDrawer = () => {
          setOpen(true);
     };
     const onClose = () => {
          setOpen(false);
     };
     const router = useRouter();

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
                         <div>Logo</div>

                         <MenuItems style={{ display: "flex", gap: "50px" }}>
                              <p>Home</p>
                              <p>Home</p>
                         </MenuItems>
                         <div
                              style={{ cursor: "pointer" }}
                              onClick={() => router.push("/login")}>
                              Login
                         </div>
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
