import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <br />
      <Link href="/about">
        <a>About</a>
      </Link>
      <br />
      <Link href="/todos">
        <a>Todos</a>
      </Link>
      <br />
      <Link href="/test">
        <a>Test</a>
      </Link>
      <br />
      <Link href="/users">
        <a>users</a>
      </Link>
      <br />
      <Link href="/zzCSR">
        <a>CSR</a>
      </Link>
       <br />
      <Link href="/zzSSR">
        <a>SSR</a>
      </Link>
       <br />
      <Link href="/zzSSG">
        <a>SSG</a>
      </Link>
       <br />
      <Link href="/zzISR">
        <a>ISR</a>
      </Link>
      <hr />
    </div>
  );
}

export default Navbar;
