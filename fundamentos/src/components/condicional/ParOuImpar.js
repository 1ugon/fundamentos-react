import React from "react";

export default (props) => {
  const parOuImpar = props.numero % 2 === 0;

  return (
    <div>
      <strong>
        <center>{parOuImpar ? <span>Par</span> : <span>Impar</span>}</center>
      </strong>
    </div>
  );
};
