import React from "react";

function TH1(props) {
  return <th className="tl bb pa2 fw6">{props.children}</th>;
}

function TH2(props) {
  return <th className="tl bb pa1 fw6 f6">{props.children}</th>;
}

export { TH1, TH2 };
