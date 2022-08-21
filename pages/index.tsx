import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useAuth } from "../hooks/useAuth";

interface Ilogin {
  email: string;
  password: string;
}

const Auth: NextPage = () => {
  const {Login} =useAuth();
  const router = useRouter();

  const [LogResponse, setLogResponse] = useState<Ilogin>({
    email: "",
    password: "",
  });

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  return (
    <Stack
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.75 } }}
      exit={{ opacity: 0 }}
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
    >
      <Flex flex={1}>
        <Stack
          backgroundImage={
            "https://images.ctfassets.net/23aumh6u8s0i/3jY4eCzPqbJ8bP7RX8SnTe/d6252025eff38698a5ed4ffdbd02f580/nextjs_hero"
          }
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#000",
            height: "100%",
            width: "100%",
          }}
        />
      </Flex>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"}>Forgot password?</Link>
            </Stack>
            <Button
              colorScheme={"blue"}
              variant={"solid"}
              onClick={() => {
                Login(email, password);
              }}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Auth;
