import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup/";
import Button from "./components/Button";
import { useState } from "react";
import "./App.css";
import Like from "./components/Like";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisiblity, setAlertVisibility] = useState(false);

  return (
    <>
      {/* {alertVisiblity && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button
        color="danger"
        onClick={() => {
          console.log("Clicked");
          setAlertVisibility(true);
        }}
      >
        Button
      </Button> */}
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup> */}
      {/* <Button onClick={() => console.log("Clicked")}>My Button</Button> */}
      <Like onClick={() => console.log("Clicked")}></Like>
    </>
  );
}

export default App;
