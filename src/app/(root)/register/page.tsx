"use client";

import { Box, Container } from "@/components";
import { pxToRem } from "@/lib";
import { Button, Card, Flex, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useRouter } from "next/navigation";

const Login = () => {
     const [form] = useForm();

     const router = useRouter();

     const handleFinish = (values: any) => {
          console.log(values);
     };

     return (
          <Container style={{ marginTop: "200px" }}>
               <Flex justify="center">
                    <Box
                         as={Card}
                         $css={{
                              maxWidth: pxToRem(520),
                              width: "var(--full)",
                         }}>
                         <Box $justify="center" $align="center" $mb="var(--xl)">
                              <h1 style={{ fontSize: "30px" }}>Register</h1>

                              {/* <NavigationLink href={ROUTES.home}>
                                   <LuX
                                        size={32}
                                        color="rgba(148, 163, 184, 1)"
                                   />
                              </NavigationLink> */}
                         </Box>
                         <Form form={form} onFinish={handleFinish}>
                              <Form.Item name={"name"}>
                                   <Input placeholder="Full name" />
                              </Form.Item>
                              <Form.Item name={"email"}>
                                   <Input placeholder="Email" />
                              </Form.Item>
                              <Form.Item name={"password"}>
                                   <Input.Password placeholder="password" />
                              </Form.Item>
                              <Flex
                                   justify="space-between"
                                   style={{ marginBottom: "10px" }}>
                                   <p>Have an account? </p>
                                   <p
                                        style={{ cursor: "pointer" }}
                                        onClick={() => router.push("/login")}>
                                        Login
                                   </p>
                              </Flex>
                              <Button
                                   htmlType="submit"
                                   block
                                   size="large"
                                   type="primary"
                                   onClick={() => router.push("/")}>
                                   Submit
                              </Button>
                         </Form>
                    </Box>
               </Flex>
          </Container>
     );
};

export default Login;
