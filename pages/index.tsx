import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
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
  Box,
  Text,
  HStack,
  useColorModeValue,
  Image,
} from '@chakra-ui/react'

import { motion } from 'framer-motion'
import { useAuth } from '../hooks/useAuth'
import backgroundImg from '../public/background.png'

interface Ilogin {
  email: string
  password: string
}

const Auth: NextPage = () => {
  const { Login } = useAuth()
  const router = useRouter()

  const [LogResponse, setLogResponse] = useState<Ilogin>({
    email: '',
    password: '',
  })

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [show, setShow] = React.useState(false)

  const handleClick = () => setShow(!show)

  return (
    <Stack
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.75 } }}
      exit={{ opacity: 0 }}
      minH={'100vh'}
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex flex={1}>
        <Stack
          bgImage={'/background.jpg'}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#000',
            height: '100%',
            width: '100%',
          }}
          align={'center'}
          justify={'center'}
        >
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Image src="/fenix.png" alt="logo" />
              <Text
                color={'#2c2a2a'}
                style={{
                  fontFamily: 'Inter',
                  fontSize: '32px',
                  fontWeight: '600',
                  lineHeight: '28px',
                  letterSpacing: '0em',
                  textAlign: 'center',
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
              w={'492px'}
            >
              <Stack spacing={4} w={'full'} maxW={'md'}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
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
                <Stack spacing={6}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={'blue.500'}>Forgot password?</Link>
                  </Stack>
                  <Button
                    colorScheme={'blue'}
                    variant={'solid'}
                    onClick={() => {
                      Login(email, password)
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
          {/*  */}
        </Stack>
      </Flex>
    </Stack>
  )
}

export default Auth
