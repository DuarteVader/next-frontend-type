import React, { useEffect, useState } from "react";
import Head from "next/head";
import { NextPage } from "next";
import SidebarWithHeader from "../../components/SideBarWithHeader";
import CardUser from "../../components/UserCard";
import { useRouter } from "next/router";
import { Stack, Text, Toast } from "@chakra-ui/react";
import api from "../../services/api";
import { useAuth } from "../../hooks/useAuth";

const Home: NextPage = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await api.get("/users");

      console.log(response);
      if (response.status === 200) {
        setUsers(response.data.users);
      }
    } catch (err) {
      Toast({
        title: "Failed get users.",
        description: "Check your credentials!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      console.log(err);
    }
  };

  interface IUser {
    userName: String;
    userEmail: String;
    userType: Number;
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SidebarWithHeader>
        <Stack
          flexDirection={"row"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {users.map((item: IUser) => {
            return (
              <CardUser
                jujuba={{
                  userName: item.userName,
                  userEmail: item.userEmail,
                  userType: item.userType,
                }}
              />
            );
          })}
        </Stack>
      </SidebarWithHeader>
    </>
  );
};

export default Home;
