import React from "react";

export default (props) => {
  return (
    <div>
      <button onClick={(_) => props.quandoClicar("João", 53, true)}>
        Fornecer Informações
      </button>
    </div>
  );
};
