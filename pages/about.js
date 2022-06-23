import React from "react";
import Link from "next/link";

export function getStaticProps(ctx) {
  console.log(ctx);

  return {
    props: {},
  };
}

function About() {
  return (
    <>
      <h1>About</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
}

export default About;
