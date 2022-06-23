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
      <hr />
    </div>
  );
}

export default Navbar;
