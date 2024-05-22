"use client";

import { Box, Container } from "@/components";
import { Card, Flex, Modal } from "antd";
import { useState } from "react";

const queues = [
     { id: 1, time: "09:00", price: " 5000" },
     { id: 1, time: "10:00", price: " 6000" },
     { id: 1, time: "11:00", price: " 3000" },
     { id: 1, time: "12:00", price: " 8000" },
     { id: 1, time: "13:00", price: " 5000" },
     { id: 1, time: "14:00", price: " 5000" },
];
const Info = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
     const showModal = () => {
          setIsModalOpen(true);
     };

     const handleOk = () => {
          setIsModalOpen(false);
     };

     const handleCancel = () => {
          setIsModalOpen(false);
     };

     return (
          <Container>
               <Box $mt="100px">
                    <h1 style={{ fontSize: "25px", marginBottom: "50px" }}>
                         Assalomu alaykum Aloqabankning Andijon ATB filialigadan
                         navbat olishingiz mumkin
                    </h1>
                    {queues.map((item, idx) => (
                         <Card
                              onClick={showModal}
                              hoverable
                              key={idx}
                              style={{
                                   maxWidth: "500px",
                                   marginBottom: "10px",
                              }}>
                              <Flex justify="space-between">
                                   <h1>{item.time}</h1>
                                   <h1>{item.price} sum</h1>
                              </Flex>
                         </Card>
                    ))}
               </Box>
               <Modal
                    title="Rasmiylashtirish"
                    open={isModalOpen}
                    centered
                    onOk={handleOk}
                    onCancel={handleCancel}>
                    <h1>Ushbu navbatni sotib olmoqchimisiz</h1>
               </Modal>
          </Container>
     );
};

export default Info;
