import { useState } from "react";
// import style from "./ListGroup.module.css";
import styled from "styled-components";

interface ListItemProps {
  active: boolean;
}

const UL = styled.ul`
  list-style: none;
  padding-left: 0;
  background: yellow;
`;

const LI = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  // we want a function that take in (item: string) => void
  onSelectItem: (item: string) => void;
}

// function ListGroup(props) {

function ListGroup({ items, heading, onSelectItem }: Props) {
  // items = [];

  // Hook
  const [selectedIndex, setSeletectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {/*true && 1 =>  1, true && "Thang" => Thang*/}
      {items.length === 0 && <p>No item found</p>}

      {/* CSS module */}
      {/* <ul className={[style.ListGroup, style.container].join(" ")}> */}

      {/* CSS-in-JS */}
      <UL>
        {items.map((item, index) => (
          <LI
            active={index === selectedIndex}
            // className={
            //   selectedIndex === index
            //     ? "list-group-item active"
            //     : "list-group-item"
            // }

            key={item}
            onClick={() => {
              setSeletectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </LI>
        ))}
      </UL>
    </>
  );
}

export default ListGroup;
