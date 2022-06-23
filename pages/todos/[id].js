import React from "react";
import Link from "next/link";

export async function getStaticProps({ params }) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  );

  const todo = await data.json();

  return {
    props: {
      todo,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);

  const data = await response.json();

  const paths = await data.map((todo) => ({ params: { id: `${todo.id}` } }));

  return {
    paths,
    fallback: false,
  };
}

function Todos({ todo }) {
  return (
    <div>
      <h1>TODO</h1>
      <p>USERID: {todo?.userId}</p>
      <p>ID: {todo?.id}</p>
      <p>TITLE: {todo?.title}</p>
      <p>COMPLETED: {todo?.completed ? "True" : "False"}</p>
      <h3>
        <Link href={`${todo.id}/comments/1`}>
          <a>comment 1</a>
        </Link>
        <br />
        <Link href={`${todo.id}/comments/2`}>
          <a>comment 2</a>
        </Link>
        <br />
        <Link href={`${todo.id}/comments/3`}>
          <a>comment 3</a>
        </Link>
        <br />
      </h3>
    </div>
  );
}

export default Todos;
