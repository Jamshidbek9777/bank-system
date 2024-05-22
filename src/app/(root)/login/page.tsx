"use client";

import { Box, Container } from "@/components";
import { pxToRem } from "@/lib";
import { Button, Card, Flex, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useRouter } from "next/navigation";

const Login = () => {
     const [form] = useForm();
     const handleFinish = (values: any) => {
          // console.log(values);
          const { email, password } = values;
          localStorage.setItem("user", JSON.stringify({ email }));
          router.push("/");
          // window.location.reload();
     };
     const router = useRouter();
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
                              <h1 style={{ fontSize: "30px" }}>Login</h1>

                              {/* <NavigationLink href={ROUTES.home}>
                                   <LuX
                                        size={32}
                                        color="rgba(148, 163, 184, 1)"
                                   />
                              </NavigationLink> */}
                         </Box>
                         <Form form={form} onFinish={handleFinish}>
                              <Form.Item
                                   name={"email"}
                                   rules={[
                                        {
                                             required: true,
                                             message: "Iltimos email kiriting!",
                                        },
                                   ]}>
                                   <Input placeholder="Email" />
                              </Form.Item>
                              <Form.Item
                                   name={"password"}
                                   rules={[
                                        {
                                             required: true,
                                             message: "Iltimos password kiriting!",
                                        },
                                   ]}>
                                   <Input.Password placeholder="password" />
                              </Form.Item>
                              <Flex
                                   justify="space-between"
                                   style={{ marginBottom: "10px" }}>
                                   <p>Don't have an account? </p>
                                   <p
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                             router.push("/register")
                                        }>
                                        Register
                                   </p>
                              </Flex>

                              <Button
                                   htmlType="submit"
                                   block
                                   size="large"
                                   type="primary">
                                   Submit
                              </Button>
                         </Form>
                    </Box>
               </Flex>
          </Container>
     );
};

export default Login;
