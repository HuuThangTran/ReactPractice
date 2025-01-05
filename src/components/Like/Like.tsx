import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import style from "./Like.module.css";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [likeIndex, setLikeIndex] = useState(false);

  const toggle = () => {
    setLikeIndex(!likeIndex);
    onClick();
  };

  if (likeIndex) return <AiFillHeart color="red" onClick={toggle} size={50} />;
  else return <AiOutlineHeart color="red" onClick={toggle} size={50} />;
};

export default Like;
