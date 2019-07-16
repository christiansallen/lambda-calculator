import React from "react";

export const OperatorButton = (props) => {
  return (
    <>
      <button onClick={()=>props.handleClick(props.name)}>{props.name}</button>
    </>
  );
};
