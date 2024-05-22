"use client";

import { Box, Container } from "@/components";
import { media } from "@/style";
import { Card, Flex, Input, Table } from "antd";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const branches = [
     { id: 1, name: "Andijon ATB" },
     { id: 1, name: "Namangan ATB" },
     { id: 1, name: "Toshkent ATB" },
     { id: 1, name: "Fargona ATB" },
     { id: 1, name: "Samarqand ATB" },
     { id: 1, name: "Buxoro ATB" },
     { id: 1, name: "Qashqadaryo ATB" },
     { id: 1, name: "Navoiy ATB" },
     { id: 1, name: "Xorazm ATB" },
     { id: 1, name: "Surxandaryo ATB" },
];

const ID = () => {
     const router = useRouter();
     return (
          <Container
               style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                    flexDirection: "column",
               }}>
               <Box $mt="100px">
                    <StyledCard>
                         <Flex vertical gap={"middle"}>
                              <h1 style={{ fontSize: "24px" }}>
                                   Ushbu bankning filiallari, birini tanlang
                              </h1>
                              <Box>
                                   <Input placeholder="Qidiring" />
                              </Box>

                              <Box>
                                   {branches.map((item, idx) => (
                                        <Flex key={idx} vertical gap={"middle"}>
                                             <Card
                                                  onClick={() =>
                                                       router.push(
                                                            `/branches/${item.id}`
                                                       )
                                                  }
                                                  hoverable
                                                  bordered
                                                  style={{
                                                       marginBottom: "10px",
                                                  }}>
                                                  {item.name}
                                             </Card>
                                        </Flex>
                                   ))}
                              </Box>
                         </Flex>
                    </StyledCard>
               </Box>
          </Container>
     );
};

export default ID;

const StyledCard = styled(Card)`
     max-width: 550px;
     /* width: 550px;

     ${media.sm`
          width:100%;
     `} */
`;
