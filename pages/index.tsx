import type { NextPage } from "next";
import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Stack,
  InputRightElement,
  InputGroup,
  Box,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useAuth } from "../hooks/useAuth";

const Auth: NextPage = () => {
  const { Login } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show, setShow] = React.useState(false);
  const [validEmail, setValidEmail] = React.useState(false);

  function validateEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return setValidEmail(re.test(email));
  }

  const handleClick = () => setShow(!show);

  return (
    <Stack
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.75 } }}
      exit={{ opacity: 0 }}
      bgImage={"/background.jpg"}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
      align={"center"}
      justify={"center"}
    >
      <Stack spacing={8}>
        <Stack align={"center"}>
          <Image src="/fenix.png" alt="logo" />
          <Text
            color={"#2c2a2a"}
            style={{
              fontFamily: "Inter",
              fontSize: "32px",
              fontWeight: "600",
              lineHeight: "28px",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            Sign in to your account
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          w={'492px'}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input placeholder="Enter email" type="email" onChange={(e) => {
                setEmail(e.target.value)
                validateEmail(e.target.value)
              }}/>
            </FormControl>
            {validEmail || email.length === 0 ?  false : 
            <Text
            color={"#f00"}
            style={{
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "10px",
              letterSpacing: "0em",
            }}
          >
            * Invalid email
          </Text>}
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? 'text' : 'password'}
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Auth;
