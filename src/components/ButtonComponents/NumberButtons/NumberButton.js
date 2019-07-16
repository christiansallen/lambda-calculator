import React from "react";

export const NumberButton = (props) => {
  return (
    <>
      <button onClick={()=>props.handleClick(props.name)}>{props.name}</button>
    </>
  );
};
