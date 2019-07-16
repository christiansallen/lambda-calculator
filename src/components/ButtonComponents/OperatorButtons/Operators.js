import React, {useState} from "react";

//import any components needed
import {OperatorButton} from "./OperatorButton";

//Import your array data to from the provided data file
import {operators} from "./../../../data";

export const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorsData, setOperatorsData] = useState(operators)
  return (
    <div>
      {operatorsData.map(operator=>{
        return <OperatorButton name={operator.char} handleClick={props.handleClick}/>
      })}
    </div>
  );
};
