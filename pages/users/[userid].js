import React from "react";
import { useRouter } from "next/router";

export async function getStaticProps(context) {
  const { params } = context;

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userid}`
  );
  const user = await data.json();

  return {
    props: {
      user,
    },
  };
}

export async function getStaticPaths() {
  // const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
  // const users = await data.json();
  // const paths = await users.map((user) => ({
  //   params: {
  //     userid: `${user.id}`,
  //   },
  // }));

  return {
    paths: [
      { params: { userid: "1" } },
      { params: { userid: "2" } },
      { params: { userid: "3" } },
      { params: { userid: "4" } },
      { params: { userid: "5" } },
    ],
    fallback: true,
  };
}

function Userid({ user }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>User</h1>
      <h2>ID: {user?.id}</h2>
      <h2>NAME: {user?.name}</h2>
    </>
  );
}

export default Userid;
