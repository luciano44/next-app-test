import React from "react";

export async function getStaticProps() {
  const res = await fetch("https://lchat-server.herokuapp.com/users");
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 20,
  };
}

function Comp({ data }) {
  return (
    <>
      <h1>Static Side Generation</h1>
      <h3>data:</h3>
      <ul>
        {data?.usersDB.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Comp;
