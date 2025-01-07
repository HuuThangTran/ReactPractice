import React from "react";

interface Props {
  itemCartCount: number;
}

const Navbar = ({ itemCartCount }: Props) => {
  return <div>Navbar: {itemCartCount}</div>;
};

export default Navbar;
