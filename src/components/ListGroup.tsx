import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

// function ListGroup(props) {

function ListGroup({ items, heading }: Props) {
  // items = [];

  // Hook
  const [selectedIndex, setSeletectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {/*true && 1 =>  1, true && "Thang" => Thang*/}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSeletectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
