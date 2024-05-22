"use client";

import { Container } from "@/components";
import { Card, Col, Row } from "antd";
import { useRouter } from "next/navigation";

const banks = [
     {
          id: 1,
          name: "Aloqabank",
          pic: "/download.png",
     },
     {
          id: 1,
          name: "Hamkorbank",
          pic: "/hk.png",
     },
     {
          id: 1,
          name: "MK bank",
          pic: "/mk.png",
     },
     {
          id: 1,
          name: "Kapital Bank",
          pic: "/ktbank.png",
     },
     {
          id: 1,
          name: "Anor Bank",
          pic: "/anor1.png",
     },
];
export default function Home() {
     const router = useRouter();
     return (
          <>
               <Container style={{ marginTop: "200px" }}>
                    <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>
                         Navbat olishingiz mumkin bo'lgan Banklar ro'yxati
                    </h1>
                    <Row gutter={[24, 24]}>
                         {banks.map((item, idx) => (
                              <Col key={idx} xs={24} sm={12} lg={8}>
                                   <Card
                                        onClick={() => router.push("/branches")}
                                        style={{
                                             boxShadow:
                                                  "2px 2px 5px 1px rgba(0, 0, 0, 0.2)",
                                             cursor: "pointer",
                                        }}
                                        bordered
                                        cover={
                                             <img
                                                  src={item.pic}
                                                  style={{ height: "220px" }}
                                             />
                                        }>
                                        <h1
                                             style={{ fontSize: "20px" }}
                                             key={idx}>
                                             {item.name}
                                        </h1>
                                   </Card>
                              </Col>
                         ))}
                    </Row>
               </Container>
          </>
     );
}
