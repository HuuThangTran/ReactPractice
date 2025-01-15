import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup/";
import Button from "./components/Button";
import { useState } from "react";
import "./App.css";
import Like from "./components/Like";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
function App() {
  //==========================================
  // sharing State between Component exercise
  // const [cartItem, setCartItem] = useState(["Product 1", "Product 2"]);
  //==========================================

  //==========================================
  // Updating state
  const [cart, setCart] = useState({
    discount: 0.1,
    item: [
      { id: 1, title: "Prodcut 1", quantity: 1 },
      { id: 2, title: "Prodcut 2", quantity: 1 },
    ],
  });
  const handleClick = () => {
    setCart({
      ...cart,
      item: cart.item.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    });
  };

  //==========================================
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // const [alertVisiblity, setAlertVisibility] = useState(false);

  return <Form></Form>;
}

export default App;
