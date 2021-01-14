import React from "react";

export default (props) => {
  return (
    <div>
      <center>
        <span>{props.texto} </span>
        <span>
          <strong>{props.numero} </strong>
        </span>
        <span>{props.bool ? "Verdadeiro" : "Falso"}</span>
      </center>
    </div>
  );
};
