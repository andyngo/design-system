import React from "react";

import { Nav } from "../components";

function Layout(props) {
  return (
    <div className="mw8 center pa4">
      <Nav></Nav>
      <main>{props.children}</main>
    </div>
  );
}

export { Layout };
