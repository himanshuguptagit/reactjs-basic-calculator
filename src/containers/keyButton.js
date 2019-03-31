import React from 'react';

var KeyButton = props => {

  let buttonClass = "keyButton";

  function buttonClick(){
    props.keyClickListener(props.value);
  }

  if(props.value === "+" || props.value === "-" || props.value === "*" || props.value === "/"){
    buttonClass += " orange";
  }

  return(
    <div>
      <button className={buttonClass} value={props.value} onClick={buttonClick}>{props.value}</button>
    </div>
  );

}

export default KeyButton;
