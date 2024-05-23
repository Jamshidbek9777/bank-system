"use client";

import { useEffect, useState } from "react";
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
          id: 2,
          name: "Hamkorbank",
          pic: "/hk.png",
     },
     {
          id: 3,
          name: "MK bank",
          pic: "/mk.png",
     },
     {
          id: 4,
          name: "Kapital Bank",
          pic: "/ktbank.png",
     },
     {
          id: 5,
          name: "Anor Bank",
          pic: "/anor1.png",
     },
     {
          id: 6,
          name: "Anor Bank",
          pic: "/anor1.png",
     },
     {
          id: 7,
          name: "Anor Bank",
          pic: "/anor1.png",
     },
     {
          id: 8,
          name: "Anor Bank",
          pic: "/anor1.png",
     },
     {
          id: 9,
          name: "Anor Bank",
          pic: "/anor1.png",
     },
];

export default function Home() {
     const [user, setUser] = useState(null);
     const router = useRouter();

     useEffect(() => {
          if (typeof window !== "undefined") {
               const storedUser = localStorage.getItem("user");
               if (storedUser) {
                    setUser(JSON.parse(storedUser));
               }
          }
     }, []);

     return (
          <>
               {user ? (
                    <Container style={{ marginTop: "200px" }}>
                         <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>
                              Navbat olishingiz mumkin bolgan Banklar royxati
                         </h1>
                         <Row gutter={[24, 24]}>
                              {banks.map((item) => (
                                   <Col key={item.id} xs={24} sm={12} lg={8}>
                                        <Card
                                             onClick={() =>
                                                  router.push("/branches")
                                             }
                                             style={{
                                                  boxShadow:
                                                       "2px 2px 5px 1px rgba(0, 0, 0, 0.2)",
                                                  cursor: "pointer",
                                             }}
                                             bordered
                                             cover={
                                                  <img
                                                       src={item.pic}
                                                       alt={item.name}
                                                       style={{
                                                            height: "220px",
                                                       }}
                                                  />
                                             }>
                                             <h1
                                                  style={{
                                                       fontSize: "20px",
                                                       cursor: "pointer",
                                                  }}>
                                                  {item.name}
                                             </h1>
                                        </Card>
                                   </Col>
                              ))}
                         </Row>
                    </Container>
               ) : (
                    router.push("/login")
               )}
          </>
     );
}
