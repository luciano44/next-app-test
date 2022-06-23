import React from "react";
import Link from "next/link";

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  return {
    props: {
      users,
    },
  };
}

export default function Users({ users }) {
  return (
    <>
      {users.map((user) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <a>
            {user.id} - {user.name}
          </a>
        </Link>
      ))}
    </>
  );
}
