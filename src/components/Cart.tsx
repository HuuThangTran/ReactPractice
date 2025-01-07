import React from "react";

interface Props {
  cartItemName: string[];
  onClick: () => void;
}
const Cart = ({ cartItemName, onClick }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItemName.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClick}>Clear</button>
    </>
  );
};

export default Cart;
