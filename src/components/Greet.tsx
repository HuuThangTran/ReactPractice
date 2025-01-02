import React from "react";

interface Props {
  name: string;
}

const Greet = (props: Props) => <h1>Hello {props.name}</h1>;

export default Greet;
